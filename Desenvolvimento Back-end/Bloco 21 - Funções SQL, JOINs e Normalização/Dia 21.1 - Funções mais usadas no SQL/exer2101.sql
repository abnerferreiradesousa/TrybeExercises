-- 17: Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário
--  contratados em julho de 1987.
SELECT LAST_NAME, HIRE_DATE FROM hr.employees WHERE HIRE_DATE LIKE '1987-07%';
-- 18: Escreva uma query que exiba as seguintes informações de cada funcionário:
--  nome , sobrenome , tempo que trabalha na empresa (em dias) .
SELECT FIRST_NAME, LAST_NAME, DATEDIFF(CURRENT_DATE(), HIRE_DATE) FROM hr.employees ;

-- 13. Escreva uma query que exiba as seguintes informações de cada funcionário: id ,
-- primeiro nome e ano no qual foi contratado (exiba somente o ano).
SELECT EMPLOYEE_ID, FIRST_NAME, YEAR(HIRE_DATE) FROM hr.employees;
-- 14. Escreva uma query que exiba as seguintes informações de cada funcionário: id ,
--  primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).
SELECT EMPLOYEE_ID, FIRST_NAME, DAY(HIRE_DATE) FROM hr.employees;
-- 15. Escreva uma query que exiba as seguintes informações de cada funcionário: id ,
--  primeiro nome e mês no qual foi contratado (exiba somente o mês).
SELECT EMPLOYEE_ID, FIRST_NAME, MONTH(HIRE_DATE) FROM hr.employees;
-- 16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
SELECT UCASE(FIRST_NAME) FROM hr.employees;

-- 9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos,
-- exceto das pessoas programadoras ( IT_PROG ).
SELECT JOB_ID, SUM(SALARY) AS 'salary_by_category'
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID <> 'IT_PROG'
ORDER BY salary_by_category DESC;
-- 10. Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com
-- mais de dez funcionários. Dica: agrupe pelo department_id .
-- NÃO CONSEGUI
SELECT department_id,
    AVG(salary) 'average_salary' ,
    COUNT(*) 'number_of_employees'
FROM hr.employees
GROUP BY department_id
HAVING `number_of_employees` > 10;
-- 11. Escreva uma query que atualize a coluna PHONE_NUMBER , de modo que todos os telefones iniciados por 515
-- agora devem iniciar com 777 .
SELECT * FROM hr.employees;
SELECT REPLACE(PHONE_NUMBER, 515, 777) FROM hr.employees;
-- 12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.
SELECT * FROM hr.employees WHERE CHAR_LENGTH(first_name) >= 8;

-- 5. Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos 
-- os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.
SELECT ROUND(MAX(SALARY), 2), ROUND(MIN(SALARY), 2), ROUND(SUM(SALARY), 2), ROUND(AVG(SALARY), 2) FROM hr.employees;
-- 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras ( IT_PROG ).
SELECT COUNT(JOB_ID = 'IT_PROG') FROM hr.employees;
-- 7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão ( JOB_ID ).
SELECT JOB_ID, SUM(SALARY)
FROM hr.employees
GROUP BY JOB_ID;
-- 8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro
-- necessária para cobrir a folha de pagamento das pessoas programadoras ( IT_PROG ).
SELECT JOB_ID, SUM(SALARY)
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';

-- 1. Escreva uma query que exiba o maior salário da tabela.
SELECT MAX(SALARY) FROM hr.employees;
-- 2. Escreva uma query que exiba a diferença entre o maior e o menor salário.
SELECT MAX(SALARY) - MIN(SALARY) FROM hr.employees;
-- 3. Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial
-- em ordem decrescente.
SELECT * FROM hr.employees;
SELECT JOB_ID, AVG(SALARY) AS 'media_salary'
FROM hr.employees
GROUP BY JOB_ID
ORDER BY media_salary DESC;
-- 4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas
--  as pessoas funcionárias.
SELECT SUM(SALARY) FROM hr.employees;
