import React from 'react'
import { Sidebar } from '../Components/Sidebar'
import { ChatMessage } from '../Components/ChatMessage'
import { Stack, CircularProgress } from '@mui/material'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../services/firebase'
import { useNavigate } from "react-router-dom";

export const Chat = () => {
  const [user, loading] = useAuthState(auth as any)

  const navigate = useNavigate()

  if (!user) {
    navigate('login')
  } 

  return (
    <>
      {(user && !loading)
        ? <Stack direction='row'>
            <Sidebar photoURL={user.photoURL} />
            <ChatMessage />
          </Stack>
        : <Stack
            direction='row'
            sx={{
              width: '100vw',
              height: '100vh',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <CircularProgress />
          </Stack>
      }
    </>
  )
}
