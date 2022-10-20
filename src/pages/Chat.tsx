import React from 'react'
import { Sidebar } from '../Components/Sidebar'
import { ChatMessage } from '../Components/ChatMessage'
import { Stack } from '@mui/material'
export const Chat = () => {
  return (
    <Stack direction='row'>
      <Sidebar />
      <ChatMessage />
    </Stack>
  )
}
