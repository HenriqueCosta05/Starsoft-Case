FROM node:22.1-alpine3.19

# Instalação das dependências
WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

# Copia os arquivos para o container
COPY . .

# Exposição da porta
EXPOSE 3000

# Roda a aplicação localmente
CMD ["npm", "run", "dev"]

