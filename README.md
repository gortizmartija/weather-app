![Weather App](https://img.shields.io/badge/Weather%20App-v1.0-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react&style=flat-square)
![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?logo=vite&style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3+-06B6D4?logo=tailwindcss&style=flat-square)

# 🌤️ Weather App

Una aplicación moderna y elegante para consultar el clima en tiempo real. Obtén información detallada del clima de cualquier ubicación o de tu posición actual con una interfaz intuitiva y responsive.

## ✨ Características

- 🌍 **Geolocalización automática**: Detecta tu ubicación y muestra el clima automáticamente
- 🔍 **Búsqueda flexible**: Busca el clima de cualquier ciudad del mundo
- 📍 **Fallback inteligente**: Si no se puede obtener tu ubicación, muestra Nueva York por defecto
- ⏰ **Pronóstico por horas**: Visualiza el clima hora por hora del primer día
- 🎨 **Interfaz moderna**: Diseño limpio y atractivo con Tailwind CSS
- ⚡ **Rendimiento optimizado**: Construido con Vite para máxima velocidad
- 📱 **Totalmente responsive**: Funciona perfectamente en todos los dispositivos
- 🔄 **Carga inteligente**: Indicador visual de carga mientras se obtienen los datos

## 🚀 Tecnologías Utilizadas

- **React 18+** - Librería de interfaz de usuario
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS** - Framework de estilos
- **Axios** - Cliente HTTP
- **WeatherAPI.com** - API de datos meteorológicos

## 📋 Requisitos Previos

- Node.js (v16 o superior)
- pnpm, npm o yarn
- Una API key de [WeatherAPI.com](https://www.weatherapi.com/) (gratuita)

## 🔧 Instalación

1. **Clona el repositorio**

```bash
git clone https://github.com/gortizmartija/weather-app.git
cd weather-app
```

2. **Instala las dependencias**

```bash
pnpm install
# o si prefieres npm
npm install
```

3. **Configura las variables de entorno**

Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_API_KEY=tu_api_key_de_weatherapi
```

Obtén tu API key gratuita en [WeatherAPI.com](https://www.weatherapi.com/)

## 🏃 Uso

### Desarrollo

```bash
pnpm dev
# o
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Build para producción

```bash
pnpm build
# o
npm run build
```

### Vista previa de la build

```bash
pnpm preview
# o
npm run preview
```

## 📱 Cómo Usar la Aplicación

1. **Al abrir la app**: Automáticamente solicita permiso para acceder a tu ubicación

   - ✅ Si aceptas: Muestra el clima de tu ubicación actual
   - ❌ Si rechazas: Muestra el clima de Nueva York por defecto

2. **Información mostrada**:

   - Temperatura actual en °C
   - Descripción del clima
   - Icono representativo del clima
   - Ciudad y país
   - Pronóstico hora por hora

3. **Indicadores**:
   - **Cargando**: Spinner animado mientras se obtienen los datos
   - **Error**: Mensaje claro si algo falla

## 📂 Estructura del Proyecto

```
weather-app/
├── src/
│   ├── components/
│   │   └── Hours.jsx          # Componente de pronóstico horario
│   ├── hooks/
│   │   └── useWeather.js      # Hook personalizado para el clima
│   ├── services/
│   │   └── weather.js         # Servicio de API del clima
│   ├── assets/
│   ├── App.jsx                # Componente principal
│   ├── main.jsx               # Entrada de la aplicación
│   └── index.css              # Estilos globales
├── .env                       # Variables de entorno
├── vite.config.js             # Configuración de Vite
├── tailwind.config.js         # Configuración de Tailwind
└── package.json               # Dependencias del proyecto
```

## 🎨 Características de Diseño

- **Colores modernos**: Paleta azul y neutral
- **Animaciones suaves**: Transiciones y spinner de carga
- **Tipografía clara**: Jerarquía visual definida
- **Espaciado consistente**: Uso de Tailwind para mantener armonía
- **Sombras elegantes**: Profundidad visual en tarjetas

## 🔌 API Integration

La app utiliza [WeatherAPI.com](https://www.weatherapi.com/) que proporciona:

- Datos meteorológicos en tiempo real
- Pronósticos horarios y diarios
- Iconos del clima
- Información de ubicación

### Endpoints utilizados:

- `GET /v1/current.json` - Clima actual
- Incluye automáticamente el pronóstico horario

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Siéntete libre de:

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Gael Ortiz** - [GitHub](https://github.com/gortizmartija)

---

## 💡 Tips

- La API gratuita de WeatherAPI tiene un límite de 1,000,000 de llamadas/mes
- Los datos se cachean mientras el usuario permanece en la página
- La geolocalización solo funciona en HTTPS o localhost
- Algunos navegadores requieren permisos específicos para acceder a la ubicación

## 🐛 Reporting de Bugs

Si encuentras un bug, por favor abre un issue en el repositorio con:

- Descripción del problema
- Pasos para reproducirlo
- Navegador y versión
- Screenshots si es relevante

---

⭐ Si te gusta este proyecto, ¡no olvides darle una estrella!
