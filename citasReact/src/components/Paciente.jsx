const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handlerDelete = () => {
    const respuesta = confirm("Deseas eliminar este paciente?");
    if (respuesta) {
      eliminarPaciente(id);
    }
  };
  return (
    <>
      <div className="mx-3 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: <span className=" font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario:{" "}
          <span className=" font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: <span className=" font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha Alta: <span className=" font-normal normal-case">{fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Sintomas: <span className=" font-normal normal-case">{sintomas}</span>
        </p>
        <div className="flex justify-between mt-10">
          <button
            type="submit"
            className=" bg-indigo-600 hover:bg-indigo-700 btn-eliminarDelete"
            onClick={() => setPaciente(paciente)}
          >
            Editar
          </button>
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 btn-eliminarDelete"
            onClick={handlerDelete}
          >
            Eliminar
          </button>
        </div>
      </div>
    </>
  );
};

export default Paciente;
