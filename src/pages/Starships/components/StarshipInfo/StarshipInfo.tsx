import { Grid, Table, TableBody, TableCell, TableRow, Typography, styled } from '@mui/material'

const StyledTypoTitle = styled(Typography)({
  color: 'rgba(28, 30, 34, 0.8) !important',
  fontSize: '12px !important'
})

const StyledTypoName = styled(Typography)({
  color: '#1C1E22 !important',
  fontSize: '16px !important'
})

const StyledTableCellTitle = styled(TableCell)({
  borderBottom: '0',
  padding: '0'
})

const StyledTableCell = styled(TableCell)({
  borderBottom: '0',
  padding: '0 0 28px 0'
})

interface StarshipInfoProps {
  image: string
  class: string
  length: string
  model: string
  speed: string
  manufacturer: string
  capacity: string
  crew: number
  passengers: number
  classStarship: number
  pilots: string
}

export default function StarshipInfo({ info }: { info: StarshipInfoProps }) {
  return (
    <Grid item xs={6}>
      <Table>
        <TableBody>
          <TableRow>
            <StyledTableCellTitle>
              <StyledTypoTitle>Starship Class</StyledTypoTitle>
            </StyledTableCellTitle>
            <StyledTableCellTitle>
              <StyledTypoTitle>Length</StyledTypoTitle>
            </StyledTableCellTitle>
          </TableRow>
          <TableRow>
            <StyledTableCell>
              <StyledTypoName>{info.class}</StyledTypoName>
            </StyledTableCell>
            <StyledTableCell>
              <StyledTypoName>{info.length}</StyledTypoName>
            </StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCellTitle>
              <StyledTypoTitle>Model</StyledTypoTitle>
            </StyledTableCellTitle>
            <StyledTableCellTitle>
              <StyledTypoTitle>Max Speed</StyledTypoTitle>
            </StyledTableCellTitle>
          </TableRow>
          <TableRow>
            <StyledTableCell>
              <StyledTypoName>{info.model}</StyledTypoName>
            </StyledTableCell>
            <StyledTableCell>
              <StyledTypoName>{info.speed}</StyledTypoName>
            </StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCellTitle>
              <StyledTypoTitle>Manufacturer</StyledTypoTitle>
            </StyledTableCellTitle>
            <StyledTableCellTitle>
              <StyledTypoTitle>Cargo Capacity</StyledTypoTitle>
            </StyledTableCellTitle>
          </TableRow>
          <TableRow>
            <StyledTableCell>
              <StyledTypoName>{info.manufacturer}</StyledTypoName>
            </StyledTableCell>
            <StyledTableCell>
              <StyledTypoName>{info.capacity}</StyledTypoName>
            </StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCellTitle>
              <StyledTypoTitle>Crew</StyledTypoTitle>
            </StyledTableCellTitle>
            <StyledTableCellTitle>
              <StyledTypoTitle>Passengers</StyledTypoTitle>
            </StyledTableCellTitle>
          </TableRow>
          <TableRow>
            <StyledTableCell>
              <StyledTypoName>{info.crew}</StyledTypoName>
            </StyledTableCell>
            <StyledTableCell>
              <StyledTypoName>{info.passengers}</StyledTypoName>
            </StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCellTitle>
              <Typography fontWeight='600'>Class 1.0</Typography>
            </StyledTableCellTitle>
            <StyledTableCellTitle>
              <StyledTypoTitle>Pilots</StyledTypoTitle>
            </StyledTableCellTitle>
          </TableRow>
          <TableRow>
            <StyledTableCell>
              <StyledTypoName>{info.classStarship}</StyledTypoName>
            </StyledTableCell>
            <StyledTableCell>
              <StyledTypoName>{info.pilots}</StyledTypoName>
            </StyledTableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Grid>
  )
}
