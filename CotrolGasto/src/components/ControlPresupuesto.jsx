import { useEffect, useState } from "react";
import { formatearPresupuesto } from "./helpers";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const ControlPresupuesto = ({
  presupuesto,
  setPresupuesto,
  gastos,
  setGastos,
  setIsValidPresupuesto,
  setGastosFiltrados,
  setFiltro

}) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);
  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => Number(gasto.cantidad) + total,
      0
    );
    const totalDisponible = presupuesto - totalGastado;

    // Calcular porcentaje gastado
    const nuevoPorcentaje = (
      ((presupuesto - totalDisponible) / presupuesto) *
      100
    ).toFixed(2);

    setDisponible(totalDisponible);
    setGastado(totalGastado);
    setPorcentaje(nuevoPorcentaje);
  }, [gastos]);

  const handleResetApp = () => {
    const resultado=confirm('¿Deseas reiniciar la app?');

    if (resultado) {
      setGastado(0);
      setPresupuesto(0);
      setGastos([]);
      setIsValidPresupuesto(false);
      setGastosFiltrados([]);
      setFiltro('')

    }
  }
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          value={porcentaje}
          styles={buildStyles({
            pathColor: porcentaje > 100 ? "red" : "#3b82f6",
            trailColor: "#F5f5f5",
            textColor: porcentaje > 100 ? "red" : "#3b82f6",
            pathTransitionDuration: 1.0,
          })}
          text={`${porcentaje}% Gastado`}
        />
      </div>
      <div className="contenido-presupuesto">
        <button className="reset-app" type='button' onClick={handleResetApp}>Reset App</button>
        <p>
          <span>Presupuesto: </span>
          {formatearPresupuesto(presupuesto)}
        </p>
        <p className={`${disponible < 0 ?'negativo' : ""}`}>
          <span>Disponible: </span>
          {formatearPresupuesto(disponible)}
        </p>
        <p>
          <span>Gastado: </span>
          {formatearPresupuesto(gastado)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
