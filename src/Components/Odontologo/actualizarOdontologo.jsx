import React, { useState } from "react";
import axios from "axios";

const ActualizarOdontologo = ({ odontologoId, onEndpointChange }) => {
  // Estado para los datos del odontólogo
  const [odontologo, setOdontologo] = useState({
    nombres: "",
    apellidos: "",
    especialidad: "",
    telefono: "",
    email: "",
  });

  // Función para manejar cambios en el formulario
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOdontologo({
      ...odontologo,
      [name]: value,
    });
  };

  const handleVolverListado = () => {
    onEndpointChange("listarOdontologos");
  };

  // Función para enviar los datos actualizados del odontólogo al servidor
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.patch(
        `http://localhost:8080/odontologo/update?id=${odontologoId}&nombres=${odontologo.nombres}&apellidos=${odontologo.apellidos}&especialidad=${odontologo.especialidad}&telefono=${odontologo.telefono}&email=${odontologo.email}`
      );
      console.log("Odontólogo agregado con éxito", response.data);
      setOdontologo({
        nombres: "",
        apellidos: "",
        telefono: "",
        email: "",
        especialidad: "",
      });
      alert("Odontologo actualizado con éxito");
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
        <h1 className="text-3xl font-bold mb-5">Nuevo Odontólogo</h1>
        <form
          action="/odontologo/update"
          method="patch"
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          required
        >
          <div className="mb-4 flex justify-center flex-col">
            <label
              htmlFor="nombres"
              className="block text-sm font-medium text-gray-600"
            >
              Nombres:
            </label>
            <input
              type="text"
              id="nombres"
              name="nombres"
              onChange={handleInputChange}
              value={odontologo.nombres}
              className="mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4 flex justify-center flex-col">
            <label
              htmlFor="apellidos"
              className="block text-sm font-medium text-gray-600"
            >
              Apellidos:
            </label>
            <input
              type="text"
              id="apellidos"
              name="apellidos"
              onChange={handleInputChange}
              value={odontologo.apellidos}
              className="mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4 flex justify-center flex-col">
            <label
              htmlFor="especialidad"
              className="block text-sm font-medium text-gray-600"
            >
              Especialidad:
            </label>
            <input
              type="text"
              id="especialidad"
              name="especialidad"
              onChange={handleInputChange}
              value={odontologo.especialidad}
              className="mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>

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
              value={odontologo.telefono}
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
              value={odontologo.email}
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

export default ActualizarOdontologo;
