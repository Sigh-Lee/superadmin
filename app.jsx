import React from 'react'

export default function App() {
  return (
    <div style={{ backgroundColor: '#121212', color: '#fff', fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>🚀 RMC X-PERT Super Admin</h1>
      <p>Connected to Backend: {import.meta.env.VITE_API_URL}</p>
    </div>
  )
}
