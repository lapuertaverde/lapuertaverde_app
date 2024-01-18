import {string, array, bool,number,func} from 'prop-types'


/**
 * Primeros pasos componente button 
 * @param {*} param0 
 * @returns 
 */

export const CustomButton = ({ texto, onClick, estilo }) => {
  return (
    <button onClick={onClick} style={estilo}>
      {texto}
    </button>
  )
}

CustomButton.propTypes = {
  texto: string.isRequired,
  onClick: func
}

CustomButton.defaultProps = {


  disabled: false,
  required: false,

}



