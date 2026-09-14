import React, { useRef } from "react";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";

const Resume = ({ data = {} }) => {
  const resumeRef = useRef(null);

  // =========================
  // SAFE DATA
  // =========================

  const personalInformation = data?.personalInformation || {};

  const fullName =
    personalInformation?.fullName?.trim() || "Your Name";

  const email = personalInformation?.email || "";
  const phoneNumber = personalInformation?.phoneNumber || "";
  const location = personalInformation?.location || "";

  const linkedin =
    personalInformation?.linkedIn ||
    personalInformation?.linkedin ||
    "";

  const github =
    personalInformation?.gitHub ||
    personalInformation?.github ||
    "";

  const portfolio = personalInformation?.portfolio || "";

  const summary = data?.summary || "";

  const skills = Array.isArray(data?.skills) ? data.skills : [];
  const experience = Array.isArray(data?.experience)
    ? data.experience
    : [];
  const education = Array.isArray(data?.education)
    ? data.education
    : [];
  const certifications = Array.isArray(data?.certifications)
    ? data.certifications
    : [];
  const projects = Array.isArray(data?.projects)
    ? data.projects
    : [];
  const achievements = Array.isArray(data?.achievements)
    ? data.achievements
    : [];
  const languages = Array.isArray(data?.languages)
    ? data.languages
    : [];
  const interests = Array.isArray(data?.interests)
    ? data.interests
    : [];

  // =========================
  // PDF DOWNLOAD
  // =========================

  const handleDownloadPdf = async () => {
    if (!resumeRef.current) {
      console.error("Resume element not found");
      return;
    }

    try {
      const dataUrl = await toPng(resumeRef.current, {
        quality: 1,
        pixelRatio: 2,
        backgroundColor: "#ffffff",
      });

      const img = new Image();

      img.onload = () => {
        const pdf = new jsPDF("p", "mm", "a4");

        const pageWidth = 210;
        const pageHeight = 297;

        const margin = 10;
        const contentWidth = pageWidth - margin * 2;

        const imageRatio = img.height / img.width;

        const imageHeight = contentWidth * imageRatio;

        // First page
        pdf.addImage(
          dataUrl,
          "PNG",
          margin,
          margin,
          contentWidth,
          imageHeight
        );

        // Additional pages if resume is longer than one A4 page
        let remainingHeight = imageHeight - (pageHeight - margin * 2);

        let pageNumber = 1;

        while (remainingHeight > 0) {
          pageNumber++;

          pdf.addPage();

          const yPosition =
            margin -
            (pageNumber - 1) * (pageHeight - margin * 2);

          pdf.addImage(
            dataUrl,
            "PNG",
            margin,
            yPosition,
            contentWidth,
            imageHeight
          );

          remainingHeight -= pageHeight - margin * 2;
        }

        const safeFileName =
          fullName.replace(/[^a-zA-Z0-9-_ ]/g, "").trim() ||
          "generated-resume";

        pdf.save(`${safeFileName}.pdf`);
      };

      img.src = dataUrl;
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  // =========================
  // SECTION TITLE
  // =========================

  const SectionTitle = ({ children }) => (
    <div
      style={{
        marginBottom: "12px",
        paddingBottom: "6px",
        borderBottom: "2px solid #1f2937",
      }}
    >
      <h2
        style={{
          margin: 0,
          fontSize: "17px",
          fontWeight: "700",
          color: "#111827",
          textTransform: "uppercase",
          letterSpacing: "0.8px",
        }}
      >
        {children}
      </h2>
    </div>
  );

  // =========================
  // MAIN RESUME
  // =========================

  return (
    <>
      <div
        ref={resumeRef}
        style={{
          width: "210mm",
          minHeight: "297mm",
          maxWidth: "100%",
          margin: "0 auto",
          padding: "16mm 17mm",
          backgroundColor: "#ffffff",
          color: "#111827",
          fontFamily:
            "Arial, Helvetica, sans-serif",
          boxSizing: "border-box",
          lineHeight: "1.45",
        }}
      >
        {/* =================================
            HEADER
        ================================= */}

        <header
          style={{
            textAlign: "center",
            paddingBottom: "14px",
            borderBottom: "3px solid #111827",
            marginBottom: "18px",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "31px",
              fontWeight: "800",
              color: "#111827",
              letterSpacing: "0.5px",
            }}
          >
            {fullName}
          </h1>

          {location && (
            <div
              style={{
                marginTop: "6px",
                fontSize: "13px",
                color: "#4b5563",
              }}
            >
              {location}
            </div>
          )}

          {/* Contact Information */}

          <div
            style={{
              marginTop: "9px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "8px 18px",
              fontSize: "11.5px",
              color: "#374151",
            }}
          >
            {email && (
              <a
                href={`mailto:${email}`}
                style={{
                  color: "#374151",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <FaEnvelope size={11} />
                {email}
              </a>
            )}

            {phoneNumber && (
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <FaPhone size={10} />
                {phoneNumber}
              </span>
            )}

            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#374151",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <FaLinkedin size={11} />
                LinkedIn
              </a>
            )}

            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#374151",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <FaGithub size={11} />
                GitHub
              </a>
            )}

            {portfolio && (
              <a
                href={portfolio}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#374151",
                  textDecoration: "none",
                }}
              >
                Portfolio
              </a>
            )}
          </div>
        </header>

        {/* =================================
            SUMMARY
        ================================= */}

        {summary && (
          <section
            style={{
              marginBottom: "18px",
            }}
          >
            <SectionTitle>Professional Summary</SectionTitle>

            <p
              style={{
                margin: 0,
                fontSize: "12px",
                color: "#374151",
                textAlign: "justify",
              }}
            >
              {summary}
            </p>
          </section>
        )}

        {/* =================================
            SKILLS
        ================================= */}

        {skills.length > 0 && (
          <section style={{ marginBottom: "18px" }}>
            <SectionTitle>Skills</SectionTitle>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "7px",
              }}
            >
              {skills.map((skill, index) => (
                <span
                  key={index}
                  style={{
                    display: "inline-block",
                    padding: "5px 10px",
                    border: "1px solid #d1d5db",
                    borderRadius: "4px",
                    fontSize: "11px",
                    color: "#1f2937",
                    backgroundColor: "#f9fafb",
                  }}
                >
                  <strong>{skill?.title || "Skill"}</strong>

                  {skill?.level && (
                    <span style={{ color: "#6b7280" }}>
                      {" "}
                      — {skill.level}
                    </span>
                  )}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* =================================
            EXPERIENCE
        ================================= */}

        {experience.length > 0 && (
          <section style={{ marginBottom: "18px" }}>
            <SectionTitle>Experience</SectionTitle>

            {experience.map((exp, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "13px",
                  pageBreakInside: "avoid",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        margin: 0,
                        fontSize: "14px",
                        fontWeight: "700",
                        color: "#111827",
                      }}
                    >
                      {exp?.jobTitle || "Job Title"}
                    </h3>

                    {(exp?.company || exp?.location) && (
                      <div
                        style={{
                          marginTop: "2px",
                          fontSize: "12px",
                          color: "#4b5563",
                          fontWeight: "600",
                        }}
                      >
                        {exp?.company || ""}

                        {exp?.company && exp?.location
                          ? " | "
                          : ""}

                        {exp?.location || ""}
                      </div>
                    )}
                  </div>

                  {exp?.duration && (
                    <div
                      style={{
                        fontSize: "11px",
                        color: "#6b7280",
                        whiteSpace: "nowrap",
                        textAlign: "right",
                      }}
                    >
                      {exp.duration}
                    </div>
                  )}
                </div>

                {exp?.responsibility && (
                  <p
                    style={{
                      margin: "5px 0 0",
                      fontSize: "11.5px",
                      color: "#374151",
                    }}
                  >
                    {exp.responsibility}
                  </p>
                )}
              </div>
            ))}
          </section>
        )}

        {/* =================================
            EDUCATION
        ================================= */}

        {education.length > 0 && (
          <section style={{ marginBottom: "18px" }}>
            <SectionTitle>Education</SectionTitle>

            {education.map((edu, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "11px",
                  pageBreakInside: "avoid",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "10px",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        margin: 0,
                        fontSize: "13.5px",
                        fontWeight: "700",
                        color: "#111827",
                      }}
                    >
                      {edu?.degree || "Degree"}
                    </h3>

                    <div
                      style={{
                        marginTop: "2px",
                        fontSize: "11.5px",
                        color: "#4b5563",
                      }}
                    >
                      {edu?.university || ""}

                      {edu?.university && edu?.location
                        ? " | "
                        : ""}

                      {edu?.location || ""}
                    </div>
                  </div>

                  {edu?.graduationYear && (
                    <div
                      style={{
                        fontSize: "11px",
                        color: "#6b7280",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {edu.graduationYear}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </section>
        )}

        {/* =================================
            PROJECTS
        ================================= */}

        {projects.length > 0 && (
          <section style={{ marginBottom: "18px" }}>
            <SectionTitle>Projects</SectionTitle>

            {projects.map((project, index) => {
              let technologies = [];

              if (Array.isArray(project?.technologiesUsed)) {
                technologies = project.technologiesUsed;
              } else if (
                typeof project?.technologiesUsed === "string"
              ) {
                technologies = project.technologiesUsed
                  .split(",")
                  .map((item) => item.trim())
                  .filter(Boolean);
              }

              return (
                <div
                  key={index}
                  style={{
                    marginBottom: "13px",
                    pageBreakInside: "avoid",
                  }}
                >
                  <h3
                    style={{
                      margin: 0,
                      fontSize: "13.5px",
                      fontWeight: "700",
                      color: "#111827",
                    }}
                  >
                    {project?.title || "Project"}
                  </h3>

                  {project?.description && (
                    <p
                      style={{
                        margin: "4px 0",
                        fontSize: "11.5px",
                        color: "#374151",
                      }}
                    >
                      {project.description}
                    </p>
                  )}

                  {technologies.length > 0 && (
                    <div
                      style={{
                        fontSize: "10.5px",
                        color: "#4b5563",
                      }}
                    >
                      <strong>Technologies:</strong>{" "}
                      {technologies.join(", ")}
                    </div>
                  )}

                  {project?.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        marginTop: "3px",
                        fontSize: "10.5px",
                        color: "#2563eb",
                        textDecoration: "none",
                      }}
                    >
                      GitHub Project
                    </a>
                  )}
                </div>
              );
            })}
          </section>
        )}

        {/* =================================
            CERTIFICATIONS
        ================================= */}

        {certifications.length > 0 && (
          <section style={{ marginBottom: "18px" }}>
            <SectionTitle>Certifications</SectionTitle>

            {certifications.map((cert, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "9px",
                  pageBreakInside: "avoid",
                }}
              >
                <div
                  style={{
                    fontSize: "12.5px",
                    fontWeight: "700",
                    color: "#111827",
                  }}
                >
                  {cert?.title || "Certification"}
                </div>

                <div
                  style={{
                    fontSize: "11px",
                    color: "#4b5563",
                  }}
                >
                  {cert?.issuingOrganization || ""}

                  {cert?.issuingOrganization && cert?.year
                    ? " | "
                    : ""}

                  {cert?.year || ""}
                </div>
              </div>
            ))}
          </section>
        )}

        {/* =================================
            ACHIEVEMENTS
        ================================= */}

        {achievements.length > 0 && (
          <section style={{ marginBottom: "18px" }}>
            <SectionTitle>Achievements</SectionTitle>

            {achievements.map((achievement, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "9px",
                  pageBreakInside: "avoid",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    color: "#111827",
                  }}
                >
                  {achievement?.title || "Achievement"}

                  {achievement?.year && (
                    <span
                      style={{
                        marginLeft: "8px",
                        fontSize: "10.5px",
                        color: "#6b7280",
                        fontWeight: "400",
                      }}
                    >
                      {achievement.year}
                    </span>
                  )}
                </div>

                {achievement?.extraInformation && (
                  <div
                    style={{
                      marginTop: "2px",
                      fontSize: "11px",
                      color: "#374151",
                    }}
                  >
                    {achievement.extraInformation}
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        {/* =================================
            LANGUAGES + INTERESTS
        ================================= */}

        {(languages.length > 0 || interests.length > 0) && (
          <section
            style={{
              display: "grid",
              gridTemplateColumns:
                languages.length > 0 && interests.length > 0
                  ? "1fr 1fr"
                  : "1fr",
              gap: "30px",
              marginBottom: "10px",
              pageBreakInside: "avoid",
            }}
          >
            {languages.length > 0 && (
              <div>
                <SectionTitle>Languages</SectionTitle>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                  }}
                >
                  {languages.map((language, index) => (
                    <span
                      key={index}
                      style={{
                        fontSize: "11px",
                        color: "#374151",
                        padding: "4px 8px",
                        border: "1px solid #d1d5db",
                        borderRadius: "4px",
                      }}
                    >
                      {language?.name || "Language"}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {interests.length > 0 && (
              <div>
                <SectionTitle>Interests</SectionTitle>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                  }}
                >
                  {interests.map((interest, index) => (
                    <span
                      key={index}
                      style={{
                        fontSize: "11px",
                        color: "#374151",
                        padding: "4px 8px",
                        border: "1px solid #d1d5db",
                        borderRadius: "4px",
                      }}
                    >
                      {interest?.name || "Interest"}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}
      </div>

      {/* =================================
          BUTTON
      ================================= */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px 0 30px",
        }}
      >
        <button
          onClick={handleDownloadPdf}
          className="btn btn-primary"
          style={{
            padding: "10px 28px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Download Resume PDF
        </button>
      </div>
    </>
  );
};

export default Resume;
