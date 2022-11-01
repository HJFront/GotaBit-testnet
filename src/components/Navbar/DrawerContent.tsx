import { Box, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'

import Link from 'src/Link'

const DrawerContent = ({
  onClose,
  tabs,
}: {
  onClose: VoidFunction
  tabs: { id: string; label: string; link: string }[]
}) => {
  const { t } = useTranslation('index')

  return (
    <Box
      sx={{
        minHeight: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          py: '14px',
          px: '20px',
        }}
      >
        <Box
          sx={{
            width: '182px',
            height: '24px',
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
        <Box onClick={onClose}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.429711 0.429711C1.00266 -0.143237 1.93159 -0.143237 2.50454 0.429711L7 4.92517L11.4955 0.429712C12.0684 -0.143236 12.9973 -0.143236 13.5703 0.429712C14.1432 1.00266 14.1432 1.93159 13.5703 2.50454L9.07483 7L13.5703 11.4955C14.1432 12.0684 14.1432 12.9973 13.5703 13.5703C12.9973 14.1432 12.0684 14.1432 11.4955 13.5703L7 9.07483L2.50454 13.5703C1.93159 14.1432 1.00266 14.1432 0.429712 13.5703C-0.143236 12.9973 -0.143236 12.0684 0.429712 11.4955L4.92517 7L0.429711 2.50454C-0.143237 1.93159 -0.143237 1.00266 0.429711 0.429711Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.429711 0.429711C1.00266 -0.143237 1.93159 -0.143237 2.50454 0.429711L7 4.92517L11.4955 0.429712C12.0684 -0.143236 12.9973 -0.143236 13.5703 0.429712C14.1432 1.00266 14.1432 1.93159 13.5703 2.50454L9.07483 7L13.5703 11.4955C14.1432 12.0684 14.1432 12.9973 13.5703 13.5703C12.9973 14.1432 12.0684 14.1432 11.4955 13.5703L7 9.07483L2.50454 13.5703C1.93159 14.1432 1.00266 14.1432 0.429712 13.5703C-0.143236 12.9973 -0.143236 12.0684 0.429712 11.4955L4.92517 7L0.429711 2.50454C-0.143237 1.93159 -0.143237 1.00266 0.429711 0.429711Z"
              fill="url(#paint0_linear_29595_1456)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_29595_1456"
                x1="0"
                y1="0"
                x2="14.7167"
                y2="0.799023"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#42A2FF" />
                <stop offset="1" stopColor="#0B84FF" />
              </linearGradient>
            </defs>
          </svg>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          my: '16px',
        }}
      >
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            href={tab.link}
            sx={{
              fontWeight: 600,
              fontSize: '24px',
              py: '24px',
              borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
              px: '20px',
            }}
            underline="none"
            target="_blank"
            rel="noopener"
          >
            {tab.label}
          </Link>
        ))}
      </Box>
    </Box>
  )
}

export default DrawerContent
