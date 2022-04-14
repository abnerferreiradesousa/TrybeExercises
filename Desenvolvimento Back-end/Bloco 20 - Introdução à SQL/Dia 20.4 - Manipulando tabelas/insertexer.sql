-- NÃOO CONSEGUI
-- UPDATE
-- Foi determinado pelo setor financeiro que haverá um reajuste em todos os preços dos filmes, com base em
-- sua duração. Para todos os filmes com duração entre 0 e 100, o valor do aluguel passará a ser $10,00, e
-- o aluguel dos filmes com duração acima de 100 passará a ser de $20,00.

-- UPDATE sakila.film
-- SET replacement_cost = (
-- CASE length WHEN 0 THEN 10
	--  		WHEN 2 THEN 'DAVIS'
		-- 	WHEN 3 THEN 'CAROLINE'
		-- ELSE first_name
-- END);

-- INSERT INTO

-- Cadastre uma nova loja na tabela sakila.store . 
-- NÃO CONSEGUI
SELECT * FROM sakila.store;
INSERT INTO sakila.store (address_id, manager_staff_id) VALUES(3, 3);

-- Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query .
-- INSERT INTO sakila.staff (first_name, last_name, active, address_id, username, store_id)
-- VALUES ('Barry', 'Allen', 1, 2, 'Allenzinho', 2), ('Diana', 'Prince', 1, 3, 'Dy', 2);