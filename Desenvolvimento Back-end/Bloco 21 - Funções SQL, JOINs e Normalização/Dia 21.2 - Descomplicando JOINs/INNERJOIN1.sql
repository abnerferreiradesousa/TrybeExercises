USE sakila;
-- Monte uma query que exiba o id do ator , nome , id do filme e título do filme , usando as tabelas
-- actor , film_actor e film . Dica: você precisará fazer mais de um JOIN na mesma query .

-- SELECT A.actor_id, A.first_name, F.film_id, F.title
-- FROM actor A
-- INNER JOIN film_actor FA
-- ON A.actor_id = FA.actor_id
-- INNER JOIN film F
-- ON F.film_id = FA.film_id;

-- Monte uma query que exiba o nome , sobrenome e a média de valor ( amount ) paga aos funcionários 
-- no ano de 2006. Use as tabelas payment e staff . Os resultados devem estar agrupados pelo nome 
-- e sobrenome do funcionário.

-- MINHA RESOLUÇÃO

SELECT S.first_name, S.last_name, AVG(P.amount)
FROM staff AS S
INNER JOIN payment AS P
ON S.staff_id = P.staff_id
WHERE YEAR(P.payment_date) = 2006
GROUP BY S.staff_id;

-- Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por
-- nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas
-- na tabela address e customer .

-- SELECT
--     c.first_name, 
--     COUNT(a.address) AS `quantidade de endereço`
-- FROM
--     sakila.customer c
-- INNER JOIN 
--     sakila.address AS a ON a.address_id = c.address_id
-- WHERE
--     c.active = 1
-- GROUP BY 
--     c.customer_id
-- ORDER BY 
--     first_name DESC, 
--     last_name DESC;


-- Exiba o nome , email , id do endereço , endereço e distrito dos clientes que moram no distrito
-- da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas 
-- tabelas address e customer .

-- SELECT C.first_name, C.email, C.address_id, A.address, A.district
-- FROM customer C
-- INNER JOIN address A
-- ON C.address_id = A.address_id
-- WHERE A.district = 'Califórnia'
-- AND first_name LIKE '%rene%'; 


-- Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados pelo nome em
-- ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. 
-- Essas informações podem ser encontradas nas tabelas customer e address .

-- SELECT C.customer_id, C.first_name, C.email, C.address_id, A.address
-- FROM customer C
-- INNER JOIN address A
-- ON C.address_id = A.address_id
-- ORDER BY first_name DESC
-- LIMIT 100;


-- Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários do 
-- banco. Use as tabelas staff e address .

-- SELECT S.first_name, S.last_name, A.address
-- FROM staff S
-- INNER JOIN address A
-- ON S.address_id = A.address_id;

-- Monte uma query que exiba o id do ator , nome do ator e id do filme em que ele já
-- atuou usando as tabelas actor e film_actor .

-- SELECT a.actor_id, a.first_name, f.film_id
-- FROM sakila.actor a
-- INNER JOIN sakila.film_actor f
-- ON a.actor_id = f.actor_id;




-- SELECT  tbci.city, tbci.country_id, tbco.country
-- FROM sakila.city tbci
-- INNER JOIN sakila.country tbco
-- ON tbco.country_id = tbci.country_id;




