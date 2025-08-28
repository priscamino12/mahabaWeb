import React from 'react'
import Navbar from '../component/Navbar'
import Accueil from '../component/Accueil'

const page = () => {
  return (
  <div className="min-h-screen pt-16">
      <Navbar />

      <Accueil />
    </div>
  )
}

export default page
