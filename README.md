### Koibanx Challenge Backend

Por favor utilice las herramientas y/o sugerencias que aparecen aqui.

Debe agregar .dev y utilizar como referencia .dev.exmaple

node: 17.9.0 // Este proyecto utiliza nodejs version 17.9.0

RUN: npm install // Utiliza --force si tiene algún error al instalar modulos. No es recomendable pero para este proyecto tuve un inconveniente con mongoose-currency y tuve que forzar la instalacion del modulo
utilice npm i mongoose-currency --force

EXPOSE: process.env.PORT || 3000

CMD: ["start": "node src"] // Use el comando npm start para inicializar el proyecto
