USE sakila;
SET SQL_SAFE_UPDATES = 0;
SELECT * FROM sakila.actor;
INSERT INTO sakila.actor (first_name, last_name)
VALUES('Marcelo','Santos');
INSERT INTO sakila.actor (first_name, last_name)
    SELECT first_name, last_name FROM sakila.staff;
    
-- Insira um novo funcionário na tabela sakila.staff .
-- Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione 
-- "Table Inspector". Clique na aba "columns" e verifique quais campos aceitam nulos para te guiar. 
-- Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente.
-- Boa explorada!
SELECT * FROM staff;
INSERT INTO staff (first_name, last_name, active, address_id, last_update, username, store_id, staff_id)
VALUES ('Bruce', 'Wayne', 1, 4, NOW(), 'Way', 2, 3);

-- Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query .
INSERT INTO staff (first_name, last_name, active, address_id, last_update, username, store_id, staff_id)
VALUES ('Barry', 'Allen', 1, 2, NOW(), 'Allenzinho', 2, 4), ('Diana', 'Prince', 1, 3, NOW(), 'Dy', 2, 5);
-- NÃO CONSEGUI

-- Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como
-- atores na tabela sakila.actor .
INSERT INTO actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.customer LIMIT 5;

-- Cadastre três categorias de uma vez só na tabela sakila.category .
INSERT INTO sakila.category (name) VALUES('MYGERNR');
-- Adiciona mas nao retorna;

-- Cadastre uma nova loja na tabela sakila.store . 
INSERT INTO sakila.store (manager_staff_id) VALUES(3, 3, 3);
-- NÃO CONSEGUI


