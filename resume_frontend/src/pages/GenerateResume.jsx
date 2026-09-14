import React, { useState } from "react";
import toast from "react-hot-toast";
import {
  FaBrain,
  FaTrash,
  FaPaperPlane,
  FaPlusCircle,
} from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { useForm, useFieldArray } from "react-hook-form";
import { generateResume } from "../api/ResumeService";
import Resume from "../components/Resume";

const GenerateResume = () => {
  // =========================================================
  // INITIAL DATA
  // =========================================================

  const initialData = {
    personalInformation: {
      fullName: "",
      email: "",
      phoneNumber: "",
      location: "",
      linkedIn: "",
      gitHub: "",
      portfolio: "",
    },

    summary: "",

    skills: [],

    experience: [],

    education: [],

    certifications: [],

    projects: [],

    achievements: [],

    languages: [],

    interests: [],
  };

  const [data, setData] = useState(initialData);

  // =========================================================
  // REACT HOOK FORM
  // =========================================================

  const {
    register,
    handleSubmit,
    control,
    reset,
  } = useForm({
    defaultValues: initialData,
  });

  // =========================================================
  // FIELD ARRAYS
  // =========================================================

  const skillsFields = useFieldArray({
    control,
    name: "skills",
  });

  const experienceFields = useFieldArray({
    control,
    name: "experience",
  });

  const educationFields = useFieldArray({
    control,
    name: "education",
  });

  const certificationsFields = useFieldArray({
    control,
    name: "certifications",
  });

  const projectsFields = useFieldArray({
    control,
    name: "projects",
  });

  const achievementsFields = useFieldArray({
    control,
    name: "achievements",
  });

  const languagesFields = useFieldArray({
    control,
    name: "languages",
  });

  const interestsFields = useFieldArray({
    control,
    name: "interests",
  });

  // =========================================================
  // UI STATES
  // =========================================================

  const [showFormUI, setShowFormUI] = useState(false);
  const [showResumeUI, setShowResumeUI] = useState(false);
  const [showPromptInput, setShowPromptInput] = useState(true);

  // =========================================================
  // DESCRIPTION
  // =========================================================

  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  // =========================================================
  // HELPERS
  // =========================================================

  const safeArray = (value) => {
    return Array.isArray(value) ? value : [];
  };

  const safeString = (value) => {
    if (value === null || value === undefined) {
      return "";
    }

    return String(value);
  };

  const normalizeTechnologies = (value) => {
    if (Array.isArray(value)) {
      return value.map((item) => safeString(item));
    }

    if (typeof value === "string") {
      return value
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
    }

    return [];
  };

  // =========================================================
  // NORMALIZE BACKEND RESPONSE
  // =========================================================

  const normalizeResumeData = (resumeData) => {
    let source = resumeData || {};

    // If backend sends JSON as string
    if (typeof source === "string") {
      try {
        source = JSON.parse(source);
      } catch (error) {
        console.error("Unable to parse resume JSON:", error);
        source = {};
      }
    }

    const personal = source.personalInformation || {};

    return {
      // =====================================================
      // PERSONAL INFORMATION
      // =====================================================

      personalInformation: {
        fullName: safeString(personal.fullName),

        email: safeString(personal.email),

        phoneNumber: safeString(personal.phoneNumber),

        location: safeString(personal.location),

        linkedIn: safeString(
          personal.linkedIn || personal.linkedin
        ),

        gitHub: safeString(
          personal.gitHub || personal.github
        ),

        portfolio: safeString(personal.portfolio),
      },

      // =====================================================
      // SUMMARY
      // =====================================================

      summary: safeString(source.summary),

      // =====================================================
      // SKILLS
      // =====================================================

      skills: safeArray(source.skills).map((skill) => ({
        title: safeString(skill?.title),
        level: safeString(skill?.level),
      })),

      // =====================================================
      // EXPERIENCE
      // =====================================================

      experience: safeArray(source.experience).map((item) => ({
        jobTitle: safeString(item?.jobTitle),
        company: safeString(item?.company),
        location: safeString(item?.location),
        duration: safeString(item?.duration),
        responsibility: safeString(item?.responsibility),
      })),

      // =====================================================
      // EDUCATION
      // =====================================================

      education: safeArray(source.education).map((item) => ({
        degree: safeString(item?.degree),
        university: safeString(item?.university),
        location: safeString(item?.location),
        graduationYear: safeString(item?.graduationYear),
      })),

      // =====================================================
      // CERTIFICATIONS
      // =====================================================

      certifications: safeArray(source.certifications).map(
        (item) => ({
          title: safeString(item?.title),
          issuingOrganization: safeString(
            item?.issuingOrganization
          ),
          year: safeString(item?.year),
        })
      ),

      // =====================================================
      // PROJECTS
      // =====================================================

      projects: safeArray(source.projects).map((item) => ({
        title: safeString(item?.title),

        description: safeString(item?.description),

        technologiesUsed: normalizeTechnologies(
          item?.technologiesUsed
        ),

        githubLink: safeString(item?.githubLink),
      })),

      // =====================================================
      // ACHIEVEMENTS
      // =====================================================

      achievements: safeArray(source.achievements).map(
        (item) => ({
          title: safeString(item?.title),
          year: safeString(item?.year),
          extraInformation: safeString(
            item?.extraInformation
          ),
        })
      ),

      // =====================================================
      // LANGUAGES
      // =====================================================

      languages: safeArray(source.languages).map(
        (item, index) => ({
          id:
            typeof item?.id === "number"
              ? item.id
              : index + 1,

          name: safeString(item?.name),
        })
      ),

      // =====================================================
      // INTERESTS
      // =====================================================

      interests: safeArray(source.interests).map(
        (item, index) => ({
          id:
            typeof item?.id === "number"
              ? item.id
              : index + 1,

          name: safeString(item?.name),
        })
      ),
    };
  };

  // =========================================================
  // FORM SUBMIT
  // =========================================================

  const onSubmit = (formData) => {
    console.log("FORM DATA:", formData);

    const normalizedData =
      normalizeResumeData(formData);

    console.log(
      "NORMALIZED FORM DATA:",
      normalizedData
    );

    setData(normalizedData);

    setShowFormUI(false);
    setShowPromptInput(false);
    setShowResumeUI(true);
  };

  // =========================================================
  // GENERATE RESUME
  // =========================================================

  const handleGenerate = async () => {
    console.log(
      "USER DESCRIPTION:",
      description
    );

    // Empty description check
    if (!description.trim()) {
      toast.error(
        "Please enter your resume description!",
        {
          duration: 3000,
          position: "top-center",
        }
      );

      return;
    }

    try {
      setLoading(true);

      console.log("Calling backend...");

      const responseData =
        await generateResume(description);

      console.log(
        "BACKEND RESPONSE:",
        responseData
      );

      // =====================================================
      // CHECK RESPONSE
      // =====================================================

      if (!responseData) {
        throw new Error(
          "No response received from backend."
        );
      }

      if (
        responseData.data === undefined ||
        responseData.data === null
      ) {
        console.error(
          "Backend response does not contain data:",
          responseData
        );

        throw new Error(
          "Resume data is missing from backend response."
        );
      }

      // =====================================================
      // NORMALIZE
      // =====================================================

      const normalizedData =
        normalizeResumeData(
          responseData.data
        );

      console.log(
        "NORMALIZED RESUME DATA:",
        normalizedData
      );

      // =====================================================
      // UPDATE STATE
      // =====================================================

      setData(normalizedData);

      // =====================================================
      // UPDATE FORM
      // =====================================================

      reset(normalizedData);

      // =====================================================
      // SUCCESS
      // =====================================================

      toast.success(
        "Resume Generated Successfully!",
        {
          duration: 3000,
          position: "top-center",
        }
      );

      setShowFormUI(true);
      setShowPromptInput(false);
      setShowResumeUI(false);
    } catch (error) {
      console.error(
        "RESUME GENERATION ERROR:",
        error
      );

      console.error(
        "BACKEND ERROR RESPONSE:",
        error?.response?.data
      );

      const errorMessage =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        error?.message ||
        "Error Generating Resume!";

      toast.error(errorMessage, {
        duration: 5000,
        position: "top-center",
      });
    } finally {
      setLoading(false);
      setDescription("");
    }
  };

  // =========================================================
  // CLEAR DESCRIPTION
  // =========================================================

  const handleClear = () => {
    setDescription("");
  };

  // =========================================================
  // NORMAL INPUT
  // =========================================================

  const renderInput = (
    name,
    label,
    type = "text",
    placeholder = ""
  ) => {
    return (
      <div className="form-control w-full mb-4">
        <label className="label">
          <span className="label-text text-base-content">
            {label}
          </span>
        </label>

        <input
          type={type}
          placeholder={placeholder}
          {...register(name)}
          className="input input-bordered rounded-xl w-full bg-base-100 text-base-content"
        />
      </div>
    );
  };

  // =========================================================
  // TEXTAREA INPUT
  // =========================================================

  const renderTextarea = (
    name,
    label,
    rows = 4
  ) => {
    return (
      <div className="form-control w-full mb-4">
        <label className="label">
          <span className="label-text text-base-content">
            {label}
          </span>
        </label>

        <textarea
          {...register(name)}
          rows={rows}
          className="textarea textarea-bordered w-full bg-base-100 text-base-content"
        />
      </div>
    );
  };

  // =========================================================
  // FIELD ARRAY RENDERER
  // =========================================================

  const renderFieldArray = (
    fieldArray,
    label,
    name,
    keys
  ) => {
    const fields = Array.isArray(
      fieldArray?.fields
    )
      ? fieldArray.fields
      : [];

    return (
      <div className="form-control w-full mb-6">
        <h3 className="text-xl font-semibold mb-3">
          {label}
        </h3>

        {fields.length === 0 && (
          <p className="text-sm opacity-60 mb-3">
            No {label.toLowerCase()} added yet.
          </p>
        )}

        {fields.map((field, index) => (
          <div
            key={field.id}
            className="p-5 rounded-xl mb-4 bg-base-100 border border-base-300"
          >
            {keys.map((key) => {
              const labelText =
                key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) =>
                    str.toUpperCase()
                  );

              // Special handling for technologiesUsed
              if (
                name === "projects" &&
                key === "technologiesUsed"
              ) {
                return (
                  <div
                    key={key}
                    className="form-control w-full mb-4"
                  >
                    <label className="label">
                      <span className="label-text">
                        Technologies Used
                      </span>
                    </label>

                    <input
                      type="text"
                      {...register(
                        `${name}.${index}.${key}`,
                        {
                          setValueAs: (value) =>
                            typeof value === "string"
                              ? value
                                  .split(",")
                                  .map((item) =>
                                    item.trim()
                                  )
                                  .filter(Boolean)
                              : value,
                        }
                      )}
                      placeholder="React, Spring Boot, MySQL"
                      className="input input-bordered rounded-xl w-full bg-base-200 text-base-content"
                    />

                    <span className="text-xs opacity-60 mt-1">
                      Separate technologies using commas.
                    </span>
                  </div>
                );
              }

              // Special handling for long text
              if (
                key === "description" ||
                key === "responsibility" ||
                key === "extraInformation"
              ) {
                return (
                  <div key={key}>
                    {renderTextarea(
                      `${name}.${index}.${key}`,
                      labelText,
                      4
                    )}
                  </div>
                );
              }

              return (
                <div key={key}>
                  {renderInput(
                    `${name}.${index}.${key}`,
                    labelText
                  )}
                </div>
              );
            })}

            <button
              type="button"
              onClick={() =>
                fieldArray.remove(index)
              }
              className="btn btn-error btn-sm mt-2"
            >
              <FaTrash className="w-4 h-4" />
              Remove {label}
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={() => {
            const newItem = {};

            keys.forEach((key) => {
              if (
                name === "projects" &&
                key === "technologiesUsed"
              ) {
                newItem[key] = [];
              } else {
                newItem[key] = "";
              }
            });

            if (
              name === "languages" ||
              name === "interests"
            ) {
              newItem.id =
                fields.length + 1;
            }

            fieldArray.append(newItem);
          }}
          className="btn btn-secondary btn-sm flex items-center w-fit"
        >
          <FaPlusCircle className="w-5 h-5 mr-1" />
          Add {label}
        </button>
      </div>
    );
  };

  // =========================================================
  // RESUME FORM
  // =========================================================

  function showFormFunction() {
    return (
      <div className="w-full max-w-6xl p-5 md:p-10">
        <h1 className="text-4xl font-bold mb-8 flex items-center justify-center gap-2">
          <BiBook className="text-accent" />
          Resume Form
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 md:p-8 space-y-6 bg-base-200 rounded-2xl text-base-content"
        >
          {/* =================================================
              PERSONAL INFORMATION
          ================================================= */}

          <div>
            <h2 className="text-2xl font-bold mb-4">
              Personal Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderInput(
                "personalInformation.fullName",
                "Full Name"
              )}

              {renderInput(
                "personalInformation.email",
                "Email",
                "email"
              )}

              {renderInput(
                "personalInformation.phoneNumber",
                "Phone Number",
                "tel"
              )}

              {renderInput(
                "personalInformation.location",
                "Location"
              )}

              {renderInput(
                "personalInformation.linkedIn",
                "LinkedIn",
                "url"
              )}

              {renderInput(
                "personalInformation.gitHub",
                "GitHub",
                "url"
              )}

              {renderInput(
                "personalInformation.portfolio",
                "Portfolio",
                "url"
              )}
            </div>
          </div>

          {/* =================================================
              SUMMARY
          ================================================= */}

          <div>
            <h2 className="text-2xl font-bold mb-3">
              Professional Summary
            </h2>

            <textarea
              {...register("summary")}
              rows={5}
              placeholder="Write a short professional summary..."
              className="textarea textarea-bordered w-full bg-base-100 text-base-content"
            />
          </div>

          {/* =================================================
              SKILLS
          ================================================= */}

          {renderFieldArray(
            skillsFields,
            "Skills",
            "skills",
            [
              "title",
              "level",
            ]
          )}

          {/* =================================================
              EXPERIENCE
          ================================================= */}

          {renderFieldArray(
            experienceFields,
            "Experience",
            "experience",
            [
              "jobTitle",
              "company",
              "location",
              "duration",
              "responsibility",
            ]
          )}

          {/* =================================================
              EDUCATION
          ================================================= */}

          {renderFieldArray(
            educationFields,
            "Education",
            "education",
            [
              "degree",
              "university",
              "location",
              "graduationYear",
            ]
          )}

          {/* =================================================
              CERTIFICATIONS
          ================================================= */}

          {renderFieldArray(
            certificationsFields,
            "Certifications",
            "certifications",
            [
              "title",
              "issuingOrganization",
              "year",
            ]
          )}

          {/* =================================================
              PROJECTS
          ================================================= */}

          {renderFieldArray(
            projectsFields,
            "Projects",
            "projects",
            [
              "title",
              "description",
              "technologiesUsed",
              "githubLink",
            ]
          )}

          {/* =================================================
              ACHIEVEMENTS
          ================================================= */}

          {renderFieldArray(
            achievementsFields,
            "Achievements",
            "achievements",
            [
              "title",
              "year",
              "extraInformation",
            ]
          )}

          {/* =================================================
              LANGUAGES
          ================================================= */}

          {renderFieldArray(
            languagesFields,
            "Languages",
            "languages",
            ["name"]
          )}

          {/* =================================================
              INTERESTS
          ================================================= */}

          {renderFieldArray(
            interestsFields,
            "Interests",
            "interests",
            ["name"]
          )}

          {/* =================================================
              SUBMIT
          ================================================= */}

          <button
            type="submit"
            className="btn btn-primary w-full text-lg"
          >
            Preview Resume
          </button>
        </form>
      </div>
    );
  }

  // =========================================================
  // AI DESCRIPTION INPUT
  // =========================================================

  function ShowInputField() {
    return (
      <div className="bg-base-200 shadow-lg rounded-2xl p-8 md:p-10 max-w-3xl w-full text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-2">
          <FaBrain className="text-accent" />
          AI Resume Description Input
        </h1>

        <p className="mb-6 text-lg opacity-70">
          Enter a detailed description about yourself
          to generate your professional resume.
        </p>

        <textarea
          disabled={loading}
          className="textarea textarea-bordered w-full h-56 mb-6 resize-none bg-base-100"
          placeholder={`Example:

My name is Divya Kumar Asthana. I am a Computer Science student from Lucknow, Uttar Pradesh. I have experience in React.js, Java, Spring Boot and MySQL. I completed a Full Stack Developer internship at Tech Solutions Pvt Ltd. I have worked on projects like AI Resume Builder, E-Commerce Website and Student Management System. I know English and Hindi. My interests include web development and learning new technologies.`}
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            disabled={loading}
            onClick={handleGenerate}
            className="btn btn-primary flex items-center gap-2"
          >
            {loading && (
              <span className="loading loading-spinner" />
            )}

            {!loading && <FaPaperPlane />}

            {loading
              ? "Generating..."
              : "Generate Resume"}
          </button>

          <button
            onClick={handleClear}
            disabled={loading}
            className="btn btn-secondary flex items-center gap-2"
          >
            <FaTrash />
            Clear
          </button>
        </div>
      </div>
    );
  }

  // =========================================================
  // SHOW RESUME
  // =========================================================

  function showResume() {
    return (
      <div className="w-full">
        <Resume data={data} />

        <div className="flex flex-wrap mt-6 justify-center gap-3">
          {/* GENERATE ANOTHER */}

          <button
            type="button"
            onClick={() => {
              setShowPromptInput(true);
              setShowFormUI(false);
              setShowResumeUI(false);
            }}
            className="btn btn-accent"
          >
            Generate Another
          </button>

          {/* EDIT */}

          <button
            type="button"
            onClick={() => {
              reset(data);

              setShowPromptInput(false);
              setShowFormUI(true);
              setShowResumeUI(false);
            }}
            className="btn btn-success"
          >
            Edit
          </button>
        </div>
      </div>
    );
  }

  // =========================================================
  // MAIN UI
  // =========================================================

  return (
    <div className="mt-5 p-5 md:p-10 flex flex-col gap-3 items-center justify-center font-sans">
      {showPromptInput &&
        ShowInputField()}

      {showFormUI &&
        showFormFunction()}

      {showResumeUI &&
        showResume()}
    </div>
  );
};

export default GenerateResume;
