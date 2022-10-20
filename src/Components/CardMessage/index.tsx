import React from 'react'
import {
  styled,
  Box,
  Avatar,
  Typography
} from '@mui/material'
import { defaultTheme } from '../../themes/defaultTheme'

const MessageContainer = styled(Box)(({ theme }) => ({
  maxWidth: '100%',
  display:'flex',
  alignItems: 'center',
  flexDirection: 'row',
  paddingBottom: '16px',
  paddingTop: '16px',
  paddingLeft: '16px',
  paddingRight: '16px',
  cursor: 'pointer'
}))

type CardMessageProps = {
  user: string
  lastMessage: string
  hourLastMessage: string
  userPhoto: string
}

export const CardMessage = ({
  user,
  lastMessage,
  hourLastMessage,
  userPhoto
}: CardMessageProps) => {

  return (
    <MessageContainer
      sx={{
        borderBottom: `1px solid ${defaultTheme.palette.secondary.main}`
      }}
    >
      <Avatar
        src={userPhoto}
        sx={{
          border: `1px solid ${defaultTheme.palette.primary.main}`,
          cursor: 'pointer',
          marginRight: '16px'
        }}
      />

      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between'
        }}
      >
        <Box>
          <Typography
            variant='body1'
            color={defaultTheme.palette.text.primary}
          >
            {user}
          </Typography>

          <Typography
            variant='body2'
            color={defaultTheme.palette.text.secondary}
          >
            {lastMessage}
          </Typography>
        </Box>

        <Typography
            variant='body2'
          color={defaultTheme.palette.text.secondary}
        >
          {hourLastMessage}
        </Typography>
      </Box>
    </MessageContainer>
  )
}
