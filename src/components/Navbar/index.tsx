import { Box, Drawer, IconButton } from '@mui/material'
import React, { useState } from 'react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import Link from 'src/Link'
import MenuIcon from './MenuIcon'
import DrawerContent from './DrawerContent'

const drawerWidth = '100%'
const container =
  typeof window !== undefined ? () => window.document.body : undefined

const Navbar = () => {
  const { t } = useTranslation('index')

  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const tabs = [
    {
      id: 'explorer',
      label: t('Explorer'),
      link: 'https://scan-testnet.gotabit.dev/',
    },
    {
      id: 'document',
      label: t('Documentation'),
      link: 'https://docs.hjcore.io/',
    },
    {
      id: 'faucet',
      label: t('Faucet'),
      link: 'https://docs.hjcore.io/',
    },
  ]

  return (
    <Box sx={{ py: ['14px', '14px', '28px'] }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link href="/">
          <Box
            sx={{
              width: ['182px', '264px'],
              height: ['24px', '40px'],
            }}
          >
            <Image
              width="264px"
              height="40px"
              style={{ width: '100%', height: '100%' }}
              src="https://res.gotabit.io/svg/gotabit-testnet.svg"
              alt=""
            />
          </Box>
        </Link>
        <Box sx={{ display: ['none', 'none', 'flex'] }}>
          {tabs.map((tab) => (
            <Link
              key={tab.id}
              href={tab.link}
              sx={{
                fontWeight: 600,
                fontSize: 18,
                ml: '40px',
              }}
              underline="none"
              target="_blank"
              rel="noopener"
            >
              {tab.label}
            </Link>
          ))}
        </Box>
        <Box
          sx={{
            display: ['flex', 'flex', 'none'],
            alignItems: 'center',
          }}
        >
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: 'block', mr: '-8px', ml: '10px' }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          anchor="right"
          sx={{
            display: ['block', 'block', 'none'],
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
            backgroundColor: ['transparent'],
          }}
        >
          <DrawerContent tabs={tabs} onClose={handleDrawerToggle} />
        </Drawer>
      </Box>
    </Box>
  )
}

export default Navbar
