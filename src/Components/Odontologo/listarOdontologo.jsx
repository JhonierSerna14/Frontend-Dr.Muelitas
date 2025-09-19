import React, { useState, useEffect } from "react";
import axios from "axios";

const ListarOdontologos = ({ onEndpointChange }) => {
  const [odontologos, setOdontologos] = useState([]);
  const [nombreOdontologo, setNombreOdontologo] = useState([]);

  const handleNuevoOdontologo = () => {
    onEndpointChange("nuevoOdontologo");
  };

  const handleEliminarOdontologo = (odontologoId) => {
    onEndpointChange("eliminarOdontologo", odontologoId);
  };

  const handleActualizarOdontologo = (odontologoId) => {
    onEndpointChange("actualizarOdontologo", odontologoId);
  };

  const handleNombreChange = (event) => {
    setNombreOdontologo(event.target.value);
  };

  useEffect(() => {
    const fetchOdontologos = async () => {
      try {
        const response = await axios.get("/odontologo/all");
        setOdontologos(response.data);
      } catch (error) {
        console.error("Error al obtener odontólogos", error);
      }
    };

    fetchOdontologos();
  }, []);

 const handleSubmit = async () => {
    try {
      if (nombreOdontologo.trim() === "") {
        const response = await axios.get("/odontologo/all");
        setOdontologos(response.data);
        alert("Ingrese un nombre de odontólogo.");
      } else {
        const response = await axios.get(
          `/odontologo/FiltroxNombre?Nombres=${nombreOdontologo}`
        );
        setOdontologos(response.data);
      }
    } catch (error) {
      console.error("Error al buscar odontólogo", error);
    }
  };

  return (
    <div className="container mx-auto mt-20">
      <div className="flex justify-around items-center">
        <h1 className="text-3xl font-bold">Odontólogos</h1>
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
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Especialidad</th>
            <th>Teléfono</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {odontologos.map((odontologo) => (
            <tr key={odontologo.id}>
              <td>{odontologo.id}</td>
              <td>{odontologo.nombres}</td>
              <td>{odontologo.apellidos}</td>
              <td>{odontologo.especialidad}</td>
              <td>{odontologo.telefono}</td>
              <td>{odontologo.email}</td>
              <td>
                <div className="btn-group" role="group">
                  <button
                    onClick={() => handleEliminarOdontologo(odontologo.id)}
                    className="bg-red-500 text-white py-2 px-4 rounded"
                  >
                    Borrar
                  </button>
                  <button
                    onClick={() => handleActualizarOdontologo(odontologo.id)}
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
        onClick={handleNuevoOdontologo}
        type="button"
        className="bg-blue-500 text-white py-2 px-4 rounded mt-3"
      >
        Nuevo odontólogo
      </button>
    </div>
  );
};

export default ListarOdontologos;
