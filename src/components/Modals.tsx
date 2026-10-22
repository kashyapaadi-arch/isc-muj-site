"use client";
import React, { useState } from "react";
import { X, CheckCircle, Search, CreditCard, ExternalLink, ShieldCheck, ArrowRight } from "lucide-react";
import { ISC_DATA } from "@/data/isc-content";

// 1. Enquire Now / Apply Modal
export function EnquireModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    interest: "Semester Exchange Program",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1100,
        backgroundColor: "rgba(18, 22, 28, 0.75)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "16px",
          maxWidth: "560px",
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          padding: "36px 32px",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.3)",
          position: "relative",
          border: "1px solid #EAE2D8",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close form"
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            color: "#6B7280",
          }}
        >
          <X size={22} />
        </button>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "30px 10px" }}>
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                backgroundColor: "#DCFCE7",
                color: "#16A34A",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <CheckCircle size={32} />
            </div>
            <h3
              style={{
                fontFamily: "var(--font-base)",
                fontSize: "1.75rem",
                color: "#16191D",
                marginBottom: "10px",
              }}
            >
              Application Submitted
            </h3>
            <p style={{ color: "#525D6B", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "24px" }}>
              Thank you, <strong>{formData.name || "Student"}</strong>. Your international program inquiry has been
              received by the Directorate of International Collaborations (DoIC). A student advisor will reach out to{" "}
              {formData.email || "you"} shortly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="btn-primary"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="section-kicker">Directorate of International Collaborations</div>
            <h3
              style={{
                fontFamily: "var(--font-base)",
                fontSize: "1.75rem",
                color: "#16191D",
                marginBottom: "8px",
              }}
            >
              International Inquiry & Admissions
            </h3>
            <p style={{ color: "#525D6B", fontSize: "0.875rem", marginBottom: "24px" }}>
              Interested in studying abroad, semester exchanges, research internships, or global partner initiatives?
              Leave your details below.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 700, marginBottom: "6px" }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "11px 14px",
                    borderRadius: "6px",
                    border: "1px solid #D5DBE1",
                    fontSize: "0.9375rem",
                  }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 700, marginBottom: "6px" }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="student@university.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "11px 14px",
                      borderRadius: "6px",
                      border: "1px solid #D5DBE1",
                      fontSize: "0.9375rem",
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 700, marginBottom: "6px" }}>
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 / +1 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "11px 14px",
                      borderRadius: "6px",
                      border: "1px solid #D5DBE1",
                      fontSize: "0.9375rem",
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 700, marginBottom: "6px" }}>
                    Nationality / Country
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. India, USA, France..."
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "11px 14px",
                      borderRadius: "6px",
                      border: "1px solid #D5DBE1",
                      fontSize: "0.9375rem",
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 700, marginBottom: "6px" }}>
                    Program of Interest
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "11px 14px",
                      borderRadius: "6px",
                      border: "1px solid #D5DBE1",
                      fontSize: "0.9375rem",
                      backgroundColor: "#FFFFFF",
                    }}
                  >
                    <option>Semester Exchange Program</option>
                    <option>Global Summer / Winter School</option>
                    <option>Collaborative Research Internship</option>
                    <option>Explore India Cultural Program</option>
                    <option>Full Degree Program Admissions</option>
                    <option>Institutional Partnership / MOU</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 700, marginBottom: "6px" }}>
                  Your Message or Academic Goals
                </label>
                <textarea
                  rows={3}
                  placeholder="Share any specific questions or partner universities you are interested in..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "11px 14px",
                    borderRadius: "6px",
                    border: "1px solid #D5DBE1",
                    fontSize: "0.9375rem",
                    resize: "vertical",
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: "100%", marginTop: "8px", padding: "13px" }}
              >
                Submit Application / Inquiry
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

// 2. Pay Fee Online Modal
export function PayFeeModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1100,
        backgroundColor: "rgba(18, 22, 28, 0.75)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "16px",
          maxWidth: "520px",
          width: "100%",
          padding: "36px 32px",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.3)",
          position: "relative",
          border: "1px solid #EAE2D8",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close dialog"
          style={{ position: "absolute", top: "20px", right: "20px", color: "#6B7280" }}
        >
          <X size={22} />
        </button>

        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "10px",
            backgroundColor: "#FFF3EC",
            color: "#C8511B",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "16px",
          }}
        >
          <CreditCard size={26} />
        </div>

        <h3
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.65rem",
            color: "#16191D",
            marginBottom: "8px",
          }}
        >
          Pay Fee Online
        </h3>
        <p style={{ color: "#525D6B", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "20px" }}>
          Official payment channel for International Exchange fees, application processing, tuition deposit, and
          summer school registrations at Manipal University Jaipur.
        </p>

        <div
          style={{
            backgroundColor: "#FAF7F4",
            padding: "16px",
            borderRadius: "8px",
            border: "1px solid #EAE2D8",
            marginBottom: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            fontSize: "0.875rem",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "#6E7A89" }}>Beneficiary:</span>
            <strong style={{ color: "#16191D" }}>Manipal University Jaipur</strong>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "#6E7A89" }}>Security:</span>
            <span style={{ color: "#16A34A", display: "inline-flex", alignItems: "center", gap: "4px" }}>
              <ShieldCheck size={16} /> 256-bit Encrypted
            </span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "#6E7A89" }}>Supported:</span>
            <span style={{ color: "#16191D" }}>International Cards / Swift Wire / Net Banking</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <a
            href="https://jaipur.manipal.edu"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{ width: "100%", justifyContent: "center" }}
          >
            Proceed to MUJ Payment Gateway <ExternalLink size={16} />
          </a>
          <button onClick={onClose} className="btn-secondary" style={{ width: "100%", justifyContent: "center" }}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

// 3. Search Modal
export function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  const results = query.trim()
    ? [
        ...ISC_DATA.events
          .filter(
            (e) =>
              e.title.toLowerCase().includes(query.toLowerCase()) ||
              e.description.toLowerCase().includes(query.toLowerCase())
          )
          .map((e) => ({ type: "Event", title: e.title, desc: e.partner, href: "#events" })),
        ...ISC_DATA.team.facultyAdvisors
          .concat(ISC_DATA.team.executiveCommittee)
          .concat(ISC_DATA.team.coreCommittee)
          .filter(
            (m) =>
              m.name.toLowerCase().includes(query.toLowerCase()) ||
              m.role.toLowerCase().includes(query.toLowerCase())
          )
          .map((m) => ({ type: "Leadership", title: m.name, desc: m.role, href: "#leadership" })),
        ...ISC_DATA.objectives.pillars
          .filter(
            (p) =>
              p.title.toLowerCase().includes(query.toLowerCase()) ||
              p.description.toLowerCase().includes(query.toLowerCase())
          )
          .map((p) => ({ type: "Objective", title: p.title, desc: p.description, href: "#objectives" })),
      ]
    : [];

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1100,
        backgroundColor: "rgba(18, 22, 28, 0.75)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "80px 20px 20px 20px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "14px",
          maxWidth: "600px",
          width: "100%",
          padding: "24px",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.3)",
          position: "relative",
          border: "1px solid #EAE2D8",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
          <Search size={22} style={{ color: "#C8511B" }} />
          <input
            type="text"
            autoFocus
            placeholder="Search events, delegations, team members, programs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flexGrow: 1,
              border: "none",
              outline: "none",
              fontSize: "1.1rem",
              fontFamily: "var(--font-sans)",
            }}
          />
          <button onClick={onClose} aria-label="Close search" style={{ color: "#9CA3AF" }}>
            <X size={20} />
          </button>
        </div>

        <div style={{ borderTop: "1px solid #F0EAE4", paddingTop: "14px", maxHeight: "360px", overflowY: "auto" }}>
          {query.trim() === "" ? (
            <div style={{ fontSize: "0.875rem", color: "#6E7A89", padding: "12px 0" }}>
              Suggested searches: <em>Iowa State</em>, <em>DAAD Germany</em>, <em>Ravi Kumar Sharma</em>,{" "}
              <em>Semester Exchange</em>, <em>President</em>
            </div>
          ) : results.length === 0 ? (
            <div style={{ fontSize: "0.875rem", color: "#6E7A89", padding: "12px 0" }}>
              No matches found for &ldquo;{query}&rdquo;.
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {results.map((r, i) => (
                <a
                  key={i}
                  href={r.href}
                  onClick={onClose}
                  style={{
                    padding: "10px 14px",
                    borderRadius: "8px",
                    backgroundColor: "#FAF7F4",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textDecoration: "none",
                    border: "1px solid #EAE2D8",
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        color: "#C8511B",
                        textTransform: "uppercase",
                        display: "block",
                        marginBottom: "2px",
                      }}
                    >
                      {r.type}
                    </span>
                    <strong style={{ color: "#16191D", fontSize: "0.9375rem" }}>{r.title}</strong>
                    <span style={{ color: "#6E7A89", fontSize: "0.8125rem", display: "block" }}>{r.desc}</span>
                  </div>
                  <ArrowRight size={16} style={{ color: "#C8511B" }} />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
