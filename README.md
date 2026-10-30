# Proyecto 20 — React App

Base React + Vite con estructura estándar.

## Estructura

```
src/
├── components/   # Componentes reutilizables (Header, Footer, Layout)
├── pages/        # Páginas/vistas (Home, About, NotFound)
├── hooks/        # Hooks personalizados (useLocalStorage)
├── context/      # Contextos globales (AppContext)
├── utils/        # Constantes y helpers
├── services/     # Llamadas a API (api.js)
├── styles/       # Estilos adicionales
├── assets/       # Imágenes y recursos
├── App.jsx       # Rutas principales
└── main.jsx      # Punto de entrada
```

## Scripts

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
```

## Variables de entorno

Copia `.env.example` (si existe) o crea `.env`:

```
VITE_API_URL=http://localhost:3000
```
