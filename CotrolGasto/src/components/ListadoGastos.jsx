import Estadistica from "./Estadistica";
import Gasto from "./Gasto";
const ListadoGastos = ({
  gastos,
  setGastoEditar,
  eliminarGasto,
  filtro,
  gastosFiltrados,
  presupuesto,
  setGastosFiltrados,
  gastosActualizar,
  setFiltro

}) => {
  return (
    <div className="listado-gastos contenedor">
      {filtro ? (
        <>
          <h2>
            {gastosFiltrados.length > 0
              ? "Gastos"
              : "Ningun Gasto En Esta Categoria"}
          </h2>
          <Estadistica
            presupuesto={presupuesto}
            gastos={gastos}
            filtro={filtro}
            setGastoEditar_={setGastoEditar}
            eliminarGasto={eliminarGasto}
            setGastosFiltrados={setGastosFiltrados}
            gastosFiltrados={gastosFiltrados}
            gastosActualizar={gastosActualizar}
            setFiltro={setFiltro}

          />
        </>
      ) : (
        <>
          <h2>{gastos.length ? "Gastos" : "Ningun Gasto"}</h2>
          {gastos.map((gasto) => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              gastosActualizar={gastosActualizar}
              eliminarGasto={eliminarGasto}
            />
            ))
            }
        </>
      )}
    </div>
  );
};

export default ListadoGastos;
