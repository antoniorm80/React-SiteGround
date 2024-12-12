import "./styles/PrimerComponente.css"

// Variable
const string = "Esto es un texto";
const number = 123456;
const array = ["Curso de React", "Youtube", 4, 100000];
const boolean = true;
const funcion = () => 1 + 1;
const objeto = { nombre: "Curso de Javascript", duracion: 4 };
const fecha = new Date();

export const PrimerComponente = () => {
  return (
    <>
      <h1>Variables en JSX</h1>
      <h4>Variables tipo string:</h4> <p>{string}</p>
      <h4>Variables tipo number:</h4> <p>{number}</p>
      <h4>Variables tipo array:</h4> <p>{array}</p>
      <h4>Variables tipo boolean:</h4> <p>{JSON.stringify(boolean)}</p>
      <h4>Variables tipo function:</h4> <p>{funcion()}</p>
      <h4>Variables tipo objeto:</h4> <p>{JSON.stringify(objeto)}</p>
      <h4>Variables tipo fecha:</h4> <p>{JSON.stringify(fecha)}</p>
    </>

    //// Las variables tipo funcion DEBEN de ir entre paréntesis
    // <h1>{ funcion() }</h1>

    //// Las variables tipo objeto y renderizarla
    //   <h1>{ JSON.stringify(fecha) } </h1>
  );
};
