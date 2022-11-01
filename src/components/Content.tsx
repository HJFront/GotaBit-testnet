import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Link from 'src/Link'
import CardItm from './CardItm'
import Consideration from './Icons/Consideration'
import Contract from './Icons/Contract'
import Guide from './Icons/Guide'
import Testnet from './Icons/Testnet'
import Token from './Icons/Token'
import Wallet from './Icons/Wallet'
import Title from './Title'

const Content = () => {
  const { t } = useTranslation('index')

  const buildList = [
    {
      title: t('How to create a wallet'),
      component: <Wallet />,
      link: '/',
    },
    {
      title: t('How to connect to the testnet'),
      component: <Testnet />,
      link: '/',
    },
    {
      title: t('Claim test tokens'),
      component: <Token />,
      link: '/',
    },
    {
      title: t('GotaBit Browser User Guide'),
      component: <Guide />,
      link: '/',
    },
    {
      title: t('How to deploy your contract'),
      component: <Contract />,
      link: '/',
    },
    {
      title: t('Testnet Considerations'),
      component: <Consideration />,
      link: '/',
    },
  ]

  return (
    <Box
      component="div"
      sx={{
        position: 'relative',
        mb: ['24px', '110px'],
        mt: ['24px', '36px', 0],
      }}
    >
      <Box>
        <Title>{t('GotaBit Test Network')}</Title>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: ['column', 'column', 'row'],
          }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 4, md: 12 }}
          >
            {buildList.map((item) => (
              <Grid
                position="relative"
                item
                xs={4}
                sm={4}
                md={4}
                key={item.title}
              >
                <Link
                  href={item.link}
                  sx={{
                    textDecoration: 'none',
                    color: '#0B1B42',
                    display: 'block',
                  }}
                  target="_blank"
                  rel="noopener"
                >
                  <CardItm>
                    <Box
                      sx={{
                        width: '80px',
                        height: '80px',
                      }}
                    >
                      {item.component}
                    </Box>
                    <Box sx={{ ml: ['20px', '26px'] }}>
                      <Typography
                        variant="h6"
                        color="text.primary"
                        sx={{
                          fontSize: '18px',
                          lineHeight: 1.2,
                          fontWeight: 600,
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                  </CardItm>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '120%',
          background: '#003DD9',
          opacity: '0.15',
          filter: 'blur(260px)',
          zIndex: -1,
        }}
      ></Box>
    </Box>
  )
}

export default Content
