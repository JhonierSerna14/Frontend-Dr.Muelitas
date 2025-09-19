import React from "react";
import axios from "axios";

const eliminarOdontologo = ({ odontologoId, onEndpointChange }) => {
  const handleVolverListado = () => {
    onEndpointChange("listarOdontologos");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.delete(
        `http://localhost:8080/odontologo/delete?idOdontologo=${odontologoId}`
      );
      alert("Odontólogo eliminado con éxito");
      handleVolverListado();
    } catch (error) {
      console.error("Error al eliminar el odontólogo:", error);
      alert(
        "Hubo un error al eliminar el odontólogo. Por favor, inténtelo de nuevo."
      );
    }
  };

  return (
    <div class="container mx-auto px-4">
      <h1 class="mt-20 text-3xl font-bold">Eliminación de Odontólogo</h1>
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

export default eliminarOdontologo;