SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');

-- Extraia e retorne a palavra "JavaScript" da frase 'A linguagem JavaScript está entre as mais usadas' .
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);

-- Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?' .

SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');

-- Utilizando uma query , encontre quantos caracteres temos em 'Uma frase qualquer' .

SELECT CHAR_LENGTH('Uma frase qualquer');