"use client";
import React from "react";
import Link from "next/link";
import { ISC_DATA } from "@/data/isc-content";
import { MapPin, Phone, Mail, ArrowUpRight, ShieldCheck, Heart } from "lucide-react";
import { LinkedInBadge } from "./IscBadges";

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        backgroundColor: "var(--color-bg-subtle)",
        color: "var(--color-text-body)",
        paddingTop: "64px",
        paddingBottom: "36px",
        borderTop: "1px solid var(--color-border)",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Main Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "36px",
            marginBottom: "48px",
          }}
        >
          {/* Column 1: Brand & Affiliation */}
          <div style={{ maxWidth: "340px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "8px",
                  overflow: "hidden",
                  backgroundColor: "#000000",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/isc-cell.jpg"
                  alt="ISC Logo"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.98rem", color: "var(--color-text-heading)" }}>
                  International Student Cell
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--color-primary)", fontWeight: 600 }}>
                  DoIC • Manipal University Jaipur
                </div>
              </div>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", lineHeight: 1.65, marginBottom: "16px" }}>
              Facilitating bilateral student exchanges, international research internships, and institutional global
              partnerships under the Directorate of International Collaborations.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <LinkedInBadge size={44} href="https://www.linkedin.com/company/international-student-cell-doic-muj/" />
              <span style={{ fontSize: "0.78125rem", color: "var(--color-text-muted)" }}>
                Follow our official LinkedIn page for exchange calls
              </span>
            </div>
          </div>

          {/* Column 2: Programs */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                fontWeight: 700,
                color: "var(--color-text-heading)",
                marginBottom: "16px",
                letterSpacing: "0.02em",
                textTransform: "uppercase",
              }}
            >
              Exchange Programs
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "Bilateral Semester Exchange", href: "#objectives" },
                { label: "Global Research Internships", href: "#objectives" },
                { label: "Explore India Immersion Program", href: "#about" },
                { label: "Summer & Winter Academies", href: "#about" },
                { label: "School Connect Abroad", href: "#objectives" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--color-text-body)",
                      textDecoration: "none",
                      transition: "color 0.15s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-body)")}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                fontWeight: 700,
                color: "var(--color-text-heading)",
                marginBottom: "16px",
                letterSpacing: "0.02em",
                textTransform: "uppercase",
              }}
            >
              Cell Directory
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "Cell Mission & Vision", href: "#overview" },
                { label: "Key Objectives", href: "#objectives" },
                { label: "Delegations & Milestones", href: "#events" },
                { label: "Faculty Advisors", href: "#team" },
                { label: "Executive Committee", href: "#team" },
                { label: "Main University Portal (MUJ)", href: "https://jaipur.manipal.edu", external: true },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--color-text-body)",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      transition: "color 0.15s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-body)")}
                  >
                    <span>{item.label}</span>
                    {item.external && <ArrowUpRight size={13} />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Office Location & Contact */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                fontWeight: 700,
                color: "var(--color-text-heading)",
                marginBottom: "16px",
                letterSpacing: "0.02em",
                textTransform: "uppercase",
              }}
            >
              DoIC Office
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.85rem", color: "var(--color-text-body)" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <MapPin size={17} style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: "2px" }} />
                <span>
                  Directorate of International Collaborations,
                  <br />
                  Manipal University Jaipur, Dehmi Kalan,
                  <br />
                  Jaipur-Ajmer Expressway, Rajasthan 303007
                </span>
              </div>

              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <Phone size={16} style={{ color: "var(--color-primary)", flexShrink: 0 }} />
                <a
                  href={`tel:${ISC_DATA.university.contactPhone}`}
                  style={{ color: "var(--color-text-body)", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-body)")}
                >
                  {ISC_DATA.university.contactPhone}
                </a>
              </div>

              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <Mail size={16} style={{ color: "var(--color-primary)", flexShrink: 0 }} />
                <a
                  href={`mailto:${ISC_DATA.university.contactEmail}`}
                  style={{ color: "var(--color-text-body)", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-body)")}
                >
                  {ISC_DATA.university.contactEmail}
                </a>
              </div>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 12px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "var(--radius-full)",
                  border: "1px solid var(--color-border)",
                  fontSize: "0.75rem",
                  color: "var(--color-text-heading)",
                  width: "fit-content",
                  marginTop: "6px",
                }}
              >
                <ShieldCheck size={14} style={{ color: "#22C55E" }} />
                NAAC A+ Accredited Institution
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid var(--color-border)",
            paddingTop: "24px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "14px",
            fontSize: "0.8125rem",
            color: "var(--color-text-muted)",
          }}
        >
          <div>
            &copy; 2026 International Student Cell, Directorate of International Collaborations (DoIC), Manipal University Jaipur.
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            <a href="#" style={{ color: "var(--color-text-muted)" }}>Privacy Policy</a>
            <a href="#" style={{ color: "var(--color-text-muted)" }}>Exchange Code of Conduct</a>
            <a href="https://jaipur.manipal.edu" target="_blank" rel="noreferrer" style={{ color: "var(--color-primary)" }}>
              MUJ Main Portal &rsaquo;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
