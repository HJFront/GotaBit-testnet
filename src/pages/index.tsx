import * as React from 'react'
import type { NextPage } from 'next'
import { Container } from '@mui/material'

import Footer from 'src/components/Footer'
import Navbar from 'src/components/Navbar'
import Content from 'src/components/Content'

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <Content />
      <Footer />
    </Container>
  )
}

export default Home
