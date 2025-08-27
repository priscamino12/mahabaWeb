"use client";
import React, { useState } from "react";
import AccueilP from "./pages/AccueilP";
import ConnexionP from "./pages/connexionP";

export default function Home() {
  const [page, setPage] = useState<"accueil" | "connexion">("accueil");

  return (
    <>
      {page === "accueil" && <AccueilP />}
      {page === "connexion" && <ConnexionP />}
      
      <div className="fixed bottom-4 left-4 space-x-2">
        <button
          onClick={() => setPage("accueil")}
          className="bg-pink-500 text-white px-4 py-2 rounded"
        >
          Accueil
        </button>
        <button
          onClick={() => setPage("connexion")}
          className="bg-pink-500 text-white px-4 py-2 rounded"
        >
          Connexion
        </button>
      </div>
    </>
  );
}
