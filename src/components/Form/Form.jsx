import React from 'react'
import './FormStyles.css'

const Form = () => {
  return (
    
    <div className='form'>
      <div className="explicacion">
        <p>Si tienes dudas o inquietudes por favor rellena el formulario , nos pondremos en contacto contigo lo mas pronto!</p>
      </div>
        <form>
            <label>Tu Nombre</label>
            <input type="text" />
            <label>Tu Correo</label>
            <input type="email" />
            <label>Asunto</label>
            <input type="text" />
            <label>¿Que Pregunta Tienes?</label>
            <textarea rows='6' placeholder='Escribe tu pregunta aqui' />
            <button className='btn'> Submit</button>
        </form>
    </div>
  )
}

export default Form