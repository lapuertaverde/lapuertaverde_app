import { useCallback } from 'react'
import Grid from '../../../../../components/Grid/Grid'

import { headerClass } from './gruposDeConsumo.module.scss'
import { toast } from 'react-toastify'
import { patch } from '../../../../../services/APIServices'

const GruposDeConsumo = ({ consumerGroups, setAlert }) => {
  const gridData = consumerGroups
    ?.map((group) =>
      group.consumers.map((consumer) => ({
        groupName: group.name,
        ...consumer,
        castSheets: group.castSheets
      }))
    )
    .flat()

  const columns = [
    {
      headerName: 'Grupos de Consumo',
      headerClass: headerClass,

      children: [
        {
          field: 'groupName',
          flex: 2,
          editable: false
        },
        { field: 'name', filter: true, rowDrag: true, flex: 2 },
        { field: 'address', filter: true, flex: 2 },
        { field: 'phone' },
        { field: 'monthOrder', type: ['dateColumn'] }
      ]
    }
  ]

  const handleCellClick = (event) => {
    // console.log('cellClicked', event)
  }

  const handleCellEditingStopped = useCallback((e) => {
    const {
      node,
      data,
      oldValue,
      newValue,
      column: { colId }
    } = e
    const { _id } = data

    if (!newValue && ['name', 'address', 'phone'].includes(colId)) {
      setAlert({
        open: true,
        title: 'CAMPO OBLIGATORIO',
        message: `El campo ${colId} es obligatorio `,
        type: 'error'
      })
      return node.setData({ ...data, [colId]: oldValue })
    }
    if (oldValue !== newValue)
      patch(`consumer/${_id}`, { [colId]: newValue })
        .then(() => toast.success('Usuario actualizado correctamente!'))
        .catch((error) => {
          setAlert({
            open: true,
            title: `Error actualizando el perfil consumidor de ${data.name} `,
            message: error.message,
            type: 'error'
          })
        })
  })

  return <Grid {...{ gridData, columns, handleCellClick, handleCellEditingStopped }} />
}

export default GruposDeConsumo
