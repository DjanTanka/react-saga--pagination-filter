const initialState = {
  page: 1,
  search: '',
  status: "EMPTY",
  error: null,
  data: {
    total: 0,
    people: []
  }
}

export default function peopleReducer(state = initialState, action) {

  switch (action.type) {
    case "LOAD_PEOPLE_startSaga": 
    return {
      ...state, 
      status: "LOADING",
    }
    
    case "LOADING_PEOPLE": {
      const {page, search} = action.payload;
      return {
        ...state,
        page,
        search,
      }
    }
    
    case "SUCCESS_LOAD_PEOPLE": 
    return {
      ...state, 
      status: "SUCCESS",
      data: {
        ...state.data, 
        total: action.payload.count, 
        people: action.payload.results
      }
    }

    case "FAILED_LOAD_PEOPLE": 
    return {
      ...state, 
      status: "FAILD",
      error: action.payload
    }

    default: 
    return state;
  }
}