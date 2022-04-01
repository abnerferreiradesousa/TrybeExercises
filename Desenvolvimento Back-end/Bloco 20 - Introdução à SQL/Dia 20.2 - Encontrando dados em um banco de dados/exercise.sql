--  DISTINGUINDO DADOS

REATE DATABASE `Escola`;
CREATE TABLE IF NOT EXISTS Escola.Estudantes (
    `Nome` VARCHAR(7) CHARACTER SET utf8,
    `Idade` INT
);
INSERT INTO Escola.Estudantes VALUES
    ('Rafael', 25),
    ('Amanda', 30),
    ('Roberto', 45),
    ('Carol', 19),
    ('Amanda', 25);

SELECT DISTINCT Nome, Idade FROM Escola.Estudantes;

SELECT DISTINCT Nome FROM Escola.Estudantes;

SELECT DISTINCT Idade FROM Escola.Estudantes;

SELECT COUNT(*) FROM sakila.rental;

SELECT * FROM sakila.rental;

SELECT * FROM sakila.rental LIMIT 15;

SELECT * FROM sakila.rental LIMIT 10 OFFSET 5;