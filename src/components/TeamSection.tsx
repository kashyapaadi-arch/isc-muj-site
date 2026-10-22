"use client";
import React, { useState } from "react";
import { ISC_DATA, TeamMember } from "@/data/isc-content";
import ImageWithFallback from "./ImageWithFallback";
import { Mail, Award, Sparkles, ArrowUpRight } from "lucide-react";
import { LinkedInIcon } from "./IscBadges";

export default function TeamSection() {
  const [activeTab, setActiveTab] = useState<"all" | "faculty" | "executive" | "core">("all");

  const MemberCard = ({ member }: { member: TeamMember }) => (
    <div
      className="bento-card"
      style={{
        backgroundColor: "#FFFFFF",
        padding: "26px 20px 22px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        borderRadius: "18px",
        border: "1px solid var(--color-border-light)",
        boxShadow: "var(--shadow-xs)",
        transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Refined Circular Portrait with modern border */}
      <div
        style={{
          width: 110,
          height: 110,
          borderRadius: "50%",
          padding: "4px",
          background: "linear-gradient(135deg, #FFF3EC 0%, #F5EAE0 100%)",
          boxShadow: "0 4px 16px rgba(200, 81, 27, 0.1)",
          marginBottom: "16px",
          position: "relative",
        }}
      >
        <ImageWithFallback
          src={member.image}
          alt={member.name}
          initials={member.initials}
          type="avatar"
          style={{ width: "100%", height: "100%", borderRadius: "50%" }}
        />

        {member.category === "faculty" && (
          <div
            title="Faculty Advisor"
            style={{
              position: "absolute",
              bottom: 2,
              right: 2,
              backgroundColor: "var(--color-primary)",
              color: "#FFFFFF",
              borderRadius: "50%",
              width: 24,
              height: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
            }}
          >
            <Award size={13} />
          </div>
        )}
      </div>

      {/* Name in Modern Sans Bold */}
      <h3
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "1.08rem",
          fontWeight: 700,
          color: "var(--color-text-heading)",
          marginBottom: "4px",
          lineHeight: 1.25,
        }}
      >
        {member.name}
      </h3>

      {/* Designation Tag */}
      <div
        style={{
          fontSize: "0.8rem",
          fontWeight: 700,
          color: "var(--color-primary)",
          letterSpacing: "0.02em",
          marginBottom: "6px",
        }}
      >
        {member.role}
      </div>

      {member.department && (
        <div
          style={{
            fontSize: "0.75rem",
            color: "var(--color-text-muted)",
            marginBottom: "12px",
          }}
        >
          {member.department}
        </div>
      )}

      {/* Micro Connect Buttons */}
      <div
        style={{
          marginTop: "auto",
          display: "flex",
          gap: "8px",
          paddingTop: "14px",
          borderTop: "1px solid var(--color-border-light)",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <a
          href={ISC_DATA.university.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Connect with ${member.name} on LinkedIn`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            fontSize: "0.75rem",
            fontWeight: 600,
            color: "#0A66C2",
            backgroundColor: "var(--color-secondary-soft)",
            padding: "5px 12px",
            borderRadius: "var(--radius-full)",
            textDecoration: "none",
            transition: "all 0.15s ease",
          }}
        >
          <LinkedInIcon size={13} color="#0A66C2" />
          <span>Connect</span>
        </a>

        <a
          href={`mailto:${ISC_DATA.university.contactEmail}?subject=Inquiry for ${member.name} (ISC MUJ)`}
          aria-label={`Email ${member.name}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            fontSize: "0.75rem",
            fontWeight: 600,
            color: "var(--color-text-body)",
            backgroundColor: "var(--color-surface-creme)",
            border: "1px solid var(--color-border-light)",
            padding: "5px 12px",
            borderRadius: "var(--radius-full)",
            textDecoration: "none",
            transition: "all 0.15s ease",
          }}
        >
          <Mail size={13} />
          <span>Email</span>
        </a>
      </div>
    </div>
  );

  return (
    <section id="team" style={{ padding: "80px 0", backgroundColor: "#FFFFFF", borderTop: "1px solid var(--color-border-light)" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 40px auto" }}>
          <div className="pill-badge" style={{ marginBottom: "12px" }}>
            Cell Governance
          </div>
          <h2 className="section-headline">
            Leadership & <em>Committee</em>
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--color-text-muted)", marginTop: "10px" }}>
            Faculty advisors and student leaders steering international collaborations, exchange programs, and
            delegations at Manipal University Jaipur.
          </p>

          {/* Segmented Filter Tabs */}
          <div
            className="mobile-scroll-x"
            style={{
              gap: "6px",
              backgroundColor: "var(--color-bg)",
              padding: "5px",
              borderRadius: "var(--radius-full)",
              marginTop: "20px",
              border: "1px solid var(--color-border-light)",
            }}
          >
            {[
              { id: "all", label: "All Members" },
              { id: "faculty", label: "Faculty Advisors" },
              { id: "executive", label: "Executive Committee" },
              { id: "core", label: "Core Committee" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                style={{
                  padding: "7px 18px",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.825rem",
                  fontWeight: activeTab === tab.id ? 700 : 600,
                  backgroundColor: activeTab === tab.id ? "var(--color-primary)" : "transparent",
                  color: activeTab === tab.id ? "#FFFFFF" : "var(--color-text-body)",
                  transition: "all 0.15s ease",
                  flexShrink: 0,
                  whiteSpace: "nowrap",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 1. Faculty Advisors Section */}
        {(activeTab === "all" || activeTab === "faculty") && (
          <div style={{ marginBottom: "50px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "24px" }}>
              <span style={{ fontSize: "0.8125rem", fontWeight: 700, textTransform: "uppercase", color: "var(--color-primary)", letterSpacing: "0.08em" }}>
                Faculty Advisors
              </span>
              <div style={{ flexGrow: 1, height: "1px", backgroundColor: "var(--color-border-light)" }} />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 340px))",
                gap: "24px",
                justifyContent: "center",
              }}
            >
              {ISC_DATA.team.facultyAdvisors.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        )}

        {/* 2. Executive Committee Section */}
        {(activeTab === "all" || activeTab === "executive") && (
          <div style={{ marginBottom: "50px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "24px" }}>
              <span style={{ fontSize: "0.8125rem", fontWeight: 700, textTransform: "uppercase", color: "var(--color-primary)", letterSpacing: "0.08em" }}>
                Executive Committee
              </span>
              <div style={{ flexGrow: 1, height: "1px", backgroundColor: "var(--color-border-light)" }} />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
                gap: "20px",
              }}
            >
              {ISC_DATA.team.executiveCommittee.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        )}

        {/* 3. Core Committee Section */}
        {(activeTab === "all" || activeTab === "core") && (
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "24px" }}>
              <span style={{ fontSize: "0.8125rem", fontWeight: 700, textTransform: "uppercase", color: "var(--color-primary)", letterSpacing: "0.08em" }}>
                Core Committee
              </span>
              <div style={{ flexGrow: 1, height: "1px", backgroundColor: "var(--color-border-light)" }} />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
                gap: "20px",
              }}
            >
              {ISC_DATA.team.coreCommittee.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
