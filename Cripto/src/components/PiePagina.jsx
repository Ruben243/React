import styled from "@emotion/styled";

const Pie = styled.p`
  color: #fff;
  font-family: "Lato", sans-serif;
  text-align: center;
  font-size: 20px;
`;

const PiePagina = () => {
  return (
    <Pie>
      &copy; Proyecto realizado por Ruben-GFP con la API: &copy; Criptocompare
    </Pie>
  );
};

export default PiePagina;
