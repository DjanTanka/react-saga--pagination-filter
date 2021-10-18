import { useDispatch, useSelector } from "react-redux"
import PeopleTable from "./PeopleTable"
import PeopleTablePagination from "./PeopleTablePagination"

const MyApp = () => {
  const dispatch = useDispatch()
  const people = useSelector((state => state.people))
  
  const handleSearch = (e) => {
    dispatch({type: 'LOAD_PEOPLE_startSaga',
      payload: {
        page: 1,
        search: e.target.value
      }
    })
  }

  return (
    <div >
      <h2>
        Star Wars People
      </h2>
      <div style={{marginBottom: '20px'}}>
        Search:  
        <input
          type='text'
          value={people.search}
          onChange={(e) => handleSearch(e)}
        />
      </div>
      {
        people.status === 'LOADING' 
          ? <p> People loading...</p>
          : <>
              <PeopleTable />
              <PeopleTablePagination page={people.page} total={people.data.total}/>
            </>
      }
    </div>
  );
}

export default MyApp
