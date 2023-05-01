import { Box, ListItem, ListItemIcon, ListItemText, styled, ListItemButton } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { InitialStateI } from 'src/types/listItem.type'
import { KeyboardArrowRight, KeyboardArrowDown } from '@mui/icons-material'
import palette from 'src/constants/palette'

interface StyledListItemProps {
  info: {
    path: string
    name: string
    icon?: string
  }
  handleClickSubMenu?: (itemName: string) => void
  openSubMenu?: InitialStateI
}

const StyledListItemButton = styled(ListItemButton)(`
&:hover {
  background-color: ${palette.yellow};
  color: ${palette.gray}
}
`)

const StyledListItemIcon = styled(ListItemIcon)(`
  min-width: 32px
`)

export default function StyledListItem({ info, handleClickSubMenu, openSubMenu }: StyledListItemProps) {
  const listIcon =
    handleClickSubMenu && openSubMenu ? (
      <StyledListItemButton disableRipple onClick={() => handleClickSubMenu(info.name)}>
        <StyledListItemIcon>
          <img src={info.icon} alt='menu' />
        </StyledListItemIcon>
        <ListItemText
          disableTypography
          primary={info.name}
          primaryTypographyProps={{
            color: 'secondary'
          }}
        />
        <Box>{openSubMenu[info.name] ? <KeyboardArrowRight /> : <KeyboardArrowDown />}</Box>
      </StyledListItemButton>
    ) : (
      <StyledListItemButton disableRipple>
        <StyledListItemIcon>
          <img src={info.icon} alt='menu' />
        </StyledListItemIcon>
        <ListItemText
          disableTypography
          primary={info.name}
          primaryTypographyProps={{
            color: 'secondary'
          }}
        />
      </StyledListItemButton>
    )

  const listWithoutIcon = (
    <StyledListItemButton disableRipple>
      <ListItemText
        disableTypography
        primary={info.name}
        primaryTypographyProps={{
          color: 'secondary'
        }}
        sx={{ marginLeft: '32px' }}
      />
    </StyledListItemButton>
  )

  return (
    <NavLink to={info.path} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
      <ListItem key={info.name} sx={{ color: palette.gray, paddingX: 0, '&:hover': { color: palette.gray } }}>
        {info.icon ? listIcon : listWithoutIcon}
      </ListItem>
    </NavLink>
  )
}
