import { useEffect, useState } from "react";

export const HomePage = () => {
  const [counter, setCounter] = useState(0);

  //si el useEffect no tiene dependencias se ejecuta al iniciar/montar el componente
  useEffect(() => {
    //esto es el codigo que quiero ejecutador
    console.log("HomePage montado");

    //return significa lo que va ejecutar cuando el componente muera/desmonte
    return () => {
      console.log("HomePage desmontado");
    };
  }, []);

  //actualice algo dependiendo de la variable counter
  useEffect(() => {
    console.log("Update component");
    return () => {
      setCounter(0);
    };
  }, [counter]);

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +1
      </button>
    </div>
  );
};
