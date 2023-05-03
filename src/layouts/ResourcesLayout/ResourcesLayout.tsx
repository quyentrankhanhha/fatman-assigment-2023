import { Box, Typography, Tabs, Stack, Tab, TextField, IconButton, InputAdornment } from '@mui/material'
import { useEffect, useState } from 'react'
import { ArrowDropDown, Search } from '@mui/icons-material'
import { v4 as uuid } from 'uuid'
import { Link, useLocation } from 'react-router-dom'
import { StyledContainedButton, StyledOutlinedButton } from 'src/components/StyledButton/StyledButton'
import palette from 'src/constants/palette'
import tab from 'src/constants/tab'
import indexToTabName from 'src/constants/indexToTabName'

interface TabPanelProps {
  children: React.ReactNode
  value: number
}

interface ResourcesLayoutProps {
  children?: React.ReactNode
}

function TabPanel(props: TabPanelProps) {
  const { children, value, ...other } = props

  return (
    <div role='tabpanel' id={`tabpanel-${value}`} aria-labelledby={`tab-${value}`} {...other}>
      <Box sx={{ p: 3 }}>{children}</Box>
    </div>
  )
}

function a11yProps(index: string) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`
  }
}

export default function ResourcesLayout({ children }: ResourcesLayoutProps) {
  const location = useLocation()
  const pathname: string = location.pathname.slice(1)

  const [selectedTab, setSelectedTab] = useState<number>(indexToTabName[pathname as keyof typeof indexToTabName])

  useEffect(() => {
    setSelectedTab(indexToTabName[pathname as keyof typeof indexToTabName])
  }, [pathname])

  return (
    <Box sx={{ width: '100%' }}>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Typography variant='h4' fontWeight='700'>
          Resources
        </Typography>
        <Stack direction='row'>
          <StyledOutlinedButton variant='outlined' endIcon={<ArrowDropDown />}>
            Actions
          </StyledOutlinedButton>
          <StyledContainedButton
            variant='contained'
            sx={{
              bgcolor: `${palette.yellow}`,
              '&:hover': {
                backgroundColor: '#FFE81F'
              },
              '&:active': {
                backgroundColor: '#FFE81F'
              }
            }}
          >
            Add resource
          </StyledContainedButton>
        </Stack>
      </Stack>

      <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ margin: '17px 0' }}>
        <Box>
          <Tabs
            value={selectedTab}
            aria-label='resources tabs'
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: `${palette.blue}`,
                borderBottom: `4px solid ${palette.blue}`
              }
            }}
          >
            {tab.map((info) => (
              <Tab
                component={Link}
                key={uuid()}
                to={info.path}
                label={info.label}
                {...a11yProps(info.label)}
                sx={{
                  color: `${palette.black}`,
                  textTransform: 'none',
                  fontWeight: '600',
                  '&:hover': {
                    color: `${palette.blue}`
                  },
                  '&.Mui-selected': {
                    color: `${palette.blue}`
                  },
                  '&.Mui-focusVisible': {
                    color: `${palette.blue}`,
                    backgroundColor: `${palette.blue}`
                  }
                }}
              />
            ))}
          </Tabs>
        </Box>
        <Box sx={{ width: '400px' }}>
          <TextField
            fullWidth
            sx={{ ml: 1, marginLeft: '0' }}
            placeholder='Search...'
            size='small'
            inputProps={{
              'aria-describedby': 'search bar'
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton>
                    <Search />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Box>
      </Stack>
      <TabPanel value={selectedTab}>{children}</TabPanel>
    </Box>
  )
}
