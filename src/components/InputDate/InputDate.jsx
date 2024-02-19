import { useId } from 'react'
import { string, bool, func, oneOfType, instanceOf, oneOf, array } from 'prop-types'
import { FlexLayout } from '../../layouts/FlexLayout/FlexLayout'
import { LabelCustom } from '../Label/LabelCustom'
import { Controller } from 'react-hook-form'
import { inputDateSchema } from '../../utils/validationSchemas'
import { es, enGB } from 'date-fns/locale'
import { getDay } from 'date-fns'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { dateFormat, formatDateToDDMMYYYY } from '../../utils/dateFormat'
import { Tooltip } from '../Tooltip/Tooltip'

//! para usar minDate, maxDate, excludeDates y excludeDateIntervals hay que usar la funcion que transforma las fechas
//! ------------- DATEFORMAT de utils ------------- y meterle la fecha desdeada asi dateFormat("02/02/2024")

//** EJEMPLO
//* excludeDates: [dateFormat('01/02/2024'), dateFormat('02/02/2024')] */
//** excludeDateIntervals: [{ start: dateFormat('26/01/2024'), end: dateFormat('26/02/2024') }] */

export const InputDate = ({
  name,
  label,
  required,
  maxDate,
  minDate,
  filterWeekDay, //! --> al ponerse en true no deja seleccionar findes de semana
  language, //! --> lenguaje
  excludeDates, //! --> Array con las fechas a excluir
  excludeDateIntervals, //! --> Array de object {start: , end : } con claves start y end
  readOnly,
  disabled,
  onChange,
  flexDirection,
  justifyContent,
  alignItems,
  flexWrap,
  width,
  height,
  background,
  gap,
  padding,
  fontSize,
  color,
  borderB
}) => {
  const { id } = useId()

  const isWeekday = (date) => {
    const day = getDay(date)
    return day !== 0 && day !== 6
  }

  return (
    <Controller
      {...{ name }}
      rules={inputDateSchema({ label, required, maxDate, minDate })}
      render={({ field, formState: { errors } }) => (
        <FlexLayout flexDirection="column" gap="0.5rem">
          <FlexLayout
            {...{
              flexDirection,
              justifyContent,
              alignItems,
              flexWrap,
              width,
              height,
              background,
              gap,
              padding
            }}
          >
            {label && (
              <LabelCustom {...{ label, htmlFot: id, fontSize, color, borderB, required }} />
            )}
            <Tooltip text={errors?.[name]?.message}>
              <DatePicker
                selected={dateFormat(field.value) || field.value}
                dateFormat="dd/MM/yyyy"
                showIcon
                toggleCalendarOnIconClick
                isClearable
                onChange={(e) => {
                  if (typeof onChange === 'function') onChange(formatDateToDDMMYYYY(e))
                  field.onChange(formatDateToDDMMYYYY(e))
                }}
                filterDate={filterWeekDay && isWeekday}
                locale={language}
                {...{ disabled, maxDate, minDate, readOnly, excludeDates, excludeDateIntervals }}
              />
            </Tooltip>
          </FlexLayout>
        </FlexLayout>
      )}
    />
  )
}

InputDate.propTypes = {
  name: string,
  label: string,
  required: bool,
  maxDate: oneOfType([func, string, instanceOf(Date)]),
  minDate: oneOfType([func, string, instanceOf(Date)]),
  filterWeekDay: bool,
  language: oneOf([es, enGB]),
  excludeDates: array,
  excludeDateIntervals: array,
  readOnly: bool,
  disabled: bool,
  onChange: func,
  fwidth: string,
  height: string,
  background: string,
  gap: string,
  flexDirection: string,
  justifyContent: string,
  alignItems: string,
  flexWrap: string,
  padding: string,
  fontSize: string,
  color: string,
  borderB: bool
}

InputDate.defaultProps = {
  name: 'date',
  required: true,
  minDate: new Date(),
  filterWeekDay: true,
  language: es,
  disabled: false
}
