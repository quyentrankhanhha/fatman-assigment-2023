const table = {
  headCells: [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Name',
      sortable: true
    },
    {
      id: 'height',
      numeric: true,
      disablePadding: false,
      label: 'Height',
      sortable: true
    },
    {
      id: 'weight',
      numeric: true,
      disablePadding: false,
      label: 'Weight',
      sortable: true
    },
    {
      id: 'starship',
      numeric: false,
      disablePadding: false,
      label: 'Starship',
      sortable: false
    },
    {
      id: 'created',
      numeric: false,
      disablePadding: false,
      label: 'Created',
      sortable: true
    }
  ]
} as const
export default table
