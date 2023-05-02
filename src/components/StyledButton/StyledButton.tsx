import { Button, styled } from '@mui/material'

const StyledOutlinedButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  color: 'rgba(28,30,34,0.8)',
  borderRadius: '4px',
  border: '1px solid rgba(28,30,34,0.5)',
  margin: '0 12px',
  padding: '9px 24px',
  '&:hover': {
    border: '1px solid rgba(28,30,34,0.5)'
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#fff',
    borderColor: 'rgba(28,30,34,0.5)'
  },
  '&:focus': {
    boxShadow: 'none'
  }
})

const StyledContainedButton = styled(Button)({
  boxShadow: '0px 1px 2px rgba(0,0,0,0.3)',
  borderRadius: '4px',
  textTransform: 'none',
  color: 'rgba(28,30,34,0.8)',
  margin: '0 12px',
  padding: '9px 24px',
  '&:hover': {
    border: 'none',
    backgroundColor: '#FFE81F'
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#FFE81F',
    borderColor: 'none'
  },
  '&:focus': {
    boxShadow: '0px 1px 2px rgba(0,0,0,0.3)'
  }
})

export { StyledOutlinedButton, StyledContainedButton }
