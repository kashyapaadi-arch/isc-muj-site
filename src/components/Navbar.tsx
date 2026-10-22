"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X, ArrowRight } from "lucide-react";
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
      <div className="container" style={{ padding: "0 24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "68px",
            gap: "24px",
          }}
        >
          {/* Brand Identity: Official MUJ Logo + ISC Badge */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            {/* Official MUJ Vector SVG Logo */}
            <MujLogo height={32} />

            <div
              style={{
                width: "1px",
                height: "24px",
                backgroundColor: "var(--color-border)",
              }}
            />

            {/* ISC Identity Tag */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: 30,
                  height: 30,
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
                    fontSize: "0.82rem",
                    letterSpacing: "0.02em",
                    color: "var(--color-text-heading)",
                    lineHeight: 1.15,
                    whiteSpace: "nowrap",
                  }}
                >
                  International Student Cell
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-base)",
                    fontWeight: 600,
                    fontSize: "0.68rem",
                    color: "var(--color-primary)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    lineHeight: 1.1,
                    marginTop: "2px",
                  }}
                >
                  DoIC • MUJ
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Center Navigation Links (Clean, No wrap, Balanced) */}
          <div
            className="nav-desktop-links"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
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
                  padding: "7px 14px",
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
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              aria-label="Search"
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFFFFF",
                border: "1px solid var(--color-border)",
                color: "var(--color-text-body)",
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-primary)";
                e.currentTarget.style.color = "var(--color-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.color = "var(--color-text-body)";
              }}
            >
              <Search size={15} />
            </button>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/company/international-student-cell-doic-muj/"
              target="_blank"
              rel="noreferrer"
              aria-label="ISC LinkedIn"
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFFFFF",
                border: "1px solid var(--color-border)",
                color: "#0A66C2",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#0A66C2";
                e.currentTarget.style.backgroundColor = "var(--color-secondary-soft)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.backgroundColor = "#FFFFFF";
              }}
            >
              <LinkedInIcon size={15} color="#0A66C2" />
            </a>

            {/* Apply / Inquire CTA Button */}
            <button
              onClick={onOpenEnquire}
              className="btn-primary"
              style={{
                padding: "8px 18px",
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.02em",
                whiteSpace: "nowrap",
              }}
            >
              <span>Apply / Inquire</span>
              <ArrowRight size={13} />
            </button>

            {/* Mobile Hamburger Button */}
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
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: "#FFFFFF",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
            borderBottom: "2px solid var(--color-primary)",
            padding: "20px 24px",
            zIndex: 999,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "16px" }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-base)",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "var(--color-text-heading)",
                  textDecoration: "none",
                  padding: "8px 0",
                  borderBottom: "1px solid var(--color-border-light)",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenEnquire?.();
            }}
            className="btn-primary"
            style={{ width: "100%", padding: "12px", justifyContent: "center" }}
          >
            Apply for Exchange / Inquire
          </button>
        </div>
      )}

      <style jsx global>{`
        @media (max-width: 990px) {
          .nav-desktop-links {
            display: none !important;
          }
          .nav-mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
}
