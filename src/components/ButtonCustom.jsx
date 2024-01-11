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


