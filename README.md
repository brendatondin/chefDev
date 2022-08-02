# :woman_cook: <spam style="color: orange"> _chefDev_</spam> :man_cook:

Projeto final do modulo 4 da Resilia Educação, com objetivo de desenvolver uma API Rest de um restaurante. <br>
Projeto denvolvido em [Node.js](https://nodejs.org/en/) com framework [Express](https://expressjs.com/)

## 📘 Pré-requisitos

- <a href="https://nodejs.org/en/">Node.Js</a> - v. 16.13.2
- <a href="https://www.npmjs.com/">NPM</a> - v. 8.1.2
- <a href="https://expressjs.com/pt-br/">Express</a> - v. 4.17.3
- <a href="https://www.npmjs.com/package/sqlite3">SQLite</a> - v. 5.0.0s

## Tecnologias

```Json
"dependencies": {
    "express": "^4.18.1",
    "sqlite3": "^5.0.10"
  },
  "devDependencies": {
    "nodemon": "^2.0.19"
  }
```

## Como instalar a aplicação localmente

1. Para clonar repositório:

    ```
    git clone https://github.com/brendatondin/chefDev.git
    ```

2. Entrando na pasta:

     ```
     cd chefDev
     ```

3. Para instalar as bibliotecas:

    ```
    npm install
    ```

4. Para iniciar o projeto:

    ```
    npm start
    ```

## Reinicializando Banco de Dados

Para iniciar um banco de dados novo com os dados padrão, delete o arquivo `database.db` e rode o comando abaixo:

```
npm run db
```

## Rotas

```url/ ou url/```

### Pedidos

- <spam style="color: lightgreen">__GET  /pedidos__</spam>

    Exemplo da resposta:

    ```Json
    {
      "pedidos": [
      {
       "comanda": 1,
       "prato": "Macarrão",
       "mesa": 1
      },
      {
       "comanda": 2,
       "prato": "Pizza",
       "mesa": 2
      },
      {
       "comanda": 3,
       "prato": "Hamburguer",
       "mesa": 3
      }
     ],
     "erro": false
    }
    ```

- <spam style="color: lightgreen">__GET  /pedidos/comanda/:comanda__</spam>

    Exemplo da resposta

    ```Json
    {
	    "cardapio": {
		"codigo": 1,
		"prato": "Frutos do mar"
	    },
	    "erro": false
    }
     ```
     
- <spam style="color: red">__ERROS__</spam> Exemplo da resposta:

    ```Json
    {
        "msg": "Aviso: 7 não encontrado!",
	    "erro": true
    }
    ```
---

- <spam style="color: orange">__POST /pedidos__</spam>

    Exemplo de requisição:

    ```Json
    {
        "prato": "Okonomiyaki",
        "mesa": 4
    }
    ```

    Exemplo da resposta:

    ```Json
    {
         "msg": "Pedido inserido com sucesso",
         "inserePedido": {
         "prato": "Okonomiyaki",
         "mesa": 4
          },
          "erro": false
    }
    ```
- <spam style="color: red">__ERROS__</spam> Exemplo da resposta:

    ```Json
    {
        "msg": "Aviso: preencha todos os campos",
	    "erro": true
    }
    ```
---

- <spam style="color: dodgerblue">__PUT /pedidos/comanda/:comanda__</spam>

    Exemplo de requisição:

    ```Json
    {
        "comanda": 4,
        "prato": "Hiroshima-Style Okonomiyaki",
        "mesa": 4
    }
    ```

    Exemplo da resposta:

    ```Json
    {
        "msg": "Comanda atualizada com sucesso",
        "pedidoValidado": {
          "comanda": 4,
          "prato": "Hiroshima-style Okonomiyaki",
          "mesa": 4
         },
         "erro": false
    }
    ```
- <spam style="color: red">__ERROS__</spam> Exemplo da resposta:

    ```Json
    {
        "msg": "Não foi possivel atualizar essa informação!",
	    "erro": true
    }
    ```
---

 - <spam style="color: gray">__DELETE  /pedidos/comanda/:comanda__</spam> 

    Exemplo da resposta:

    ```Json
    {
         "msg": "Comanda 4 deletada com sucesso",
         "deletaPedidos": {
          "comanda": 4,
          "prato": "Hiroshima-style Okonomiyaki",
          "mesa": 4
         },
         "erro": false
    }
    ```

- <spam style="color: red">__ERROS__</spam> Exemplo da resposta:

    ```Json
    {
         "msg": "Aviso: 13 não existente",
         "erro": true
    }
    ```

----

### Cardápio

- <spam style="color: lightgreen">__GET  /cardapio__</spam>

    Exemplo da resposta:

    ```Json
    {
	"cardapio": [
		{
			"codigo": 1,
			"prato": "Frutos do mar"
		},
		{
			"codigo": 2,
			"prato": "Massa Italiana"
		},
		{
			"codigo": 3,
			"prato": "Sobremesa"
		}
	],
	"erro": false
    }
    ```

- <spam style="color: lightgreen">__GET  /pedidos/comanda/:comanda__<spam>

    Exemplo da resposta

    ```Json
    {
        "pedido": {
        "comanda": 1,
        "prato": "Macarrão",
        "mesa": 1
        },
        "msg": "o pedido 1 esta no banco de dados",
        "erro": false
    }
     ```
     
- <spam style="color: red">__ERROS__</spam> Exemplo da resposta:

    ```Json
    {
        "msg": "Aviso: 7 não encontrado!",
	    "erro": true
    }
    ```
---

- <spam style="color: orange">__POST /cardapio__<spam>

    Exemplo de requisição:

    ```Json
    {
	    "prato": "Cheesecake"
    }
    ```

    Exemplo da resposta:

    ```Json
    {
	    "msg": "Pedido inserido com sucesso",
	    "inserePedido": {
		"prato": "Cheesecake"
	    },
	    "erro": false
    }
    ```

- <spam style="color: red">__ERROS__</spam> Exemplo da resposta:

    ```Json
    {
	    "msg": "Aviso: prato não inserido!",
	    "erro": true
    }
    ```

---

- <spam style="color: dodgerblue">__PUT /cardapio/codigo/:codigo__</spam>

    Exemplo de requisição:

    ```Json
    {
		"codigo": 4,
		"prato": "Bake Cheese Tart"
	}
    ```

    Exemplo da resposta:

    ```Json
    {
	    "msg": "Prato atualizada com sucesso",
	    "Prato Validado": {
		"codigo": 4,
		"prato": "Bake Cheese Tart"
	    },
	    "erro": false
    }
    ```
- <spam style="color: red">__ERROS__</spam> Exemplo da resposta:

    ```Json
    {
	    "msg": "Não foi possivel atualizar essa informação!",
	    "erro": true
    }
    ```
---

- <spam style="color: gray">__DELETE  /pedidos/comanda/:comanda__</spam>

    Exemplo da resposta:

    ```Json
    {
	    "msg": "Prato deletado com sucesso",
	    "Prato": {
		"codigo": 4,
		"prato": "Bake Cheese Tart"
	    },
	    "erro": false
    }
    ```

- <spam style="color: red">__ERROS__</spam> Exemplo da resposta:

    ```Json
    {
	    "msg": "Aviso: 13 não existente",
	    "erro": true
    }
    ```
