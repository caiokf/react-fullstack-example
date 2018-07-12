import React, { Component } from 'react'
import { withRouter } from 'react-router'
import styled from 'react-emotion'
import { transparentize } from 'polished'
import styles from '~/styles'

class LandingPageHeader extends Component {
  login(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }

  signup(e) {
    e.preventDefault()
    this.props.history.push('/login?signup')
  }

  render() {
    return (
      <Header>
        <Nav>
          <NavLink quiet href="#about">About</NavLink>
          <NavLink href="#" onClick={e => this.login(e)}>Login</NavLink>
          <NavLink href="#" onClick={e => this.signup(e)}>Signup</NavLink>
        </Nav>

        <HeaderMain>
          <Title>React frontend example,</Title>
          <Subtitle>Feast your eyes</Subtitle>
        </HeaderMain>

        <SignupButton onClick={e => this.signup(e)}>Signup</SignupButton>

        <HeaderTransparency />
      </Header>
    )
  }
}
const Header = styled('header')`
  padding: ${styles.dimensions.lg};
  background: url('/assets/background-work.jpg') no-repeat center bottom;
  background-size: cover;
  z-index: 100;
  justify-content: space-between;
  position: relative;
  height: 100vh;

  @media (max-width: 700px) {
    min-height: 450px;
    height: auto;
  }

  em {
    font-weight: 500;
  }
`
const HeaderTransparency = styled.div`
  position: absolute;
  top: 0; right: 0; bottom:0; left: 0;
  background: ${styles.colors.darkTangerine};
  background: ${styles.colors.gradient};
  opacity: 0.8;
  z-index: -1;
`
const HeaderMain = styled.div`
  padding: 100px;
`
const Title = styled.div`
  font-size: 5rem;
  font-weight: 500;

  @media (max-width: 700px) {
    font-size: 2rem;
  }

  padding: ${styles.dimensions.md};
`
const Subtitle = styled.div`
  font-size: 1.625rem;
  font-weight: 300;

  @media (max-width: 700px) {
    font-size: 1rem;
  }
`
const Nav = styled('nav')`
  font-size: 1.1rem;
  font-weight: 600;
  text-align: right;
  padding-bottom: ${styles.dimensions.lg};
`
const NavLink = styled('a')`
  padding: 1.9375rem 1rem;
  color: ${styles.colors.white};
  text-decoration: none;
  ${props => props.quiet && 'font-weight: 300;'}
`
const SignupButton = styled('a')`
  background-color: transparent;
  color: #fff;
  text-decoration: none;
  line-height: 1.1538;
  text-transform: uppercase;
  letter-spacing: .1rem;
  border: 1px solid ${styles.colors.white};
  margin-bottom: 1rem;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  padding: 1rem 4.375rem;
  font-size: 1rem;
  line-height: 2;
  border-radius: 2rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${transparentize(0.5, styles.colors.white)};
    border-color: transparent;
  }
`
export default withRouter(LandingPageHeader)
