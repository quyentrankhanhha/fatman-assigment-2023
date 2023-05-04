import { FullPeopleData, Order } from 'src/types/people.type'
import { Box, Checkbox, TableCell, TableHead, TableRow, TableSortLabel, Typography } from '@mui/material'
import { visuallyHidden } from '@mui/utils'
import table from 'src/constants/table'
import palette from 'src/constants/palette'

interface PeopleTableHeadProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof FullPeopleData) => void
  order: Order
  orderBy: string
}

export default function PeopleTableHead(props: PeopleTableHeadProps) {
  const { order, orderBy, onRequestSort } = props
  const createSortHandler = (property: keyof FullPeopleData | any) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property)
  }

  return (
    <TableHead
      sx={{
        '& .MuiTableCell-root': {
          border: `1px solid ${palette.gray}`
        }
      }}
    >
      <TableRow>
        <TableCell sx={{ width: '42px', padding: '0' }}>
          <Checkbox color='primary' inputProps={{ 'aria-label': 'select checkbox' }} />
        </TableCell>
        {table.headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align='left'
            variant='head'
            sx={{
              color: `${palette.black}`,
              fontWeight: '600',
              padding: '16px'
            }}
          >
            {headCell.sortable ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  '.MuiTableSortLabel-icon': {
                    color: 'rgba(28, 30, 34, 0.5) !important'
                  }
                }}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component='span' sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            ) : (
              <>{headCell.label}</>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
