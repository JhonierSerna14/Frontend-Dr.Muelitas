import React, { useState, useEffect } from "react"; // Asegúrate de importar useState
import axios from "axios";

const NuevoOdontologo = ({ onEndpointChange }) => {
  const handleVolverListado = () => {
    onEndpointChange("listarOdontologos");
  };

  const [odontologo, setOdontologo] = useState({
    nombres: "",
    apellidos: "",
    especialidad: "",
    telefono: "",
    email: "",
    consultorio: "",
  });

  const [consultorios, setConsultorios] = useState([]);

  useEffect(() => {
    const obtenerConsultorios = async () => {
      try {
        const responese = await axios.get("/consultorio/all");
        setConsultorios(responese.data);
      } catch (error) {
        console.error("Error al obtener pacientes: ", error);
      }
    };
    obtenerConsultorios();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOdontologo({
      ...odontologo,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario
    try {
      const response = await axios.post(
        `http://localhost:8080/odontologo/new?nombres=${odontologo.nombres}&apellidos=${odontologo.apellidos}&especialidad=${odontologo.especialidad}&telefono=${odontologo.telefono}&email=${odontologo.email}&idConsultorio=${odontologo.consultorio}`
      );
      console.log("Odontólogo agregado con éxito", response.data);
      // Limpiar el formulario después de guardar exitosamente
      setOdontologo({
        nombres: "",
        apellidos: "",
        telefono: "",
        email: "",
        especialidad: "",
      });
      alert("Odontologo agregado con éxito");
      handleVolverListado();
    } catch (error) {
      console.error("Error al agregar odontólogo", error);
      alert("Error al agregar al odontólogo");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen mt-14">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-5">Nuevo Odontólogo</h1>
        <form
          action="/odontologo/new"
          method="post"
          onSubmit={handleFormSubmit}
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
              value={odontologo.apellidos}
              className="mt-1 p-2 border border-gray-300 rounded-md"
              required
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
              value={odontologo.telefono}
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
              value={odontologo.email}
              className="mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4 flex justify-center flex-col">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Consultorio:
            </label>
            <select
              id="consultorio"
              name="consultorio"
              onChange={handleInputChange}
              value={odontologo.consultorio}
              className="mt-1 p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Selecciona un consultorio</option>
              {consultorios.map((consultorio) => (
                <option key={consultorio.id} value={consultorio.id}>
                  {"Sede:" +
                    consultorio.sede +
                    " Consultorio: " +
                    consultorio.consultorio}
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

export default NuevoOdontologo;
