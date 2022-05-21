import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import imgCript from "./img/imagen-criptos.png";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";
import PiePagina from "./components/PiePagina";

const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 45px;
  margin-bottom: 20px;
  font-size: 34px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    display: block;
    background-color: #66a2fe;
    margin: 10px auto 0 auto;
  }
`;
const Contenedor = styled.div`
  max-width: 900px;
  width: 90%;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 400px;
  width: 90%;
  height: auto;
  margin: 30px auto 0 auto;
  display: block;
`;
function App() {
  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      const cotizarCripto = async () => {
        setCargando(true);
        setResultado({});
        const { moneda, criptoMoneda } = monedas;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setResultado(resultado.DISPLAY[criptoMoneda][moneda]);
        setCargando(false);
      };
      cotizarCripto();
    }
  }, [monedas]);

  return (
    <Contenedor>
      <Imagen
        src={imgCript}
        alt="Imagenes Criptomonedas"
        width="120px"
        height="120px"
      />
      <div>
        <Heading>Cotiza Criptomonedas Al Instante</Heading>
        <Formulario setMonedas={setMonedas} />
        {cargando && <Spinner />}
        {resultado.PRICE && <Resultado resultado={resultado} />}
        <PiePagina />
      </div>
    </Contenedor>
  );
}

export default App;
