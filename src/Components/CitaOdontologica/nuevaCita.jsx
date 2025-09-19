import React, { useState, useEffect } from "react";
import axios from "axios";

const NuevaCita = ({ onEndpointChange }) => {
  const handleVolverListado = () => {
    onEndpointChange("listarCitas");
  };

  const [citaOdontologica, setCitaOdontologica] = useState({
    idPaciente: "",
    idOdontologo: "",
    motivoConsulta: "",
    fecha: "",
    hora: "",
  });

  const [pacientes, setPacientes] = useState([]);
  const [odontologos, setOdontologos] = useState([]);

  useEffect(() => {
    const obtenerPacientes = async () => {
      try {
        const responese = await axios.get("/paciente/all");
        setPacientes(responese.data);
      } catch (error) {
        console.error("Error al obtener pacientes: ", error);
      }
    };
    obtenerPacientes();
  }, []);

  useEffect(() => {
    const obtenerOdontologos = async () => {
      try {
        const responese = await axios.get("/odontologo/all");
        setOdontologos(responese.data);
      } catch (error) {
        console.error("Error al obtener odontologos: ", error);
      }
    };
    obtenerOdontologos();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCitaOdontologica({
      ...citaOdontologica,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `/citaOdontologica/new?fecha=${citaOdontologica.fecha}&hora=${citaOdontologica.hora}&motivoConsulta=${citaOdontologica.motivoConsulta}&idOdontologo=${citaOdontologica.idOdontologo}&idPaciente=${citaOdontologica.idPaciente}`
      );
      console.log("CitaOdontologica agregada con éxito", response.data);
      alert("CitaOdontologica agregada con éxito");
      handleVolverListado();
    } catch (error) {
      console.error("Error al agregar la citaOdontologica", error);
      alert(error.response.data);
    }
  };

  // Generar opciones de horas desde las 7 am hasta las 7 pm con incrementos de 30 minutos
  const horasDisponibles = [];
  for (let hour = 7; hour <= 19; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const formattedHour = `${hour < 10 ? "0" : ""}${hour}:${
        minute === 0 ? "00" : minute
      }`;
      horasDisponibles.push(formattedHour);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-5">Nueva Cita Odontologica</h1>
        <form
          onSubmit={handleFormSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4 flex justify-center flex-col">
            <label
              htmlFor="idPaciente"
              className="block text-sm font-medium text-gray-600"
            >
              Paciente:
            </label>
            <select
              id="idPaciente"
              name="idPaciente"
              onChange={handleInputChange}
              value={citaOdontologica.idPaciente}
              className="mt-1 p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Selecciona un paciente</option>
              {pacientes.map((paciente) => (
                <option key={paciente.cedula} value={paciente.cedula}>
                  {paciente.nombres} - {paciente.apellidos}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4 flex justify-center flex-col">
            <label
              htmlFor="idOdontologo"
              className="block text-sm font-medium text-gray-600"
            >
              Odontologo:
            </label>

            <select
              id="idOdontologo"
              name="idOdontologo"
              onChange={handleInputChange}
              value={citaOdontologica.idOdontologo}
              className="mt-1 p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Selecciona un odontologo</option>
              {odontologos.map((odontologo) => (
                <option key={odontologo.id} value={odontologo.id}>
                  {odontologo.nombres} - {odontologo.apellidos}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4 flex justify-center flex-col">
            <label
              htmlFor="motivoConsulta"
              className="block text-sm font-medium text-gray-600"
            >
              Motivo de Consulta // Tratamiento:
            </label>
            <input
              type="text"
              id="motivoConsulta"
              name="motivoConsulta"
              onChange={handleInputChange}
              value={citaOdontologica.motivoConsulta}
              className="mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4 flex justify-center flex-col">
            <label
              htmlFor="fecha"
              className="block text-sm font-medium text-gray-600"
            >
              Fecha:
            </label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              onChange={handleInputChange}
              value={citaOdontologica.fecha}
              className="mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4 flex justify-center flex-col">
            <label
              htmlFor="hora"
              className="block text-sm font-medium text-gray-600"
            >
              Hora:
            </label>
            <select
              id="hora"
              name="hora"
              onChange={handleInputChange}
              value={citaOdontologica.hora}
              className="mt-1 p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Seleccionar hora</option>
              {horasDisponibles.map((hora, index) => (
                <option key={index} value={hora}>
                  {hora}
                </option>
              ))}
            </select>
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

export default NuevaCita;
