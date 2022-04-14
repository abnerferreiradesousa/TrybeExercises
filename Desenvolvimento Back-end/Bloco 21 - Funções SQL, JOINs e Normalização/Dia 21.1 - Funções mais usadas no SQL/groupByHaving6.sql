-- Usando a query a seguir, exiba apenas os valores de total do custo de substituição que estão acima de $3950.50.
--  Dê um alias que faça sentido para SUM(replacement_cost) , de forma que deixe a query mais legível.
--  Finalize ordenando os resultados de forma crescente.
    SELECT rating, SUM(replacement_cost) AS total_cost
    FROM sakila.film
    GROUP by rating
    HAVING total_cost > 3950.50
    ORDER BY total_cost;

-- Usando a query a seguir, exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso,
-- dê um alias (apelido) à coluna gerada por AVG(length) , de forma que deixe a query mais legível.
-- Finalize ordenando os resultados de forma decrescente.
    SELECT rating, AVG(length) AS new_rating
    FROM sakila.film
    GROUP BY rating
    HAVING new_rating BETWEEN 115.0 AND 121.50
    ORDER BY new_rating DESC;

-- Monte uma query para a tabela sakila.address que exiba o nome do distrito e a quantidade de endereços
-- registrados nele. Os resultados devem ser ordenados da maior quantidade para a menor.

SELECT district, COUNT(*) 
FROM sakila.address
GROUP BY district
HAVING COUNT(*) > 5;

-- Monte uma query que exiba a média de duração de locação por classificação indicativa ( rating ) dos filmes
-- cadastrados na tabela sakila.film . Os resultados devem ser agrupados pela classificação indicativa e
-- ordenados da maior média para a menor.

SELECT rating, AVG(rental_duration) AS 'media'
FROM sakila.film
GROUP BY rating
ORDER BY media DESC;

-- Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes ativos e inativos por
-- loja. Os resultados devem conter o ID da loja , o status dos clientes (ativos ou inativos) e a
-- quantidade de clientes por status .

-- SELECT * FROM sakila.customer;
-- SELECT store_id, active, COUNT(active)
-- FROM sakila.customer
-- GROUP BY store_id, active;

-- Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer que estão ativos
-- e a quantidade que estão inativos.
SELECT active, COUNT(*)
FROM sakila.customer
GROUP BY active;

-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;

-- contagem de nomes
SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;