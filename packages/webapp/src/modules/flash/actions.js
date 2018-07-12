export function flashMessage(message, options) {
  return (dispatch) => {
    dispatch({ type: 'flash/SHOW_FLASH_MESSAGE', payload: { message, options } })
  }
}

export function flashSuccessMessage(message, options) {
  return flashMessage(message, { ...options, flashType: 'FLASH_SUCCESS' })
}

export function flashErrorMessage(message, options) {
  return flashMessage(message, { ...options, flashType: 'FLASH_ERROR' })
}
