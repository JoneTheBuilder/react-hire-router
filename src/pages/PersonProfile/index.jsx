import { useState, useEffect } from 'react'
import { useParams, useNavigate, useSearchParams, useLocation } from 'react-router-dom'
import HireForm from './components/HireForm'

function PersonProfile({ onHire }) {
  const [person, setPerson] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const location = useLocation()
  const isEditing = searchParams.get('edit') === 'true'

  useEffect(() => {
    if (location.state?.person) {
      setPerson(location.state.person)
    } else {
      fetch(`https://randomuser.me/api/?uuid=${id}`)
        .then(response => response.json())
        .then(data => setPerson(data.results[0]))
        .catch(error => console.error('Error fetching person:', error))
    }
  }, [id, location.state])

  const handleHire = (wage) => {
    const updatedPerson = { ...person, wage }
    onHire(updatedPerson)
    navigate('/')
  }

  if (!person) return <div>Loading...</div>

  return (
    <div>
      <h2>{person.name.first} {person.name.last}</h2>
      <img src={person.picture.large} alt={`${person.name.first} ${person.name.last}`} />
      <HireForm person={person} onHire={handleHire} isEditing={isEditing} />
    </div>
  )
}

export default PersonProfile
