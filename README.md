# Around the U.S. - React Migration (TripleTen Sprint 14)

## 📌 Descripción del Proyecto

"Around the U.S." es una aplicación web interactiva diseñada para que los usuarios puedan gestionar un perfil personal y un feed de tarjetas con fotografías de paisajes. Este proyecto representa la evolución y migración de la aplicación original (construida con Vanilla JavaScript y manipulación directa del DOM) hacia una arquitectura moderna y escalable utilizando **React** y **Vite**.

## 🚀 Tecnologías Utilizadas

- **React (JSX):** Creación de interfaces de usuario mediante componentes modulares y reutilizables.
- **Vite:** Herramienta de construcción (bundler) para un entorno de desarrollo rápido y optimizado.
- **ESLint:** Linter estándar implementado para mantener las mejores prácticas y limpieza en el código.
- **CSS3:** Estilos responsivos utilizando Flexbox, Grid y posicionamiento avanzado.

Durante la migración a React, me enfoqué en refactorizar el código heredado para adoptar un enfoque declarativo:

## 🛠️ Estructura de Componentes Destacada

El sistema de PopUps fue diseñado para ser completamente reutilizable, actuando como un contenedor inteligente que renderiza diferentes formularios o imágenes a pantalla completa basándose en el estado inyectado:

- `EditProfile.jsx`
- `NewCard.jsx`
- `ChangeAvatar.jsx`
- `Delete Confirmation`
- `PopUpImage.jsx`
