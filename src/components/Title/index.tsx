import React, { memo, PropsWithChildren } from 'react'
import { Typography, TypographyProps } from '@mui/material'

interface TitleProps extends TypographyProps {
  /**
   * type
   */
  type: 'title' | 'subTitle'
}

/**
 * Title Components
 * @returns
 */
const Title = ({ type, sx, children }: PropsWithChildren<TitleProps>) => {
  const isSubTitle = type === 'subTitle'

  return (
    <Typography
      component={isSubTitle ? 'h6' : 'h3'}
      sx={
        type === 'subTitle'
          ? {
              textAlign: ['left', 'center'],
              fontWeight: '400',
              fontSize: ['16px', '20px'],
              width: ['100%', '70%'],
              lineHeight: {
                xs: 1.2,
              },
              mb: ['30px', '56px'],
              mx: ['auto'],
              color: 'rgba(11, 27, 66, 0.7)',
              ...sx,
            }
          : {
              textAlign: ['center'],
              fontWeight: '600',
              fontSize: ['40px', '64px'],
              lineHeight: {
                xs: 1.2,
              },
              mb: ['30px', '60px'],
              ...sx,
            }
      }
    >
      {children}
    </Typography>
  )
}

Title.defaultProps = {
  type: 'title',
}

export default memo(Title)
