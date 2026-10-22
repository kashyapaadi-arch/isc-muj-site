"use client";
import React, { useState } from "react";
import { ISC_DATA } from "@/data/isc-content";
import { Plane, Briefcase, Users, GraduationCap, Compass, Network, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ObjectivesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const objectives = [
    {
      id: "obj-1",
      number: "01",
      category: "mobility",
      title: "Student & Semester Exchanges",
      summary: "Managing bilateral semester exchange programs, research semesters, and academic mobility.",
      details: "Enabling students to take transferable credit courses at top accredited universities worldwide.",
      icon: Plane,
      badge: "Mobility",
    },
    {
      id: "obj-2",
      number: "02",
      category: "careers",
      title: "Global Internships & Projects",
      summary: "Opening international experiential learning, industrial projects, and collaborative research.",
      details: "Connecting undergrads and postgrads with international labs and corporate research centres.",
      icon: Briefcase,
      badge: "Internships",
    },
    {
      id: "obj-3",
      number: "03",
      category: "outreach",
      title: "School Connect Abroad",
      summary: "Initiating international outreach activities through MUJ students in diaspora populations.",
      details: "Building academic bridges with high schools and communities in GCC, Southeast Asia, and Europe.",
      icon: Users,
      badge: "Outreach",
    },
    {
      id: "obj-4",
      number: "04",
      category: "symposium",
      title: "Annual International Conference",
      summary: "Hosting a premier annual conference on prospects and challenges of internationalizing education.",
      details: "Uniting thought leaders, vice-chancellors, and international education delegates at MUJ.",
      icon: GraduationCap,
      badge: "Conference",
    },
    {
      id: "obj-5",
      number: "05",
      category: "culture",
      title: "Cultural & Explore India Tours",
      summary: "Facilitating immersion tours, cultural exchanges, and summer/winter school programs.",
      details: "Equipping incoming international cohorts with rich local heritage discovery and language practice.",
      icon: Compass,
      badge: "Culture",
    },
    {
      id: "obj-6",
      number: "06",
      category: "partnerships",
      title: "Global Network Expansion",
      summary: "Fostering strategic international collaborations, signing MOUs, and elevating university stature.",
      details: "Formalizing bilateral agreements that support reciprocal tuition waivers and dual qualifications.",
      icon: Network,
      badge: "Partnerships",
    },
  ];

  const filteredObjectives = objectives.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  return (
    <section id="objectives" style={{ padding: "80px 0", backgroundColor: "#FFFFFF", borderTop: "1px solid var(--color-border-light)" }}>
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          <div style={{ maxWidth: "600px" }}>
            <div className="pill-badge" style={{ marginBottom: "12px" }}>
              Strategic Roadmap
            </div>
            <h2 className="section-headline">
              Key Objectives & <em>Global Focus</em>
            </h2>
            <p style={{ fontSize: "1.025rem", color: "var(--color-text-muted)", marginTop: "10px", lineHeight: 1.6 }}>
              Structuring concrete pathways for student mobility, collaborative research, international outreach, and
              bilateral institution partnerships.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div
            className="mobile-scroll-x"
            style={{
              gap: "6px",
              backgroundColor: "var(--color-bg)",
              padding: "5px",
              borderRadius: "var(--radius-full)",
              border: "1px solid var(--color-border-light)",
            }}
          >
            {[
              { id: "all", label: "All Focus Areas" },
              { id: "mobility", label: "Mobility" },
              { id: "careers", label: "Internships" },
              { id: "outreach", label: "Outreach" },
              { id: "partnerships", label: "MOUs" },
            ].map((tab) => {
              const active = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  style={{
                    padding: "6px 16px",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.8rem",
                    fontWeight: active ? 700 : 600,
                    backgroundColor: active ? "var(--color-primary)" : "transparent",
                    color: active ? "#FFFFFF" : "var(--color-text-body)",
                    transition: "all 0.15s ease",
                    flexShrink: 0,
                    whiteSpace: "nowrap",
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 6 Modernized De-cluttered Bento Objective Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "22px",
            marginBottom: "50px",
          }}
        >
          {filteredObjectives.map((obj) => {
            const Icon = obj.icon;
            return (
              <div
                key={obj.id}
                className="bento-card"
                style={{
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  backgroundColor: "var(--color-surface-creme)",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "18px",
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "12px",
                        backgroundColor: "#FFFFFF",
                        color: "var(--color-primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "var(--shadow-xs)",
                        border: "1px solid var(--color-border-light)",
                      }}
                    >
                      <Icon size={20} />
                    </div>

                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.8125rem",
                        fontWeight: 700,
                        color: "var(--color-primary)",
                        opacity: 0.8,
                      }}
                    >
                      {obj.number}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "var(--color-text-heading)",
                      marginBottom: "8px",
                      lineHeight: 1.35,
                    }}
                  >
                    {obj.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "var(--color-text-body)",
                      lineHeight: 1.6,
                      marginBottom: "10px",
                    }}
                  >
                    {obj.summary}
                  </p>
                </div>

                <div
                  style={{
                    paddingTop: "14px",
                    borderTop: "1px solid var(--color-border-light)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span className="pill-badge" style={{ fontSize: "0.72rem", padding: "3px 10px" }}>
                    {obj.badge}
                  </span>
                  <span style={{ fontSize: "0.78rem", color: "var(--color-text-muted)", fontWeight: 500 }}>
                    Active Initiative
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive 4-Step Student Exchange Process Flow */}
        <div
          style={{
            backgroundColor: "var(--color-bg)",
            borderRadius: "20px",
            border: "1px solid var(--color-border)",
            padding: "36px 30px",
          }}
        >
          <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 30px auto" }}>
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                color: "var(--color-primary)",
                letterSpacing: "0.08em",
              }}
            >
              How It Works
            </span>
            <h3
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.45rem",
                fontWeight: 700,
                color: "var(--color-text-heading)",
                marginTop: "4px",
              }}
            >
              Student Exchange in 4 Steps
            </h3>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              { step: "01", title: "Explore & Select", desc: "Browse accredited partner universities and academic syllabi." },
              { step: "02", title: "Nomination & DoIC", desc: "Submit transcript for internal evaluation and faculty clearance." },
              { step: "03", title: "Visa & Preparation", desc: "Receive official invitation letter and visa documentation support." },
              { step: "04", title: "Global Immersion", desc: "Study abroad, complete coursework, and transfer course credits." },
            ].map((s) => (
              <div
                key={s.step}
                style={{
                  backgroundColor: "#FFFFFF",
                  padding: "20px",
                  borderRadius: "14px",
                  border: "1px solid var(--color-border-light)",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: 800,
                    color: "var(--color-primary)",
                    marginBottom: "8px",
                  }}
                >
                  Step {s.step}
                </div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "var(--color-text-heading)",
                    marginBottom: "6px",
                  }}
                >
                  {s.title}
                </div>
                <p style={{ fontSize: "0.825rem", color: "var(--color-text-muted)", margin: 0, lineHeight: 1.5 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
