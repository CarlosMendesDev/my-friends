import React from 'react'
import { HeaderChat } from '../HeaderChat'
import { Stack, Box, styled, Typography } from '@mui/material'
import { ToolsSendMessage } from '../ToolsSendMessage'
import { defaultTheme } from '../../themes/defaultTheme'

const messages = [
  {
    user: 'Esquisito',
    message: 'Olá tudo bem?',
    sendHour: '14:43'
  },
  {
    user: 'Carlos',
    message: 'Sim, e você?',
    sendHour: '14:45'
  },
  {
    user: 'Esquisito',
    message: 'Estou bem.',
    sendHour: '14:50'
  }
]

type MessageProps = {
  user: string
}

const Message = styled(Box)(({ user }: MessageProps) => ({
  maxWidth: '45%',
  width: 'fit-content',
  display:'flex',
  backgroundColor: user === 'Carlos' ? '#0D65D9' : '#57A0FF',
  padding: '8px 16px',
  borderRadius: '8px',
  borderBottomRightRadius: '8px',
  color: '#ffffff',
}))

export const ChatMessage = () => {
  return (
    <Stack sx={{ width: '70%', backgroundColor: defaultTheme.palette.primary.contrastText }}>
      <HeaderChat />

      <Stack
        direction='column'
        spacing={1}
        sx={{
          padding: '16px',
          position: 'absolute',
          width: '-webkit-fill-available',
          bottom: '75px'
        }}
      >
        {messages.map((message, index) => (
          <Box key={index} sx={{ width: '100%', textAlign: message.user === 'Carlos' ? '-webkit-right' : '' }}>
            <Message user={message.user}>
              <Typography>{message.message}</Typography>
            </Message>
          </Box>
        ))}
      </Stack>

      <ToolsSendMessage />
    </Stack>
  )
}
