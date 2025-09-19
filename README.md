# 🦷 Dr. Muelitas - Sistema de Gestión Odontológica

![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-blue?logo=tailwindcss)
![Axios](https://img.shields.io/badge/Axios-1.6.7-purple?logo=axios)
![License](https://img.shields.io/badge/License-MIT-green)

## 📋 Descripción

**Dr. Muelitas** es un sistema integral de gestión para clínicas odontológicas desarrollado con React. La aplicación permite administrar de manera eficiente toda la operación de una clínica dental, desde la gestión de pacientes y odontólogos hasta el seguimiento de tratamientos y medicamentos.

## ✨ Características Principales

### 👥 Gestión de Pacientes
- ➕ Registro de nuevos pacientes con información completa
- 📋 Listado y búsqueda de pacientes existentes
- ✏️ Actualización de datos del paciente
- 🗑️ Eliminación segura de registros
- 🔍 Historial completo de tratamientos por paciente

### 👨‍⚕️ Gestión de Odontólogos
- 👤 Registro de profesionales odontológicos
- 📊 Visualización del directorio médico
- ✏️ Actualización de información profesional
- 🗑️ Gestión de bajas de personal

### 📅 Sistema de Citas
- 🗓️ Programación de citas odontológicas
- 📋 Visualización de agenda por consultorio
- ✏️ Modificación y reprogramación de citas
- ❌ Cancelación de citas con confirmación
- 🔄 Filtros por período (día, semana, mes)

### 🏥 Gestión de Consultorios
- 🏢 Registro de espacios de atención
- 📊 Vista de disponibilidad de consultorios
- 📅 Agenda integrada por consultorio
- 🗑️ Administración de espacios físicos

### 💊 Control de Medicamentos
- 💉 Catálogo completo de medicamentos
- 🔍 Búsqueda por nombre y presentación
- ➕ Registro de nuevos medicamentos
- 🗑️ Gestión de inventario farmacológico

### 🦷 Gestión de Tratamientos
- 📋 Registro detallado de procedimientos
- 💊 Asociación de medicamentos por tratamiento
- 📝 Instrucciones postoperatorias
- 📊 Seguimiento de resultados
- 🔗 Vinculación con citas específicas

### 🦷 Odontograma Digital
- 🖼️ Visualización gráfica del estado dental
- ✏️ Edición interactiva de piezas dentales
- 📊 Registro de estados: caries, obturaciones, extracciones
- 👶 Soporte para odontograma pediátrico y adulto

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 18.2.0** - Biblioteca principal para interfaces de usuario
- **React Router DOM 6.22.3** - Navegación y enrutamiento
- **Tailwind CSS 3.4.1** - Framework de estilos utilitarios
- **Axios 1.6.7** - Cliente HTTP para comunicación con APIs

### Herramientas de Desarrollo
- **Create React App 5.0.1** - Configuración y empaquetado
- **ESLint** - Análisis estático de código
- **Jest & Testing Library** - Framework de testing

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 16.0 o superior
- npm 8.0 o superior
- Backend API ejecutándose en `http://localhost:8080`

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/JhonierSerna14/Frontend-Dr.Muelitas.git
   cd Frontend-Dr.Muelitas
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   # Crear archivo .env en la raíz del proyecto
   REACT_APP_API_URL=http://localhost:8080
   ```

4. **Ejecutar en modo desarrollo**
   ```bash
   npm start
   ```

5. **Acceder a la aplicación**
   ```
   http://localhost:3000
   ```

## 📂 Estructura del Proyecto

```
src/
├── Components/
│   ├── CitaOdontologica/     # Gestión de citas
│   │   ├── actualizarCita.jsx
│   │   ├── eliminarCita.jsx
│   │   ├── listarCita.jsx
│   │   └── nuevaCita.jsx
│   ├── Consultorio/          # Gestión de consultorios
│   │   ├── agendaConsultorio.jsx
│   │   ├── eliminarConsultorio.jsx
│   │   ├── listarConsultorios.jsx
│   │   └── nuevoConsultorio.jsx
│   ├── home/                 # Página principal
│   │   └── homepage.jsx
│   ├── Medicamento/          # Gestión de medicamentos
│   │   ├── eliminarMedicamento.jsx
│   │   ├── listarMedicamento.jsx
│   │   └── nuevoMedicamento.jsx
│   ├── Navbar/               # Barra de navegación
│   │   └── navBar.jsx
│   ├── Odontograma/          # Sistema odontológico
│   │   ├── diente.jsx
│   │   ├── listarOdontograma.jsx
│   │   ├── odontograma.jsx
│   │   └── toothgrid.jsx
│   ├── Odontologo/           # Gestión de profesionales
│   │   ├── actualizarOdontologo.jsx
│   │   ├── eliminarOdontologo.jsx
│   │   ├── listarOdontologo.jsx
│   │   └── nuevoOdontologo.jsx
│   ├── Paciente/             # Gestión de pacientes
│   │   ├── actualizarPaciente.jsx
│   │   ├── eliminarPaciente.jsx
│   │   ├── eliminarTratamiento.jsx
│   │   ├── listarPaciente.jsx
│   │   ├── nuevoPaciente.jsx
│   │   └── tratamientosEnPaciente.jsx
│   ├── Sidebar/              # Menú lateral
│   │   └── sidebar.jsx
│   └── Tratamiento/          # Gestión de tratamientos
│       ├── actualizarTratamiento.jsx
│       ├── agregarMedicamento.jsx
│       ├── eliminarMedicamentoTratamiento.jsx
│       ├── eliminarTratamiento.jsx
│       ├── listarTratamiento.jsx
│       ├── medicamentosEnTratamiento.jsx
│       └── nuevoTratamiento.jsx
├── assets/                   # Recursos estáticos
│   ├── AdultoBase.png        # Odontograma adulto
│   ├── pediatricoBase.png    # Odontograma pediátrico
│   └── [estados-dentales]/   # Iconos de estados
├── App.js                    # Componente principal
├── App.css                   # Estilos globales
└── index.js                  # Punto de entrada
```

## 🎯 Funcionalidades Detalladas

### Sistema de Navegación
- **Navbar superior**: Acceso rápido a funciones principales
- **Sidebar lateral**: Menú organizado por módulos
- **Navegación contextual**: Botones de retorno y navegación fluida

### Gestión de Estados
- **Estados React**: Manejo eficiente del estado local
- **Props drilling**: Comunicación entre componentes padre-hijo
- **Event handling**: Gestión de eventos de usuario optimizada

### Integración con Backend
- **API REST**: Comunicación completa con endpoints backend
- **CRUD Operations**: Crear, Leer, Actualizar, Eliminar en todas las entidades
- **Error Handling**: Manejo robusto de errores y validaciones
- **Loading States**: Indicadores de carga para mejor UX

### Responsive Design
- **Mobile First**: Diseño adaptado para dispositivos móviles
- **Tailwind CSS**: Utilidades responsive integradas
- **Breakpoints**: Adaptación automática a diferentes tamaños de pantalla

## 🧪 Testing

```bash
# Ejecutar tests
npm test

# Ejecutar tests con cobertura
npm run test:coverage

# Ejecutar tests en modo watch
npm run test:watch
```

## 🏗️ Build para Producción

```bash
# Crear build optimizado
npm run build

# Servir build localmente (opcional)
npm install -g serve
serve -s build
```

## 🔧 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm start` | Inicia el servidor de desarrollo |
| `npm test` | Ejecuta los tests en modo interactivo |
| `npm run build` | Crea el build de producción |
| `npm run eject` | Expone configuración de CRA (irreversible) |

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📋 Roadmap

- [ ] 🔐 Sistema de autenticación y autorización
- [ ] 📊 Dashboard con métricas y estadísticas
- [ ] 📱 Aplicación móvil complementaria
- [ ] 🔔 Sistema de notificaciones push
- [ ] 📋 Reportes y análisis avanzados
- [ ] 🌐 Internacionalización (i18n)
- [ ] 🎨 Sistema de temas personalizables
- [ ] 📄 Generación de documentos PDF
- [ ] 💳 Integración con sistemas de pago
- [ ] ☁️ Sincronización en la nube

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👥 Equipo de Desarrollo

- **Frontend Developer**: [JhonierSerna14](https://github.com/JhonierSerna14)

## 📞 Soporte

Para soporte técnico o consultas:
- 📧 Email: [correo@ejemplo.com]
- 🐛 Issues: [GitHub Issues](https://github.com/JhonierSerna14/Frontend-Dr.Muelitas/issues)

---

⭐ **¡Si este proyecto te ha sido útil, no olvides darle una estrella!** ⭐
