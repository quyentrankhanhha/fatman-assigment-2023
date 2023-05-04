import { Box, Table, TableBody, TableContainer, TableFooter, TablePagination, TableRow } from '@mui/material'
import { useState, useMemo, useContext } from 'react'
import { v4 as uuid } from 'uuid'

import people from 'src/constants/people'
import { Data, Order } from 'src/types/people.type'
import PeopleTableHead from '../PeopleTableHead'
import palette from 'src/constants/palette'
import PeopleTablePagination from '../PeopleTablePagination'
import PeopleTableBody from '../PeopleTableBody'
import { SearchContext } from 'src/contexts/search.content'

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) {
      return order
    }
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}

export default function PeopleTable() {
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<keyof Data>('created')
  const [page, setPage] = useState(0)
  const searchContext = useContext(SearchContext)
  const rows = people.length
  const rowsPerPage = 5

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const visibleRows = useMemo(
    () => stableSort(people, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage]
  )

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const searchResult = people.filter((person) => {
    if (
      person.name.toLowerCase().includes(searchContext.query.toLowerCase()) ||
      String(person.height).includes(searchContext.query) ||
      String(person.weight).includes(searchContext.query) ||
      person.starship.toLowerCase().includes(searchContext.query.toLowerCase())
    ) {
      return person
    }
    return null
  })

  const normalTable = (
    <>
      <TableBody
        sx={{
          '& .MuiTableCell-root': {
            border: `1px solid ${palette.gray}`
          }
        }}
      >
        {visibleRows.map((row) => {
          const labelId = `table-checkbox-${uuid()}`
          return <PeopleTableBody key={labelId} row={row} labelId={labelId} />
        })}
      </TableBody>
      <TableFooter sx={{ bgcolor: '#f7f7fa' }}>
        <TableRow>
          <TablePagination
            colSpan={6}
            count={rows}
            rowsPerPage={5}
            page={page}
            onPageChange={handleChangePage}
            ActionsComponent={PeopleTablePagination}
            labelRowsPerPage={''}
            rowsPerPageOptions={[]}
            sx={{
              border: '0'
            }}
          />
        </TableRow>
      </TableFooter>
    </>
  )

  const resultTable = (
    <TableBody
      sx={{
        '& .MuiTableCell-root': {
          border: `1px solid ${palette.gray}`
        }
      }}
    >
      {searchResult.map((row) => {
        const labelId = `table-checkbox-${uuid()}`
        return <PeopleTableBody key={labelId} row={row} labelId={labelId} />
      })}
    </TableBody>
  )

  return (
    <Box sx={{ width: '100%' }}>
      <TableContainer>
        <Table
          sx={{
            minWidth: '750',
            bgcolor: '#fff',

            tableLayout: 'fixed'
          }}
          aria-labelledby='table title'
          size='small'
        >
          <PeopleTableHead order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
          {searchContext.query != '' ? resultTable : normalTable}
        </Table>
      </TableContainer>
    </Box>
  )
}
