import React from 'react'
import { HeaderSidebar } from '../HeaderSidebar'
import { CardMessage } from '../CardMessage'
import {
  styled,
  Box
} from '@mui/material'
import { defaultTheme } from '../../themes/defaultTheme'

const messages = [
  {
    user: 'Samuel lindo',
    userPhoto: 'https://github.com/samukdev.png',
    lastMessage: 'Eai gostosa ?',
    hourLastMessage: '4:32'
  },
  {
    user: 'Esquisito',
    userPhoto: 'https://github.com/viniciustq14.png',
    lastMessage: 'Quer um pix ?',
    hourLastMessage: '14:28'
  },
  {
    user: 'Corsa',
    userPhoto: 'https://github.com/KarlaSribeiro.png',
    lastMessage: 'Me faz um pix ?',
    hourLastMessage: '15:54'
  }
]

const SidebarContainer = styled(Box)(({ theme }) => ({
  width: '30%',
  display:'flex',
  flexDirection: 'column',
  height: '100vh',
  backgroundColor: defaultTheme.palette.secondary.contrastText,
  borderRight: `1px solid ${defaultTheme.palette.secondary.main}`
}))

export const Sidebar = () => {

  return (
    <SidebarContainer>
      <HeaderSidebar />
      {messages.map((item, index) => (
        <CardMessage
          key={index}
          user={item.user}
          lastMessage={item.lastMessage}
          hourLastMessage={item.hourLastMessage}
          userPhoto={item.userPhoto}
        />
      ))}
    </SidebarContainer>
  )
}
