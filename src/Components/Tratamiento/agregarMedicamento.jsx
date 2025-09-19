import React, { useEffect, useState } from "react";
import axios from "axios";

const AgregarMedicamento = ({ tratamientoId, onEndpointChange }) => {
  const handleVolverListado = () => {
    onEndpointChange("medicamentosEnTratamiento", tratamientoId);
  };

  const [receta, setReceta] = useState({
    medicamentoId: "",
    cantidad: "",
    horario: "",
  });

  const [medicamentos, setMedicamentos] = useState([]);

  useEffect(() => {
    const obtenerMedicamentos = async () => {
      try {
        const responese = await axios.get("/medicamento/all");
        setMedicamentos(responese.data);
      } catch (error) {
        console.error("Error al obtener los medicamentos: ", error);
      }
    };
    obtenerMedicamentos();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReceta({
      ...receta,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8080/medicamentoxTratamiento/new?idMedicamento=${receta.medicamentoId}&idtratamiento=${tratamientoId}&cantidad=${receta.cantidad}&horario=${receta.horario}`
      );
      console.log("Medicamento agregado con éxito", response.data);

      setReceta({
        medicamentoId: "",
        cantidad: "",
        horario: "",
      });
      alert("Medicamento agregado con éxito");
      handleVolverListado();
    } catch (error) {
      console.error("Error al agregar medicamento", error);
      alert("Error al agregar al medicamento");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-5">Nuevo Medicamento</h1>
        <form
          action="/medicamentoxTratamiento/new"
          method="post"
          onSubmit={handleFormSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          required
        >
          <div className="mb-4 flex justify-center flex-col">
            <label
              htmlFor="medicamento"
              className="block text-sm font-medium text-gray-600"
            >
              Medicamento:
            </label>
            <select
              type="text"
              id="medicamento"
              name="medicamentoId"
              onChange={handleInputChange}
              value={receta.medicamentoId}
              className="mt-1 p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Selecciona un medicamento</option>
              {medicamentos.map((medicamento) => (
                <option key={medicamento.id} value={medicamento.id}>
                  {medicamento.nombre + " - " + medicamento.presentacion}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4 flex justify-center flex-col">
            <label
              htmlFor="cantidad"
              className="block text-sm font-medium text-gray-600"
            >
              Cantidad:
            </label>
            <input
              type="number"
              id="cantidad"
              name="cantidad"
              onChange={handleInputChange}
              value={receta.cantidad}
              className="mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4 flex justify-center flex-col">
            <label
              htmlFor="horario"
              className="block text-sm font-medium text-gray-600"
            >
              Horario:
            </label>
            <input
              type="text"
              id="horario"
              name="horario"
              onChange={handleInputChange}
              value={receta.horario}
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

export default AgregarMedicamento;
