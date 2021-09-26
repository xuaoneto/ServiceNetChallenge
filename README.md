# Como rodar a aplicação

Esse projeto foi feito em React.js bootstrapped com [Create React App]

## Abra um terminal bash e execute a API Rest json-server usando 

### `npx json-server ./data/db.json -p 3500`

## Abra outro terminal bash e execute o front-end  

### `yarn start`


# Funcionalidades

## Autenticação de Login e Senha

## Criar novo usuário para fazer login

## CRUD de Clientes cadastrados em uma Api Rest

## Endereço automático viaCEP na Criação de clientes 

# Etapas de segurança:
## O usuário nao consegue entrar na aba de clientes sem fazer login primeiro

## Cada usuário após o login recebe um Token expecífico vindo do servidor, autorizando o render dos clientes na pagina, o Token vindo do servidor é inserido nos Cookies do navegador, cada atualização da tabela de clientes passa por uma checagem de Token que autoriza ou não o rerender da página de clientes.

# Detalhes

## Infelizmente so tive 4 dias de desenvolvimento da aplicação e por isso não pude deixa-la 100% segura pois varias coisas que estão no front-end deveria estar no back-end para maior segurança




