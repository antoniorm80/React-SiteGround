import { useContext, useEffect, useRef } from "react";
import { useForm } from "../hooks/useForm";
import { UsuarioContext } from "./context/UsuarioContext";

export const ContactPage = () => {

  const focusRef = useRef();
   const initialForm=  {
      nombre: '',
      tecnologia: '',
      email: '',
      redes: '',
    }
  
  const { formState, nombre, tecnologia, email, redes, onInputChange} = useForm(initialForm) 
  const { setUsuario } = useContext(UsuarioContext);

  const handleSubmit = (e) =>{
    e.preventDefault()
    // console.log(formState)
    setUsuario(formState)
  }

  useEffect(() => {
    focusRef.current.focus()
  }, [])
  

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              value={nombre}
              onChange={onInputChange}
              ref={focusRef}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="tecnologia" className="form-label">
              Tecnología
            </label>
            <input
              type="text"
              className="form-control"
              name="tecnologia"
              value={tecnologia}
              onChange={onInputChange}
              
            />            
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo electrónico
            </label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={email}
              onChange={onInputChange}
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor="redes" className="form-label">
              Redes
            </label>
            <input
              type="text"
              className="form-control"
              name="redes"
              value={redes}
              onChange={onInputChange}
              
            />
            
          </div>
          <button type="submit" className="btn btn-primary">
            Registrar Usuario
          </button>
        </form>
      </div>
    </>
  );
};
