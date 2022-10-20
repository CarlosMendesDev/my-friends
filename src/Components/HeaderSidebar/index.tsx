import React from 'react'
import {
  styled,
  Box,
  Avatar,
  IconButton
} from '@mui/material'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
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

export const HeaderSidebar = () => {
  return (
    <HeaderContainer>
      <Avatar
        src='https://github.com/samukdev.png'
        sx={{
          border: `1px solid ${defaultTheme.palette.secondary.contrastText}`,
          cursor: 'pointer'
        }}
      />

      <Box>
        <IconButton>
          <GroupAddIcon sx={{ color: defaultTheme.palette.secondary.contrastText }} />
        </IconButton>
        <IconButton>
          <MoreVertIcon sx={{ color: defaultTheme.palette.secondary.contrastText }} />
        </IconButton>
      </Box>
    </HeaderContainer>
  )
}
