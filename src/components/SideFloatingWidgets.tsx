"use client";
import React, { useState, useEffect } from "react";
import { ArrowUp, MessageSquare } from "lucide-react";

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
      {/* Modern Floating Action Cluster (Bottom-Right, Responsive) */}
      <div
        style={{
          position: "fixed",
          bottom: "16px",
          right: "16px",
          zIndex: 850,
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {/* Modern Inquire / Chat Pill */}
        <button
          onClick={onOpenEnquire}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 14px",
            backgroundColor: "#FFFFFF",
            color: "var(--color-primary)",
            borderRadius: "var(--radius-full)",
            border: "1px solid var(--color-border)",
            boxShadow: "var(--shadow-md)",
            fontWeight: 700,
            fontSize: "0.8rem",
            cursor: "pointer",
            transition: "all 0.2s ease",
            backdropFilter: "blur(8px)",
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
              width: 7,
              height: 7,
              borderRadius: "50%",
              backgroundColor: "#22C55E",
            }}
          />
          <MessageSquare size={14} />
          <span>Ask ISC</span>
        </button>

        {/* Smooth Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
              width: 36,
              height: 36,
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
            <ArrowUp size={16} />
          </button>
        )}
      </div>
    </>
  );
}
