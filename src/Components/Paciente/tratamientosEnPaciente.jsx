import React, { useState, useEffect } from "react";
import axios from "axios";

const TratamientosEnPaciente = ({ pacienteId, onEndpointChange }) => {
  const [tratamientos, setTratamientos] = useState([]);
  const handleListarMedicamentos = (tratamientoId) => {
    onEndpointChange("medicamentosEnTratamiento", tratamientoId);
  };

  const handleEliminarTratamiento = (tratamientoId) => {
    onEndpointChange("eliminarTratamiento", tratamientoId);
  };

  useEffect(() => {
    const fetchMedicamentos = async () => {
      try {
        const response = await axios.get(
          `/citaOdontologica/tratamientosEnPaciente?pacienteId=${pacienteId}`
        );
        setTratamientos(response.data);
      } catch (error) {
        console.error("Error al obtener las tratamientos", error);
      }
    };

    fetchMedicamentos();
  }, [pacienteId]);

  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-3xl font-bold mb-5">Tratamientos</h1>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th>Tipo</th>
            <th>Fecha</th>
            <th>Instrucciones Postoperatorias</th>
            <th>Resultados</th>
            <th>Medicamentos</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tratamientos.map((tratamiento) => (
            <tr key={tratamiento.id}>
              <td>{tratamiento.tipo}</td>
              <td>{tratamiento.fecha}</td>
              <td>{tratamiento.instruccionesPostoperatorias}</td>
              <td>{tratamiento.resultados}</td>
              <td>
                <div className="btn-group" role="group">
                  <button
                    onClick={() => handleListarMedicamentos(tratamiento.id)}
                    className="bg-green-500 text-white py-2 px-4 rounded"
                  >
                    Medicamentos
                  </button>
                </div>
              </td>
              <td>
                <div className="btn-group" role="group">
                  <button
                    onClick={() => handleEliminarTratamiento(tratamiento.id)}
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
    </div>
  );
};

export default TratamientosEnPaciente;
