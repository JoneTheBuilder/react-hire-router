import PeopleListItem from './PeopleListItem'

function PeopleList(props) {
  const { people, showViewLink, showEditLink } = props

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem 
          key={person.login.uuid} 
          person={person} 
          showViewLink={showViewLink}
          showEditLink={showEditLink}
        />
      ))}
    </ul>
  )
}

export default PeopleList
