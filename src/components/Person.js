import { useEffect } from "react"
import { useDispatch } from "react-redux"

const Person = ({match}) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({type: 'LOAD_PEOPLE_startSaga', payload: {
        page: 1,
        search: match.params.name
    }})
  }, [])
  
  return (
    <>
      {match.params.name}
    </>
  ) 
}
export default Person