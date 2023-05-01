import { Collapse, List } from '@mui/material'
import { v4 as uuid } from 'uuid'
import StyledListItem from '../StyledListItem'
import { InitialStateI } from 'src/types/listItem.type'

interface NestedListItemProps {
  subMenu: { name: string; path: string }[]
  openSubMenu: InitialStateI
  name: string
}
export default function NestedListItem(props: NestedListItemProps) {
  const { subMenu, openSubMenu, name } = props
  return (
    <Collapse in={openSubMenu[name]} timeout='auto' unmountOnExit>
      <List component='div' disablePadding>
        {subMenu.map((item) => (
          <StyledListItem info={item} key={uuid()} />
        ))}
      </List>
    </Collapse>
  )
}
