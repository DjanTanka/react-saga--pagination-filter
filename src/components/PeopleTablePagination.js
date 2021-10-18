import { useDispatch, useSelector } from "react-redux";

const LIMIT = 10;

const PeopleTablePagination = ({page, total}) => {
 
  const dispatch = useDispatch()
  const people = useSelector((state => state.people))

  const amountPages = Math.ceil(total/LIMIT)
  // Генерированиe последовательности чисел
  const pages = Array.from({ length: amountPages }, (v, k) => k+1)
  const handleChangePage = (el) => {
    //payload затем передается в Worker аргументом
    dispatch({type: 'LOAD_PEOPLE_startSaga', payload: {
      page: el,
      search: people.search
    }})
  }

  return (
    <>
      {
        pages.map((el)=> {
          return (
            el===page
            ? <h2 style={{display: 'inline', marginRight: '10px'}} >
                {el}
              </h2>
            : <p style={{display: 'inline', marginRight: '10px'}} onClick={() => handleChangePage(el)}>
                {el}
              </p>
          )
        })
      }
    </>  
  )
}

export default PeopleTablePagination