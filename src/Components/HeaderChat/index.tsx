import React from 'react'
import {
  styled,
  Box,
  Avatar,
  IconButton,
  Typography
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { defaultTheme } from '../../themes/defaultTheme'

const HeaderContainer = styled(Box)(({ theme }) => ({
  maxWidth: '100%',
  display:'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
  height: '75px',
  backgroundColor: defaultTheme.palette.primary.main,
  paddingLeft: '16px',
  paddingRight: '16px'
}))

export const HeaderChat = () => {
  return (
    <HeaderContainer>
      <Box sx={{ display: 'flex', alignItems: 'center', columnGap: '16px' }}>
        <Avatar
          src='https://github.com/samukdev.png'
          sx={{
            border: `1px solid ${defaultTheme.palette.secondary.contrastText}`,
            cursor: 'pointer'
          }}
        />

        <Typography
          variant='body1'
          color={defaultTheme.palette.secondary.contrastText}
        >
          Esquisito
        </Typography>
      </Box>

      <IconButton>
        <MoreVertIcon sx={{ color: defaultTheme.palette.secondary.contrastText }} />
      </IconButton>
    </HeaderContainer>
  )
}
