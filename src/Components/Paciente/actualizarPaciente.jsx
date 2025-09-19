import React, { useState } from "react";
import axios from "axios";

const ActualizarPaciente = ({ pacienteId, onEndpointChange }) => {
  // Estado para los datos del odontólogo
  const [paciente, setPaciente] = useState({
    telefono: "",
    email: "",
    direccion: "",
  });

  // Función para manejar cambios en el formulario
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPaciente({
      ...paciente,
      [name]: value,
    });
  };

  const handleVolverListado = () => {
    onEndpointChange("listarPacientes");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.patch(
        `http://localhost:8080/paciente/update?Cedula=${pacienteId}&telefono=${paciente.telefono}&email=${paciente.email}&direccion=${paciente.direccion}`
      );
      console.log("Paciente agregado con éxito", response.data);
      setPaciente({
        telefono: "",
        email: "",
        direccion: "",
      });
      alert("Paciente actualizado con éxito");
    } catch (error) {
      console.error("Error al actualizar odontólogo:", error);
      alert(
        "Hubo un error al actualizar el odontólogo. Por favor, inténtelo de nuevo."
      );
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-5">Nuevo Paciente</h1>
        <form
          action="/paciente/update"
          method="patch"
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          required
        >
          <div className="mb-4 flex justify-center flex-col">
            <label
              htmlFor="telefono"
              className="block text-sm font-medium text-gray-600"
            >
              Teléfono:
            </label>
            <input
              type="text"
              id="telefono"
              name="telefono"
              onChange={handleInputChange}
              value={paciente.telefono}
              className="mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4 flex justify-center flex-col">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleInputChange}
              value={paciente.email}
              className="mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4 flex justify-center flex-col">
            <label
              htmlFor="direccion"
              className="block text-sm font-medium text-gray-600"
            >
              Direccion:
            </label>
            <input
              type="direccion"
              id="direccion"
              name="direccion"
              onChange={handleInputChange}
              value={paciente.direccion}
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

export default ActualizarPaciente;
