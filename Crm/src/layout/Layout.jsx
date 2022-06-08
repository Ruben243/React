import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const urlActual = location.pathname;
  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/4 bg-blue-900 py-10 px-5">
        <h2 className="text-4xl font-black text-center text-white">
          CRM Clientes
        </h2>

        <nav className="mt-10">
          <Link
            className={`${
              urlActual === "/clientes" ? "text-yellow-500" : "text-white"
            }   nav-links`}
            to="/clientes"
          >
            Clientes
          </Link>
          <Link
            className={`${
              urlActual === "/clientes/nuevo" ? "text-yellow-500" : "text-white"
            }   nav-links`}
            to="/clientes/nuevo"
          >
            Nuevos Clientes
          </Link>
        </nav>
      </div>

      <div className="md:w-3/4 p-10 md:h-screen overflow-scroll ">
        <Outlet />
      </div>

    </div>
  );
};

export default Layout;
