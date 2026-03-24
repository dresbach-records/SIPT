# 📦 Sistema Têxtil - Backend

## 🧠 Descrição

Backend responsável por gerenciar a operação da fábrica têxtil, incluindo controle de lotes de tecido, produção, corte e estoque.

O sistema foi projetado para ser simples, escalável e preparado para integração futura com Inteligência Artificial.

## 🚀 Tecnologias utilizadas

*   Node.js
*   Express
*   PostgreSQL
*   pg (driver do banco)

## 📁 Estrutura do projeto

```
/backend
  /controllers   -> lógica das requisições
  /routes        -> definição das rotas
  /services      -> regras de negócio
  /database      -> conexão com banco
  app.js         -> inicialização do servidor
```

## ⚙️ Instalação

1.  **Clonar projeto**

    ```bash
    git clone <repositorio>
    cd backend
    ```

2.  **Instalar dependências**

    ```bash
    npm install
    ```

3.  **Configurar banco de dados**

    Criar banco:

    ```
    sistema_textil
    ```

    Tabela inicial:

    ```sql
    CREATE TABLE tecido_lote (
        id SERIAL PRIMARY KEY,
        tipo_tecido VARCHAR(100),
        metragem NUMERIC,
        data_producao DATE,
        status VARCHAR(50)
    );
    ```

## ▶️ Rodando o servidor

```bash
node app.js
```

Servidor rodando em:

```
http://localhost:3000
```

## 🔌 Rotas disponíveis

### 📌 Listar lotes

`GET /lotes`

### 📌 Criar lote

`POST /lote`

Exemplo JSON:

```json
{
  "tipo_tecido": "Algodão",
  "metragem": 500,
  "data_producao": "2026-03-24",
  "status": "aprovado"
}
```

## 🧠 Próximas implementações

*   Cadastro de corte
*   Cadastro de produção
*   Controle de estoque
*   Dashboard de dados
*   Integração com IA

## ⚠️ Observações

*   O sistema foi projetado para rodar via navegador (compatível com máquinas antigas)
*   Estrutura preparada para crescimento modular
*   Evitar adicionar complexidade antes da base estar estável

## 📊 Objetivo do projeto

Centralizar toda a operação da fábrica em um único sistema, garantindo:

*   rastreabilidade de produção
*   controle de desperdício
*   organização de dados
*   base para automação com IA

## 👨‍💻 Autor

Sistema desenvolvido com foco em aplicação real dentro de ambiente industrial têxtil.
# SIPT
