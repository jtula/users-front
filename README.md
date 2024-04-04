# React CRUD App
Este es un ejemplo de una aplicación CRUD (Create, Read, Update, Delete) desarrollada en React. Permite gestionar usuarios utilizando endpoints de una API REST.

La aplicación permite realizar las siguientes operaciones:
- Ver todos los usuarios
- Agregar un nuevo usuario
- Actualizar la información de un usuario existente
- Eliminar un usuario

La aplicación está desarrollada utilizando React Hooks para el manejo de estados, y utiliza TailwindCSS para los estilos.

## Configuración

Asegúrate de tener instalado Node.js y npm en tu sistema antes de comenzar.

1. Clona el repositorio:

```bash
git clone https://github.com/jtula/users-front.git
cd users-front
```
Instala las dependencias:
```
npm install
```
Crea un archivo .env en la raíz del proyecto y define la URL de la API:
```
VITE_API_URL=http://localhost:3000
```

Para iniciar la aplicación, puedes usar el siguiente comando:
```
npm start
```

Esto iniciará la aplicación en modo de desarrollo. Abre http://localhost:3000 en tu navegador para ver la aplicación.

## Funcionalidades
- **Ver todos los usuarios:** La página principal muestra una lista de todos los usuarios.
- **Agregar un nuevo usuario:** En la parte superior de la lista de usuarios, hay un botón para agregar un nuevo usuario. Ingresa el nombre y correo electrónico del usuario en el formulario y presiona "Save".
- **Editar un usuario:** Al hacer clic en el botón "Edit" junto a un usuario, se abre un formulario para editar el nombre y correo electrónico del usuario. Presiona "Update" para guardar los cambios o "Cancel" para cancelar la edición.
- **Eliminar un usuario:** Al hacer clic en el botón "Delete" junto a un usuario, se elimina el usuario de la lista.

## Dependencias
 - [React](https://react.dev/)
 - [TailwindCSS](https://tailwindcss.com/)