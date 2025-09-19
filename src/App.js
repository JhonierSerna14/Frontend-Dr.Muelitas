// App.js
import React, { useState } from "react";
import NavBar from "./Components/Navbar/navBar";
import ListarOdontologos from "./Components/Odontologo/listarOdontologo";
import NuevoOdontologo from "./Components/Odontologo/nuevoOdontologo";
import EliminarOdontologo from "./Components/Odontologo/eliminarOdontologo";
import ListarPacientes from "./Components/Paciente/listarPaciente";
import ListarCitas from "./Components/CitaOdontologica/listarCita";
import ActualizarCita from "./Components/CitaOdontologica/actualizarCita";
import EliminarPaciente from "./Components/Paciente/eliminarPaciente";
import EliminarCita from "./Components/CitaOdontologica/eliminarCita";
import EliminarMedicamento from "./Components/Medicamento/eliminarMedicamento";
import NuevaCita from "./Components/CitaOdontologica/nuevaCita";
import NuevoPaciente from "./Components/Paciente/nuevoPaciente";
import ActualizarOdontologo from "./Components/Odontologo/actualizarOdontologo";
import ActualizarPaciente from "./Components/Paciente/actualizarPaciente";
import ListarMedicamentos from "./Components/Medicamento/listarMedicamento";
import NuevoMedicamento from "./Components/Medicamento/nuevoMedicamento";
import NuevoConsultorio from "./Components/Consultorio/nuevoConsultorio";
import ListarConsultorios from "./Components/Consultorio/listarConsultorios";
import EliminarConsultorio from "./Components/Consultorio/eliminarConsultorio";
import AgendaConsultorio from "./Components/Consultorio/agendaConsultorio";
import ListarTratamientos from "./Components/Tratamiento/listarTratamiento";
import MedicamentosEnTratamiento from "./Components/Tratamiento/medicamentosEnTratamiento";
import AgregarMedicamento from "./Components/Tratamiento/agregarMedicamento";
import EliminarMedicamentoTratamiento from "./Components/Tratamiento/eliminarMedicamentoTratamiento";
import NuevoTratamiento from "./Components/Tratamiento/nuevoTratamiento";
import TratamientosEnPaciente from "./Components/Paciente/tratamientosEnPaciente";
import EliminarTratamiento from "./Components/Tratamiento/eliminarTratamiento";
import ToothGrid from "./Components/Odontograma/toothgrid";
import HomePage from "./Components/home/homepage";

const App = () => {
  const [currentComponent, setCurrentComponent] = useState(<HomePage/>);

  const handleEndpointChange = (newEndpoint, id) => {
    console.log(newEndpoint);
    console.log(id);
    switch (newEndpoint) {
      case "listarOdontologos":
        setCurrentComponent(
          <ListarOdontologos onEndpointChange={handleEndpointChange} />
        );
        break;

      case "nuevoOdontologo":
        setCurrentComponent(
          <NuevoOdontologo onEndpointChange={handleEndpointChange} />
        );
        break;

      case "actualizarOdontologo":
        setCurrentComponent(
          <ActualizarOdontologo
            odontologoId={id}
            onEndpointChange={handleEndpointChange}
          />
        );
        break;

      case "eliminarOdontologo":
        setCurrentComponent(
          <EliminarOdontologo
            odontologoId={id}
            onEndpointChange={handleEndpointChange}
          />
        );
        break;

      case "listarPacientes":
        setCurrentComponent(
          <ListarPacientes onEndpointChange={handleEndpointChange} />
        );
        break;

      case "nuevoPaciente":
        setCurrentComponent(
          <NuevoPaciente onEndpointChange={handleEndpointChange} />
        );
        break;

      case "actualizarPaciente":
        setCurrentComponent(
          <ActualizarPaciente
            pacienteId={id}
            onEndpointChange={handleEndpointChange}
          />
        );
        break;

      case "eliminarPaciente":
        setCurrentComponent(
          <EliminarPaciente
            pacienteId={id}
            onEndpointChange={handleEndpointChange}
          />
        );
        break;

      case "listarCitas":
        setCurrentComponent(
          <ListarCitas onEndpointChange={handleEndpointChange} />
        );
        break;

      case "nuevaCita":
        setCurrentComponent(
          <NuevaCita onEndpointChange={handleEndpointChange} />
        );
        break;

      case "actualizarCita":
        setCurrentComponent(
          <ActualizarCita citaId={id} onEndpointChange={handleEndpointChange} />
        );
        break;

      case "eliminarCita":
        setCurrentComponent(
          <EliminarCita
            medicamentoId={id}
            onEndpointChange={handleEndpointChange}
          />
        );
        break;
      case "listarTratamientos":
        setCurrentComponent(
          <ListarTratamientos
            citaId={id}
            onEndpointChange={handleEndpointChange}
          />
        );
        break;

      case "eliminarTratamientos":
        setCurrentComponent(
          <EliminarTratamiento
            tratamientoId={id}
            onEndpointChange={handleEndpointChange}
          />
        );
        break;

      case "medicamentosEnTratamiento":
        setCurrentComponent(
          <MedicamentosEnTratamiento
            tratamientoId={id}
            onEndpointChange={handleEndpointChange}
          />
        );
        break;

      case "nuevoTratamiento":
        setCurrentComponent(
          <NuevoTratamiento
            Idcita={id}
            onEndpointChange={handleEndpointChange}
          />
        );
        break;

      case "eliminarMedicamentoTratamiento":
        setCurrentComponent(
          <EliminarMedicamentoTratamiento
            medicamentoxTratamientoId={id}
            onEndpointChange={handleEndpointChange}
          />
        );
        break;

      case "tratamientosEnPaciente":
        setCurrentComponent(
          <TratamientosEnPaciente
            pacienteId={id}
            onEndpointChange={handleEndpointChange}
          />
        );
        break;

      case "agregarMedicamento":
        setCurrentComponent(
          <AgregarMedicamento
            tratamientoId={id}
            onEndpointChange={handleEndpointChange}
          />
        );
        break;
      case "listarMedicamentos":
        setCurrentComponent(
          <ListarMedicamentos onEndpointChange={handleEndpointChange} />
        );
        break;

      case "nuevoMedicamento":
        setCurrentComponent(
          <NuevoMedicamento onEndpointChange={handleEndpointChange} />
        );
        break;

      case "eliminarMedicamento":
        setCurrentComponent(
          <EliminarMedicamento
            medicamentoId={id}
            onEndpointChange={handleEndpointChange}
          />
        );
        break;

      case "listarConsultorios":
        setCurrentComponent(
          <ListarConsultorios onEndpointChange={handleEndpointChange} />
        );
        break;

      case "nuevoConsultorio":
        setCurrentComponent(
          <NuevoConsultorio onEndpointChange={handleEndpointChange} />
        );
        break;
      case "agendaConsultorio":
        setCurrentComponent(
          <AgendaConsultorio
            consultorioId={id}
            onEndpointChange={handleEndpointChange}
          />
        );
        break;
      case "eliminarConsultorio":
        setCurrentComponent(
          <EliminarConsultorio
            consultorioId={id}
            onEndpointChange={handleEndpointChange}
          />
        );
        break;
        case "toothgrid":
        setCurrentComponent(
          <ToothGrid
          cedulaPaciente={id}
            onEndpointChange={handleEndpointChange}
          />
        );
        break;

      default:
        setCurrentComponent(
          <HomePage/>
        );
        break;
    }
  };

  return (
    <div className="flex">
      {/* Renderiza el Sidebar y pasa la función de cambio de endpoint */}
      <NavBar onEndpointChange={handleEndpointChange} />

      {/* Renderiza el componente actual según el estado */}
      <main className="flex-1 p-4">{currentComponent}</main>
    </div>
  );
};

export default App;
