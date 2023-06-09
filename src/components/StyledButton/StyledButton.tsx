import { Button, styled } from '@mui/material'

const StyledOutlinedButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  color: 'rgba(28,30,34,0.8)',
  borderRadius: '4px',
  border: '1px solid rgba(28,30,34,0.5)',
  margin: '0',
  padding: '9px 24px',
  fontWeight: '600',
  lineHeight: '22px',
  backgroundColor: '#fff',
  '&:hover': {
    border: '1px solid rgba(28,30,34,0.5)',
    backgroundColor: 'rgba(28,30,34,0.1)'
  },
  '&:active': {
    boxShadow: 'none',
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
  margin: '0 0 0 12px',
  padding: '9px 24px',
  fontWeight: '600',
  lineHeight: '22px',
  '&:hover': {
    border: 'none'
  },
  '&:active': {
    boxShadow: 'none',
    borderColor: 'none'
  },
  '&:focus': {
    boxShadow: '0px 1px 2px rgba(0,0,0,0.3)'
  }
})

export { StyledOutlinedButton, StyledContainedButton }
