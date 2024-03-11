import Grid from '../../../../../components/Grid/Grid'

import { memo, useEffect, useRef, useState } from 'react'
import { patchOnStopCellEditing } from '../../../../../utils/gridUtils'
import { get } from '../../../../../services/APIServices'
import Avatar from '../../../../../components/Avatar/Avatar'

const Consumidores = memo(({ consumers, setAlert }) => {
  const gridRef = useRef('')

  const [products, setProducts] = useState()

  const getImages = ({ value }) => {
    if (value?.length && products) {
      const consumerProducts = value.map((id) => products.filter(({ _id }) => _id === id)).flat()

      return consumerProducts.map(({ image }) => <Avatar src={`${image}`} />)
    } else return ''
  }

  useEffect(() => {
    get('product')
      .then((res) => setProducts(res))
      .catch((error) =>
        setAlert({
          open: true,
          title: 'Error trayendo los Productos',
          message: error.message,
          type: 'error'
        })
      )
  }, [])

  const columns = [
    {
      field: 'name',
      filter: true
    },
    { field: 'address', filter: true },
    { field: 'CP' },
    { field: 'phone' },
    { field: 'email' },
    { field: 'dni' },
    {
      field: 'KgByDefault',

      type: 'number',
      cellStyle: ({ value }) => {
        const commonStyle = { display: 'flex', justifyContent: 'center' }

        if (value <= 5) return { color: 'green', backgroundColor: 'orange', ...commonStyle }

        return {
          color: 'white',
          backgroundColor: 'green',
          ...commonStyle
        }
      }
    },
    {
      field: 'active',
      cellDataType: 'boolean',

      cellStyle: () => ({
        display: 'flex',
        justifyContent: 'center',
        color: 'red'
      })
    },
    {
      field: 'favorites',
      cellStyle: () => ({ display: 'flex', justifyContent: 'center' }),
      cellRenderer: ({ value }) => getImages({ value })
    },
    {
      field: 'discarded',
      cellStyle: () => ({ display: 'flex', justifyContent: 'center' }),
      cellRenderer: ({ value }) => getImages({ value })
    }
  ]

  const handleCellEditingStopped = (e) =>
    patchOnStopCellEditing(
      e,
      ['name', 'address', 'phone', 'KgByDefault', 'email', 'CP', 'dni'],
      setAlert
    )

  return (
    <Grid
      {...{
        ref: gridRef,
        gridData: consumers,
        columns,
        handleCellEditingStopped
      }}
    />
  )
})

Consumidores.displayName = 'Consumidores'

export default Consumidores
