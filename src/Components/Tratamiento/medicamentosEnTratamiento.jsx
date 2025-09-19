import React, { useState, useEffect } from "react";
import axios from "axios";

const MedicamentosEnTratamiento = ({ tratamientoId, onEndpointChange }) => {
  const [medicamentoxTratamiento, setmedicamentoxTratamiento] = useState([]);
  const handleNuevoMedicamento = () => {
    onEndpointChange("agregarMedicamento", tratamientoId);
  };

  const handleEliminarMedicamento = (tratamientoId) => {
    onEndpointChange("eliminarMedicamentoTratamiento", tratamientoId);
  };

  useEffect(() => {
    const fetchMedicamentos = async () => {
      try {
        const response = await axios.get(
          `/medicamentoxTratamiento/medicamentosEnTratamiento?tratamientoId=${tratamientoId}`
        );
        setmedicamentoxTratamiento(response.data);
      } catch (error) {
        console.error("Error al obtener los medicamentos", error);
      }
    };

    fetchMedicamentos();
  }, [tratamientoId]);

  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-3xl font-bold mb-5">Medicamentos</h1>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th>Medicamento</th>
            <th>Presentación</th>
            <th>Cantidad</th>
            <th>Horario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {medicamentoxTratamiento.map((medicamentoxTratamiento) => (
            <tr key={medicamentoxTratamiento.id}>
              <td>{medicamentoxTratamiento.medicamento.nombre}</td>
              <td>{medicamentoxTratamiento.medicamento.presentacion}</td>
              <td>{medicamentoxTratamiento.cantidad}</td>
              <td>{medicamentoxTratamiento.horario}</td>
              <td>
                <div className="btn-group" role="group">
                  <button
                    onClick={() =>
                      handleEliminarMedicamento(medicamentoxTratamiento.id)
                    }
                    className="bg-red-500 text-white py-2 px-4 rounded"
                  >
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={handleNuevoMedicamento}
        type="button"
        className="bg-blue-500 text-white py-2 px-4 rounded mt-3"
      >
        Agregar Medicamento
      </button>
    </div>
  );
};

export default MedicamentosEnTratamiento;
