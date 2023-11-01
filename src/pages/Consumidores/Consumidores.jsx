import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react'

import { AgGridReact } from 'ag-grid-react' // the AG Grid React Component
import 'ag-grid-community/styles/ag-grid.css' // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css' // Optional theme CSS
import { patch } from '../../services/APIServices'

const Consumidores = ({ consumers }) => {
  const ref = useRef()

  const columnDefs = [
    { field: 'consumerGroup', filter: true, width: 250, rowDrag: true },
    { field: 'name', filter: true },
    { field: 'address', filter: true },
    { field: 'CP' },
    { field: 'phone' },
    { field: 'email' },
    { field: 'dni' },
    { field: 'KgByDefault' },
    { field: 'active' },
    { field: 'favorites' },
    { field: 'discarded' }
  ]

  const columnTypes = useMemo(
    () => ({
      nonEditableColumn: { editable: false },
      dateColumn: {
        // specify we want to use the date filter
        filter: 'agDateColumnFilter',
        // add extra parameters for the date filter
        filterParams: {
          // provide comparator function
          comparator: (filterLocalDateAtMidnight, cellValue) => {
            // In the example application, dates are stored as dd/mm/yyyy
            // We create a Date object for comparison against the filter date
            const dateParts = cellValue.split('/')
            const day = Number(dateParts[0])
            const month = Number(dateParts[1]) - 1
            const year = Number(dateParts[2])
            const cellDate = new Date(year, month, day)
            // Now that both parameters are Date objects, we can compare
            if (cellDate < filterLocalDateAtMidnight) {
              return -1
            } else if (cellDate > filterLocalDateAtMidnight) {
              return 1
            } else {
              return 0
            }
          }
        }
      }
    }),
    []
  )

  const defaultColDef = useMemo(() => ({
    editable: true,
    sortable: true,
    filter: true,
    resizable: true
  }))

  const cellClickedListener = useCallback((event) => {
    console.log('cellClicked', event)
  }, [])

  const cellEditingStopped = useCallback(({ data, oldValue, newValue, column: { colId } }) => {
    const { _id } = data

    patch(`consumer/${_id}`, { [colId]: newValue })
      .then((res) => console.log('res', res))
      .catch((error) => console.log(error))
  }, [])

  return (
    consumers.length > 0 && (
      <div className="ag-theme-alpine-dark" style={{ width: '100%', height: '100%' }}>
        <AgGridReact
          {...{ ref, columnDefs, defaultColDef, columnTypes }}
          className="custom-theme"
          rowData={consumers}
          animateRows={true}
          // rowSelection="multiple" // Options - allows click selection of rows
          // onCellClicked={cellClickedListener}
          onCellEditingStopped={cellEditingStopped}
          rowDragManaged={true}
          rowDragMultiRow={true}
        />
      </div>
    )
  )
}
export default Consumidores
