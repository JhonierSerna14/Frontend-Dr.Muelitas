import React, { useState } from "react"; // Asegúrate de importar useState
import axios from "axios";

const NuevoConsultorio = ({ onEndpointChange }) => {
  const handleVolverListado = () => {
    onEndpointChange("listarConsultorios");
  };

  const [consultorio, setConsultorio] = useState({
    sede: "",
    consultorio: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setConsultorio({
      ...consultorio,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8080/consultorio/new?sede=${consultorio.sede}&consultorio=${consultorio.consultorio}`
      );
      console.log("Consultorio agregado con éxito", response.data);

      setConsultorio({
        sede: "",
        consultorio: "",
      });
      alert("Consultorio agregado con éxito");
      handleVolverListado();
    } catch (error) {
      console.error("Error al agregar consultorio", error);
      alert("Error al agregar al consultorio");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-5">Nuevo Consultorio</h1>
        <form
          action="/consultorio/new"
          method="post"
          onSubmit={handleFormSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          required
        >
          <div className="mb-4 flex justify-center flex-col">
            <label
              htmlFor="sede"
              className="block text-sm font-medium text-gray-600"
            >
              Sede:
            </label>
            <input
              type="text"
              id="sede"
              name="sede"
              onChange={handleInputChange}
              value={consultorio.nombre}
              className="mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4 flex justify-center flex-col">
            <label
              htmlFor="consultorio"
              className="block text-sm font-medium text-gray-600"
            >
              Consultorio:
            </label>
            <input
              type="text"
              id="consultorio"
              name="consultorio"
              onChange={handleInputChange}
              value={consultorio.presentacion}
              className="mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Guardar
            </button>
            <button
              onClick={handleVolverListado}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded"
            >
              Volver al Listado
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NuevoConsultorio;
