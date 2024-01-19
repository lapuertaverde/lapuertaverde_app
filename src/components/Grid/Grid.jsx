import { useRef, useMemo, useCallback } from 'react'

import { AgGridReact } from 'ag-grid-react' // the AG Grid React Component
import 'ag-grid-community/styles/ag-grid.css' // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css' // Optional theme CSS

const Grid = ({ gridData, columns, columnsConf, handleCellClick, handleCellEditingStopped }) => {
  const ref = useRef()

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

  const defaultColDef = useMemo(
    () =>
      columnsConf || {
        editable: true,
        sortable: true,
        filter: true,
        resizable: true
      }
  )

  const cellClickedListener = useCallback((e) => {
    if (typeof handleCellClick === 'function') handleCellClick(e)
  }, [])

  const cellEditingStopped = useCallback((e) => {
    if (typeof handleCellEditingStopped == 'function') handleCellEditingStopped(e)
  }, [])

  return (
    gridData?.length > 0 && (
      <div className="ag-theme-alpine-dark" style={{ width: '100%', height: '100%' }}>
        <AgGridReact
          {...{ ref, columnDefs: columns, defaultColDef, columnTypes }}
          className="custom-theme"
          rowData={gridData}
          animateRows={true}
          // rowSelection="multiple" // Options - allows click selection of rows
          onCellClicked={cellClickedListener}
          onCellEditingStopped={cellEditingStopped}
          rowDragManaged={true}
          rowDragMultiRow={true}
        />
      </div>
    )
  )
}
export default Grid
