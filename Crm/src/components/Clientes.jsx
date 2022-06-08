import { useNavigate } from "react-router-dom";
const Clientes = ({ cliente, handleEliminar }) => {
  const navigate = useNavigate();
  const { nombre, empresa, email, tel, notas, id } = cliente;
  return (
    <tr className="border-b">
      <td className="p-3">{nombre}</td>
      <td className="p-3">
        <p className="text-gray-800 uppercase font-bold">
          <span> Email:{email}</span>
        </p>
        <p className="text-gray-800 uppercase font-bold">
          <span> Telefono:{tel}</span>
        </p>
      </td>
      <td className="p-3">{empresa}</td>

      <td className="p-3">
        <button
          type="button"
          className="bg-yellow-500 hover:bg-yellow-700 btn"
          onClick={() => navigate(`/clientes/${id}`)}
        >
          Ver
        </button>

        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-700 btn"
          onClick={() => navigate(`/clientes/editar/${id}`)}
        >
          Editar
        </button>

        <button
          type="button"
          className="bg-red-600 hover:bg-red-700 block btn"
          onClick={() => handleEliminar(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Clientes;
