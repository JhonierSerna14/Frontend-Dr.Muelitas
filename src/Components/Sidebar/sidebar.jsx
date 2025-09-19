import React, { useState } from "react";

const SideBar = ({ onEndpointChange, onCloseSideBar }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    onCloseSideBar(!isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleListarOdontologos = () => {
    toggleSidebar();
    onEndpointChange("listarOdontologos");
  };

  const handleListarPacientes = () => {
    toggleSidebar();
    onEndpointChange("listarPacientes");
  };

  const handleListarCitas = () => {
    toggleSidebar();
    onEndpointChange("listarCitas");
  };

  const handleListarMedicamentos = () => {
    toggleSidebar();
    onEndpointChange("listarMedicamentos");
  };
  const handleListarConsultorio = () => {
    toggleSidebar();
    onEndpointChange("listarConsultorios");
  };

  return (
    <>
      <aside
        id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div class="h-15 px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800 relative overflow-hidden">
          <ul class="space-y-2 font-medium">
            <li>
              <button
                type="button"
                onClick={handleListarCitas}
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <span className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                  <img
                    src="https://cdn.icon-icons.com/icons2/2063/PNG/512/schedule_dentist_dental_healthcare_medical_icon_124619.png"
                    alt="odontologo ICO"
                  />
                </span>
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Citas Odontologicas
                </span>
              </button>
            </li>
            {/* Otra entidad */}
            <li>
              <button
                type="button"
                onClick={handleListarConsultorio}
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <span className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3028/3028573.png"
                    alt="odontologo ICO"
                  />
                </span>
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Consultorios
                </span>
              </button>
            </li>
            {/* Otra entidad */}
            <li>
              <button
                type="button"
                onClick={handleListarMedicamentos}
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <span className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                  <img
                    src="https://cdn.icon-icons.com/icons2/1581/PNG/512/3668843-drugs-health-medicine-pills_108036.png"
                    alt="Medicamento ICO"
                  />
                </span>
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Medicamentos
                </span>
              </button>
            </li>
            {/* Otra entidad */}
            <li>
              <button
                type="button"
                onClick={handleListarOdontologos}
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <span className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                  <img
                    src="https://clinicadentalnobel.es/wp-content/uploads/2023/01/dentista.png"
                    alt="odontologo ICO"
                  />
                </span>
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Odontólogos
                </span>
              </button>
            </li>
            {/* Otra entidad */}
            <li>
              <button
                type="button"
                onClick={handleListarPacientes}
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <span className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                  <img
                    src="https://cdn.icon-icons.com/icons2/2265/PNG/512/patient_coronavirus_icon_140453.png"
                    alt="paciente ICO"
                  />
                </span>
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Pacientes
                </span>
              </button>
            </li>
            {/* Otra entidad */}
            {/* <li>
              <button
                type="button"
                onClick={handleListarTratamientos}
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <span className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2001/2001439.png"
                    alt="tratamiento ICO"
                  />
                </span>
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Tratamientos
                </span>
              </button>
            </li> */}
            {/* Otra entidad */}
          </ul>
        </div>
      </aside>
    </>
  );
};
export default SideBar;
