
const Filtros = ({filtro,setFiltro}) => {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label htmlFor="categoriaFiltro">Filtrar Gastos</label>
          <select
            name="CategoriaFiltro"
            value={filtro}
            onChange={(e) =>{setFiltro(e.target.value)}}
          >
            <option value="todos">--Todas las Categorias--</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="casa">Casa</option>
            <option value="subcripciones">Suscripciones</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filtros;
