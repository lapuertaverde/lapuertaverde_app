import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react'

import { AgGridReact } from 'ag-grid-react' // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css' // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css' // Optional theme CSS

const GruposDeConsumo = ({ consumerGroup }) => {
  const ref = useRef()

  const columnDefs = [
    { field: 'name', filter: true, rowDrag: true },
    { field: 'address', filter: true },
    { field: 'phone' },
    { field: 'monthOrder', type: ['dateColumn'] }
  ]

  const defaultColDef = useMemo(() => ({
    editable: true,
    sortable: true,
    filter: true,
    resizable: true
  }))

  const cellClickedListener = useCallback((event) => {
    console.log('cellClicked', event)
  }, [])

  const cellEditingStopped = useCallback((event) => {
    console.log('cellEditingStopped', event)
  }, [])

  return (
    consumerGroup && (
      <div className="ag-theme-alpine-dark" style={{ width: '100%', height: '100%' }}>
        <AgGridReact
          className="custom-theme"
          {...{ ref, columnDefs, defaultColDef }}
          rowData={consumerGroup.consumers} // Row Data for Rows
          animateRows={true} // Optional - set to 'true' to have rows animate when sorted
          rowSelection="multiple" // Options - allows click selection of rows
          onCellClicked={cellClickedListener} // Optional - registering for Grid Event
          onCellEditingStopped={cellEditingStopped}
          rowDragManaged={true}
          rowDragMultiRow={true}
        />
      </div>
    )
  )
}
export default GruposDeConsumo
