import React, { Component } from 'react'
import styled from 'react-emotion'
import styles from '~/styles'
import Header from './landing.page.header'
import Footer from './landing.page.footer'

export default class LandingPage extends Component {
  render() {
    return (
      <Body>
        <Header />

        <Main>
          <Section id="about">
            <h1>About</h1>
            <div>
              <p>
                A posuere donec senectus suspendisse bibendum magna ridiculus a justo orci
                parturient suspendisse ad rhoncus cursus ut parturient viverra elit aliquam
                ultrices est sem. Tellus nam ad fermentum ac enim est duis facilisis congue
                a lacus adipiscing consequat risus consectetur scelerisque integer suspendisse
                a mus integer elit massa ut.
              </p>

              <p>
                A posuere donec senectus suspendisse bibendum magna ridiculus a justo orci
                parturient suspendisse ad rhoncus cursus ut parturient viverra elit aliquam
                ultrices est sem. Tellus nam ad fermentum ac enim est duis facilisis congue
                a lacus adipiscing consequat risus consectetur scelerisque integer suspendisse
                a mus integer elit massa ut.
              </p>
            </div>
          </Section>
        </Main>

        <Footer />
      </Body>
    )
  }
}
const Body = styled('div')`
  text-align: center;
  color: ${() => styles.colors.white};
`
const Main = styled('main')`
  display: flex;
  flex-direction: column;
  min-width: 25rem;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  color: ${styles.colors.boulder};
`
const Section = styled('section')`
  padding: 5.625rem;

  @media (max-width: 700px) {
    padding: 10px;

    h1 { margin: 10px; }
  }

  p {
    font-size: 1.1rem;
    display: inline-block;
    width: 50%;
    padding: 0 40px;
    box-sizing: border-box;

    @media (max-width: 700px) {
      padding: 0 10px;
    }
  }
`
