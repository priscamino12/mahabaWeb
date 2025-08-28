"use client";
import React from "react";
import Navbar from "./Navbar";

const Accueil = () => {
  return (
    <div className="min-h-screen bg-pink-100 pt-16">
      {/* Navbar fixe */}
      <Navbar />

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-4xl font-bold text-pink-600 mb-6">Bienvenue sur Mahaba</h1>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Accueil</h2>
            <p>Voici la page principale où vous pouvez voir vos contenus.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Favoris</h2>
            <p>Vos contenus favoris apparaîtront ici.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Notifications</h2>
            <p>Toutes vos notifications récentes seront listées ici.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
