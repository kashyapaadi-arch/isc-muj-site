"use client";
import React, { useState } from "react";
import Image from "next/image";

interface ImageWithFallbackProps {
  src?: string;
  alt: string;
  initials?: string;
  type?: "avatar" | "event" | "banner";
  className?: string;
  style?: React.CSSProperties;
  aspectRatio?: string;
}

export default function ImageWithFallback({
  src,
  alt,
  initials = "MUJ",
  type = "avatar",
  className = "",
  style = {},
  aspectRatio = "1/1",
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  // If there's an image src and it hasn't errored yet, try rendering it
  if (src && !error) {
    return (
      <div
        className={`image-fallback-wrapper ${className}`}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          aspectRatio,
          overflow: "hidden",
          borderRadius: type === "avatar" ? "50%" : "8px",
          ...style,
        }}
      >
        {/* We use standard img with onError fallback for maximum reliability across local and external files */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          onError={() => setError(true)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.4s ease",
          }}
        />
      </div>
    );
  }

  // Graceful, elegant fallback UI
  if (type === "avatar") {
    return (
      <div
        className={`avatar-fallback ${className}`}
        style={{
          width: "100%",
          height: "100%",
          aspectRatio: "1/1",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #FFF3EC 0%, #F5E5D9 100%)",
          border: "2px solid #EAD8CC",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "inset 0 2px 6px rgba(200, 81, 27, 0.08)",
          position: "relative",
          userSelect: "none",
          ...style,
        }}
      >
        {/* Subtle avatar silhouette SVG background */}
        <svg
          viewBox="0 0 100 100"
          style={{
            position: "absolute",
            width: "80%",
            height: "80%",
            opacity: 0.15,
            fill: "#C8511B",
          }}
        >
          <circle cx="50" cy="38" r="22" />
          <path d="M15 88C15 68 30 58 50 58C70 58 85 68 85 88Z" />
        </svg>

        <span
          style={{
            fontFamily: "var(--font-base)",
            fontWeight: 700,
            fontSize: "1.75rem",
            color: "#C8511B",
            letterSpacing: "0.04em",
            position: "relative",
            zIndex: 1,
          }}
        >
          {initials}
        </span>
      </div>
    );
  }

  // Event Card Fallback
  return (
    <div
      className={`event-image-fallback ${className}`}
      style={{
        width: "100%",
        aspectRatio: aspectRatio || "16/10",
        background: "linear-gradient(135deg, #242B35 0%, #171A1F 100%)",
        position: "relative",
        borderRadius: "8px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "20px",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        ...style,
      }}
    >
      {/* Decorative architectural grid background */}
      <svg
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.15,
          pointerEvents: "none",
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#C8511B" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.75rem",
            fontWeight: 700,
            color: "#FFFFFF",
            backgroundColor: "rgba(200, 81, 27, 0.85)",
            padding: "4px 10px",
            borderRadius: "4px",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          Global Event
        </span>
        <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#C8511B" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            fontFamily: "var(--font-base)",
            fontSize: "1.1rem",
            color: "#FFFFFF",
            fontWeight: 600,
            lineHeight: 1.3,
            marginBottom: "4px",
          }}
        >
          {alt}
        </div>
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.75rem",
            color: "#A0AEC0",
          }}
        >
          Manipal University Jaipur • DoIC
        </div>
      </div>
    </div>
  );
}
