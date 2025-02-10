import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'
import './App.css'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  const handleHire = (person) => {
    const isEditing = hiredPeople.some(p => p.login.uuid === person.login.uuid)
    if (isEditing) {
      setHiredPeople(hiredPeople.map(p => 
        p.login.uuid === person.login.uuid ? person : p
      ))
    } else {
      setHiredPeople([...hiredPeople, person])
    }
  }

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <Link to="/">Dashboard</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard hiredPeople={hiredPeople} />} />
        <Route path="/view/:id" element={<PersonProfile onHire={handleHire} />} />
      </Routes>
    </>
  )
}
