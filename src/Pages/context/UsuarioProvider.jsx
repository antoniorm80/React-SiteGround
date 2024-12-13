import { useState } from 'react'
import { UsuarioContext } from './UsuarioContext'

// const usuario = {
//     nombre: 'Antonio Rivera',
//     tecnologia: 'React',
//     email: 'antoniorm80@hotmail.com',
//     redes: 'antoniorm80'
// }

export const UsuarioProvider = ({children}) => {

  const [usuario, setUsuario] = useState({})
  return (
    // Cuando se pasa un objeto dentro de otro objeto va con doble paréntesis {{}}
    <UsuarioContext.Provider value={{usuario, setUsuario}}>
        {children}
    </UsuarioContext.Provider>
  )
}
