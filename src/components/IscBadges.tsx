"use client";
import React from "react";

// Official Manipal University Jaipur Logo Component using manipal-university-jaipur-logo-01.svg
export function MujLogo({ className = "", height = 36 }: { className?: string; height?: number }) {
  return (
    <div className={`muj-logo-container ${className}`} style={{ display: "inline-flex", alignItems: "center" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/manipal-university-jaipur-logo.svg"
        alt="Manipal University Jaipur"
        style={{
          height: `${height}px`,
          width: "auto",
          maxWidth: "100%",
          objectFit: "contain",
          display: "block",
        }}
      />
    </div>
  );
}

// ISC DoIC Official Architectural Seal Badge
// Precision SVG reproduction matching isc-cell.jpg perfectly with fallback to raster file
export function IscSealBadge({ size = 80 }: { size?: number }) {
  const [useRaster, setUseRaster] = React.useState(false);

  if (useRaster) {
    return (
      <div
        style={{
          width: size,
          height: size,
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 6px 18px rgba(0, 0, 0, 0.2)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          flexShrink: 0,
        }}
        title="International Student Cell - DoIC MUJ"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/isc-cell.jpg"
          alt="International Student Cell - DoIC MUJ"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: "#000000",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "6px",
        boxShadow: "0 6px 18px rgba(0, 0, 0, 0.25)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        color: "#FFFFFF",
        textAlign: "center",
        userSelect: "none",
        flexShrink: 0,
        position: "relative",
      }}
      title="International Student Cell - DoIC MUJ"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer orbital rings with dashed strokes and planetary nodes */}
        {/* Orbit 1: Wide Outer Ring */}
        <path
          d="M32 120 C 32 45, 208 45, 208 120"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          strokeDasharray="4 4"
        />
        {/* Orbit 2: Middle Ring */}
        <path
          d="M48 126 C 48 58, 192 58, 192 126"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          strokeDasharray="4 4"
        />
        {/* Orbit 3: Inner Ring */}
        <path
          d="M62 130 C 62 76, 178 76, 178 130"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          strokeDasharray="4 4"
        />

        {/* Orbit Nodes / Dots matching isc-cell.jpg */}
        <circle cx="82" cy="30" r="4.5" fill="#FFFFFF" />
        <circle cx="152" cy="28" r="5.5" stroke="#FFFFFF" strokeWidth="2" fill="none" />
        <circle cx="166" cy="56" r="4.5" fill="#FFFFFF" />
        <circle cx="196" cy="98" r="4" fill="#FFFFFF" />
        <circle cx="195" cy="97" r="2.5" fill="#FFFFFF" />
        <circle cx="56" cy="92" r="5" stroke="#FFFFFF" strokeWidth="1.8" fill="none" />
        <circle cx="75" cy="69" r="5" stroke="#FFFFFF" strokeWidth="1.8" fill="none" />
        <circle cx="55" cy="95" r="4" fill="#FFFFFF" />
        <circle cx="46" cy="93" r="3" fill="#FFFFFF" />

        {/* Central Dome Spire */}
        <path d="M120 44 L120 54" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
        <path d="M117 54 L123 54" stroke="#FFFFFF" strokeWidth="3" />

        {/* Main Dome Cap */}
        <path
          d="M86 86 C 86 64, 154 64, 154 86 Z"
          stroke="#FFFFFF"
          strokeWidth="5"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Vertical Dome Ribs (Arches) */}
        <path d="M100 86 C 100 70, 107 64, 120 64" stroke="#FFFFFF" strokeWidth="3.5" fill="none" />
        <path d="M140 86 C 140 70, 133 64, 120 64" stroke="#FFFFFF" strokeWidth="3.5" fill="none" />
        <path d="M120 64 L120 86" stroke="#FFFFFF" strokeWidth="3.5" />

        {/* Horizontal Dome Architrave Band */}
        <rect x="80" y="86" width="80" height="7" rx="3.5" fill="#FFFFFF" />

        {/* Drum Arched Windows / Columns (6 bays) */}
        <path d="M86 93 L86 126" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
        <path d="M99 93 L99 126" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
        <path d="M113 93 L113 126" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
        <path d="M127 93 L127 126" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
        <path d="M141 93 L141 126" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
        <path d="M154 93 L154 126" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />

        {/* Main Middle Entablature Cornice */}
        <rect x="42" y="132" width="156" height="8" rx="2" fill="#FFFFFF" />

        {/* Classical Columns Below Drum */}
        {/* Center Building Columns (6 columns) */}
        <line x1="86" y1="140" x2="86" y2="174" stroke="#FFFFFF" strokeWidth="6.5" strokeLinecap="square" />
        <line x1="102" y1="140" x2="102" y2="174" stroke="#FFFFFF" strokeWidth="6.5" strokeLinecap="square" />
        <line x1="118" y1="140" x2="118" y2="174" stroke="#FFFFFF" strokeWidth="6.5" strokeLinecap="square" />
        <line x1="134" y1="140" x2="134" y2="174" stroke="#FFFFFF" strokeWidth="6.5" strokeLinecap="square" />
        <line x1="150" y1="140" x2="150" y2="174" stroke="#FFFFFF" strokeWidth="6.5" strokeLinecap="square" />

        {/* Left Portico Pavilion (3 columns) */}
        <rect x="48" y="138" width="30" height="4" fill="#FFFFFF" />
        <line x1="55" y1="142" x2="55" y2="174" stroke="#FFFFFF" strokeWidth="5.5" strokeLinecap="square" />
        <line x1="68" y1="142" x2="68" y2="174" stroke="#FFFFFF" strokeWidth="5.5" strokeLinecap="square" />

        {/* Right Portico Pavilion (3 columns) */}
        <rect x="162" y="138" width="30" height="4" fill="#FFFFFF" />
        <line x1="172" y1="142" x2="172" y2="174" stroke="#FFFFFF" strokeWidth="5.5" strokeLinecap="square" />
        <line x1="185" y1="142" x2="185" y2="174" stroke="#FFFFFF" strokeWidth="5.5" strokeLinecap="square" />

        {/* Base Steps Foundation */}
        <rect x="42" y="174" width="156" height="5" rx="1" fill="#FFFFFF" />
        <rect x="36" y="179" width="168" height="3" rx="1" fill="#FFFFFF" />

        {/* Typography from isc-cell.jpg */}
        <text
          x="120"
          y="198"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="15"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.22em"
        >
          INTERNATIONAL
        </text>

        {/* Underline bar with STUDENT CELL in the middle */}
        <line x1="42" y1="207" x2="72" y2="207" stroke="#FFFFFF" strokeWidth="1.5" />
        <text
          x="120"
          y="211"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="10"
          fontWeight="700"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.14em"
        >
          STUDENT CELL
        </text>
        <line x1="168" y1="207" x2="198" y2="207" stroke="#FFFFFF" strokeWidth="1.5" />

        {/* DOIC MUJ */}
        <text
          x="120"
          y="225"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="9.5"
          fontWeight="700"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.16em"
        >
          -DOIC MUJ-
        </text>
      </svg>
    </div>
  );
}

// Official LinkedIn Icon Badge (embedding https://jaipur.manipal.edu/img/linkedin-cell.png as requested)
export function LinkedInBadge({
  size = 80,
  href = "https://www.linkedin.com/company/international-student-cell-doic-muj/",
}: {
  size?: number;
  href?: string;
}) {
  const content = (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 6px 18px rgba(10, 102, 194, 0.28)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        cursor: "pointer",
        transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease",
        flexShrink: 0,
        backgroundColor: "#0A66C2",
      }}
      className="linkedin-badge-box"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 10px 24px rgba(10, 102, 194, 0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 6px 18px rgba(10, 102, 194, 0.28)";
      }}
      title="Connect with International Student Cell on LinkedIn"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/linkedin-cell.png"
        alt="International Student Cell LinkedIn"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
        onError={(e) => {
          // Fallback to direct URL if needed
          (e.currentTarget as HTMLImageElement).src =
            "https://jaipur.manipal.edu/img/linkedin-cell.png";
        }}
      />
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit International Student Cell on LinkedIn"
        style={{ textDecoration: "none", display: "inline-block" }}
      >
        {content}
      </a>
    );
  }
  return content;
}

// Inline LinkedIn Icon
export function LinkedInIcon({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 0-2.9 1.45 1.45 0 0 0 0 2.9m1.4 9.74v-8.37H5.06v8.37h2.8z" />
    </svg>
  );
}
