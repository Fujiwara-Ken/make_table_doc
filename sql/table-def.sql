SELECT 
	`TABLE_CATALOG` AS DB_NAME, 
	`TABLE_SCHEMA` AS SCHEMA_NAME, 
	`TABLE_NAME` AS TABLE_NAME, 
	`COLUMN_NAME` AS COLUMN_NAME, 
	`COLUMN_DEFAULT` AS DEFAULT_VALUE, 
	`IS_NULLABLE` AS IS_NULLABLE,
	`DATA_TYPE` AS DATA_TYPE,  
	`GENERATION_EXPRESSION` ,
	CASE WHEN DATA_TYPE in (
    'VARCHAR', 'CHAR', 'CHARACTER', 'STRING', 
    'TEXT'
  ) THEN CONCAT(
    DATA_TYPE, '(', CHARACTER_MAXIMUM_LENGTH, 
    ')'
  ) WHEN DATA_TYPE in ('BINARY', 'VARBINARY') THEN concat(
    DATA_TYPE, '(', CHARACTER_OCTET_LENGTH, 
    ')'
  ) WHEN DATA_TYPE in ('NUMBER', 'DECIMAL', 'NUMERIC') THEN concat(
    DATA_TYPE, '(', NUMERIC_PRECISION, 
    ',', NUMERIC_SCALE, ')'
  ) ELSE DATA_TYPE END AS DATA_TYPE
FROM 
	information_schema.columns 
WHERE 
	table_schema='db_name'