"use client"; // nécessaire si tes composants utilisent useState ou hooks

import React from "react";
import Accueil from "../component/Accueil"; // adapte le chemin si nécessaire
import Navbar from "./NavbarP"

const AccueilP = () => {
  return (
    <div className="min-h-screen bg-pink-100 pt-16">
      {/* Navbar */}
      <Navbar />

      {/* Page d'accueil */}
      <Accueil />
    </div>
  );
};

export default AccueilP;
