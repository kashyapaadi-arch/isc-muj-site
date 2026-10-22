"use client";
import React, { useState } from "react";
import { ISC_DATA, EventItem } from "@/data/isc-content";
import ImageWithFallback from "./ImageWithFallback";
import { ZoomIn, MapPin, Calendar, X, ArrowUpRight, Globe2 } from "lucide-react";

export default function EventsGallery() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const countryFlags: Record<string, string> = {
    "event-1": "🇺🇸 USA",
    "event-2": "🇫🇷 France",
    "event-3": "🇦🇺 Australia",
    "event-4": "🇮🇪 Ireland",
    "event-5": "🇳🇿 New Zealand",
    "event-6": "🇩🇪 Germany",
  };

  const filterTabs = [
    { key: "all", label: "All Delegations", count: 6 },
    { key: "delegation", label: "University Visits", count: 3 },
    { key: "mou", label: "Signed MOUs", count: 2 },
    { key: "team", label: "Academic Sessions", count: 1 },
  ];

  const filteredEvents = ISC_DATA.events.filter((item) => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  return (
    <section id="events" style={{ padding: "80px 0", backgroundColor: "var(--color-bg)" }}>
      <div className="container">
        {/* Header with pill tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "20px",
            marginBottom: "36px",
          }}
        >
          <div>
            <div className="pill-badge" style={{ marginBottom: "12px" }}>
              Global Footprint
            </div>
            <h2 className="section-headline">
              Delegations & <em>Milestones</em>
            </h2>
          </div>

          {/* Clean Segmented Filter Tabs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
              backgroundColor: "#FFFFFF",
              padding: "4px",
              borderRadius: "var(--radius-full)",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-xs)",
            }}
          >
            {filterTabs.map((tab) => {
              const active = filter === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key)}
                  style={{
                    padding: "7px 16px",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.8125rem",
                    fontWeight: active ? 700 : 600,
                    backgroundColor: active ? "var(--color-primary)" : "transparent",
                    color: active ? "#FFFFFF" : "var(--color-text-body)",
                    transition: "all 0.15s ease",
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Modern Editorial Card Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "24px",
          }}
        >
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bento-card"
              onClick={() => setSelectedEvent(event)}
              style={{
                padding: "0",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                backgroundColor: "#FFFFFF",
              }}
            >
              {/* Event Image Banner with country chip */}
              <div style={{ position: "relative", width: "100%", height: "220px", overflow: "hidden" }}>
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  type="event"
                  aspectRatio="16/10"
                />

                {/* Country / Category Pill Overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    zIndex: 2,
                    display: "flex",
                    gap: "6px",
                  }}
                >
                  <span
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      backdropFilter: "blur(6px)",
                      color: "var(--color-text-heading)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      padding: "4px 10px",
                      borderRadius: "var(--radius-full)",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                      border: "1px solid var(--color-border-light)",
                    }}
                  >
                    {countryFlags[event.id] || "Global"}
                  </span>
                </div>

                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    zIndex: 2,
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-primary)",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                    }}
                  >
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div style={{ padding: "22px", display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "space-between" }}>
                <div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: "var(--color-primary)",
                      letterSpacing: "0.06em",
                      marginBottom: "6px",
                    }}
                  >
                    {event.tag}
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "var(--color-text-heading)",
                      lineHeight: 1.35,
                      marginBottom: "8px",
                    }}
                  >
                    {event.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--color-text-muted)",
                      lineHeight: 1.55,
                      margin: 0,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {event.description}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: "16px",
                    paddingTop: "14px",
                    borderTop: "1px solid var(--color-border-light)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "0.78125rem",
                    color: "var(--color-text-body)",
                    fontWeight: 600,
                  }}
                >
                  <span>{event.partner}</span>
                  <span style={{ color: "var(--color-primary)" }}>View details &rsaquo;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Lightbox Preview Modal */}
      {selectedEvent && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            backgroundColor: "rgba(24, 25, 28, 0.65)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={() => setSelectedEvent(null)}
        >
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "20px",
              maxWidth: "600px",
              width: "100%",
              overflow: "hidden",
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.25)",
              border: "1px solid var(--color-border)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ position: "relative", width: "100%", height: "260px" }}>
              <ImageWithFallback
                src={selectedEvent.image}
                alt={selectedEvent.title}
                type="event"
                aspectRatio="16/9"
              />
              <button
                onClick={() => setSelectedEvent(null)}
                aria-label="Close dialog"
                style={{
                  position: "absolute",
                  top: "14px",
                  right: "14px",
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  color: "var(--color-text-heading)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                }}
              >
                <X size={18} />
              </button>
            </div>

            <div style={{ padding: "28px" }}>
              <div className="pill-badge" style={{ marginBottom: "12px" }}>
                {selectedEvent.tag}
              </div>

              <h2
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "var(--color-text-heading)",
                  lineHeight: 1.3,
                  marginBottom: "12px",
                }}
              >
                {selectedEvent.title}
              </h2>

              <p
                style={{
                  fontSize: "0.92rem",
                  color: "var(--color-text-body)",
                  lineHeight: 1.65,
                  marginBottom: "20px",
                }}
              >
                {selectedEvent.description}
              </p>

              <div
                style={{
                  padding: "14px 18px",
                  backgroundColor: "var(--color-surface-creme)",
                  borderRadius: "12px",
                  border: "1px solid var(--color-border-light)",
                  fontSize: "0.85rem",
                  color: "var(--color-text-body)",
                  marginBottom: "24px",
                }}
              >
                <strong style={{ color: "var(--color-text-heading)" }}>Partner: </strong>
                {selectedEvent.partner}
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button onClick={() => setSelectedEvent(null)} className="btn-secondary">
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
