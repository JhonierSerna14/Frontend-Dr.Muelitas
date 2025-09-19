import React, { useState } from "react";
import axios from "axios";

const NuevoPaciente = ({ onEndpointChange }) => {
  const handleVolverListado = () => {
    onEndpointChange("listarPacientes");
  };

  const [paciente, setPaciente] = useState({
    cedula: "",
    nombres: "",
    apellidos: "",
    telefono: "",
    email: "",
    direccion: "",
    fechaNacimiento: "",
    alergias: "",
    condicionesMedicas: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPaciente({
      ...paciente,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `/paciente/new?Cedula=${paciente.cedula}&Nombres=${paciente.nombres}&Apellidos=${paciente.apellidos}&Telefono=${paciente.telefono}&Email=${paciente.email}&FechaNacimiento=${paciente.fechaNacimiento}&alergias=${paciente.alergias}&condicionesMedicas=${paciente.condicionesMedicas}&Direccion=${paciente.direccion}`
      );
      console.log("Paciente agregado con éxito", response.data);
      alert("Paciente agregado con éxito");
      handleVolverListado();
    } catch (error) {
      console.error("Error al agregar el paciente", error);
      alert("Error al agregar el paciente");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen mt-52">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-5">Nuevo Paciente</h1>
        <form
          action="/paciente/new"
          method="post"
          onSubmit={handleFormSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4 flex justify-center flex-col">
            <label
              htmlFor="cedula"
              className="block text-sm font-medium text-gray-600"
            >
              Cédula:
            </label>
            <input
              type="text"
              id="cedula "
              name="cedula"
              onChange={handleInputChange}
              value={paciente.cedula}
              className="mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
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
              value={paciente.nombres}
              className="mt-1 p-2 border border-gray-300 rounded-md"
              required
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
              value={paciente.apellidos}
              className="mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4 flex justify-center flex-col">
            <label
              htmlFor="edad"
              className="block text-sm font-medium text-gray-600"
            >
              Fecha Nacimiento:
            </label>
            <input
              type="date"
              id="fechaNacimiento"
              name="fechaNacimiento"
              onChange={handleInputChange}
              value={paciente.fechaNacimiento}
              className="mt-1 p-2 border border-gray-300 rounded-md"
              required
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
              value={paciente.telefono}
              className="mt-1 p-2 border border-gray-300 rounded-md"
              required
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
              required
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
              type="text"
              id="direccion"
              name="direccion"
              onChange={handleInputChange}
              value={paciente.direccion}
              className="mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4 flex justify-center flex-col">
            <label
              htmlFor="alergias"
              className="block text-sm font-medium text-gray-600"
            >
              Alergias:
            </label>
            <input
              type="text"
              id="alergias"
              name="alergias"
              onChange={handleInputChange}
              value={paciente.alergias}
              className="mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4 flex justify-center flex-col">
            <label
              htmlFor="condicionesMedicas"
              className="block text-sm font-medium text-gray-600"
            >
              Condiciones Médicas:
            </label>
            <input
              type="text"
              id="condicionesMedicas"
              name="condicionesMedicas"
              onChange={handleInputChange}
              value={paciente.condicionesMedicas}
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

export default NuevoPaciente;
