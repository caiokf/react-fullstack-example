import { createSelector } from 'reselect'

export const selectMessages = createSelector(
  state => state.flash,
  state => state.get('messages').toJS(),
)

export const selectLatestMessage = createSelector(
  selectMessages,
  state => [...state].pop() || {},
)
