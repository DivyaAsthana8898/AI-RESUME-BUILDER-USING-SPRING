import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaBrain, FaTrash, FaPaperPlane, FaPlusCircle } from "react-icons/fa";
import { generateResume } from "../api/ResumeService";
import { BiBook } from "react-icons/bi";
import { useForm, useFieldArray } from "react-hook-form";
import Resume from "../components/Resume";

const GenerateResume = () => {

  // =========================================================
  // DEFAULT RESUME DATA
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

    languages: [],

    interests: [],

    achievements: [],
  };

  const [data, setData] = useState(initialData);

  // =========================================================
  // NORMALIZE BACKEND RESPONSE
  // =========================================================

  const normalizeResumeData = (resumeData) => {
    const source = resumeData || {};

    return {
      personalInformation: {
        fullName:
          source.personalInformation?.fullName || "",

        email:
          source.personalInformation?.email || "",

        phoneNumber:
          source.personalInformation?.phoneNumber || "",

        location:
          source.personalInformation?.location || "",

        linkedIn:
          source.personalInformation?.linkedIn ||
          source.personalInformation?.linkedin ||
          "",

        gitHub:
          source.personalInformation?.gitHub ||
          source.personalInformation?.github ||
          "",

        portfolio:
          source.personalInformation?.portfolio || "",
      },

      summary:
        typeof source.summary === "string"
          ? source.summary
          : "",

      skills:
        Array.isArray(source.skills)
          ? source.skills
          : [],

      experience:
        Array.isArray(source.experience)
          ? source.experience
          : [],

      education:
        Array.isArray(source.education)
          ? source.education
          : [],

      certifications:
        Array.isArray(source.certifications)
          ? source.certifications
          : [],

      projects:
        Array.isArray(source.projects)
          ? source.projects
          : [],

      languages:
        Array.isArray(source.languages)
          ? source.languages
          : [],

      interests:
        Array.isArray(source.interests)
          ? source.interests
          : [],

      achievements:
        Array.isArray(source.achievements)
          ? source.achievements
          : [],
    };
  };

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

  const languagesFields = useFieldArray({
    control,
    name: "languages",
  });

  const interestsFields = useFieldArray({
    control,
    name: "interests",
  });

  const skillsFields = useFieldArray({
    control,
    name: "skills",
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
  // FORM SUBMIT
  // =========================================================

  const onSubmit = (formData) => {
    console.log("Form Data:", formData);

    const normalizedData = normalizeResumeData(formData);

    console.log(
      "Normalized Form Data:",
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
      "User Description:",
      description
    );

    // Don't allow empty description
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

      // Call backend API
      const responseData =
        await generateResume(description);

      console.log(
        "Backend Response:",
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

      // =====================================================
      // CHECK DATA
      // =====================================================

      if (!responseData.data) {

        console.error(
          "Backend response does not contain data:",
          responseData
        );

        throw new Error(
          "Resume data is missing from backend response."
        );
      }

      // =====================================================
      // NORMALIZE DATA
      // =====================================================

      const normalizedData =
        normalizeResumeData(
          responseData.data
        );

      console.log(
        "Normalized Resume Data:",
        normalizedData
      );

      // =====================================================
      // UPDATE STATE
      // =====================================================

      setData(normalizedData);

      // =====================================================
      // UPDATE REACT HOOK FORM
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

      // Show form
      setShowFormUI(true);

      setShowPromptInput(false);

      setShowResumeUI(false);

    } catch (error) {

      console.error(
        "Resume generation error:",
        error
      );

      console.error(
        "Backend error response:",
        error?.response?.data
      );

      toast.error(
        error?.response?.data?.message ||
        error?.message ||
        "Error Generating Resume!",
        {
          duration: 4000,
          position: "top-center",
        }
      );

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
    type = "text"
  ) => (

    <div className="form-control w-full mb-4">

      <label className="label">

        <span className="label-text text-base-content">
          {label}
        </span>

      </label>

      <input
        type={type}
        {...register(name)}
        className="input input-bordered rounded-xl w-full bg-base-100 text-base-content"
      />

    </div>
  );

  // =========================================================
  // FIELD ARRAY
  // =========================================================

  const renderFieldArray = (
    fieldArray,
    label,
    name,
    keys
  ) => {

    const fields =
      Array.isArray(fieldArray?.fields)
        ? fieldArray.fields
        : [];

    return (

      <div className="form-control w-full mb-4">

        <h3 className="text-xl font-semibold mb-3">
          {label}
        </h3>

        {fields.map((field, index) => (

          <div
            key={field.id}
            className="p-4 rounded-lg mb-4 bg-base-100"
          >

            {keys.map((key) => (

              <div key={key}>

                {renderInput(
                  `${name}.${index}.${key}`,
                  key
                )}

              </div>

            ))}

            <button
              type="button"
              onClick={() =>
                fieldArray.remove(index)
              }
              className="btn btn-error btn-sm mt-2"
            >

              <FaTrash className="w-5 h-5 text-base-content" />

              Remove {label}

            </button>

          </div>

        ))}

        <button
          type="button"
          onClick={() => {

            const newItem =
              keys.reduce(
                (acc, key) => ({
                  ...acc,
                  [key]: "",
                }),
                {}
              );

            fieldArray.append(newItem);

          }}
          className="btn btn-secondary btn-sm mt-2 flex items-center"
        >

          <FaPlusCircle className="w-5 h-5 mr-1 text-base-content" />

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

      <div className="w-full p-10">

        <h1 className="text-4xl font-bold mb-6 flex items-center justify-center gap-2">

          <BiBook className="text-accent" />

          Resume Form

        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 space-y-6 bg-base-200 rounded-lg text-base-content"
        >

          {/* PERSONAL INFORMATION */}

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

          {/* SUMMARY */}

          <h3 className="text-xl font-semibold">
            Summary
          </h3>

          <textarea
            {...register("summary")}
            className="textarea textarea-bordered w-full bg-base-100 text-base-content"
            rows={4}
          />

          {/* SKILLS */}

          {renderFieldArray(
            skillsFields,
            "Skills",
            "skills",
            [
              "title",
              "level",
            ]
          )}

          {/* EXPERIENCE */}

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

          {/* EDUCATION */}

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

          {/* CERTIFICATIONS */}

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

          {/* PROJECTS */}

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

          {/* LANGUAGES + INTERESTS */}

          <div className="flex gap-3 mt-16 p-4 rounded-xl">

            <div className="flex-1">

              {renderFieldArray(
                languagesFields,
                "Languages",
                "languages",
                ["name"]
              )}

            </div>

            <div className="flex-1">

              {renderFieldArray(
                interestsFields,
                "Interests",
                "interests",
                ["name"]
              )}

            </div>

          </div>

          {/* SUBMIT */}

          <button
            type="submit"
            className="btn btn-primary w-full"
          >

            Submit

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

      <div className="bg-base-200 shadow-lg rounded-lg p-10 max-w-2xl w-full text-center">

        <h1 className="text-4xl font-bold mb-6 flex items-center justify-center gap-2">

          <FaBrain className="text-accent" />

          AI Resume Description Input

        </h1>

        <p className="mb-4 text-lg text-gray-600">

          Enter a detailed description about yourself
          to generate your professional resume.

        </p>

        <textarea
          disabled={loading}
          className="textarea textarea-bordered w-full h-48 mb-6 resize-none"
          placeholder="Type your description here..."
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />

        <div className="flex justify-center gap-4">

          <button
            disabled={loading}
            onClick={handleGenerate}
            className="btn btn-primary flex items-center gap-2"
          >

            {loading && (
              <span className="loading loading-spinner"></span>
            )}

            <FaPaperPlane />

            Generate Resume

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
  // SHOW GENERATED RESUME
  // =========================================================

  function showResume() {

    return (

      <div className="w-full">

        <Resume data={data} />

        <div className="flex mt-5 justify-center gap-2">

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

    <div className="mt-5 p-10 flex flex-col gap-3 items-center justify-center font-sans">

      {showFormUI &&
        showFormFunction()}

      {showPromptInput &&
        ShowInputField()}

      {showResumeUI &&
        showResume()}

    </div>
  );
};

export default GenerateResume;
