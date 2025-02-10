import { Link } from 'react-router-dom'

function PeopleListItem({ person, showViewLink, showEditLink }) {
  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      {showViewLink && (
        <Link 
          to={`/view/${person.login.uuid}`}
          state={{ person }}
        >
          View Profile
        </Link>
      )}
      {showEditLink && (
        <Link 
          to={`/view/${person.login.uuid}?edit=true`}
          state={{ person }}
        >
          Edit
        </Link>
      )}
    </li>
  )
}

export default PeopleListItem
