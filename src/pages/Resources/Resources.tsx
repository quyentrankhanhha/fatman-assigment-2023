import { Box, Typography, Tab, Tabs, Stack, Button } from '@mui/material'
import { useState } from 'react'
import { ArrowDropDown } from '@mui/icons-material'
import { StyledContainedButton, StyledOutlinedButton } from 'src/components/StyledButton/StyledButton'
import palette from 'src/constants/palette'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

export default function Resources() {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stack>
        <Typography variant='h3'>Resources</Typography>
        <Box>
          <StyledOutlinedButton variant='outlined' endIcon={<ArrowDropDown />}>
            Actions
          </StyledOutlinedButton>
          <StyledContainedButton variant='contained' sx={{ bgcolor: `${palette.yellow}` }}>
            Add resource
          </StyledContainedButton>
        </Box>
      </Stack>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
          <Tab label='People' {...a11yProps(0)} />
          <Tab label='Starships' {...a11yProps(1)} />
          <Tab label='Planets' {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  )
}
