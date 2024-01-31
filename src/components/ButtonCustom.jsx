import React from 'react';
import PropTypes from 'prop-types';

const ButtonCustom = ({ texto, onClick, estilo, disabled, required }) => {
  return (
    <button onClick={onClick} style={estilo} disabled={disabled} required={required}>
      {texto}
    </button>
  );
};

ButtonCustom.propTypes = {
  texto: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  estilo: PropTypes.object,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

ButtonCustom.defaultProps = {
  disabled: false,
  required: false,
};

export default ButtonCustom;


