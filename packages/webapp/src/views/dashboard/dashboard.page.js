import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion'

class DashboardPage extends Component {
  render() {
    return (
      <Container>
        Dashboard
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  align-items: center;
`

const mapStateToProps = () => ({ })
const mapDispatchToProps = ({ })

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)
