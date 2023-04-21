import { Box, Typography } from '@mui/material'
import React from 'react'

export const Post = ({data}) => {
  return (
    <Box sx={{cursor: 'pointer'}} display='flex' flexDirection='column' gap='10px' borderRadius={'20px'} p='15px' boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'>
      <Typography variant='h4'>{data.title}</Typography>
      <Typography variant='p'>{data.body}</Typography>
      <Typography variant='h6'>
        {
          data.tags.map((el, i) => (
            <Typography variant='span' color='#0033ff' key={i}>#{el} </Typography>
          ))
        }
      </Typography>
    </Box>
  )
}
