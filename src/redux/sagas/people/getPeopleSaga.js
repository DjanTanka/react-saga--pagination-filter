import { call, put, take, select, takeLatest} from '@redux-saga/core/effects';
import { LOCATION_CHANGE } from 'connected-react-router';
import getInfoSwapi from '../../../utils/getInfoFromSWAPI';

export function* getPeopleWorker({payload}) {
  const { page, search } = payload
   
  try {
    const dataPeople = yield call(getInfoSwapi, 'people', page, search);
    yield put({type: "LOADING_PEOPLE" , payload: {page, search} });
    yield put({type: "SUCCESS_LOAD_PEOPLE", payload: dataPeople});
  }
  catch(error){
    yield put({type: "FAILED_LOAD_PEOPLE", payload: error});
  }
}

// watcher для загрузки данных при заходе на страницу
export function* getPeopleOnRouterEnterWatcher() {
  while(true) {
    const action = yield take(LOCATION_CHANGE);
    //указание при переходе на какую страницу произойдет автомотическая загрузка данных
    if (action.payload.location.pathname === '/') {
      yield put({type: 'LOAD_PEOPLE_startSaga', payload:{
        page: 1,
        search: ''
      }})
      /// так как это Watcher, то и диспатчить надо тем, что запускает сагу 
      // тот же свмый диспатч, что и на обычной кнопке, соответственно,
      // как только запускается этот диспатч - запускается getPeopleWatcher
    }
  }
}

export default function* getPeopleWatcher() {
  yield takeLatest('LOAD_PEOPLE_startSaga', getPeopleWorker)
} 