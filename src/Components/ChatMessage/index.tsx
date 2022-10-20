import React from 'react'
import { HeaderChat } from '../HeaderChat'
import { Stack } from '@mui/material'
import { ToolsSendMessage } from '../ToolsSendMessage'
import { defaultTheme } from '../../themes/defaultTheme'

export const ChatMessage = () => {
  return (
    <Stack sx={{ width: '70%', backgroundColor: defaultTheme.palette.primary.contrastText }}>
      <HeaderChat />
      <ToolsSendMessage />
    </Stack>
  )
}
