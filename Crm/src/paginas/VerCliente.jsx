import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const VerCliente = () => {
  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {
        const url = `http://localhost:4000/clientes/${id}`;
        const respuesta = await fetch(url);

        const resultado = await respuesta.json();

        setCliente(resultado);
      } catch (error) {
        console.log(error);
      }
      setCargando(!cargando);
    };
    obtenerClienteAPI();
  }, []);

  return cargando ? (
    <Spinner />
  ) : Object.keys(cliente).length === 0 ? (
    <p>Ningun Resultado</p>
  ) : (
    <div>
      {cargando ? (
        "cargando..."
      ) : (
        <>
          <h1 className="font-black text-2xl text-blue-900">
            Información cliente:{cliente.nombre}
          </h1>
          <p className="mt-3">Detalles</p>

          <p className="text-2xl text-gray-600 uppercase mt-10">
            <span className="text-gray-800 uppercase font-bold">Cliente: </span>
            {cliente.nombre}
          </p>
          <p className="text-2xl text-gray-600 uppercase mt-4">
            <span className="text-gray-800  uppercase font-bold">
              Empresa:{" "}
            </span>
            {cliente.empresa}
          </p>
          <p className="text-2xl text-gray-600 uppercase mt-4">
            <span className="text-gray-800 uppercase font-bold">Email: </span>
            {cliente.email}
          </p>
          {cliente.empresa && (
            <p className="text-2xl text-gray-600 uppercase mt-4">
              <span className="text-gray-800 uppercase font-bold">
                Telefono:{" "}
              </span>
              {cliente.tel}
            </p>
          )}

          {cliente.notas && (
            <p className="text-2xl text-gray-600 uppercase mt-4">
              <span className="text-gray-800 uppercase font-bold">Notas: </span>
              {cliente.notas}
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default VerCliente;
