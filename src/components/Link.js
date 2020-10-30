import React from 'react'
import { Link as RebassLink } from 'rebass'
export default function Link({ children, ...props }) {
  return (
    <RebassLink
      {...props}
      className='glow-link'
      sx={{
        color: 'muted',
        fontWeight: 'bold',
        textDecoration: 'none',
        '&:hover': {
          textShadow: `0 0 10px #fff, 0 0 10px #fff, 0 0 10px #fff, 0 0 20px #afe9fe,
      0 0 350px #afe9fe, 0 0 40px #afe9fe, 0 0 50px #afe9fe, 0 0 75px #afe9fe`
        }
      }}
    >
      {children}
    </RebassLink>
  )
}
