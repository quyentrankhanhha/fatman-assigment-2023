import { Box, Grid, Stack, Typography } from '@mui/material'
import { StyledContainedButton, StyledOutlinedButton } from 'src/components/StyledButton/StyledButton'
import palette from 'src/constants/palette'
import StarshipInfo from './components/StarshipInfo'
import starships from 'src/constants/starships'
import { Link } from 'react-router-dom'

export default function Starships() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Typography variant='h4' fontWeight='700'>
          Starship
        </Typography>
        <Stack direction='row'>
          <Link to='/people'>
            <StyledOutlinedButton variant='outlined' aria-describedby='get back to people tab'>
              Cancel
            </StyledOutlinedButton>
          </Link>

          <StyledContainedButton
            variant='contained'
            sx={{
              bgcolor: `${palette.gray}`,
              '&:hover': {
                bgcolor: `${palette.gray}`
              },
              '&:active': {
                bgcolor: `${palette.gray}`
              }
            }}
            aria-describedby='save'
          >
            Save
          </StyledContainedButton>
        </Stack>
      </Stack>

      <Grid container direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, md: 12 }} sx={{ padding: '32px 0' }}>
        <Grid item xs={6}>
          <img
            src={starships[0].image}
            alt='starship imgage'
            aria-labelledby='starship imgage'
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </Grid>
        <StarshipInfo info={starships[0]} />
      </Grid>
    </Box>
  )
}
