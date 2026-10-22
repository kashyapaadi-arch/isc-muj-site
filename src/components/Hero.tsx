"use client";
import React, { useState } from "react";
import { ArrowRight, Globe2, Sparkles } from "lucide-react";
import { ISC_DATA } from "@/data/isc-content";
import { LinkedInBadge, IscSealBadge } from "./IscBadges";

interface HeroProps {
  onOpenEnquire?: () => void;
}

export default function Hero({ onOpenEnquire }: HeroProps) {
  const [activePathway, setActivePathway] = useState(0);

  const pathways = [
    {
      title: "Semester Exchanges",
      tag: "50+ Global Universities",
      summary: "Study 1-2 semesters at accredited partner universities across USA, Europe, and Asia-Pacific.",
    },
    {
      title: "Global Internships",
      tag: "Industrial & Research",
      summary: "Undertake industrial summer internships, foreign capstone projects, and international lab stints.",
    },
    {
      title: "Explore India Tours",
      tag: "Cultural Immersion",
      summary: "Hosting incoming international exchange scholars with rich academic and regional immersion.",
    },
    {
      title: "Strategic MOUs",
      tag: "Institutional Treaties",
      summary: "High-level bilateral university agreements enabling joint research, dual degrees, and symposiums.",
    },
  ];

  return (
    <section
      id="overview"
      className="hero-noisy-orange-gradient"
      style={{
        position: "relative",
        paddingTop: "68px",
        paddingBottom: "80px",
        color: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      {/* Warm ambient terracotta & amber lighting */}
      <div
        style={{
          position: "absolute",
          top: "-15%",
          right: "5%",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(226, 102, 45, 0.4) 0%, rgba(200, 81, 27, 0.15) 50%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Top Kicker Pill */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "22px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "4px 12px",
              borderRadius: "var(--radius-full)",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "#E2E8F0",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.03em",
              textTransform: "uppercase",
            }}
          >
            <Sparkles size={12} style={{ color: "#FF9E73" }} />
            Directorate of International Collaborations • MUJ
          </div>

          <span style={{ fontSize: "0.8rem", color: "#94A3B8" }}>
            NAAC A+ Accredited
          </span>
        </div>

        {/* Hero Main Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "48px",
            alignItems: "center",
          }}
          className="hero-inner-grid"
        >
          {/* Left Column: Modern Sans Headline with Playfair Accent */}
          <div>
            <h1
              style={{
                fontFamily: "var(--font-base)",
                fontSize: "clamp(2.4rem, 4.8vw, 4.2rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
                marginBottom: "20px",
                textTransform: "uppercase",
              }}
            >
              EMPOWERING GLOBAL MOBILITY,
              <span
                className="font-playfair"
                style={{
                  display: "block",
                  color: "#FFB088",
                  fontSize: "clamp(2.3rem, 4.4vw, 3.8rem)",
                  textTransform: "none",
                  fontWeight: 400,
                  marginTop: "4px",
                }}
              >
                Shaping Future Leaders.
              </span>
            </h1>

            <p
              style={{
                fontSize: "1.05rem",
                color: "#CBD5E1",
                lineHeight: 1.65,
                maxWidth: "520px",
                marginBottom: "30px",
                fontWeight: 400,
              }}
            >
              The standalone digital gateway for the <strong>International Student Cell (ISC)</strong>.
              We connect Manipal University Jaipur scholars with bilateral semester exchanges, overseas research
              internships, and visiting delegations worldwide.
            </p>

            {/* Action Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center", marginBottom: "34px" }}>
              <button
                onClick={onOpenEnquire}
                className="btn-primary"
                style={{
                  fontSize: "0.9rem",
                  padding: "11px 22px",
                }}
              >
                Apply for Exchange Programs <ArrowRight size={15} />
              </button>

              <a
                href="#about"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "10px 20px",
                  borderRadius: "var(--radius-full)",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  backdropFilter: "blur(6px)",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.14)";
                  e.currentTarget.style.borderColor = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.18)";
                }}
              >
                Cell Mission
              </a>
            </div>

            {/* Official Embedded Badges */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "14px",
                padding: "8px 14px",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(8px)",
              }}
            >
              <IscSealBadge size={40} />
              <div style={{ borderLeft: "1px solid rgba(255, 255, 255, 0.15)", paddingLeft: "12px" }}>
                <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#94A3B8", textTransform: "uppercase" }}>
                  Official Channel
                </div>
                <div style={{ fontSize: "0.8rem", color: "#FFFFFF", fontWeight: 600 }}>
                  International Student Cell, DoIC
                </div>
              </div>
              <LinkedInBadge size={36} href="https://www.linkedin.com/company/international-student-cell-doic-muj/" />
            </div>
          </div>

          {/* Right Column: Modern Glassmorphic Interactive Bento Preview */}
          <div
            style={{
              backgroundColor: "rgba(34, 20, 14, 0.65)",
              borderRadius: "18px",
              border: "1px solid rgba(246, 185, 130, 0.22)",
              boxShadow: "0 20px 45px rgba(0, 0, 0, 0.35)",
              backdropFilter: "blur(14px)",
              padding: "24px",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
                paddingBottom: "12px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Globe2 size={16} style={{ color: "#FFB088" }} />
                <span style={{ fontWeight: 700, fontSize: "0.88rem", color: "#FFFFFF" }}>
                  Global Exchange Pathways
                </span>
              </div>
              <span
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "#E2E8F0",
                  padding: "2px 8px",
                  borderRadius: "4px",
                }}
              >
                Interactive
              </span>
            </div>

            {/* Interactive Switcher Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {pathways.map((item, idx) => {
                const active = activePathway === idx;
                return (
                  <div
                    key={item.title}
                    onClick={() => setActivePathway(idx)}
                    style={{
                      padding: "12px 14px",
                      borderRadius: "10px",
                      backgroundColor: active ? "rgba(255, 255, 255, 0.08)" : "transparent",
                      border: active ? "1px solid rgba(255, 255, 255, 0.25)" : "1px solid transparent",
                      cursor: "pointer",
                      transition: "all 0.15s ease",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span
                        style={{
                          fontWeight: 700,
                          fontSize: "0.88rem",
                          color: active ? "#FFFFFF" : "#CBD5E1",
                        }}
                      >
                        {item.title}
                      </span>
                      <span
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 500,
                          color: active ? "#FFB088" : "#64748B",
                        }}
                      >
                        {item.tag}
                      </span>
                    </div>

                    {active && (
                      <p
                        style={{
                          fontSize: "0.82rem",
                          color: "#94A3B8",
                          margin: 0,
                          marginTop: "6px",
                          lineHeight: 1.45,
                        }}
                      >
                        {item.summary}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <div
              style={{
                marginTop: "16px",
                paddingTop: "12px",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "0.78125rem",
                color: "#94A3B8",
              }}
            >
              <span>Explore partner universities list</span>
              <button
                onClick={onOpenEnquire}
                style={{
                  color: "#FFFFFF",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Inquire <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Bento Metrics Strip - 2x2 on Mobile, 4 columns on Desktop */}
        <div
          style={{
            marginTop: "44px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "12px",
          }}
          className="hero-stats-grid"
        >
          {ISC_DATA.stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                backgroundColor: "rgba(34, 20, 14, 0.55)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(246, 185, 130, 0.18)",
                borderRadius: "14px",
                padding: "16px 18px",
                display: "flex",
                flexDirection: "column",
                gap: "2px",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(42, 24, 18, 0.75)";
                e.currentTarget.style.borderColor = "rgba(226, 102, 45, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(34, 20, 14, 0.55)";
                e.currentTarget.style.borderColor = "rgba(246, 185, 130, 0.18)";
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-base)",
                  fontSize: "clamp(1.5rem, 3.5vw, 1.85rem)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "#E2D9D2",
                  fontWeight: 500,
                  lineHeight: 1.3,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 900px) {
          .hero-inner-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 600px) {
          .hero-stats-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 10px !important;
          }
        }
      `}</style>
    </section>
  );
}
