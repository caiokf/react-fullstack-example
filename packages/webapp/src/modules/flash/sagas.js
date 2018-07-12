import uuid from 'uuid'
import { delay } from 'redux-saga'
import { take, put } from 'redux-saga/effects'

function* addMessage(id, message, flashType) {
  yield put({ type: 'flash/ADD_FLASH', payload: { id, message, flashType } })
}

function* removeMessageWithTimeout(id, timeout) {
  if (timeout) {
    yield delay(timeout)
    yield put({ type: 'flash/REMOVE_FLASH', payload: id })
  }
}

function* clearMessages(push) {
  if (push) {
    yield put({ type: 'flash/CLEAR' })
  }
}

export function* flashMessagesSaga() {
  while (true) {
    const action = yield take('flash/SHOW_FLASH_MESSAGE')
    const options = action.payload.options || {}

    const id = uuid()
    const message = action.payload.message

    const {
      push = true,
      flashType = 'FLASH_SUCCESS',
      timeout = 5000,
    } = options

    yield clearMessages(push)
    yield addMessage(id, message, flashType)
    yield removeMessageWithTimeout(id, timeout)
  }
}
