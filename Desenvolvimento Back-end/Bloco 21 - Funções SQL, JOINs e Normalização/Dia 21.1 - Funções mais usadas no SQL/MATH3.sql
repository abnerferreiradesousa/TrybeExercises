
SELECT CEIL(85.234);

SELECT FLOOR(39.494);

SELECT ROUND(15.7515971, 5);

SELECT ROUND(15 + (RAND() * 5));

-- Monte uma query usando o MOD juntamente com o IF para descobrir se o valor 15 é par ou ímpar.
-- Chame essa coluna de 'Par ou Ímpar' , onde ela pode dizer 'Par' ou 'Ímpar'.

SELECT IF(10 MOD 2 = 0, 'PAR', 'ÍMPAR') AS 'Par ou Impar';