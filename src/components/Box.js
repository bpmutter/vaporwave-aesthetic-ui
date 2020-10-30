import React from 'react'
import { Box as RebassBox } from 'rebass'
import PropTypes from 'prop-types'
import theme from '../style/theme'

const darkStyle = {
  backgroundColor: theme.colors.darkBackground,
  color: theme.colors.lightText
}

const Box = ({ children, dark, ...props }) => {
  return (
    <RebassBox style={dark ? darkStyle : null} {...props}>
      {children}
    </RebassBox>
  )
}

Box.propTypes = {
  dark: PropTypes.bool
}

export default Box
