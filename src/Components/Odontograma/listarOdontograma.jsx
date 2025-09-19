import odontogramaBase from "../../assets/AdultoBase.png";
import React, { useState } from "react";

const ListarOdontograma = ({ onEndpointChange }) => {
  console.log("ListarOdontograma");
  const [odontograma, setOdontograma] = useState([]);
  const [dienteSeleccionado, setDienteSeleccionado] = useState(null);

  return (
    <div>
      <img src={odontogramaBase} alt="Odontograma Base" />
      {odontograma.map((diente) => (
        <div
          key={diente.idDiente}
          style={{
            position: "absolute",
            left: diente.posicionX,
            top: diente.posicionY,
            width: "20px",
            height: "20px",
            backgroundColor: "transparent",
            border: "1px solid black",
            borderRadius: "50%",
            cursor: "pointer",
          }}
          onClick={() => setDienteSeleccionado(diente)}
        />
      ))}
    </div>
  );
};
export default ListarOdontograma;
