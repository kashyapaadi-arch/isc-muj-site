"use client";
import React from "react";
import { ISC_DATA, EventItem } from "@/data/isc-content";
import ImageWithFallback from "./ImageWithFallback";
import { ArrowUpRight, Globe, Sparkles } from "lucide-react";

interface AutoScrollCarouselProps {
  onSelectEvent?: (event: EventItem) => void;
}

export default function AutoScrollCarousel({ onSelectEvent }: AutoScrollCarouselProps) {
  const partners = [
    {
      id: "event-1",
      partner: "Iowa State University",
      country: "United States",
      flag: "🇺🇸",
      tag: "STEM & Engineering Exchange",
      image: "/images/events/iowa-state-delegation.jpg",
      highlight: "Dual Degrees & Research",
    },
    {
      id: "event-2",
      partner: "Campus France",
      country: "France",
      flag: "🇫🇷",
      tag: "Charpak & Franco-Indian Synergies",
      image: "/images/events/campus-france-team.jpg",
      highlight: "Master's Pathways",
    },
    {
      id: "event-3",
      partner: "University of Melbourne",
      country: "Australia",
      flag: "🇦🇺",
      tag: "Global Articulation Roundtable",
      image: "/images/events/melbourne-delegation.jpg",
      highlight: "Destination MUJ",
    },
    {
      id: "event-4",
      partner: "University of Galway",
      country: "Ireland",
      flag: "🇮🇪",
      tag: "Bilateral Academic MOU",
      image: "/images/events/galway-mou.jpg",
      highlight: "Biotech & Medicine",
    },
    {
      id: "event-5",
      partner: "Auckland University of Technology",
      country: "New Zealand",
      flag: "🇳🇿",
      tag: "Signed Partnership Agreement",
      image: "/images/events/aut-mou.jpg",
      highlight: "Design & Computing",
    },
    {
      id: "event-6",
      partner: "DAAD Germany",
      country: "Germany",
      flag: "🇩🇪",
      tag: "German Academic Exchange Service",
      image: "/images/events/daad-germany.jpg",
      highlight: "Scholarships & Research",
    },
  ];

  // Duplicate for seamless infinite marquee loop
  const duplicatedPartners = [...partners, ...partners];

  const handleCardClick = (id: string) => {
    const found = ISC_DATA.events.find((e) => e.id === id);
    if (found && onSelectEvent) {
      onSelectEvent(found);
    }
  };

  return (
    <div style={{ padding: "40px 0 20px 0", overflow: "hidden", position: "relative" }}>
      <div className="container" style={{ marginBottom: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "var(--color-primary)",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.8125rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--color-primary)",
              }}
            >
              Active Global Delegations & Partnerships
            </span>
          </div>

          <span style={{ fontSize: "0.78125rem", color: "var(--color-text-muted)", fontWeight: 500 }}>
            Hover to pause • Click to view brief
          </span>
        </div>
      </div>

      {/* Infinite Auto-Scrolling Track */}
      <div className="marquee-container" style={{ padding: "10px 0" }}>
        <div className="marquee-track">
          {duplicatedPartners.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              onClick={() => handleCardClick(item.id)}
              style={{
                width: "320px",
                flexShrink: 0,
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                border: "1px solid var(--color-border-light)",
                boxShadow: "var(--shadow-xs)",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = "var(--color-primary)";
                e.currentTarget.style.boxShadow = "var(--shadow-card-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--color-border-light)";
                e.currentTarget.style.boxShadow = "var(--shadow-xs)";
              }}
            >
              <div style={{ position: "relative", width: "100%", height: "160px" }}>
                <ImageWithFallback
                  src={item.image}
                  alt={item.partner}
                  type="event"
                  aspectRatio="16/10"
                />

                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    zIndex: 2,
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(4px)",
                    borderRadius: "var(--radius-full)",
                    padding: "3px 10px",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "var(--color-text-heading)",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                  }}
                >
                  <span>{item.flag}</span>
                  <span>{item.country}</span>
                </div>

                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    zIndex: 2,
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-primary)",
                  }}
                >
                  <ArrowUpRight size={14} />
                </div>
              </div>

              <div style={{ padding: "16px", display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "space-between" }}>
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: "var(--color-primary)",
                      letterSpacing: "0.05em",
                      display: "block",
                      marginBottom: "4px",
                    }}
                  >
                    {item.highlight}
                  </span>

                  <h4
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--color-text-heading)",
                      lineHeight: 1.3,
                      marginBottom: "6px",
                    }}
                  >
                    {item.partner}
                  </h4>

                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.8rem",
                      color: "var(--color-text-muted)",
                      margin: 0,
                      lineHeight: 1.45,
                    }}
                  >
                    {item.tag}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: "12px",
                    paddingTop: "10px",
                    borderTop: "1px solid var(--color-border-light)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--color-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span>International Milestone</span>
                  <span>Brief &rsaquo;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
