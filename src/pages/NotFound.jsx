"use client"

import { useNavigate } from "react-router-dom"

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-lg text-muted-foreground mb-8">Page not found</p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
      >
        Go Home
      </button>
    </div>
  )
}

export default NotFound
