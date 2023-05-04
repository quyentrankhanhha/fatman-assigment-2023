import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>
      <Typography variant='h6'>Fatman assignment 2023</Typography>
      <Typography>
        You can find my code in my{' '}
        <Link style={{ fontWeight: '600' }} to='https://github.com/quyentrankhanhha/fatman-assigment-2023'>
          Github link
        </Link>
        ! I’m eager to receive your feedback through my email quyentrankhanhha@gmail.com
      </Typography>
    </div>
  )
}
