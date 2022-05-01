import { useEffect, useState } from "react";
import Gasto from "./Gasto";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { formatearPresupuesto } from "./helpers/index";
const Estadistica = ({
  gastos,
  presupuesto,
  filtro,
  setGastoEditar,
  eliminarGasto,
  setGastosFiltrados,
  gastosFiltrados,
  gastosActualizar,
}) => {
  const [percent, setPercent] = useState(0);
  const [gastadoIndividual, setGastadoInvibidual] = useState(0);

  useEffect(() => {
    //filtra los gastos por categoria cuando se borra para actualizarlos
    const gastosFiltroNuevos = gastos.filter((gasto) => gasto.categoria === filtro);
    setGastosFiltrados(gastosFiltroNuevos);
  }, [gastos]);

  useEffect(() => {
    //suma los gastos por categoria
    const totalGastado = gastosFiltrados.reduce(
      (total, gasto) => Number(gasto.cantidad) + total,
      0
    );
    // Calcular porcentaje gastado curculo individual
    const PorcentajeN = ((totalGastado / presupuesto) * 100).toFixed(2);
    setGastadoInvibidual(totalGastado);
    setPercent(PorcentajeN);
  }, [gastosFiltrados]);

  return (
    <>
    {/* Controla la visibilidad de la grafica de categoria */}
      {percent > 0 ? (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
          <div>
            <CircularProgressbar
              value={percent}
              styles={buildStyles({
                pathColor: percent > 100 ? "red" : "#3b82f6",
                trailColor: "#F5f5f5",
                textColor: percent > 100 ? "red" : "#3b82f6",
                pathTransitionDuration: 1.0,
              })}
              text={`${percent}% Gastado`}
            />
          </div>
          <div className="contenido-presupuesto">
            <p>
              <span>Categoria: </span>
              {filtro.toString().toUpperCase()}
            </p>
            <p>
              <span>Gastado: </span>
              {formatearPresupuesto(gastadoIndividual)}
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
      <br />
      <br />
      <br />
      <br />
      <div>
        {gastosFiltrados.map((gasto) => (
          <Gasto
            key={gasto.id}
            gasto={gasto}
            setGastoEditar={setGastoEditar}
            eliminarGasto={eliminarGasto}
            gastosActualizar={gastosActualizar}
          />
        ))}
      </div>
    </>
  );
};

export default Estadistica;
