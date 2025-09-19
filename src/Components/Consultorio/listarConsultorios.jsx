import React, { useState, useEffect } from "react";
import axios from "axios";

const ListarConsultorios = ({ onEndpointChange }) => {
  const [consultorios, setConsultorios] = useState([]);
  const [nombreConsultorio, setNombreConsultorio] = useState([]);

  const handleNuevoConsultorio = () => {
    onEndpointChange("nuevoConsultorio");
  };

  const handleEliminarConsultorio = (consultorioId) => {
    onEndpointChange("eliminarConsultorio", consultorioId);
  };

  const handleAgendaConsultorio = (consultorioId) => {
    onEndpointChange("agendaConsultorio", consultorioId);
  };

  const handleNombreChange = (event) => {
    setNombreConsultorio(event.target.value);
  };

  useEffect(() => {
    const fetchConsultorios = async () => {
      try {
        const response = await axios.get("/consultorio/all");
        setConsultorios(response.data);
      } catch (error) {
        console.error("Error al obtener consultorios", error);
      }
    };

    fetchConsultorios();
  }, []);

  const handleSubmit = async () => {
    if (nombreConsultorio) {
      try {
        const response = await axios.get(
          `/consultorio/FiltroxNombre?Nombres=${nombreConsultorio}`
        );
        setConsultorios(response.data);
      } catch (error) {
        console.error("Error al buscar consultorio");
      }
    } else {
      alert("Ingrese un nombre de consultorio.");
    }
  };

  return (
    <div className="container mx-auto mt-20">
      <div className="flex justify-around items-center">
        <h1 className="text-3xl font-bold">Consultorios</h1>
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
            <th>Sede</th>
            <th>Consultorio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {consultorios.map((consultorio) => (
            <tr key={consultorio.id}>
              <td>{consultorio.sede}</td>
              <td>{consultorio.consultorio}</td>
              <td>
                <div className="btn-group" role="group">
                <button
                    onClick={() => handleAgendaConsultorio(consultorio.id)}
                    className="bg-green-500 text-white py-2 px-4 rounded"
                  >
                    Agenda
                  </button>
                  <button
                    onClick={() => handleEliminarConsultorio(consultorio.id)}
                    className="bg-red-500 text-white py-2 px-4 rounded"
                  >
                    Borrar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={handleNuevoConsultorio}
        type="button"
        className="bg-blue-500 text-white py-2 px-4 rounded mt-3"
      >
        Nuevo consultorio
      </button>
    </div>
  );
};

export default ListarConsultorios;
