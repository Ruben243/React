import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente,eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 h-screen overflow-y-scroll ">
      {pacientes && pacientes.length > 0 ? (
        <>
          <h2 className="font-black text-xl text-center">Lista de Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          {pacientes.map((paciente) => {
            return (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            );
          })}
        </>
      ) : (
        <>
          <h2 className="font-black text-xl text-center">
            No hay Pacientes Actualmente
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza Agregando Pacientes{" "}
            <span className="text-indigo-600 font-bold">
              Y Apareceran en este Lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
