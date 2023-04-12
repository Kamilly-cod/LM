# Imagen de node.js basada en alpine
FROM node:lts-alpine

# Instalar mocha
RUN npm install --global mocha

# Configurar directorio de trabajo
WORKDIR /home/node
