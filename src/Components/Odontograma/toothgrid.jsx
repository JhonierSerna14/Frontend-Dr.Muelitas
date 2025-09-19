import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Default from "../../assets/default.png";
import caries from "../../assets/caries.png";
import coronaMalEstado from "../../assets/coronaMalEstado.png";
import dienteAusente from "../../assets/dienteAusente.png";
import dienteBuenEstado from "../../assets/dienteBuenEstado.png";
import dienteExtraccion from "../../assets/dienteExtraccion.png";
import fracturaMalEstado from "../../assets/fracturaMalEstado.png";
import obturacionBuenEstado from "../../assets/obturacionBuenEstado.png";
import obturacionMalEstado from "../../assets/obturacionMalEstado.png";
import sellanteBuenEstado from "../../assets/sellanteBuenEstado.png";
import sellanteMalEstado from "../../assets/sellanteMalEstado.png";

const estadoToImage = {
  default: Default,
  caries: caries,
  coronaMalEstado: coronaMalEstado,
  dienteAusente: dienteAusente,
  dienteBuenEstado: dienteBuenEstado,
  dienteExtraccion: dienteExtraccion,
  fracturaMalEstado: fracturaMalEstado,
  obturacionBuenEstado: obturacionBuenEstado,
  obturacionMalEstado: obturacionMalEstado,
  sellanteBuenEstado: sellanteBuenEstado,
  sellanteMalEstado: sellanteMalEstado,
};

const ToothGrid = ({ cedulaPaciente, onEndpointChange }) => {
  const [teethData, setTeethData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTooth, setSelectedTooth] = useState(null);

  const fetchTeethData = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/paciente/Odontograma?Cedula=${cedulaPaciente}`
      );
      setTeethData(response.data.odontograma.dientes);
      console.log(response.data);
      console.log("sapo hpta");
    } catch (error) {
      console.error("Error fetching teeth data:", error);
    }
  }, [cedulaPaciente]);

  useEffect(() => {
    fetchTeethData();
  }, [cedulaPaciente, fetchTeethData]);

  const handleEditClick = (tooth) => {
    setSelectedTooth(tooth);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTooth(null);
  };

  const renderToothBox = (tooth) => {
    return (
      <div key={tooth.id} className="relative">
        <div className="flex flex-wrap w-12 h-12 border">
          <div className="w-full h-full flex items-center justify-center mt-10">
            {tooth.numero}
          </div>
        </div>
        <button
          className="absolute top-0 left-0 bg-green-500 text-white py-1 px-2"
          onClick={() => handleEditClick(tooth)}
        >
          EDITAR
        </button>
      </div>
    );
  };

  const upperTeeth = teethData.filter((tooth) => tooth.sector === 1);
  const lowerTeeth = teethData.filter((tooth) => tooth.sector === 2);

  return (
    <>
      <div className="flex flex-col items-center mt-20">
        <div className="flex flex-wrap gap-6 mb-2">
          {upperTeeth.map((tooth) => renderToothBox(tooth))}
        </div>
        <div className="flex flex-wrap gap-6 mb-2">
          {upperTeeth.map((tooth) => (
            <div key={tooth.id} className="relative w-12 h-12">
              <img
                src={estadoToImage[tooth.estado] || Default}
                alt={`Tooth ${tooth.numero}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-6 mb-2">
          {lowerTeeth.map((tooth) => (
            <div key={tooth.id} className="relative w-12 h-12">
              <img
                src={estadoToImage[tooth.estado] || Default}
                alt={`Tooth ${tooth.numero}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-6 mt-2">
          {lowerTeeth.map((tooth) => renderToothBox(tooth))}
        </div>
        {isModalOpen && selectedTooth && (
          <ToothModal
            tooth={selectedTooth}
            onClose={closeModal}
            cedulaPaciente={cedulaPaciente}
            fetchTeethData={fetchTeethData}
          />
        )}
      </div>
    </>
  );
};

const ToothModal = ({ tooth, onClose, cedulaPaciente, fetchTeethData }) => {
  const [estado, setEstado] = useState(tooth.estado || "");
  const [descripcion, setDescripcion] = useState(tooth.descripcion || "");
  const handleSave = async () => {
    try {
      await axios.post(
        `http://localhost:8080/paciente/actualizarOdontograma?cedula=${cedulaPaciente}&id=${tooth.id}&estado=${estado}&descripcion=${descripcion}`
      );
      fetchTeethData(); // Llamar a la función para actualizar los datos de los dientes
      onClose();
    } catch (error) {
      console.error("Error updating tooth:", error);
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-4 rounded">
        <h2 className="text-xl mb-4">Editar Diente</h2>
        <label className="block mb-2">
          Estado:
          <select
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            className="border p-1 w-full"
          >
            <option value="">Seleccionar estado</option>
            {Object.keys(estadoToImage).map((estadoKey) => (
              <option key={estadoKey} value={estadoKey}>
                {estadoKey}
              </option>
            ))}
          </select>
        </label>
        <label className="block mb-2">
          Descripción:
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="border p-1 w-full"
          />
        </label>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white py-1 px-2 mr-2"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white py-1 px-2"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToothGrid;
