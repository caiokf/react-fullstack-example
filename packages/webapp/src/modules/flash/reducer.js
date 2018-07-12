import { fromJS, List } from 'immutable'

const initialState = fromJS({
  messages: [],
})

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'flash/ADD_FLASH': {
      return state.update('messages', list => list.push(action.payload))
    }

    case 'flash/REMOVE_FLASH': {
      const messageId = action.payload
      const index = state.get('messages').findIndex(x => x.id === messageId)
      const newList = state.get('messages').remove(index)
      return state.set('messages', newList)
    }

    case 'flash/CLEAR': {
      return state.set('messages', List([]))
    }

    default: {
      return state
    }
  }
}
