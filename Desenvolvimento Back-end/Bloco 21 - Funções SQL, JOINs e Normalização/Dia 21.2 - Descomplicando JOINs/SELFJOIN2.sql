USE hr;
-- Exiba o Nome e a quantidade de pessoas lideradas de cada gerente.


-- Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências ( manager )
-- cujos departamentos ( department ) são diferentes.

	-- A lógica de construção da query não fez sentido algum.
	-- GABARITO
SELECT
    CONCAT(Employee.FIRST_NAME, " ", Employee.LAST_NAME) AS "Nome Pessoa Colaboradora",
    CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente"
FROM
    employees AS Employee
INNER JOIN
    employees AS Manager ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID;