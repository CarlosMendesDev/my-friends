import React from 'react'
import { HeaderChat } from '../HeaderChat'
import { Stack } from '@mui/material'
import { defaultTheme } from '../../themes/defaultTheme'

export const ChatMessage = () => {
  return (
    <Stack sx={{ width: '70%', backgroundColor: defaultTheme.palette.primary.contrastText }}>
      <HeaderChat />
    </Stack>
  )
}
