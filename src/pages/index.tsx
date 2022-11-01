import * as React from 'react'
import type { NextPage } from 'next'
import { Container } from '@mui/material'

import Footer from 'src/components/Footer'
import Navbar from 'src/components/Navbar'
import Content from 'src/components/Content'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>GotaBit Test Network</title>
      </Head>
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          minHeight: '100vh',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Navbar />
        <Content />
        <Footer />
      </Container>
    </>
  )
}

export default Home
