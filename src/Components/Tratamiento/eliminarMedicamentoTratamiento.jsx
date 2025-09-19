import React from "react";
import axios from "axios";

const EliminarMedicamentoTratamiento = ({
  medicamentoxTratamientoId,
  onEndpointChange,
}) => {
  const handleVolverListado = (tratamientoId) => {
    onEndpointChange("medicamentosEnTratamiento", tratamientoId);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.delete(
        `http://localhost:8080/medicamentoxTratamiento/delete?id=${medicamentoxTratamientoId}`
      );
      alert("Medicamento eliminado con éxito");
      handleVolverListado(response.data);
    } catch (error) {
      console.error("Error al actualizar medicamento:", error);
      alert(
        "Hubo un error al eliminar el medicamento. Por favor, inténtelo de nuevo."
      );
    }
  };

  return (
    <div class="container mx-auto px-4">
      <h1 class="mt-20 text-3xl font-bold">Eliminación de Medicamento</h1>
      <p>¿Estás seguro de que deseas eliminar este registro?</p>
      <form class="mt-4 flex justify-center">
        <button
          type="submit"
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={handleSubmit}
        >
          Eliminar
        </button>
        <button
          type="button"
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleVolverListado}
        >
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default EliminarMedicamentoTratamiento;
