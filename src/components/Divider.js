import React from 'react'
import { Box } from 'rebass'
import { Divider as ThemeUIDivider } from 'theme-ui'
import PropTypes from 'prop-types'

export default function Divider({ color, ...props }) {
  return (
    <Box {...props}>
      <ThemeUIDivider className='neon-hr' color={color || 'white'} />
    </Box>
  )
}

Divider.propTypes = {
  color: PropTypes.string
}
