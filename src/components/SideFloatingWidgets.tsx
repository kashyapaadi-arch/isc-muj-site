"use client";
import React, { useState, useEffect } from "react";
import { ArrowUp, MessageSquare, Sparkles } from "lucide-react";

interface SideFloatingWidgetsProps {
  onOpenEnquire: () => void;
  onOpenPayFee?: () => void;
}

export default function SideFloatingWidgets({
  onOpenEnquire,
}: SideFloatingWidgetsProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Modern Floating Action Cluster (Bottom-Right) */}
      <div
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 850,
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {/* Modern Inquire / Chat Pill */}
        <button
          onClick={onOpenEnquire}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 18px",
            backgroundColor: "#FFFFFF",
            color: "var(--color-primary)",
            borderRadius: "var(--radius-full)",
            border: "1px solid var(--color-border)",
            boxShadow: "var(--shadow-md)",
            fontWeight: 700,
            fontSize: "0.84rem",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--color-primary-soft)";
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "var(--shadow-lg)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#FFFFFF";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "var(--shadow-md)";
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#22C55E",
            }}
          />
          <MessageSquare size={15} />
          <span>Ask ISC Advisor</span>
        </button>

        {/* Smooth Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              backgroundColor: "#FFFFFF",
              color: "var(--color-text-heading)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "var(--shadow-md)",
              border: "1px solid var(--color-border)",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--color-primary)";
              e.currentTarget.style.borderColor = "var(--color-primary)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--color-text-heading)";
              e.currentTarget.style.borderColor = "var(--color-border)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <ArrowUp size={18} />
          </button>
        )}
      </div>
    </>
  );
}
