import React, { useState } from "react"; // Asegúrate de importar useState
import axios from "axios";

const NuevoMedicamento = ({ onEndpointChange }) => {
  const handleVolverListado = () => {
    onEndpointChange("listarMedicamentos");
  };

  const [medicamento, setMedicamento] = useState({
    nombre: "",
    presentacion: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMedicamento({
      ...medicamento,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8080/medicamento/new?Nombre=${medicamento.nombre}&Presentacion=${medicamento.presentacion}`
      );
      console.log("Medicamento agregado con éxito", response.data);

      setMedicamento({
        nombre: "",
        presentacion: "",
      });
      alert("Medicamento agregado con éxito");
      handleVolverListado();
    } catch (error) {
      console.error("Error al agregar medicamento", error);
      alert("Error al agregar al medicamento");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-5">Nuevo Medicamento</h1>
        <form
          action="/medicamento/new"
          method="post"
          onSubmit={handleFormSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          required
        >
          <div className="mb-4 flex justify-center flex-col">
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-600"
            >
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              onChange={handleInputChange}
              value={medicamento.nombre}
              className="mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4 flex justify-center flex-col">
            <label
              htmlFor="presentacion"
              className="block text-sm font-medium text-gray-600"
            >
              Presentacion:
            </label>
            <input
              type="text"
              id="presentacion"
              name="presentacion"
              onChange={handleInputChange}
              value={medicamento.presentacion}
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

export default NuevoMedicamento;
