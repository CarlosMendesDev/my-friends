import React from 'react'
import {
  styled,
  Stack,
  Box,
  Typography,
  TextField,
  Button,
  IconButton
} from '@mui/material'
import { defaultTheme } from '../themes/defaultTheme'
import { SocialIcon } from 'react-social-icons'
import { TextingImage } from '../Components/TextingImage'

const Section = styled(Box)(({ theme }) => ({
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  display:'flex',
  flexDirection: 'column',
  rowGap: '24px',
  height: '100vh'
}))

export const Login = () => {
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }}>
      <Section sx={{ backgroundColor: defaultTheme.palette.secondary.contrastText }}>
        <Typography
          variant='h4'
          sx={{ paddingBottom: '16px' }}
          color={defaultTheme.palette.text.primary}
        >
          Login
        </Typography>

        <TextField sx={{ width: '50%' }} label="Usuário" variant="outlined" />
        <TextField sx={{ width: '50%' }} label="Usuário" variant="outlined" />

        <Button
          sx={{
            textTransform: 'none',
            width: '50%',
            height: '50px'
          }}
          disableElevation
          variant="contained"
        >
          Entar
        </Button>

        <Box>
          <IconButton aria-label="delete">
            <SocialIcon url='https://google.com/'/>
          </IconButton>

          <IconButton aria-label="delete">
            <SocialIcon url='https://facebook.com/'/>
          </IconButton>

          <IconButton aria-label="delete">
            <SocialIcon url='https://github.com/'/>
          </IconButton>
        </Box>
      </Section>
      <Section sx={{ backgroundColor: defaultTheme.palette.secondary.main }}>
        <TextingImage style={{ width: '50%' }} />

        <Box>
          <Typography
            variant='body1'
            sx={{ textAlign: 'center' }}
            color={defaultTheme.palette.text.primary}
          >
            Venha participar do chat mais legal do mundo!
          </Typography>
          <Typography
            variant='body1'
            sx={{ textAlign: 'center' }}
            color={defaultTheme.palette.text.primary}
          >
            Conecte-se com pessoas do mundo inteiro e divirta-se. 🌏
          </Typography>
        </Box>
      </Section>
    </Stack>
  )
}
