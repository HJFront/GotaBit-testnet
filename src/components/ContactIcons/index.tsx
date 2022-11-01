import Box from '@mui/material/Box'
import React from 'react'
import Twitter from './Twitter'
import Github from './Github'
import Reddit from './Reddit'
import Medium from './Medium'
import Facebook from './Facebook'
import Link from 'src/Link'

const ContactIcons = ({ isGrey }: { isGrey?: boolean }) => {
  const icons = [
    {
      component: <Twitter />,
      url: 'https://twitter.com/GotaBitG',
    },
    {
      component: <Github />,
      url: 'https://github.com/gotabit/node',
    },
    {
      component: <Reddit />,
      url: 'https://twitter.com',
    },
    {
      component: <Medium />,
      url: 'https://medium.com/GotaBitG',
    },
    {
      component: <Facebook />,
      url: 'https://fb.me/gotabit/',
    },
  ]
  return (
    <Box>
      {icons.map((icon, index) => (
        <Link
          key={index}
          href={icon.url}
          sx={{
            ml: '16px',
            '&:first-of-type': {
              ml: 0,
            },
          }}
        >
          {icon.component}
        </Link>
      ))}
    </Box>
  )
}

export default ContactIcons
