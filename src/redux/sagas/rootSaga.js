import { deletePeopleWatcher } from "./people/deletePeopleSaga";
import getPeopleWatcher, { getPeopleOnRouterEnterWatcher } from "./people/getPeopleSaga";
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  
  yield all([ 
    getPeopleWatcher(),
    deletePeopleWatcher(),
    getPeopleOnRouterEnterWatcher()
  ])
}