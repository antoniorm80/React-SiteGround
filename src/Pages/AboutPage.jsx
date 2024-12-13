import { useContext } from "react";
import { UsuarioContext } from "./context/UsuarioContext";

export const AboutPage = () => {
  const { usuario } = useContext(UsuarioContext);

  return (
    <>
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Tecnología</th>
              <th scope="col">Correo electrónico</th>
              <th scope="col">Redes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{usuario.nombre}</th>
              <td>{usuario.tecnologia}</td>
              <td>{usuario.email}</td>
              <td>{usuario.redes}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
