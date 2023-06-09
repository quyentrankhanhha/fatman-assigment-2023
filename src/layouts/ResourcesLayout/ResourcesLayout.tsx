import { Box, Typography, Tabs, Stack, Tab, TextField, IconButton, InputAdornment } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { ArrowDropDown, Search, Close } from '@mui/icons-material'
import { v4 as uuid } from 'uuid'
import { Link, useLocation } from 'react-router-dom'
import { StyledContainedButton, StyledOutlinedButton } from 'src/components/StyledButton/StyledButton'
import palette from 'src/constants/palette'
import tab from 'src/constants/tab'
import indexToTabName from 'src/constants/indexToTabName'
import { SearchContext } from 'src/contexts/search.content'

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

  const [selectedTab, setSelectedTab] = useState<number>(indexToTabName[pathname as keyof typeof indexToTabName] || 0)
  const searchContext = useContext(SearchContext)

  const searchQueryHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    searchContext.searchHandler(event.target.value)
  }

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
                bgcolor: `${palette.yellow}`
              },
              '&:active': {
                bgcolor: `${palette.yellow}`
              }
            }}
          >
            Add resource
          </StyledContainedButton>
        </Stack>
      </Stack>

      <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ padding: '32px 0' }}>
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
            sx={{ ml: 1, marginLeft: '0', bgcolor: '#fff', color: 'rgba(28, 30, 34, 0.8)' }}
            placeholder='Search...'
            size='small'
            inputProps={{
              'aria-describedby': 'search bar'
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  {searchContext.query != '' ? (
                    <IconButton sx={{ color: 'rgba(28, 30, 34, 0.5)' }} onClick={searchContext.cancelSearchHandler}>
                      <Close />
                    </IconButton>
                  ) : (
                    <IconButton sx={{ color: 'rgba(28, 30, 34, 0.5)' }}>
                      <Search />
                    </IconButton>
                  )}
                </InputAdornment>
              )
            }}
            onChange={searchQueryHandler}
            value={searchContext.query}
          />
        </Box>
      </Stack>
      <TabPanel value={selectedTab}>{children}</TabPanel>
    </Box>
  )
}
