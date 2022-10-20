import React from 'react'
import {
  styled,
  Box,
  IconButton,
  TextField
} from '@mui/material'
import { defaultTheme } from '../../themes/defaultTheme'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import SendIcon from '@mui/icons-material/Send'

const ToolsContainer = styled(Box)(({ theme }) => ({
  width: '-webkit-fill-available',
  display:'flex',
  height: '75px',
  backgroundColor: defaultTheme.palette.secondary.contrastText,
  paddingLeft: '16px',
  paddingRight: '16px',
  borderTop: `1px solid ${defaultTheme.palette.secondary.main}`,
  position: 'absolute',
  bottom: 0,
  alignItems: 'center'
}))

export const ToolsSendMessage = () => {
  return (
    <ToolsContainer>
      <IconButton>
        <SentimentVerySatisfiedIcon
          sx={{
            width: '35px',
            height: '35px',
            color: defaultTheme.palette.primary.main
          }}
        />
      </IconButton>

      <IconButton>
        <AttachFileIcon
          sx={{
            width: '35px',
            height: '35px',
            color: defaultTheme.palette.primary.main
          }}
        />
      </IconButton>

      <TextField
        placeholder='Digite uma mensagem...'
        variant="outlined"
        sx={{
          width: '100%',
          px: '8px'
        }}
      />

      <IconButton>
        <SendIcon
          sx={{
            width: '35px',
            height: '35px',
            color: defaultTheme.palette.primary.main
          }}
        />
      </IconButton>
    </ToolsContainer>
  )
}
