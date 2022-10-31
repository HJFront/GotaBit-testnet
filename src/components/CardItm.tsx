import React, { memo, PropsWithChildren } from 'react'
import { Paper, PaperProps } from '@mui/material'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  buildList: {
    transition: 'all .25s',
    '& svg': {
      transition: 'transform .25s',
      transitionDelay: '.1s',
      transitionTimingFunction: 'ease',
      transitionDuration: '.3s',
    },
    '&:hover': {
      boxShadow: '0 2px 12px 0 rgb(0 0 0 / 10%)',
      '& svg': {
        transform: 'scale(1.15)',
      },
    },
  },
})

/**
 * CardItm Components
 * @returns
 */
const CardItm = ({ sx, children }: PropsWithChildren<PaperProps>) => {
  const classes = useStyles()

  return (
    <Paper
      className={classes.buildList}
      sx={{
        display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'space-evenly',
        alignItems: 'center',
        maxHeight: ['152px'],
        padding: ['30px', '40px'],
        background: '#FFFFFF',
        border: '1px solid rgba(0, 61, 217, 0.1)',
        borderRadius: ['20px', '24px'],
        boxShadow: 'none',
        fontWeight: 600,
        maxWidth: '484px',
        mx: ['auto'],
        ...sx,
      }}
    >
      {children}
    </Paper>
  )
}

export default memo(CardItm)
