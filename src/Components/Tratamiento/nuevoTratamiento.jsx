import React, { useState } from "react";
import axios from "axios";

const NuevoTratamiento = ({ Idcita, onEndpointChange }) => {
  const handleVolverListado = () => {
    onEndpointChange("listarTratamientos", Idcita);
  };

  const [Tratamiento, setTratamiento] = useState({
    tipo: "",
    recomendaciones: "",
    fecha: "",
    resultados: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTratamiento({
      ...Tratamiento,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8080/tratamiento/new?Tipo=${Tratamiento.tipo}&Recomendaciones=${Tratamiento.recomendaciones}&Fecha=${Tratamiento.fecha}&Idcita=${Idcita}&Resultados=${Tratamiento.resultados}`
      );
      console.log("Tratamiento agregado con éxito", response.data);

      setTratamiento({
        tipo: "",
        recomendaciones: "",
        fecha: "",
      });
      alert("Tratamiento agregado con éxito");
      handleVolverListado();
    } catch (error) {
      console.error("Error al agregar Tratamiento", error);
      alert("Error al agregar al Tratamiento");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-5">Nuevo Tratamiento</h1>
        <form
          action="/Tratamiento/new"
          method="post"
          onSubmit={handleFormSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          required
        >
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
              value={Tratamiento.fecha}
              className="mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4 flex justify-center flex-col">
            <label
              htmlFor="tipo"
              className="block text-sm font-medium text-gray-600"
            >
              Tipo:
            </label>
            <input
              type="text"
              id="tipo"
              name="tipo"
              onChange={handleInputChange}
              value={Tratamiento.tipo}
              className="mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4 flex justify-center flex-col">
            <label
              htmlFor="recomendaciones"
              className="block text-sm font-medium text-gray-600"
            >
              Recomendaciones:
            </label>
            <input
              type="text"
              id="recomendaciones"
              name="recomendaciones"
              onChange={handleInputChange}
              value={Tratamiento.recomendaciones}
              className="mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4 flex justify-center flex-col">
            <label
              htmlFor="resultados"
              className="block text-sm font-medium text-gray-600"
            >
              Resultados:
            </label>
            <input
              type="text"
              id="resultados"
              name="resultados"
              onChange={handleInputChange}
              value={Tratamiento.resultados}
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

export default NuevoTratamiento;
