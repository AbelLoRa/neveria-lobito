import React from 'react';

function Modal({ title, children, onClose }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        width: '400px',
        maxWidth: '90%',
        padding: '20px',
        position: 'relative'
      }}>
        {/* Botón de cerrar la ventana emergente */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: 'none',
            border: 'none',
            fontSize: '18px',
            cursor: 'pointer'
          }}
        >
          ×
        </button>

        {/* Título */}
        <h3 style={{ marginTop: 0, marginBottom: '20px' }}>{title}</h3>

        {children}
      </div>
    </div>
  );
}

export default Modal;
