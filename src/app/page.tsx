"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AutoScrollCarousel from "@/components/AutoScrollCarousel";
import AboutSection from "@/components/AboutSection";
import ObjectivesSection from "@/components/ObjectivesSection";
import EventsGallery from "@/components/EventsGallery";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import SideFloatingWidgets from "@/components/SideFloatingWidgets";
import { EnquireModal, PayFeeModal, SearchModal } from "@/components/Modals";
import { EventItem } from "@/data/isc-content";

export default function HomePage() {
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [payFeeOpen, setPayFeeOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedEventModal, setSelectedEventModal] = useState<EventItem | null>(null);

  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      {/* Standalone Navbar */}
      <Navbar
        onOpenEnquire={() => setEnquireOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Hero Section with Terracotta-Espresso Noise Gradient */}
      <Hero onOpenEnquire={() => setEnquireOpen(true)} />

      {/* Infinite Auto-Scrolling Global Delegations & Partnerships Carousel */}
      <AutoScrollCarousel onSelectEvent={(event) => setSelectedEventModal(event)} />

      {/* De-cluttered Bento About Section */}
      <AboutSection />

      {/* Modern Key Objectives & 4-Step Student Roadmap */}
      <ObjectivesSection />

      {/* Events & Delegations Gallery with Lightbox */}
      <EventsGallery />

      {/* Governance & Team Leadership Cards */}
      <TeamSection />

      {/* Modern Light-themed Directory Footer */}
      <Footer />

      {/* Modern Floating Advisor Pill & Back-to-Top */}
      <SideFloatingWidgets onOpenEnquire={() => setEnquireOpen(true)} />

      {/* Interactive Modals */}
      <EnquireModal isOpen={enquireOpen} onClose={() => setEnquireOpen(false)} />
      <PayFeeModal isOpen={payFeeOpen} onClose={() => setPayFeeOpen(false)} />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </main>
  );
}
