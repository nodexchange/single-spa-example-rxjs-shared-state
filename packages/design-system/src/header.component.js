import React from 'react'
import PropTypes from 'prop-types'
import Typography from './components/typography/Typography';

const Header = props => {
  return (
    <div>
      <Typography variant="main">Home</Typography>
      <p> element hello world like this one </p>
      <p> element hello world like this one </p>
    </div>
  )
}

Header.propTypes = {

}

export default Header
