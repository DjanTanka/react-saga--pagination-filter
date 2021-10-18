import { put, takeEvery } from "@redux-saga/core/effects"

export function* deletePeopleWorker() {
  yield put({type: "DELETE_PEOPLE" })
}

export function* deletePeopleWatcher() {
  yield takeEvery('DELETE_PEOPLE_startSaga', deletePeopleWorker )
} 