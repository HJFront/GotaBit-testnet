import { Box, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import ContactIcons from '../ContactIcons'

const Footer = () => {
  const { t } = useTranslation('index')

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: ['column', 'row'],
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography sx={{ mb: ['24px', '24px', 0] }}>
        {t('2022  © Powered By Gotabit')}
      </Typography>
      <ContactIcons />
    </Box>
  )
}

export default Footer
