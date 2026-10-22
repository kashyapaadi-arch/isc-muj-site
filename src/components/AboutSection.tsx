"use client";
import React, { useState } from "react";
import { ISC_DATA } from "@/data/isc-content";
import { Globe, Compass, GraduationCap, ArrowRight, ShieldCheck, Sparkles, BookOpen, ChevronRight } from "lucide-react";

export default function AboutSection() {
  const [showFullPhilosophy, setShowFullPhilosophy] = useState(false);

  const keyStrengths = [
    {
      title: "Gateway to World Opportunities",
      desc: "Creating awareness of international bilateral initiatives and proactive global career paths.",
      icon: Globe,
    },
    {
      title: "Global Academic Networking",
      desc: "Elevating MUJ's presence on international academic stages through prestigious university ties.",
      icon: Compass,
    },
    {
      title: "Explore India & Culture Immersion",
      desc: "Welcoming international exchange cohorts with curated cultural discovery and peer mentorship.",
      icon: GraduationCap,
    },
  ];

  return (
    <section id="about" style={{ padding: "80px 0", backgroundColor: "var(--color-bg)" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: "40px", maxWidth: "680px" }}>
          <div className="pill-badge" style={{ marginBottom: "12px" }}>
            <Sparkles size={13} />
            <span>Philosophy & Mission</span>
          </div>
          <h2 className="section-headline">
            About the <em>International Student Cell</em>
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--color-text-muted)", marginTop: "10px", lineHeight: 1.6 }}>
            MUJ proudly introduces ISC at the Directorate of International Collaborations (DoIC)—a pioneering
            initiative broadening horizons, nurturing cultural sensitivity, and empowering students to thrive in an
            interconnected world.
          </p>
        </div>

        {/* Modern Bento Grid Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "24px",
            marginBottom: "24px",
          }}
          className="about-bento-grid"
        >
          {/* Bento Card 1: Core Philosophy */}
          <div
            className="bento-card"
            style={{
              padding: "36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backgroundColor: "#FFFFFF",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-block",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--color-primary)",
                  marginBottom: "14px",
                }}
              >
                Our Core Philosophy
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-base)",
                  fontSize: "1.45rem",
                  fontWeight: 700,
                  color: "var(--color-text-heading)",
                  marginBottom: "14px",
                  lineHeight: 1.35,
                }}
              >
                &ldquo;ISC is not just an initiative; it&apos;s a philosophy that embodies our belief in the transformative
                power of international exposure.&rdquo;
              </h3>

              <p style={{ color: "var(--color-text-body)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "16px" }}>
                Through ISC, we strive to nurture global citizens who are equipped with the skills, knowledge, and
                cultural sensitivity to navigate diverse cultures, collaborate across borders, and tackle global
                challenges with confidence and empathy.
              </p>

              {showFullPhilosophy && (
                <div
                  style={{
                    backgroundColor: "var(--color-surface-creme)",
                    padding: "16px 20px",
                    borderRadius: "12px",
                    borderLeft: "3px solid var(--color-primary)",
                    marginTop: "16px",
                    fontSize: "0.9rem",
                    lineHeight: 1.65,
                    color: "var(--color-text-body)",
                  }}
                >
                  <p style={{ marginBottom: "8px" }}>
                    The International Student Cell at DoIC – MUJ proactively supports programs such as semester
                    exchanges, global internships, and research opportunities. From winter and summer academies to
                    Explore India initiatives, ISC is a catalyst for transforming students into global leaders.
                  </p>
                </div>
              )}
            </div>

            <div style={{ marginTop: "20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <button
                onClick={() => setShowFullPhilosophy(!showFullPhilosophy)}
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "var(--color-primary)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                {showFullPhilosophy ? "Show Less" : "Read Full Background"} <ChevronRight size={15} />
              </button>

              <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
                Directorate of International Collaborations
              </span>
            </div>
          </div>

          {/* Bento Card 2: Catalyst Callout & Global Focus */}
          <div
            className="bento-card"
            style={{
              padding: "36px",
              backgroundColor: "var(--color-surface-creme)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              border: "1px solid var(--color-border)",
            }}
          >
            <div>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "12px",
                  backgroundColor: "var(--color-primary-soft)",
                  color: "var(--color-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <Sparkles size={22} />
              </div>

              <h4
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "var(--color-text-heading)",
                  marginBottom: "10px",
                }}
              >
                A Catalyst for Excellence
              </h4>

              <p style={{ fontSize: "0.92rem", color: "var(--color-text-body)", lineHeight: 1.65 }}>
                Overall, ISC is more than just a cell; it is an academic springboard preparing MUJ students to excel
                in an interconnected world through direct exposure to premier international faculties.
              </p>
            </div>

            <div
              style={{
                marginTop: "24px",
                paddingTop: "16px",
                borderTop: "1px solid var(--color-border)",
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              <span className="pill-badge" style={{ fontSize: "0.72rem" }}>Semester Exchange</span>
              <span className="pill-badge" style={{ fontSize: "0.72rem" }}>Global Internships</span>
              <span className="pill-badge" style={{ fontSize: "0.72rem" }}>Joint Research</span>
            </div>
          </div>
        </div>

        {/* 3 Interactive Highlight Pillars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {keyStrengths.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bento-card"
                style={{
                  padding: "24px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "10px",
                    backgroundColor: "var(--color-primary-soft)",
                    color: "var(--color-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--color-text-heading)",
                      marginBottom: "6px",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0, lineHeight: 1.55 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 860px) {
          .about-bento-grid {
            grid-templateColumns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
