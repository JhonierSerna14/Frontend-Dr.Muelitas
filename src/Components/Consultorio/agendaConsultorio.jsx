import React, { useState, useEffect } from "react";
import axios from "axios";

const AgendaConsultorio = ({ consultorioId, onEndpointChange }) => {
  const [citas, setCitas] = useState([]);
  const [fechaSeleccionada, setFechaSeleccionada] = useState(
    new Date().toISOString().split("T")[0]
  ); // Inicializar con la fecha actual
  const [filtro, setFiltro] = useState(""); // Estado para almacenar el tipo de filtro (mes o semana)

  const handleFechaChange = (e) => {
    setFechaSeleccionada(e.target.value);
    setFiltro("");
  };

  const handleNuevaCita = () => {
    onEndpointChange("nuevaCita");
  };

  const handleEliminarCita = (citaId) => {
    onEndpointChange("eliminarCita", citaId);
  };

  const handleFiltrar = (tipoFiltro) => {
    setFiltro(tipoFiltro);
  };

  useEffect(() => {
    const fetchCitas = async () => {
      try {
        let endpoint = `/consultorio/agendaConsultorio?consultorioId=${consultorioId}&fecha=${fechaSeleccionada}`;
        if (filtro) {
          endpoint += `&filtro=${filtro}`; // Agregar el tipo de filtro al endpoint si está definido
        }
        const response = await axios.get(endpoint);
        setCitas(response.data);
      } catch (error) {
        console.error("Error al obtener las citas", error);
      }
    };

    fetchCitas();
  }, [fechaSeleccionada, filtro, consultorioId]); // Hacer fetch cada vez que fechaSeleccionada o filtro cambie

  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-3xl font-bold mb-5">Citas</h1>
      <div className="mb-4">
        <label
          htmlFor="fecha"
          className="block text-sm font-medium text-gray-700"
        >
          Selecciona una fecha:
        </label>
        <input
          type="date"
          id="fecha"
          name="fecha"
          value={fechaSeleccionada}
          onChange={handleFechaChange}
          className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
        />
        <button
          onClick={() => handleFiltrar("mes")}
          className="bg-blue-500 text-white py-2 px-4 rounded mr-3"
        >
          Filtrar por Mes
        </button>
        <button
          onClick={() => handleFiltrar("semana")}
          className="bg-green-500 text-white py-2 px-4 rounded"
        >
          Filtrar por Semana
        </button>
      </div>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th>Paciente</th>
            <th>Fecha</th>
            <th>Motivo de Consulta</th>
            <th>Odontólogo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {citas.map((cita) => (
            <tr key={cita.id}>
              <td>{cita.paciente.nombres + " " + cita.paciente.apellidos}</td>
              <td>{cita.fecha + ": " + cita.hora}</td>
              <td>{cita.motivoConsulta}</td>
              <td>
                {cita.odontologo.nombres + " " + cita.odontologo.apellidos}
              </td>
              <td>
                <div className="btn-group" role="group">
                  <button
                    onClick={() => handleEliminarCita(cita.id)}
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
        onClick={handleNuevaCita}
        type="button"
        className="bg-blue-500 text-white py-2 px-4 rounded mt-3"
      >
        Nueva cita
      </button>
    </div>
  );
};
export default AgendaConsultorio;
