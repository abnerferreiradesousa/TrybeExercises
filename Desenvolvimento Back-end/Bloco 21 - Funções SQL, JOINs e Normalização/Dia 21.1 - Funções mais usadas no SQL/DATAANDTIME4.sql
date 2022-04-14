-- -239:00:00, ou seja, há uma diferença de 239 horas entre as datas
SELECT TIMEDIFF('2021-08-11 08:30:10', '2021-08-01 09:30:10');

-- Monte uma query que exiba a diferença de dias entre '2030-01-20' e hoje.

SELECT CONCAT(DATEDIFF('2030-01-20', '2022-04-06'), ' FALTAM DIAS');
-- Monte uma query exiba a diferença de horas entre '10:25:45' e '11:00:00' .

SELECT TIMEDIFF('10:25:45', '11:00:00')