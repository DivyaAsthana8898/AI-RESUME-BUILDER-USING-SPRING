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
  // DOWNLOAD PDF - FIXED
  // =========================================================

  const handleDownloadPdf = async () => {
    if (!resumeRef.current || downloading) {
      return;
    }

    try {
      setDownloading(true);

      const element = resumeRef.current;

      // A4 CSS size
      // 210mm = approximately 793.7px at 96 DPI
      const A4_WIDTH_PX = 794;

      // Wait for React/browser rendering
      await new Promise((resolve) =>
        setTimeout(resolve, 500)
      );

      /*
       * IMPORTANT:
       *
       * Do NOT use element.scrollWidth here.
       * It can become different depending on browser zoom,
       * parent overflow and responsive layout.
       *
       * We force the capture width to exact A4 width.
       */

      const rect = element.getBoundingClientRect();

      const captureWidth = A4_WIDTH_PX;

      const captureHeight = Math.ceil(
        (rect.height / rect.width) * captureWidth
      );

      const canvas = await toCanvas(element, {
        backgroundColor: "#ffffff",

        width: captureWidth,
        height: captureHeight,

        canvasWidth: captureWidth * 2,
        canvasHeight: captureHeight * 2,

        pixelRatio: 2,

        cacheBust: true,

        style: {
          width: `${captureWidth}px`,
          minWidth: `${captureWidth}px`,
          maxWidth: `${captureWidth}px`,

          height: `${rect.height}px`,

          margin: "0",
          padding: "52px 60px",

          boxSizing: "border-box",

          transform: "none",

          overflow: "visible",

          backgroundColor: "#ffffff",
        },
      });

      // =====================================================
      // CREATE A4 PDF
      // =====================================================

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compress: true,
      });

      const pageWidth = 210;
      const pageHeight = 297;

      const margin = 8;

      const printableWidth =
        pageWidth - margin * 2;

      const printableHeight =
        pageHeight - margin * 2;

      /*
       * Canvas width represents the complete A4 width.
       */

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      const pixelsPerMm =
        canvasWidth / pageWidth;

      const pageHeightPx =
        Math.floor(
          printableHeight * pixelsPerMm
        );

      let sourceY = 0;
      let pageNumber = 0;

      while (sourceY < canvasHeight) {
        pageNumber++;

        const remainingHeight =
          canvasHeight - sourceY;

        const currentHeight = Math.min(
          pageHeightPx,
          remainingHeight
        );

        // ==============================================
        // Create page canvas
        // ==============================================

        const pageCanvas =
          document.createElement("canvas");

        pageCanvas.width = canvasWidth;
        pageCanvas.height = currentHeight;

        const context =
          pageCanvas.getContext("2d");

        context.fillStyle = "#ffffff";

        context.fillRect(
          0,
          0,
          pageCanvas.width,
          pageCanvas.height
        );

        context.drawImage(
          canvas,

          0,
          sourceY,

          canvasWidth,
          currentHeight,

          0,
          0,

          canvasWidth,
          currentHeight
        );

        // ==============================================
        // Convert page to image
        // ==============================================

        const pageImage =
          pageCanvas.toDataURL(
            "image/jpeg",
            0.95
          );

        if (pageNumber > 1) {
          pdf.addPage();
        }

        const imageHeight =
          currentHeight / pixelsPerMm;

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

        sourceY += currentHeight;
      }

      // =====================================================
      // FILE NAME
      // =====================================================

      const safeFileName =
        fullName
          .replace(
            /[^a-zA-Z0-9-_ ]/g,
            ""
          )
          .trim()
          .replace(/\s+/g, "_") ||
        "generated-resume";

      pdf.save(
        `${safeFileName}.pdf`
      );
    } catch (error) {
      console.error(
        "PDF generation error:",
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
        marginBottom: "9px",
        paddingBottom: "5px",
        borderBottom:
          "1.5px solid #1f2937",
      }}
    >
      <h2
        style={{
          margin: 0,
          fontSize: "15px",
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
           * VERY IMPORTANT
           *
           * No maxWidth: 100%
           * No width: 100%
           * No responsive shrinking
           */

          maxWidth: "none",

          margin: "0 auto",

          padding: "14mm 16mm",

          backgroundColor: "#ffffff",
          color: "#111827",

          fontFamily:
            "Arial, Helvetica, sans-serif",

          fontSize: "11px",

          lineHeight: "1.4",

          overflow: "visible",

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

            paddingBottom: "11px",

            borderBottom:
              "2px solid #111827",

            marginBottom: "15px",
          }}
        >
          <h1
            style={{
              margin: 0,

              fontSize: "27px",

              lineHeight: "1.15",

              fontWeight: "800",

              color: "#111827",

              letterSpacing: "0.4px",

              overflowWrap: "anywhere",
            }}
          >
            {fullName}
          </h1>

          {location && (
            <div
              style={{
                marginTop: "5px",

                fontSize: "11px",

                color: "#4b5563",
              }}
            >
              {location}
            </div>
          )}

          {/* CONTACT INFORMATION */}

          <div
            style={{
              marginTop: "8px",

              display: "flex",

              justifyContent: "center",

              alignItems: "center",

              flexWrap: "wrap",

              gap: "5px 13px",

              fontSize: "10px",

              color: "#374151",

              maxWidth: "100%",
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

                  overflowWrap:
                    "anywhere",
                }}
              >
                <FaEnvelope size={9} />
                {email}
              </a>
            )}

            {phoneNumber && (
              <span
                style={{
                  display: "flex",

                  alignItems: "center",

                  gap: "4px",

                  whiteSpace: "nowrap",
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

                  whiteSpace: "nowrap",
                }}
              >
                <FaLinkedin size={9} />
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

                  whiteSpace: "nowrap",
                }}
              >
                <FaGithub size={9} />
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

                  whiteSpace: "nowrap",
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
              marginBottom: "14px",

              breakInside: "avoid",

              pageBreakInside: "avoid",
            }}
          >
            <SectionTitle>
              Professional Summary
            </SectionTitle>

            <p
              style={{
                margin: 0,

                fontSize: "10.5px",

                lineHeight: "1.45",

                color: "#374151",

                textAlign: "justify",

                overflowWrap:
                  "anywhere",
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
              marginBottom: "14px",

              breakInside: "avoid",

              pageBreakInside: "avoid",
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
              {skills.map(
                (skill, index) => (
                  <span
                    key={index}
                    style={{
                      display:
                        "inline-block",

                      padding:
                        "3px 7px",

                      border:
                        "1px solid #d1d5db",

                      borderRadius: "3px",

                      fontSize: "9.5px",

                      color: "#1f2937",

                      backgroundColor:
                        "#f9fafb",

                      maxWidth:
                        "100%",

                      overflowWrap:
                        "anywhere",
                    }}
                  >
                    <strong>
                      {skill?.title ||
                        "Skill"}
                    </strong>

                    {skill?.level && (
                      <span
                        style={{
                          color:
                            "#6b7280",
                        }}
                      >
                        {" "}
                        —{" "}
                        {skill.level}
                      </span>
                    )}
                  </span>
                )
              )}
            </div>
          </section>
        )}

        {/* ===================================================
            EXPERIENCE
        =================================================== */}

        {experience.length > 0 && (
          <section
            style={{
              marginBottom: "14px",
            }}
          >
            <SectionTitle>
              Experience
            </SectionTitle>

            {experience.map(
              (exp, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: "10px",

                    breakInside:
                      "avoid",

                    pageBreakInside:
                      "avoid",
                  }}
                >
                  <div
                    style={{
                      display: "flex",

                      justifyContent:
                        "space-between",

                      alignItems:
                        "flex-start",

                      gap: "10px",

                      minWidth: 0,
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

                          fontSize:
                            "11.5px",

                          lineHeight:
                            "1.25",

                          fontWeight:
                            "700",

                          color:
                            "#111827",

                          overflowWrap:
                            "anywhere",
                        }}
                      >
                        {exp?.jobTitle ||
                          "Job Title"}
                      </h3>

                      {(exp?.company ||
                        exp?.location) && (
                        <div
                          style={{
                            marginTop:
                              "2px",

                            fontSize:
                              "10px",

                            color:
                              "#4b5563",

                            fontWeight:
                              "600",

                            overflowWrap:
                              "anywhere",
                          }}
                        >
                          {exp?.company ||
                            ""}

                          {exp?.company &&
                          exp?.location
                            ? " | "
                            : ""}

                          {exp?.location ||
                            ""}
                        </div>
                      )}
                    </div>

                    {exp?.duration && (
                      <div
                        style={{
                          flexShrink: 0,

                          fontSize:
                            "9.5px",

                          color:
                            "#6b7280",

                          whiteSpace:
                            "nowrap",

                          textAlign:
                            "right",
                        }}
                      >
                        {exp.duration}
                      </div>
                    )}
                  </div>

                  {exp?.responsibility && (
                    <p
                      style={{
                        margin:
                          "4px 0 0",

                        fontSize:
                          "10px",

                        lineHeight:
                          "1.4",

                        color:
                          "#374151",

                        overflowWrap:
                          "anywhere",
                      }}
                    >
                      {exp.responsibility}
                    </p>
                  )}
                </div>
              )
            )}
          </section>
        )}

        {/* ===================================================
            EDUCATION
        =================================================== */}

        {education.length > 0 && (
          <section
            style={{
              marginBottom: "14px",
            }}
          >
            <SectionTitle>
              Education
            </SectionTitle>

            {education.map(
              (edu, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: "8px",

                    breakInside:
                      "avoid",

                    pageBreakInside:
                      "avoid",
                  }}
                >
                  <div
                    style={{
                      display: "flex",

                      justifyContent:
                        "space-between",

                      gap: "10px",

                      minWidth: 0,
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

                          fontSize:
                            "11.5px",

                          lineHeight:
                            "1.25",

                          fontWeight:
                            "700",

                          color:
                            "#111827",

                          overflowWrap:
                            "anywhere",
                        }}
                      >
                        {edu?.degree ||
                          "Degree"}
                      </h3>

                      <div
                        style={{
                          marginTop:
                            "2px",

                          fontSize:
                            "10px",

                          color:
                            "#4b5563",

                          overflowWrap:
                            "anywhere",
                        }}
                      >
                        {edu?.university ||
                          ""}

                        {edu?.university &&
                        edu?.location
                          ? " | "
                          : ""}

                        {edu?.location ||
                          ""}
                      </div>
                    </div>

                    {edu?.graduationYear && (
                      <div
                        style={{
                          flexShrink: 0,

                          fontSize:
                            "9.5px",

                          color:
                            "#6b7280",

                          whiteSpace:
                            "nowrap",
                        }}
                      >
                        {
                          edu.graduationYear
                        }
                      </div>
                    )}
                  </div>
                </div>
              )
            )}
          </section>
        )}

        {/* ===================================================
            PROJECTS
        =================================================== */}

        {projects.length > 0 && (
          <section
            style={{
              marginBottom: "14px",
            }}
          >
            <SectionTitle>
              Projects
            </SectionTitle>

            {projects.map(
              (project, index) => {
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
                      marginBottom:
                        "9px",

                      breakInside:
                        "avoid",

                      pageBreakInside:
                        "avoid",

                      minWidth: 0,
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,

                        fontSize:
                          "11.5px",

                        lineHeight:
                          "1.25",

                        fontWeight:
                          "700",

                        color:
                          "#111827",

                        overflowWrap:
                          "anywhere",
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

                          fontSize:
                            "10px",

                          lineHeight:
                            "1.4",

                          color:
                            "#374151",

                          overflowWrap:
                            "anywhere",
                        }}
                      >
                        {
                          project.description
                        }
                      </p>
                    )}

                    {technologies.length >
                      0 && (
                      <div
                        style={{
                          fontSize:
                            "9.5px",

                          lineHeight:
                            "1.35",

                          color:
                            "#4b5563",

                          overflowWrap:
                            "anywhere",
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
                            "9px",

                          color:
                            "#2563eb",

                          textDecoration:
                            "none",

                          overflowWrap:
                            "anywhere",
                        }}
                      >
                        GitHub Project
                      </a>
                    )}
                  </div>
                );
              }
            )}
          </section>
        )}

        {/* ===================================================
            CERTIFICATIONS
        =================================================== */}

        {certifications.length > 0 && (
          <section
            style={{
              marginBottom: "14px",
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
                    marginBottom:
                      "7px",

                    breakInside:
                      "avoid",

                    pageBreakInside:
                      "avoid",
                  }}
                >
                  <div
                    style={{
                      fontSize:
                        "10.5px",

                      lineHeight:
                        "1.3",

                      fontWeight:
                        "700",

                      color:
                        "#111827",

                      overflowWrap:
                        "anywhere",
                    }}
                  >
                    {cert?.title ||
                      "Certification"}
                  </div>

                  <div
                    style={{
                      fontSize:
                        "9.5px",

                      color:
                        "#4b5563",

                      overflowWrap:
                        "anywhere",
                    }}
                  >
                    {
                      cert?.issuingOrganization ||
                      ""
                    }

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
              marginBottom: "14px",
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
                    marginBottom:
                      "7px",

                    breakInside:
                      "avoid",

                    pageBreakInside:
                      "avoid",
                  }}
                >
                  <div
                    style={{
                      fontSize:
                        "10.5px",

                      lineHeight:
                        "1.3",

                      fontWeight:
                        "700",

                      color:
                        "#111827",

                      overflowWrap:
                        "anywhere",
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
                            "9px",

                          color:
                            "#6b7280",

                          fontWeight:
                            "400",
                        }}
                      >
                        {
                          achievement.year
                        }
                      </span>
                    )}
                  </div>

                  {achievement?.extraInformation && (
                    <div
                      style={{
                        marginTop:
                          "2px",

                        fontSize:
                          "9.5px",

                        lineHeight:
                          "1.35",

                        color:
                          "#374151",

                        overflowWrap:
                          "anywhere",
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

              gridTemplateColumns:
                languages.length > 0 &&
                interests.length > 0
                  ? "minmax(0, 1fr) minmax(0, 1fr)"
                  : "minmax(0, 1fr)",

              gap: "20px",

              marginBottom: "5px",

              breakInside: "avoid",

              pageBreakInside:
                "avoid",

              width: "100%",
            }}
          >
            {/* LANGUAGES */}

            {languages.length > 0 && (
              <div
                style={{
                  minWidth: 0,

                  maxWidth: "100%",
                }}
              >
                <SectionTitle>
                  Languages
                </SectionTitle>

                <div
                  style={{
                    display: "flex",

                    flexWrap: "wrap",

                    gap: "5px",

                    maxWidth: "100%",
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
                            "9.5px",

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

                          boxSizing:
                            "border-box",
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

                  maxWidth: "100%",
                }}
              >
                <SectionTitle>
                  Interests
                </SectionTitle>

                <div
                  style={{
                    display: "flex",

                    flexWrap: "wrap",

                    gap: "5px",

                    maxWidth: "100%",
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
                            "9.5px",

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

                          boxSizing:
                            "border-box",
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

          justifyContent: "center",

          marginTop: "20px",
        }}
      >
        <button
          type="button"
          onClick={handleDownloadPdf}
          disabled={downloading}
          style={{
            padding: "10px 26px",

            border: "none",

            borderRadius: "7px",

            background: downloading
              ? "#9ca3af"
              : "#2563eb",

            color: "#ffffff",

            fontSize: "14px",

            fontWeight: "600",

            cursor: downloading
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
