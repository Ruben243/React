import styled from "@emotion/styled";

const Resultados = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: flex-start;
  margin-top: 30px;
  justify-content: center;
`;

const Texto = styled.p`
  font-size: 18çpx;
  span {
    font-weight: 700;
  }
`;
const Precio = styled.p`
  font-size: 30px;
  span {
    font-weight: 700;
  }
`;

const Imagen = styled.img`
  display: block;
  width: 120px;
  height: auto;
  margin-right: 10px;
  padding-top: 20px;
`;

const Resultado = ({ resultado }) => {
  const { PRICE, LOWDAY, HIGHDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <Resultados>
      <Imagen
        src={`https://www.cryptocompare.com${IMAGEURL}`}
        alt="Logo critpmoneda"
        width="120px"
        height="120px"
      />
      <div>
        <Precio>
          El Precio es de: <span>{PRICE}</span>
        </Precio>
        <Texto>
          El Precio más alo del día es: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          El Precio más bajo del día es: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          ultima actualizacion: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Resultados>
  );
};

export default Resultado;
