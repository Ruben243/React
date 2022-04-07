import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  // state siempre declarado en la parte superior
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  // generarid
  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fechaId = Date.now().toString(36);
    return random + fechaId;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validacion del formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      console.log("Hay al menos un campo vacio");
      setError(true);
      return;
    }
    setError(false);

    // objeto de paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      // Editando registro
      objetoPaciente.id = paciente.id;
      // VIGILAR EL RETURN EN EL MAPP!!!
      const pacienteUpdate = pacientes.map((pacienteState) => {
        return pacienteState.id === paciente.id
          ? objetoPaciente
          : pacienteState;
      });
      setPacientes(pacienteUpdate);
      setPaciente({});
    } else {
      // Nuevo registro
      // copia de lo que tengamos en el arreglo mandandole el nuevo
      //paciente a setPacientes que lo agrega
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    // reiniciar formulario
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };
  return (
    <div className="md:w-1/2 lg:w-2/5 h-screen">
      <h2 className="font-black text-3xl text-center">
        Seguimiento de Pacientes
      </h2>

      <p className="mt-5 text-center mb-10">
        Añade pacientes y{" "}
        <span className="text-indigo-600 font-bold text-lg">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
        action=""
      >
        {error && <Error mensaje="Todos los campos son obligatorios" />}
        <div className="mb-5">
          <label className="label-form" htmlFor="mascota">
            Nombre Mascota
          </label>
          <input
            id="mascota"
            className="input-form "
            type="text"
            placeholder="Nombre Mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        {/* segundo form */}
        <div className="mb-5">
          <label className="label-form" htmlFor="propietario">
            Nombre Propietario
          </label>
          <input
            id="propietario"
            className="input-form"
            type="text"
            placeholder="Nombre Propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        {/* email */}
        <div className="mb-5">
          <label className="label-form" htmlFor="email">
            Email Propietario
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email contacto Propietario"
            className="input-form "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label className="label-form" htmlFor="alta">
            Fecha Alta
          </label>
          <input
            id="Alta"
            type="Date"
            className="input-form"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div>
          <label className="label-form" htmlFor="sintomas">
            Sintomas
          </label>
          <textarea
            name="sintomas"
            placeholder="Escribe los sintomas"
            id="sintomas"
            className="input-form "
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
          className="btn-submit"
        />
      </form>
    </div>
  );
};

export default Formulario;
