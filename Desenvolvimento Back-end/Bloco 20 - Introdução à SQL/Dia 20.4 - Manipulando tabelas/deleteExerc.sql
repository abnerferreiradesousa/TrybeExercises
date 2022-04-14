-- REMOVENDO GRACE DA LISTA
DELETE FROM sakila.actor
WHERE first_name = 'GRACE';

DELETE FROM sakila.film_actor
WHERE actor_id = 7; -- actor_id = 7 é o Id de GRACE

-- REMOVENDO KARL DA LISTA

SELECT * FROM sakila.film_actor WHERE actor_id = 12;

DELETE FROM sakila.film_actor WHERE actor_id = 12;

SELECT * FROM sakila.actor WHERE first_name = 'KARL';

DELETE FROM sakila.actor
WHERE first_name = 'KARL';

-- Exclua do banco de dados os atores com o nome de "MATTHEW".

DELETE FROM sakila.film_actor WHERE actor_id IN (8, 103, 181);

SELECT * FROM sakila.film_actor WHERE actor_id IN (8, 103, 181);

SELECT * FROM sakila.actor WHERE first_name = 'MATTHEW';

DELETE FROM sakila.actor WHERE first_name = 'MATTHEW';

-- Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.

SELECT * FROM sakila.film_text WHERE description LIKE '%saga%';
DELETE FROM sakila.film_text WHERE description LIKE '%saga%';

TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;













