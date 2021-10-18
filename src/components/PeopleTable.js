import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"

const PeopleTable = () => {

  const history = useHistory()
  const dispatch = useDispatch()
  const people = useSelector((state => state.people))


  const handleGoToPerson = (name) => {
    history.push(`/person/${name}`)
  }

  return (
    <table border={1} width={700}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Birth year</th>
          <th>Gender</th>
          <th>Height</th>
        </tr>
      </thead>
      <tbody>
        {people?.data?.people?.map((person) => {
          return (
            <tr 
              key={person.name}
              onClick={() => handleGoToPerson(person.name)}
            >
              <td>{person.name}</td>
              <td>{person.birth_year}</td>
              <td>{person.gender}</td>
              <td>{person.height}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default PeopleTable