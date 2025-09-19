import React, { useState } from "react";
import axios from "axios";

const eliminarTratamiento = ({ TratamientoId, onEndpointChange }) => {
  const handleVolverListado = () => {
    onEndpointChange("listarTratamientos");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.delete(
        `http://localhost:8080/tratamiento/delete?id=${TratamientoId}`
      );
      alert("Tratamiento eliminado con éxito");
      handleVolverListado();
    } catch (error) {
      console.error("Error al actualizar Tratamiento:", error);
      alert(
        "Hubo un error al eliminar el Tratamiento. Por favor, inténtelo de nuevo."
      );
    }
  };

  return (
    <div class="container mx-auto px-4">
      <h1 class="mt-20 text-3xl font-bold">Eliminación de Tratamiento</h1>
      <p>¿Estás seguro de que deseas eliminar este registro?</p>
      <form class="mt-4 flex justify-center">
        <button
          type="submit"
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={handleSubmit}
        >
          Eliminar
        </button>
        <a
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleVolverListado}
        >
          Cancelar
        </a>
      </form>
    </div>
  );
};

export default eliminarTratamiento;
