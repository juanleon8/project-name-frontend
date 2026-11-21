# News Explorer

Aplicación web desarrollada con **React + Vite** que permite buscar noticias por tema, guardar artículos en tu perfil y gestionarlos. Incluye autenticación simulada, modales de login/registro y una interfaz responsive.

## 🚀 Demo

- **URL de producción (GitHub Pages):** https://juanleon8.github.io/project-name-frontend/
- **URL local:** http://localhost:5173
- **Repositorio:** https://github.com/juanleon8/project-name-frontend

## 🛠️ Tecnologías

- React 18
- Vite
- React Router DOM v6
- CSS con design tokens (BEM)
- NewsAPI (búsqueda de noticias)
- Google Fonts (Roboto, Roboto Slab, Inter) vía WOFF local

## 📁 Estructura del proyecto

```
src/
├── components/     # Componentes reutilizables (Header, Footer, Layout, Navigation, Main, etc.)
├── pages/          # Páginas (Home, SearchResults, SavedNews, About, etc.)
├── context/        # Contexto global (AppContext: usuario, savedCount)
├── hooks/          # Hooks personalizados (useLocalStorage)
├── utils/          # ThirdPartyApi.js (solicitudes a NewsAPI y backend)
├── services/       # Cliente API (api.js)
├── assets/         # Imágenes y fuentes WOFF
├── App.jsx         # Rutas principales
└── main.jsx        # Punto de entrada
```

## ⚙️ Instalación y ejecución

1. Clona el repositorio:
   ```bash
   git clone https://github.com/juanleon8/project-name-frontend.git
   cd project-name-frontend
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la raíz con:
   ```env
   VITE_API_URL=http://localhost:3000
   VITE_NEWS_API_KEY=259c8c3a82824d22a6c7e143daf4796e
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

   La app estará disponible en http://localhost:5173

5. Para producción:
   ```bash
   npm run build
   npm run preview
   ```

## 🌐 Despliegue

La aplicación está publicada con **GitHub Pages** en:
https://juanleon8.github.io/project-name-frontend/

El despliegue es automático: el workflow `.github/workflows/deploy.yml` compila el proyecto con `npm run build` y publica la carpeta `dist` en cada `push` a `main`. Para configurarlo desde cero:

1. En el repositorio, entra en **Settings → Pages → Build and deployment**.
2. En **Source**, selecciona **GitHub Actions**.
3. (Opcional) Agrega en **Settings → Secrets and variables → Actions** las variables `VITE_API_URL` y `VITE_NEWS_API_KEY` si quieres usar un backend propio. Sin ellas, la app usa los valores por defecto.

> La navegación usa `HashRouter` para que las rutas (`/saved-news`, `/search`) funcionen correctamente en GitHub Pages.

## ✨ Funcionalidades

- **Búsqueda de noticias** por tema (NewsAPI).
- **Preloader** circular (74×74px) mientras se cargan los datos.
- **Manejo de errores**: mensaje si falla la solicitud o no hay resultados.
- **Paginación**: se muestran 3 tarjetas inicialmente, botón "ver más" para cargar 3 más.
- **Guardar/eliminar artículos** (icono en la tarjeta, se vuelve azul al guardar).
- **Ventanas modales** de login, registro y éxito.
- **Página de artículos guardados** con encabezado dinámico.
- **Autenticación simulada** (estado en memoria + localStorage).
- **Diseño responsive** (1/2/3 columnas según ancho de pantalla).

## 📝 Notas

- El guardado de artículos usa `localStorage` como respaldo cuando el backend no está disponible.
- Las fuentes se sirven localmente en formato WOFF desde `src/assets/fonts/`.

---

Desarrollado por **Juan Mondragon** como parte del bootcamp de Desarrollo Web de **TripleTen**.