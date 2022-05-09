Por favor utilice las herramientas y/o sugerencias que aparecen aqui

node: 17.9.0 // Este proyecto utiliza nodejs version 17.9.0

RUN: npm install

EXPOSE: process.env.PORT || 3000

CMD: ["start": "node src"] // Use el comando npm start para inicializar el proyecto

npm install mongoose-currency // Utiliza --force si tiene algún error al instalar el paquete.
