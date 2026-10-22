"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X, ArrowRight, ExternalLink } from "lucide-react";
import { MujLogo, LinkedInIcon } from "./IscBadges";

interface NavbarProps {
  onOpenEnquire?: () => void;
  onOpenSearch?: () => void;
}

export default function Navbar({ onOpenEnquire, onOpenSearch }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "About", href: "#about" },
    { label: "Objectives", href: "#objectives" },
    { label: "Delegations", href: "#events" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 900,
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.96)" : "rgba(250, 247, 242, 0.92)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--color-border)",
        transition: "all 0.2s ease",
      }}
    >
      <div className="container" style={{ padding: "0 16px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px",
            gap: "16px",
          }}
        >
          {/* Brand Identity: Official MUJ Logo + ISC Badge */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            {/* Official MUJ Vector SVG Logo */}
            <div className="nav-muj-logo">
              <MujLogo height={28} />
            </div>

            <div
              style={{
                width: "1px",
                height: "22px",
                backgroundColor: "var(--color-border)",
              }}
            />

            {/* ISC Identity Tag */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "6px",
                  overflow: "hidden",
                  backgroundColor: "#000000",
                  flexShrink: 0,
                  boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/isc-cell.jpg"
                  alt="ISC"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontFamily: "var(--font-base)",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    letterSpacing: "0.01em",
                    color: "var(--color-text-heading)",
                    lineHeight: 1.15,
                    whiteSpace: "nowrap",
                  }}
                  className="nav-isc-title"
                >
                  International Student Cell
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-base)",
                    fontWeight: 600,
                    fontSize: "0.65rem",
                    color: "var(--color-primary)",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    lineHeight: 1.1,
                    marginTop: "1px",
                  }}
                >
                  DoIC • MUJ
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Center Navigation Links */}
          <div
            className="nav-desktop-links"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: "var(--font-base)",
                  fontSize: "0.84rem",
                  fontWeight: 600,
                  letterSpacing: "0.01em",
                  color: "var(--color-text-body)",
                  textDecoration: "none",
                  padding: "6px 12px",
                  borderRadius: "8px",
                  whiteSpace: "nowrap",
                  transition: "all 0.15s ease",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--color-primary)";
                  e.currentTarget.style.backgroundColor = "rgba(200, 81, 27, 0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--color-text-body)";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action Elements */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              aria-label="Search"
              style={{
                width: 34,
                height: 34,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFFFFF",
                border: "1px solid var(--color-border)",
                color: "var(--color-text-body)",
                cursor: "pointer",
              }}
            >
              <Search size={14} />
            </button>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/company/international-student-cell-doic-muj/"
              target="_blank"
              rel="noreferrer"
              aria-label="ISC LinkedIn"
              style={{
                width: 34,
                height: 34,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFFFFF",
                border: "1px solid var(--color-border)",
                color: "#0A66C2",
              }}
            >
              <LinkedInIcon size={14} color="#0A66C2" />
            </a>

            {/* Desktop Apply / Inquire CTA Button */}
            <button
              onClick={onOpenEnquire}
              className="btn-primary nav-desktop-apply"
              style={{
                padding: "8px 16px",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.02em",
                whiteSpace: "nowrap",
              }}
            >
              <span>Apply / Inquire</span>
              <ArrowRight size={13} />
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="nav-mobile-toggle"
              aria-label="Toggle Navigation"
              style={{
                width: 36,
                height: 36,
                borderRadius: "8px",
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFFFFF",
                border: "1px solid var(--color-border)",
                color: "var(--color-text-heading)",
                cursor: "pointer",
              }}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "64px",
            left: 0,
            right: 0,
            backgroundColor: "#FFFFFF",
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
            borderBottom: "2px solid var(--color-primary)",
            padding: "20px 24px",
            zIndex: 999,
            maxHeight: "calc(100vh - 64px)",
            overflowY: "auto",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-base)",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "var(--color-text-heading)",
                  textDecoration: "none",
                  padding: "10px 0",
                  borderBottom: "1px solid var(--color-border-light)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>{link.label}</span>
                <span style={{ color: "var(--color-primary)", fontSize: "1.1rem" }}>&rsaquo;</span>
              </a>
            ))}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenEnquire?.();
            }}
            className="btn-primary"
            style={{ width: "100%", padding: "13px", justifyContent: "center", fontSize: "0.95rem" }}
          >
            Apply for Exchange / Inquire
          </button>

          <div style={{ marginTop: "16px", textAlign: "center", fontSize: "0.78rem", color: "var(--color-text-muted)" }}>
            DoIC • Manipal University Jaipur
          </div>
        </div>
      )}

      <style jsx global>{`
        @media (max-width: 900px) {
          .nav-desktop-links,
          .nav-desktop-apply {
            display: none !important;
          }
          .nav-mobile-toggle {
            display: flex !important;
          }
        }
        @media (max-width: 540px) {
          .nav-isc-title {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}
