import React, { useState, useEffect } from "react";
import axios from "axios";

const ListarCitas = ({ onEndpointChange }) => {
  const [citas, setCitas] = useState([]);
  const handleNuevaCita = () => {
    onEndpointChange("nuevaCita");
  };

  const handleEliminarCita = (citaId) => {
    onEndpointChange("eliminarCita", citaId);
  };

  const handleActualizarCita = (citaId) => {
    onEndpointChange("actualizarCita", citaId);
  };

  const handleTratamiento = (citaId) => {
    onEndpointChange("listarTratamientos", citaId);
  };

  useEffect(() => {
    const fetchMedicamentos = async () => {
      try {
        const response = await axios.get("/citaOdontologica/all");
        setCitas(response.data);
      } catch (error) {
        console.error("Error al obtener las citas", error);
      }
    };

    fetchMedicamentos();
  }, []);

  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-3xl font-bold mb-5">Citas</h1>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th>Paciente</th>
            <th>Fecha</th>
            <th>Motivo de Consulta</th>
            <th>Odontólogo</th>
            <th>Tratamientos</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {citas.map((cita) => (
            <tr key={cita.id}>
              <td>{cita.paciente.nombres + " " + cita.paciente.apellidos}</td>
              <td>{cita.fecha + " " + cita.hora}</td>
              <td>{cita.motivoConsulta}</td>
              <td>
                {cita.odontologo.nombres + ": " + cita.odontologo.apellidos}  
              </td>
              <td>
                <div className="btn-group" role="group">
                  <button
                    onClick={() => handleTratamiento(cita.id)}
                    className="bg-red-500 text-white py-2 px-4 rounded"
                  >
                    Tratamientos
                  </button>
                </div>
              </td>
              <td>
                <div className="btn-group" role="group">
                  <button
                    onClick={() => handleEliminarCita(cita.id)}
                    className="bg-red-500 text-white py-2 px-4 rounded"
                  >
                    Borrar
                  </button>
                  <button
                    onClick={() => handleActualizarCita(cita.id)}
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
        onClick={handleNuevaCita}
        type="button"
        className="bg-blue-500 text-white py-2 px-4 rounded mt-3"
      >
        Nueva cita
      </button>
    </div>
  );
};

export default ListarCitas;
