// Requerir el módulo express
const express = require('express');

// Crear una instancia de la aplicación
const app = express();

// Definir el puerto a usar
const port = 3000;

// Crear un arreglo con algunas tareas de ejemplo
const tasks = [
  {
    id: 1,
    title: "Hacer la compra",
    completed: false
  },
  {
    id: 2,
    title: "Estudiar para el examen",
    completed: true
  },
  {
    id: 3,
    title: "Llamar a mamá",
    completed: false
  }
];

// Definir una ruta GET para obtener el arreglo de tareas
app.get('/tasks', (req, res) => {
  // Establecer el tipo de contenido a JSON
  res.type('application/json');
  // Enviar el arreglo de tareas como respuesta
  res.json(tasks);
});

// Iniciar el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
