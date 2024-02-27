import Avatar from '../../../../../components/Avatar/Avatar'
import Grid from '../../../../../components/Grid/Grid'
import { patchOnStopCellEditing } from '../../../../../utils/gridUtils'

const Products = ({ products, setAlert }) => {
  const columns = [
    {
      field: 'image',
      filter: true,
      cellStyle: () => ({ display: 'flex', justifyContent: 'center' }),
      cellRenderer: ({ data: { image } }) => {
        return <Avatar src={`${image}`} />
      }
    },
    {
      field: 'name',
      filter: true,
      flex: 2
    },
    { field: 'priceKg', flex: 2, type: 'number' },
    { field: 'description', flex: 6 },
    {
      field: 'availability',
      cellStyle: () => ({ display: 'flex', justifyContent: 'center' })
    }
  ]

  const handleCellEditingStopped = (e) =>
    patchOnStopCellEditing(e, ['name', 'priceKg'], setAlert, 'product', 'Producto Actualizado')

  return (
    <Grid
      {...{
        gridData: products,
        columns,
        handleCellEditingStopped
      }}
    />
  )
}

export default Products
