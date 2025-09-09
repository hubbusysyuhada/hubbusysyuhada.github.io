"use client";
import AnimatedDots from "@/components/AnimatedDots";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedDots />

      <Navbar />

      <Header />

      <About />

      <Experience />

      <Skills />

      <ContactMe />

      <Footer />
    </div>
  );
}
