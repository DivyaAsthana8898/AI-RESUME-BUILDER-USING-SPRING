import React, { useRef, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { toCanvas } from "html-to-image";
import { jsPDF } from "jspdf";

const Resume = ({ data = {} }) => {
  const resumeRef = useRef(null);
  const [downloading, setDownloading] = useState(false);

  // =========================================================
  // SAFE DATA
  // =========================================================

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

  const skills = Array.isArray(data?.skills)
    ? data.skills
    : [];

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

  // =========================================================
  // PDF DOWNLOAD
  // =========================================================

  const handleDownloadPdf = async () => {
    if (!resumeRef.current || downloading) return;

    try {
      setDownloading(true);

      const element = resumeRef.current;

      // Wait for browser to finish rendering
      await new Promise((resolve) => setTimeout(resolve, 300));

      /*
       * IMPORTANT:
       * Capture the resume at exact A4 width.
       * This prevents the right side from getting clipped.
       */

      const canvas = await toCanvas(element, {
        backgroundColor: "#ffffff",
        pixelRatio: 2,
        cacheBust: true,
        width: element.scrollWidth,
        height: element.scrollHeight,
        style: {
          width: "210mm",
          maxWidth: "none",
          margin: "0",
          transform: "none",
        },
      });

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compress: true,
      });

      const pageWidth = 210;
      const pageHeight = 297;

      // Small safe margin
      const margin = 8;

      const printableWidth = pageWidth - margin * 2;
      const printableHeight = pageHeight - margin * 2;

      /*
       * Canvas dimensions
       *
       * We convert the printable PDF area into canvas pixels.
       */
      const pxPerMm = canvas.width / 210;

      const pageCanvasHeight =
        Math.floor(printableHeight * pxPerMm);

      let sourceY = 0;
      let pageNumber = 0;

      while (sourceY < canvas.height) {
        pageNumber++;

        const remainingHeight =
          canvas.height - sourceY;

        const currentPageHeight = Math.min(
          pageCanvasHeight,
          remainingHeight
        );

        // Create a canvas for this PDF page
        const pageCanvas = document.createElement("canvas");

        pageCanvas.width = canvas.width;
        pageCanvas.height = currentPageHeight;

        const pageContext =
          pageCanvas.getContext("2d");

        pageContext.fillStyle = "#ffffff";
        pageContext.fillRect(
          0,
          0,
          pageCanvas.width,
          pageCanvas.height
        );

        pageContext.drawImage(
          canvas,
          0,
          sourceY,
          canvas.width,
          currentPageHeight,
          0,
          0,
          canvas.width,
          currentPageHeight
        );

        const pageImage =
          pageCanvas.toDataURL(
            "image/jpeg",
            0.95
          );

        if (pageNumber > 1) {
          pdf.addPage();
        }

        const imageHeight =
          currentPageHeight / pxPerMm;

        pdf.addImage(
          pageImage,
          "JPEG",
          margin,
          margin,
          printableWidth,
          imageHeight,
          undefined,
          "FAST"
        );

        sourceY += currentPageHeight;
      }

      // =====================================================
      // FILE NAME
      // =====================================================

      const safeFileName =
        fullName
          .replace(/[^a-zA-Z0-9-_ ]/g, "")
          .trim()
          .replace(/\s+/g, "_") ||
        "generated-resume";

      pdf.save(`${safeFileName}.pdf`);

    } catch (error) {
      console.error(
        "Error generating PDF:",
        error
      );

      alert(
        "Unable to generate PDF. Please try again."
      );
    } finally {
      setDownloading(false);
    }
  };

  // =========================================================
  // SECTION TITLE
  // =========================================================

  const SectionTitle = ({ children }) => (
    <div
      style={{
        marginBottom: "10px",
        paddingBottom: "5px",
        borderBottom: "1.5px solid #1f2937",
      }}
    >
      <h2
        style={{
          margin: 0,
          fontSize: "16px",
          lineHeight: "1.2",
          fontWeight: "700",
          color: "#111827",
          textTransform: "uppercase",
          letterSpacing: "0.7px",
        }}
      >
        {children}
      </h2>
    </div>
  );

  // =========================================================
  // MAIN
  // =========================================================

  return (
    <div
      style={{
        width: "100%",
        overflowX: "auto",
        padding: "20px 0 30px",
        background: "#f3f4f6",
      }}
    >
      {/* =====================================================
          A4 RESUME
      ===================================================== */}

      <div
        ref={resumeRef}
        style={{
          width: "210mm",
          minHeight: "297mm",
          boxSizing: "border-box",

          /*
           * IMPORTANT:
           * Do NOT use maxWidth: 100%.
           * It was causing the A4 layout to shrink/clamp.
           */
          maxWidth: "none",

          margin: "0 auto",
          padding: "14mm 16mm",

          backgroundColor: "#ffffff",
          color: "#111827",

          fontFamily:
            "Arial, Helvetica, sans-serif",

          fontSize: "12px",
          lineHeight: "1.4",

          overflow: "hidden",

          boxShadow:
            "0 4px 20px rgba(0,0,0,0.12)",
        }}
      >

        {/* ===================================================
            HEADER
        =================================================== */}

        <header
          style={{
            textAlign: "center",
            paddingBottom: "12px",
            borderBottom: "2px solid #111827",
            marginBottom: "16px",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "29px",
              lineHeight: "1.15",
              fontWeight: "800",
              color: "#111827",
              letterSpacing: "0.4px",
            }}
          >
            {fullName}
          </h1>

          {location && (
            <div
              style={{
                marginTop: "5px",
                fontSize: "11.5px",
                color: "#4b5563",
              }}
            >
              {location}
            </div>
          )}

          <div
            style={{
              marginTop: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "5px 15px",
              fontSize: "10.5px",
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
                  gap: "4px",
                }}
              >
                <FaEnvelope size={10} />
                {email}
              </a>
            )}

            {phoneNumber && (
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <FaPhone size={9} />
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
                  gap: "4px",
                }}
              >
                <FaLinkedin size={10} />
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
                  gap: "4px",
                }}
              >
                <FaGithub size={10} />
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

        {/* ===================================================
            SUMMARY
        =================================================== */}

        {summary && (
          <section
            style={{
              marginBottom: "15px",
            }}
          >
            <SectionTitle>
              Professional Summary
            </SectionTitle>

            <p
              style={{
                margin: 0,
                fontSize: "11.2px",
                lineHeight: "1.5",
                color: "#374151",
                textAlign: "justify",
              }}
            >
              {summary}
            </p>
          </section>
        )}

        {/* ===================================================
            SKILLS
        =================================================== */}

        {skills.length > 0 && (
          <section
            style={{
              marginBottom: "15px",
            }}
          >
            <SectionTitle>
              Skills
            </SectionTitle>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "5px",
              }}
            >
              {skills.map((skill, index) => (
                <span
                  key={index}
                  style={{
                    display: "inline-block",
                    padding: "4px 8px",
                    border: "1px solid #d1d5db",
                    borderRadius: "3px",
                    fontSize: "10px",
                    color: "#1f2937",
                    backgroundColor: "#f9fafb",
                  }}
                >
                  <strong>
                    {skill?.title || "Skill"}
                  </strong>

                  {skill?.level && (
                    <span
                      style={{
                        color: "#6b7280",
                      }}
                    >
                      {" "}
                      — {skill.level}
                    </span>
                  )}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* ===================================================
            EXPERIENCE
        =================================================== */}

        {experience.length > 0 && (
          <section
            style={{
              marginBottom: "15px",
            }}
          >
            <SectionTitle>
              Experience
            </SectionTitle>

            {experience.map((exp, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "11px",
                  breakInside: "avoid",
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
                  <div
                    style={{
                      minWidth: 0,
                      flex: 1,
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        fontSize: "12.5px",
                        lineHeight: "1.25",
                        fontWeight: "700",
                        color: "#111827",
                      }}
                    >
                      {exp?.jobTitle ||
                        "Job Title"}
                    </h3>

                    {(exp?.company ||
                      exp?.location) && (
                      <div
                        style={{
                          marginTop: "2px",
                          fontSize: "10.5px",
                          color: "#4b5563",
                          fontWeight: "600",
                        }}
                      >
                        {exp?.company || ""}

                        {exp?.company &&
                        exp?.location
                          ? " | "
                          : ""}

                        {exp?.location || ""}
                      </div>
                    )}
                  </div>

                  {exp?.duration && (
                    <div
                      style={{
                        flexShrink: 0,
                        fontSize: "10px",
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
                      margin: "4px 0 0",
                      fontSize: "10.5px",
                      lineHeight: "1.45",
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

        {/* ===================================================
            EDUCATION
        =================================================== */}

        {education.length > 0 && (
          <section
            style={{
              marginBottom: "15px",
            }}
          >
            <SectionTitle>
              Education
            </SectionTitle>

            {education.map((edu, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "9px",
                  breakInside: "avoid",
                  pageBreakInside: "avoid",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent:
                      "space-between",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      minWidth: 0,
                      flex: 1,
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        fontSize: "12px",
                        lineHeight: "1.25",
                        fontWeight: "700",
                        color: "#111827",
                      }}
                    >
                      {edu?.degree ||
                        "Degree"}
                    </h3>

                    <div
                      style={{
                        marginTop: "2px",
                        fontSize: "10.5px",
                        color: "#4b5563",
                      }}
                    >
                      {edu?.university || ""}

                      {edu?.university &&
                      edu?.location
                        ? " | "
                        : ""}

                      {edu?.location || ""}
                    </div>
                  </div>

                  {edu?.graduationYear && (
                    <div
                      style={{
                        flexShrink: 0,
                        fontSize: "10px",
                        color: "#6b7280",
                        whiteSpace:
                          "nowrap",
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

        {/* ===================================================
            PROJECTS
        =================================================== */}

        {projects.length > 0 && (
          <section
            style={{
              marginBottom: "15px",
            }}
          >
            <SectionTitle>
              Projects
            </SectionTitle>

            {projects.map((project, index) => {
              let technologies = [];

              if (
                Array.isArray(
                  project?.technologiesUsed
                )
              ) {
                technologies =
                  project.technologiesUsed;
              } else if (
                typeof project?.technologiesUsed ===
                "string"
              ) {
                technologies =
                  project.technologiesUsed
                    .split(",")
                    .map((item) =>
                      item.trim()
                    )
                    .filter(Boolean);
              }

              return (
                <div
                  key={index}
                  style={{
                    marginBottom: "10px",
                    breakInside: "avoid",
                    pageBreakInside:
                      "avoid",
                  }}
                >
                  <h3
                    style={{
                      margin: 0,
                      fontSize: "12px",
                      lineHeight: "1.25",
                      fontWeight: "700",
                      color: "#111827",
                    }}
                  >
                    {project?.title ||
                      "Project"}
                  </h3>

                  {project?.description && (
                    <p
                      style={{
                        margin:
                          "3px 0",
                        fontSize: "10.5px",
                        lineHeight:
                          "1.45",
                        color: "#374151",
                      }}
                    >
                      {project.description}
                    </p>
                  )}

                  {technologies.length >
                    0 && (
                    <div
                      style={{
                        fontSize: "9.8px",
                        lineHeight:
                          "1.4",
                        color: "#4b5563",
                      }}
                    >
                      <strong>
                        Technologies:
                      </strong>{" "}
                      {technologies.join(
                        ", "
                      )}
                    </div>
                  )}

                  {project?.githubLink && (
                    <a
                      href={
                        project.githubLink
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display:
                          "inline-block",
                        marginTop:
                          "2px",
                        fontSize:
                          "9.5px",
                        color:
                          "#2563eb",
                        textDecoration:
                          "none",
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

        {/* ===================================================
            CERTIFICATIONS
        =================================================== */}

        {certifications.length > 0 && (
          <section
            style={{
              marginBottom: "15px",
            }}
          >
            <SectionTitle>
              Certifications
            </SectionTitle>

            {certifications.map(
              (cert, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: "7px",
                    breakInside:
                      "avoid",
                    pageBreakInside:
                      "avoid",
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      lineHeight:
                        "1.3",
                      fontWeight: "700",
                      color: "#111827",
                    }}
                  >
                    {cert?.title ||
                      "Certification"}
                  </div>

                  <div
                    style={{
                      fontSize:
                        "10px",
                      color:
                        "#4b5563",
                    }}
                  >
                    {cert?.issuingOrganization ||
                      ""}

                    {cert?.issuingOrganization &&
                    cert?.year
                      ? " | "
                      : ""}

                    {cert?.year || ""}
                  </div>
                </div>
              )
            )}
          </section>
        )}

        {/* ===================================================
            ACHIEVEMENTS
        =================================================== */}

        {achievements.length > 0 && (
          <section
            style={{
              marginBottom: "15px",
            }}
          >
            <SectionTitle>
              Achievements
            </SectionTitle>

            {achievements.map(
              (achievement, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: "7px",
                    breakInside:
                      "avoid",
                    pageBreakInside:
                      "avoid",
                  }}
                >
                  <div
                    style={{
                      fontSize:
                        "11px",
                      lineHeight:
                        "1.3",
                      fontWeight:
                        "700",
                      color:
                        "#111827",
                    }}
                  >
                    {achievement?.title ||
                      "Achievement"}

                    {achievement?.year && (
                      <span
                        style={{
                          marginLeft:
                            "7px",
                          fontSize:
                            "9.5px",
                          color:
                            "#6b7280",
                          fontWeight:
                            "400",
                        }}
                      >
                        {achievement.year}
                      </span>
                    )}
                  </div>

                  {achievement?.extraInformation && (
                    <div
                      style={{
                        marginTop:
                          "2px",
                        fontSize:
                          "10px",
                        lineHeight:
                          "1.4",
                        color:
                          "#374151",
                      }}
                    >
                      {
                        achievement.extraInformation
                      }
                    </div>
                  )}
                </div>
              )
            )}
          </section>
        )}

        {/* ===================================================
            LANGUAGES + INTERESTS
        =================================================== */}

        {(languages.length > 0 ||
          interests.length > 0) && (
          <section
            style={{
              display: "grid",

              /*
               * FIX:
               * Use minmax(0, 1fr) so long text
               * cannot push the second column
               * outside the A4 page.
               */
              gridTemplateColumns:
                languages.length > 0 &&
                interests.length > 0
                  ? "minmax(0, 1fr) minmax(0, 1fr)"
                  : "minmax(0, 1fr)",

              gap: "20px",
              marginBottom: "5px",

              breakInside: "avoid",
              pageBreakInside: "avoid",
            }}
          >
            {/* LANGUAGES */}

            {languages.length > 0 && (
              <div
                style={{
                  minWidth: 0,
                }}
              >
                <SectionTitle>
                  Languages
                </SectionTitle>

                <div
                  style={{
                    display: "flex",
                    flexWrap:
                      "wrap",
                    gap: "5px",
                  }}
                >
                  {languages.map(
                    (language, index) => (
                      <span
                        key={index}
                        style={{
                          display:
                            "inline-block",
                          fontSize:
                            "9.8px",
                          lineHeight:
                            "1.2",
                          color:
                            "#374151",
                          padding:
                            "4px 7px",
                          border:
                            "1px solid #d1d5db",
                          borderRadius:
                            "3px",
                          maxWidth:
                            "100%",
                          overflowWrap:
                            "anywhere",
                        }}
                      >
                        {language?.name ||
                          "Language"}
                      </span>
                    )
                  )}
                </div>
              </div>
            )}

            {/* INTERESTS */}

            {interests.length > 0 && (
              <div
                style={{
                  minWidth: 0,
                }}
              >
                <SectionTitle>
                  Interests
                </SectionTitle>

                <div
                  style={{
                    display: "flex",
                    flexWrap:
                      "wrap",
                    gap: "5px",
                  }}
                >
                  {interests.map(
                    (interest, index) => (
                      <span
                        key={index}
                        style={{
                          display:
                            "inline-block",
                          fontSize:
                            "9.8px",
                          lineHeight:
                            "1.2",
                          color:
                            "#374151",
                          padding:
                            "4px 7px",
                          border:
                            "1px solid #d1d5db",
                          borderRadius:
                            "3px",
                          maxWidth:
                            "100%",
                          overflowWrap:
                            "anywhere",
                        }}
                      >
                        {interest?.name ||
                          "Interest"}
                      </span>
                    )
                  )}
                </div>
              </div>
            )}
          </section>
        )}
      </div>

      {/* =====================================================
          DOWNLOAD BUTTON
      ===================================================== */}

      <div
        style={{
          display: "flex",
          justifyContent:
            "center",
          marginTop: "20px",
        }}
      >
        <button
          type="button"
          onClick={handleDownloadPdf}
          disabled={downloading}
          style={{
            padding:
              "10px 26px",
            border: "none",
            borderRadius:
              "7px",
            background:
              downloading
                ? "#9ca3af"
                : "#2563eb",
            color: "#ffffff",
            fontSize:
              "14px",
            fontWeight:
              "600",
            cursor:
              downloading
                ? "not-allowed"
                : "pointer",
          }}
        >
          {downloading
            ? "Generating PDF..."
            : "Download Resume PDF"}
        </button>
      </div>
    </div>
  );
};

export default Resume;
