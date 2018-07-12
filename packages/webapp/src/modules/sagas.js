import { flashMessagesSaga } from '~/modules/flash/sagas'

export default function* root() {
  yield [
    fork(flashMessagesSaga),
  ]
}
