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
    lineHeight: '60px'
  }
}

const NotFound = () => {
  return (
    <div style={style.container}>
      <div style={style.message}>
        <h1 style={{marginRight:'5px'}}>Nothing to see here</h1>
        <FA name="exclamation" size="4x"/>
      </div>
      <Link to="/">Get me outta here</Link>
    </div>
  )
}

export default NotFound
