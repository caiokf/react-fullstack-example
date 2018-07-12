import ReactDOM from 'react-dom'
import { injectGlobal } from 'emotion'
import globalStyles from '~/styles/global'
import Router from '~/router'
import registerServiceWorker from '~/registerServiceWorker'

ReactDOM.render(Router, document.getElementById('root'))
injectGlobal`${globalStyles}`
registerServiceWorker()
