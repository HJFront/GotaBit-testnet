import * as React from 'react'
import type { NextPage } from 'next'
import { useTranslation } from 'react-i18next'
import { Container } from '@mui/material'

import Footer from 'src/components/Footer'
import Navbar from 'src/components/Navbar'
import Content from 'src/components/Content'

const Home: NextPage = () => {
  const { t } = useTranslation('index')

  return (
    <Container maxWidth="lg">
      <Navbar />
      <Content />
      <Footer />
    </Container>
  )
}

export default Home
