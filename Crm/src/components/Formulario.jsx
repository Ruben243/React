import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Alerta from "./Alerta";
import Spinner from "./Spinner";
const Formulario = ({ cliente, cargando }) => {
  const navigate = useNavigate();
  const nuevoClienteSchema = Yup.object().shape({
    nombre: Yup.string()
      .min(3, "El nombre es muy corto")
      .max(30, "El nombre es muy largo")
      .required("El nombre de la empresa es Obligatorio"),

    empresa: Yup.string().required("El nombre de la empresa es obligatorio"),

    email: Yup.string()
      .email("Email no valido")
      .required("El Email de la empresa es obligatorio"),
    tel: Yup.number()
      .typeError("El numero no es valido")
      .positive("El telefono debe ser un numero positivo")
      .integer("El telefono debe ser un numero entero"),
  });

  const handleSubmit = async (valores) => {
    try {
      let respuesta;
      if (cliente.id) {
        // editando
        const url = `http://localhost:4000/clientes/${cliente.id}`;
        respuesta = await fetch(url, {
          method: "PUT",
          body: JSON.stringify(valores),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        // Nuevo registro
        const url = "http://localhost:4000/clientes";
        respuesta = await fetch(url, {
          method: "POST",
          body: JSON.stringify(valores),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
      await respuesta.json();
      navigate("/clientes");
    } catch (error) {
      console.log(error);
    }
  };
  return cargando ? (
    <Spinner />
  ) : (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
        {cliente?.nombre ? "Editar Cliente" : "Agregar Cliente"}
      </h1>
      <Formik
        initialValues={{
          nombre: cliente?.nombre ?? "",
          empresa: cliente?.empresa ?? "",
          email: cliente?.email ?? "",
          tel: cliente?.tel ?? "",
          notas: cliente?.notas ?? "",
        }}
        enableReinitialize={true}
        onSubmit={async (values, { resetForm }) => {
          await handleSubmit(values);
          resetForm();
        }}
        validationSchema={nuevoClienteSchema}
      >
        {({ errors, touched }) => {
          return (
            <Form className="mt-10">
              <div className="mt-6">
                <label className="text-gray-800" htmlFor="nombre">
                  Nombre:
                </label>
              </div>
              <Field
                id="nombre"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Escribe de la empresa"
                name="nombre" //para formik
              />
              {errors.nombre && touched.nombre ? (
                <Alerta>{errors.nombre}</Alerta>
              ) : null}

              <div className="mt-6">
                <label className="text-gray-800" htmlFor="empresa">
                  Empresa:
                </label>
              </div>
              <Field
                id="empresa"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Empresa del cliente"
                name="empresa" //para formik
              />
              {errors.empresa && touched.empresa ? (
                <Alerta>{errors.empresa}</Alerta>
              ) : null}
              {cliente?.nombre ? "Editar Cliente" : "Agregar Cliente"}
              <div className="mt-6">
                <label className="text-gray-800" htmlFor="email">
                  Email:
                </label>
              </div>
              <Field
                id="email"
                type="email"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Email empresa"
                name="email" //para formik
              />
              {errors.email && touched.email ? (
                <Alerta>{errors.email}</Alerta>
              ) : null}

              <div className="mt-6">
                <label className="text-gray-800" htmlFor="tel">
                  Telefono:
                </label>
              </div>
              <Field
                id="tel"
                type="tel"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Telefono empresa"
                name="tel" //para formik
              />
              {errors.tel && touched.tel ? <Alerta>{errors.tel}</Alerta> : null}
              <div className="mt-6">
                <label className="text-gray-800" htmlFor="notas">
                  Notas:
                </label>
              </div>
              <Field
                as="textarea"
                id="notas"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50 h-40"
                placeholder="Notas empresa"
                name="notas" //para formik
              />
              <div>
                <input
                  type="submit"
                  value={cliente?.nombre ? "Editar Cliente" : "Agregar Cliente"}
                  className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"
                />
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

Formulario.defaultProps = {
  cliente: {},
  cargando: false,
};

export default Formulario;
