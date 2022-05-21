import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Error from "./Error";
import useSelectMonedas from "../Hooks/useSelectMonedas";
import { monedas } from "../data/monedas";
const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  text-align: center;
  margin-top: 20px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;
const Formulario = ({ setMonedas }) => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);
  const [moneda, SelectMonedas] = useSelectMonedas("Elije Tu Moneda", monedas,'monedas');
  const [criptoMoneda, SelectCriptoMoneda] = useSelectMonedas(
    "Elije tu Criptomoneda",
    criptos,'criptoMoneda'
  );
  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      const arrayCriptos = resultado.Data.map((cripto) => {
        const objetoCoin = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };
        return objetoCoin;
      });
      setCriptos(arrayCriptos);
    };
    consultarAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([moneda, criptoMoneda].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    setMonedas({
      moneda,
      criptoMoneda,
    });
  };

  return (
    <>
      {error && <Error>Todos Los campos son Obligatorios</Error>}
      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCriptoMoneda />
        <InputSubmit type="submit" value="cotizar" />
      </form>
    </>
  );
};

export default Formulario;
