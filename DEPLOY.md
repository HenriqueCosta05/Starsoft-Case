# Instruções de Deploy: Star-soft Case

## Introdução
Para realizar o deploy dessa aplicação, fiz o uso da plataforma de hospedagem `Vercel` para facilitar o processo de disponibilizar o sistema.

Este tutorial tem como objetivo fornecer um manual para fazer o deploy da aplicação, utilizando duas formas: via `Docker` ou `Vercel CLI`.

## Deploy com `Vercel CLI`
Segundo a [documentação sugerida](https://vercel.com/docs/cli/deploying-from-cli), podemos executar o comando:

```
    vercel
```

para automaticamente realizar o processo de deploy via CLI. 

### Como realizar um deploy via build local?
O conceito de realizar deploy com um build local pré-existente é extremamente útil, uma vez que é uma ótima opção para não compartilhar o código-fonte com a plataforma do Vercel, além de inspecionar por possíveis erros antes de subir o código para o ar. 

Para realizar o deploy via build local, podemos executar o seguinte comando:

```
vercel build
```

e, em seguida:

```
vercel deploy --prebuilt
```

## Deploy com Docker

Essa abordagem é útil quando temos mais de um simples serviço orquestrado.

Neste guia, descreverei como eu orquestrei meus serviços e comandos úteis para criar uma imagem pública do docker.

### Como eu orquestrei os serviços?
Sabendo-se que o cenário fornecido é de apenas um serviço (no caso, a aplicação next.js), orquestrei o meu serviço da seguinte forma:

```
services:
  app:
    container_name: starsoft-frontend-challenge
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - NODE_ENV=production
```

Esse arquivo, em resumo, define o arquivo `Dockerfile` a ser executado, bem como o contexto o qual ele será executado, utilizando-se de informações como número da porta, volumes e ambiente.

O arquivo `Dockerfile` está disponível [aqui](./Dockerfile).

### Pré-requisitos e comandos necessários para executar o sistema via docker

#### Pré-requisito
* Certifique-se de que tem o `Docker` instalado na sua máquina. Para mais detalhes de como instalar, verifique [aqui](https://docs.docker.com/engine/install/)

#### Passo a passo
Para rodar o sistema localmente via docker, podemos utilizar os seguintes comandos, nessa ordem:

 ```
    docker pull henriquecostaa/starsoft-frontend-challenge:latest
```

```
    docker run -p 3000:3000 henriquecostaa/starsoft-frontend-challenge:latest
```
