import React from 'react'
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
      <Link to="/">home</Link>
    </div>
  )
}

export default NotFound
