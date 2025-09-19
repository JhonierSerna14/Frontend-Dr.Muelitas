import React, { useState, useEffect } from "react";
import axios from "axios";

const ListarPacientes = ({ onEndpointChange }) => {
  const [pacientes, setPacientes] = useState([]);
  const [nombrePaciente, setNombrePaciente] = useState([]);

  const handleNuevoPaciente = () => {
    onEndpointChange("nuevoPaciente");
  };

  const handleToothgrid = (pacienteId) => {
    onEndpointChange("toothgrid",pacienteId);
  };


  const handleEliminarPaciente = (pacienteId) => {
    onEndpointChange("eliminarPaciente", pacienteId);
  };

  const handleActualizarPaciente = (pacienteId) => {
    onEndpointChange("actualizarPaciente", pacienteId);
  };

  const handleNombreChange = (event) => {
    setNombrePaciente(event.target.value);
  };

  const handleTratamientosEnPaciente = (pacienteId) => {
    onEndpointChange("tratamientosEnPaciente", pacienteId);
  };

  useEffect(() => {
    const fetchPacientes = async () => {
      try {
        const response = await axios.get("/paciente/all");
        setPacientes(response.data);
      } catch (error) {
        console.error("Error al obtener pacientes", error);
      }
    };

    fetchPacientes();
  }, []);

  const handleSubmit = async () => {
    if (nombrePaciente) {
      try {
        const response = await axios.get(
          `/paciente/FiltroxNombre?Nombres=${nombrePaciente}`
        );
        setPacientes(response.data);
      } catch (error) {
        console.error("Error al buscar paciente");
      }
    } else {
      alert("Ingrese un nombre de paciente.");
    }
  };

  return (
    <div className="container mx-auto mt-20">
      <div className="flex justify-around items-center">
        <h1 className="text-3xl font-bold">Pacientes</h1>
        <div className="flex justify-between">
          <input
            className="h-1/2 border-2 border-slate-300 rounded-sm"
            type="text"
            onChange={handleNombreChange}
          />
          <button onClick={handleSubmit}>
            <svg
              class="feather feather-search"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" x2="16.65" y1="21" y2="16.65" />
            </svg>
          </button>
        </div>
      </div>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th>Cédula</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Teléfono</th>
            <th>Email</th>
            <th>Fecha de Nacimiento</th>
            <th>Historia Clinico</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((paciente) => (
            <tr key={paciente.id}>
              <td>{paciente.cedula}</td>
              <td>{paciente.nombres}</td>
              <td>{paciente.apellidos}</td>
              <td>{paciente.telefono}</td>
              <td>{paciente.email}</td>
              <td>{paciente.fechaNacimiento}</td>
              <td>
                <div className="btn-group" role="group">
                  <button
                    onClick={() =>
                      handleTratamientosEnPaciente(paciente.cedula)
                    }
                    className="bg-red-500 text-white py-2 px-4 rounded"
                  >
                    Historial Clinico
                  </button>
                </div>
              </td>
              <td>
                <div className="btn-group" role="group">
                  <button
                    onClick={() => handleEliminarPaciente(paciente.cedula)}
                    className="bg-red-500 text-white py-2 px-4 rounded"
                  >
                    Borrar
                  </button>
                  <button
                    onClick={() => handleToothgrid(paciente.cedula)}
                    className="bg-cyan-500 text-white py-2 px-4 rounded ml-2"
                  >
                    odontograma
                  </button>
                  <button
                    onClick={() => handleActualizarPaciente(paciente.cedula)}
                    className="bg-green-500 text-white py-2 px-4 rounded ml-2"
                  >
                    Actualizar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={handleNuevoPaciente}
        type="button"
        className="bg-blue-500 text-white py-2 px-4 rounded mt-3"
      >
        Nuevo paciente
      </button>
    </div>
  );
};

export default ListarPacientes;
