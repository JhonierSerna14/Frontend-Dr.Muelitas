import React, { useState } from "react";
import axios from "axios";

const ActualizarCita = ({ citaId, onEndpointChange }) => {
  const [cita, setCita] = useState({
    fecha: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCita({
      ...cita,
      [name]: value,
    });
  };

  const handleVolverListado = () => {
    onEndpointChange("listarCitas");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.patch(
        `http://localhost:8080/citaOdontologica/update?id=${citaId}&fecha=${cita.fecha}`
      );
      console.log("Cita agregada con éxito", response.data);
      setCita({
        fecha: "",
      });
      alert("Cita actualizada con éxito");
    } catch (error) {
      console.error("Error la actualizar cita:", error);
      alert(
        "Hubo un error al actualizar la cita. Por favor, inténtelo de nuevo."
      );
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-5">Nuevo Odontólogo</h1>
        <form
          action="/citaOdontologica/update"
          method="patch"
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          required
        >
          <div className="mb-4 flex justify-center flex-col">
            <label
              htmlFor="fecha"
              className="block text-sm font-medium text-gray-600"
            >
              Nueva fecha:
            </label>
            <input
              type="datetime-local"
              id="fecha"
              name="fecha"
              onChange={handleInputChange}
              value={cita.fecha}
              className="mt-1 p-2 border border-gray-300 rounded-md"
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

export default ActualizarCita;
