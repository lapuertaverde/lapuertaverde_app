import Grid from '../../../../../components/Grid/Grid'

import { headerClass } from './gruposDeConsumo.module.scss'

import { patchOnStopCellEditing } from '../../../../../utils/gridUtils'

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

  const handleCellEditingStopped = (e) =>
    patchOnStopCellEditing(e, ['name', 'phone', 'address'], setAlert)

  return <Grid {...{ gridData, columns, handleCellClick, handleCellEditingStopped }} />
}

export default GruposDeConsumo
