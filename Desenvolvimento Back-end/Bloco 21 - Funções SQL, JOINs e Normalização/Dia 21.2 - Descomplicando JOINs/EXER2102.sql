USE Pixar;
-- Exercício 6: Utilizando o INNER JOIN , selecione todas as informações dos filmes
-- com avaliação maior que 8.

SELECT *
FROM Movies AS M
INNER JOIN BoxOffice AS B
ON M.id = B.movie_id
WHERE rating > 8;

-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo 
-- os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz.
-- Retorne os nomes dos cinemas em ordem alfabética
SELECT T.name, M.title, M.id, M.director, M.length_minutes, M.year, M.theater_id
FROM Theater AS T
RIGHT JOIN Movies AS M
ON T.id = M.theater_id
ORDER BY T.name;
-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo 
-- os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz 
-- nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT
    T.name,
    T.location,
    M.title,
    M.director,
    M.year,
    M.length_minutes
FROM Theater AS T
LEFT JOIN Movies AS M
ON T.id = M.theater_id
ORDER BY T.name;

-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating )
-- em ordem decrescente.
SELECT M.title, B.rating
FROM Movies AS M
INNER JOIN BoxOffice AS B
ON M.id = B.movie_id
ORDER BY B.rating DESC;
-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para 
-- cada filme que possui um número maior de vendas internacionais ( international_sales ) do
-- que vendas nacionais ( domestic_sales ).
SELECT M.title, B.domestic_sales, B.international_sales
FROM Movies AS M
INNER JOIN BoxOffice AS B
ON M.id = B.movie_id
WHERE B.international_sales > B.domestic_sales;

-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e 
-- internacionais ( international_sales ) de cada filme.
SELECT M.title, B.domestic_sales, B.international_sales
FROM Movies AS M
INNER JOIN BoxOffice AS B
ON M.id = B.movie_id;
	
