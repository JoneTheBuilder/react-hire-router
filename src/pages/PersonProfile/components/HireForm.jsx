import { useState } from 'react'

function HireForm({ person, onHire, isEditing }) {
  const [wage, setWage] = useState(person.wage || 0)

  function handleSubmit(event) {
    event.preventDefault()
    onHire(wage)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="number"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">
        {isEditing ? 'Update' : 'Hire'}
      </button>
    </form>
  )
}

export default HireForm
