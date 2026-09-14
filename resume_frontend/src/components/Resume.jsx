import React, { useRef } from "react";
import "daisyui/dist/full.css";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";

const Resume = ({ data = {} }) => {
  const resumeRef = useRef(null);

  // Safely handle missing data
  const personalInformation = data?.personalInformation || {};

  const skills = Array.isArray(data?.skills) ? data.skills : [];
  const experience = Array.isArray(data?.experience) ? data.experience : [];
  const education = Array.isArray(data?.education) ? data.education : [];
  const certifications = Array.isArray(data?.certifications)
    ? data.certifications
    : [];
  const projects = Array.isArray(data?.projects) ? data.projects : [];
  const achievements = Array.isArray(data?.achievements)
    ? data.achievements
    : [];
  const languages = Array.isArray(data?.languages) ? data.languages : [];
  const interests = Array.isArray(data?.interests) ? data.interests : [];

  const handleDownloadPdf = () => {
    if (!resumeRef.current) {
      console.error("Resume element not found");
      return;
    }

    toPng(resumeRef.current, { quality: 1.0 })
      .then((dataUrl) => {
        const pdf = new jsPDF("p", "mm", "a4");

        pdf.addImage(dataUrl, "PNG", 10, 10, 190, 0);

        const fileName =
          personalInformation.fullName || "generated-resume";

        pdf.save(`${fileName}.pdf`);
      })
      .catch((err) => {
        console.error("Error generating PDF:", err);
      });
  };

  return (
    <>
      <div
        ref={resumeRef}
        className="max-w-4xl mx-auto shadow-2xl rounded-lg p-8 space-y-6 bg-base-100 text-base-content border border-gray-200 dark:border-gray-700 transition-all duration-300"
      >
        {/* ================= HEADER ================= */}

        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-primary">
            {personalInformation.fullName || "Your Name"}
          </h1>

          {personalInformation.location && (
            <p className="text-lg text-gray-500">
              {personalInformation.location}
            </p>
          )}

          <div className="flex justify-center space-x-4 mt-2 flex-wrap">
            {personalInformation.email && (
              <a
                href={`mailto:${personalInformation.email}`}
                className="flex items-center text-secondary hover:underline"
              >
                <FaEnvelope className="mr-2" />
                {personalInformation.email}
              </a>
            )}

            {personalInformation.phoneNumber && (
              <p className="flex items-center text-gray-500">
                <FaPhone className="mr-2" />
                {personalInformation.phoneNumber}
              </p>
            )}
          </div>

          <div className="flex justify-center space-x-4 mt-2 flex-wrap">
            {personalInformation.gitHub && (
              <a
                href={personalInformation.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 flex items-center"
              >
                <FaGithub className="mr-2" />
                GitHub
              </a>
            )}

            {personalInformation.linkedIn && (
              <a
                href={personalInformation.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 flex items-center"
              >
                <FaLinkedin className="mr-2" />
                LinkedIn
              </a>
            )}
          </div>
        </div>

        <div className="divider"></div>

        {/* ================= SUMMARY ================= */}

        <section>
          <h2 className="text-2xl font-semibold text-secondary">
            Summary
          </h2>

          <p className="text-gray-700 dark:text-gray-300">
            {data?.summary || "No summary provided."}
          </p>
        </section>

        <div className="divider"></div>

        {/* ================= SKILLS ================= */}

        <section>
          <h2 className="text-2xl font-semibold text-secondary">
            Skills
          </h2>

          {skills.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="badge badge-outline badge-lg px-4 py-2"
                >
                  {skill?.title || "Skill"}

                  {skill?.level && (
                    <>
                      {" - "}
                      <span className="ml-1 font-semibold">
                        {skill.level}
                      </span>
                    </>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 mt-2">
              No skills provided.
            </p>
          )}
        </section>

        <div className="divider"></div>

        {/* ================= EXPERIENCE ================= */}

        <section>
          <h2 className="text-2xl font-semibold text-secondary">
            Experience
          </h2>

          {experience.length > 0 ? (
            experience.map((exp, index) => (
              <div
                key={index}
                className="mb-4 p-4 rounded-lg shadow-md bg-base-200 border border-gray-300 dark:border-gray-700"
              >
                <h3 className="text-xl font-bold">
                  {exp?.jobTitle || "Job Title"}
                </h3>

                <p className="text-gray-500">
                  {exp?.company || ""}
                  {exp?.location ? ` | ${exp.location}` : ""}
                </p>

                {exp?.duration && (
                  <p className="text-gray-400">
                    {exp.duration}
                  </p>
                )}

                {exp?.responsibility && (
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {exp.responsibility}
                  </p>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500">
              No experience provided.
            </p>
          )}
        </section>

        <div className="divider"></div>

        {/* ================= EDUCATION ================= */}

        <section>
          <h2 className="text-2xl font-semibold text-secondary">
            Education
          </h2>

          {education.length > 0 ? (
            education.map((edu, index) => (
              <div
                key={index}
                className="mb-4 p-4 rounded-lg shadow-md bg-base-200 border border-gray-300 dark:border-gray-700"
              >
                <h3 className="text-xl font-bold">
                  {edu?.degree || "Degree"}
                </h3>

                <p className="text-gray-500">
                  {edu?.university || ""}
                  {edu?.location ? `, ${edu.location}` : ""}
                </p>

                {edu?.graduationYear && (
                  <p className="text-gray-400">
                    🎓 Graduation Year: {edu.graduationYear}
                  </p>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500">
              No education information provided.
            </p>
          )}
        </section>

        <div className="divider"></div>

        {/* ================= CERTIFICATIONS ================= */}

        <section>
          <h2 className="text-2xl font-semibold text-secondary">
            Certifications
          </h2>

          {certifications.length > 0 ? (
            certifications.map((cert, index) => (
              <div
                key={index}
                className="mb-4 p-4 rounded-lg shadow-md bg-base-200 border border-gray-300 dark:border-gray-700"
              >
                <h3 className="text-xl font-bold">
                  {cert?.title || "Certification"}
                </h3>

                <p className="text-gray-500">
                  {cert?.issuingOrganization || ""}
                  {cert?.year ? ` - ${cert.year}` : ""}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">
              No certifications provided.
            </p>
          )}
        </section>

        <div className="divider"></div>

        {/* ================= PROJECTS ================= */}

        <section>
          <h2 className="text-2xl font-semibold text-secondary">
            Projects
          </h2>

          {projects.length > 0 ? (
            projects.map((proj, index) => {
              const technologies = Array.isArray(
                proj?.technologiesUsed
              )
                ? proj.technologiesUsed
                : [];

              return (
                <div
                  key={index}
                  className="mb-4 p-4 rounded-lg shadow-md bg-base-200 border border-gray-300 dark:border-gray-700"
                >
                  <h3 className="text-xl font-bold">
                    {proj?.title || "Project"}
                  </h3>

                  {proj?.description && (
                    <p className="text-gray-600 dark:text-gray-300">
                      {proj.description}
                    </p>
                  )}

                  {technologies.length > 0 && (
                    <p className="text-gray-500">
                      🛠 Technologies:{" "}
                      {technologies.join(", ")}
                    </p>
                  )}

                  {proj?.githubLink && (
                    <a
                      href={proj.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      🔗 GitHub Link
                    </a>
                  )}
                </div>
              );
            })
          ) : (
            <p className="text-gray-500">
              No projects provided.
            </p>
          )}
        </section>

        <div className="divider"></div>

        {/* ================= ACHIEVEMENTS ================= */}

        <section>
          <h2 className="text-2xl font-semibold text-secondary">
            Achievements
          </h2>

          {achievements.length > 0 ? (
            achievements.map((ach, index) => (
              <div
                key={index}
                className="mb-4 p-4 rounded-lg shadow-md bg-base-200 border border-gray-300 dark:border-gray-700"
              >
                <h3 className="text-xl font-bold">
                  {ach?.title || "Achievement"}
                </h3>

                {ach?.year && (
                  <p className="text-gray-500">
                    {ach.year}
                  </p>
                )}

                {ach?.extraInformation && (
                  <p className="text-gray-600 dark:text-gray-300">
                    {ach.extraInformation}
                  </p>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500">
              No achievements provided.
            </p>
          )}
        </section>

        <div className="divider"></div>

        {/* ================= LANGUAGES ================= */}

        <section>
          <h2 className="text-2xl font-semibold text-secondary">
            Languages
          </h2>

          {languages.length > 0 ? (
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
              {languages.map((lang, index) => (
                <li key={index}>
                  {lang?.name || "Language"}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">
              No languages provided.
            </p>
          )}
        </section>

        <div className="divider"></div>

        {/* ================= INTERESTS ================= */}

        <section>
          <h2 className="text-2xl font-semibold text-secondary">
            Interests
          </h2>

          {interests.length > 0 ? (
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
              {interests.map((interest, index) => (
                <li key={index}>
                  {interest?.name || "Interest"}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">
              No interests provided.
            </p>
          )}
        </section>
      </div>

      {/* ================= PDF BUTTON ================= */}

      <section className="flex justify-center mt-4">
        <button
          onClick={handleDownloadPdf}
          className="btn btn-primary"
        >
          Print
        </button>
      </section>
    </>
  );
};

export default Resume;
