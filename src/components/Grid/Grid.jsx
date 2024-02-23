import PropTypes from 'prop-types'

import { useMemo, useCallback } from 'react'
import Loading from '../../components/Loading/Loading'

import { AgGridReact } from 'ag-grid-react' // the AG Grid React Component
import 'ag-grid-community/styles/ag-grid.css' // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css' // Optional theme CSS
import { forwardRef } from 'react'

const Grid = forwardRef(
  (
    {
      gridData,
      columns,
      columnsConf,
      handleCellClick,
      handleCellEditingStopped,
      rowSelection,
      rowDragManaged,
      rowDragMultiRow,
      animateRows
    },
    gridRef
  ) => {
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

    const dataTypeDefinitions = useMemo(() => {
      return {
        date: {
          baseDataType: 'dateString',
          extendsDataType: 'dateString',
          valueParser: (params) => {
            // console.log(params)
            return params.newValue != null && params.newValue.match('\\d{2}/\\d{2}/\\d{4}')
              ? params.newValue
              : null
          },

          valueFormatter: (params) => {
            //console.log(params)
            return params.value == null ? '' : new Date(params.value).toLocaleDateString()
          },

          dataTypeMatcher: (value) => {
            //console.log(value)
            return typeof value === 'string' && !!value.match('\\d{2}/\\d{2}/\\d{4}')
          },

          dateParser: (value) => {
            if (value == null || value === '') {
              return undefined
            }
            const dateParts = value.split('/')
            // console.log(dateParts)
            return dateParts.length === 3
              ? new Date(parseInt(dateParts[0]), parseInt(dateParts[1]) - 1, parseInt(dateParts[2]))
              : undefined
          },

          dateFormatter: (value) => {
            if (value == null) {
              return undefined
            }

            //console.log(value)

            const date = String(value.getDate())
            const month = String(value.getMonth() + 1)
            return `${date.length === 1 ? '0' + date : date}/${
              month.length === 1 ? '0' + month : month
            }/${value.getFullYear()}`
          }
        }
      }
    }, [])

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

    return gridData?.length > 0 ? (
      <div className="ag-theme-alpine-dark" style={{ width: '100%', height: '100%' }}>
        <AgGridReact
          ref={gridRef}
          className="custom-theme"
          rowData={gridData}
          {...{
            columnDefs: columns,
            defaultColDef,
            columnTypes,
            rowSelection,
            rowDragManaged,
            rowDragMultiRow,
            animateRows,
            dataTypeDefinitions
          }}
          onCellClicked={cellClickedListener}
          onCellEditingStopped={cellEditingStopped}
        />
      </div>
    ) : (
      <Loading />
    )
  }
)

Grid.displayName = 'Grid'

Grid.propTypes = {
  rowDragManaged: PropTypes.bool,
  rowDragMultiRow: PropTypes.bool,
  animateRows: PropTypes.bool
}

Grid.defaultProps = {
  rowDragManaged: true,
  rowDragMultiRow: true,
  animateRows: true
}

export default Grid
