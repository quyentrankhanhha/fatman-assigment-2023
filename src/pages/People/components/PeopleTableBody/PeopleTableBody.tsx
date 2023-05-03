import { Checkbox, TableCell, TableRow } from '@mui/material'
import palette from 'src/constants/palette'
import { Data } from 'src/types/people.type'
import convertTime from 'src/utils/convertTime'

interface PeopleTableBodyProps {
  row: Data
  labelId: string
}

export default function PeopleTableBody(props: PeopleTableBodyProps) {
  const { row, labelId } = props
  return (
    <>
      <TableRow hover tabIndex={-1} key={row.name} sx={{ cursor: 'pointer' }}>
        <TableCell sx={{ width: '42px', padding: '0' }}>
          <Checkbox
            color='primary'
            inputProps={{
              'aria-labelledby': labelId
            }}
          />
        </TableCell>
        <TableCell component='th' id={labelId} scope='row' sx={{ padding: '16px', width: 'auto' }}>
          {row.name}
        </TableCell>
        <TableCell sx={{ padding: '16px', width: 'auto' }}>{row.height}</TableCell>
        <TableCell sx={{ padding: '16px', width: 'auto' }}>{row.weight}</TableCell>
        <TableCell
          sx={{
            color: `${palette.blue}`,
            fontWeight: '600',
            textDecorationLine: 'underline',
            padding: '16px',
            width: 'auto',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap'
          }}
        >
          {row.starship}
        </TableCell>
        <TableCell sx={{ padding: '16px', width: 'auto' }}>{convertTime(row.created)}</TableCell>
      </TableRow>
    </>
  )
}
