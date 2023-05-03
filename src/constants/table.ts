const table = {
  headCells: [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Name'
    },
    {
      id: 'height',
      numeric: true,
      disablePadding: false,
      label: 'Height'
    },
    {
      id: 'weight',
      numeric: true,
      disablePadding: false,
      label: 'Weight'
    },
    {
      id: 'starship',
      numeric: false,
      disablePadding: false,
      label: 'Starship'
    },
    {
      id: 'created',
      numeric: false,
      disablePadding: false,
      label: 'Created'
    }
  ]
} as const

export default table
