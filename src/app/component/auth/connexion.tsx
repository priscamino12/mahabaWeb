"use client"
import React, { useState } from "react"
import Image from "next/image"
import Logo from "../../asset/logo.png"
import Socialm from '../../asset/connexionimg.png'

const Connexion = () => {
  const [view, setView] = useState<"home" | "login" | "register">("home")

  return (
    <div className="min-h-screen flex flex-col justify-between bg-pink-200">
      <div className="flex flex-1 flex-col md:flex-row">
        
        {/* Section gauche avec l'image (cachée sur petit écran) */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <Image
            src={Socialm}
            alt="Social media"
            className="w-120 rounded-xl"
          />
        </div>

        {/* Section droite */}
        <div className="flex-1 flex flex-col items-center justify-center space-y-6 p-4">
          
          {/* Vue d’accueil (cœur + boutons) */}
          {view === "home" && (
            <>
             <Image
            src={Logo}
            alt="Social media"
            className="w-20 rounded-xl"
          />

              <div className="w-full max-w-xs space-y-4">
                <button 
                  onClick={() => setView("login")}
                  className="w-full bg-pink-500 text-white font-bold py-3 rounded-full shadow-md hover:bg-pink-600 transition"
                >
                  SE CONNECTER
                </button>
                <button 
                  onClick={() => setView("register")}
                  className="w-full bg-green-500 text-white font-bold py-3 rounded-full shadow-md hover:bg-green-600 transition"
                >
                  S&apos;INSCRIRE
                </button>
                <button className="w-full bg-blue-500 text-white font-bold py-3 rounded-full shadow-md hover:bg-blue-600 transition">
                  A PROPOS DU DEVELOPPEUR
                </button>
              </div>
            </>
          )}

          {/* Formulaire de connexion */}
          {view === "login" && (
            <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">Connexion</h2>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="Entrez votre email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Mot de passe</label>
                  <input 
                    type="password" 
                    placeholder="Entrez votre mot de passe"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-pink-500 text-white font-bold py-2 rounded-lg shadow-md hover:bg-pink-600 transition"
                >
                  Se connecter
                </button>
              </form>

              <div className="mt-4 text-center">
                <button 
                  onClick={() => setView("home")}
                  className="text-sm text-pink-600 hover:underline"
                >
                  ← Retour
                </button>
              </div>
            </div>
          )}

          {/* Formulaire d’inscription */}
          {view === "register" && (
            <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">Inscription</h2>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Nom complet</label>
                  <input 
                    type="text" 
                    placeholder="Entrez votre nom"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="Entrez votre email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Mot de passe</label>
                  <input 
                    type="password" 
                    placeholder="Choisissez un mot de passe"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-pink-500 text-white font-bold py-2 rounded-lg shadow-md hover:bg-green-600 transition"
                >
                  S&apos;inscrire
                </button>
              </form>

              <div className="mt-4 text-center">
                <button 
                  onClick={() => setView("home")}
                  className="text-sm text-pink-600 hover:underline"
                >
                  ← Retour
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-4 text-sm text-gray-700">
        Copyright 2025 Mahaba By Khaled
      </footer>
    </div>
  )
}

export default Connexion
