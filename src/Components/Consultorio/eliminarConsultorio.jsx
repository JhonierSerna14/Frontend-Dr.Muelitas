import React from "react";
import axios from "axios";

const eliminarConsultorio = ({ consultorioId, onEndpointChange }) => {
  const handleVolverListado = () => {
    onEndpointChange("listarConsultorios");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.delete(
        `http://localhost:8080/consultorio/delete?id=${consultorioId}`
      );
      alert("Consultorio eliminado con éxito");
      handleVolverListado();
    } catch (error) {
      console.error("Error al actualizar consultorio:", error);
      alert(
        "Hubo un error al eliminar el consultorio. Por favor, inténtelo de nuevo."
      );
    }
  };

  return (
    <div class="container mx-auto px-4">
      <h1 class="mt-20 text-3xl font-bold">Eliminación de Consultorio</h1>
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

export default eliminarConsultorio;
