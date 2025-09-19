import React, { useState, useEffect } from "react";
import axios from "axios";

const ListarMedicamentos = ({ onEndpointChange }) => {
  const [medicamentos, setMedicamentos] = useState([]);
  const [nombreMedicamento, setNombreMedicamento] = useState([]);

  const handleNuevoMedicamento = () => {
    onEndpointChange("nuevoMedicamento");
  };

  const handleEliminarMedicamento = (medicamentoId) => {
    onEndpointChange("eliminarMedicamento", medicamentoId);
  };

  const handleNombreChange = (event) => {
    setNombreMedicamento(event.target.value);
  };

  useEffect(() => {
    const fetchMedicamentos = async () => {
      try {
        const response = await axios.get("/medicamento/all");
        setMedicamentos(response.data);
      } catch (error) {
        console.error("Error al obtener medicamentos", error);
      }
    };

    fetchMedicamentos();
  }, []);

  const handleSubmit = async () => {
    if (nombreMedicamento) {
      try {
        const response = await axios.get(
          `/medicamento/FiltroxNombre?Nombres=${nombreMedicamento}`
        );
        setMedicamentos(response.data);
      } catch (error) {
        console.error("Error al buscar medicamento");
      }
    } else {
      alert("Ingrese un nombre de medicamento.");
    }
  };

  return (
    <div className="container mx-auto mt-20">
      <div className="flex justify-around items-center">
        <h1 className="text-3xl font-bold">Medicamentos</h1>
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
            <th>Presentacion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {medicamentos.map((medicamento) => (
            <tr key={medicamento.id}>
              <td>{medicamento.id}</td>
              <td>{medicamento.nombre}</td>
              <td>{medicamento.presentacion}</td>
              <td>
                <div className="btn-group" role="group">
                  <button
                    onClick={() => handleEliminarMedicamento(medicamento.id)}
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
        onClick={handleNuevoMedicamento}
        type="button"
        className="bg-blue-500 text-white py-2 px-4 rounded mt-3"
      >
        Nuevo medicamento
      </button>
    </div>
  );
};

export default ListarMedicamentos;
