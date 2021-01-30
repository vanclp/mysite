import React from 'react'
import FA from 'react-fontawesome'
import { Link } from 'react-router-dom'

const style = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
    flexDirection: 'column'
  },
  message: {
    display: 'flex',
  }
}

const NotFound = () => {
  document.title = "404"
  return (
    <div style={style.container}>
      <div style={style.message}>
        <h1 style={{marginRight:'5px'}}>404</h1>
        <FA name="exclamation" size="3x"/>
      </div>
      <Link to="/">Get me outta here</Link>
    </div>
  )
}

export default NotFound
