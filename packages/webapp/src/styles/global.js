import colors from './colors'
import typography from './typography'

export default `
  body {
    margin: 0;
    padding: 0;
    background-color: ${colors.white};
    ${typography.default}
  }

  a {
    outline: none;
    text-decoration: none;
  }
`
