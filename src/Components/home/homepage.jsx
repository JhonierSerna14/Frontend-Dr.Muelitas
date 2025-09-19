import React from 'react';

function HomePage() {


  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3">
          {/* Navbar Content */}
          {/* Aquí puedes agregar el contenido de tu navbar, como el logo, enlaces, etc. */}
        </div>
      </nav>

      {/* Banner */}
      <div className="bg-blue-500 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Bienvenido a la Clínica Dr. Muelitas</h1>
          <p className="text-lg">Cuidamos de tu sonrisa con profesionalismo y dedicación.</p>
        </div>
      </div>

      {/* Servicios destacados */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Aquí puedes agregar tarjetas para mostrar los servicios destacados */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Limpieza Dental</h3>
            <p>Realizamos limpiezas dentales profesionales para mantener tu sonrisa saludable.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Blanqueamiento Dental</h3>
            <p>Recupera el brillo natural de tus dientes con nuestro tratamiento de blanqueamiento.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Ortodoncia</h3>
            <p>Corregimos la alineación de tus dientes para una sonrisa perfecta.</p>
          </div>
        </div>
      </div>

      {/* Formulario de contacto */}
      <div className="bg-gray-200 py-16 px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Contáctanos</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Nombre</label>
              <input type="text" id="name" name="name" className="border border-gray-300 rounded-md px-4 py-2 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Correo Electrónico</label>
              <input type="email" id="email" name="email" className="border border-gray-300 rounded-md px-4 py-2 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">Mensaje</label>
              <textarea id="message" name="message" rows="4" className="border border-gray-300 rounded-md px-4 py-2 w-full"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
