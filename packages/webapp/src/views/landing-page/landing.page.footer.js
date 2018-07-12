import React, { Component } from 'react'
import styled from 'react-emotion'
import styles from '../../styles'

export default class LandingPageFooter extends Component {
  render() {
    return (
      <Footer>
        © caiokf 2018.
      </Footer>
    )
  }
}
const Footer = styled.header`
  padding: 4.4rem;
  color: ${styles.colors.white};
  background-color: ${styles.colors.boulder};
  font-size: .8125rem;
  line-height: 1.538;
  text-align: left;
`
