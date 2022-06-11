-- 全テーブルを抽出
show tables from sawallet_api_copy;

-- information_schemaから全テーブルを取得
select * from information_schema.tables
where table_schema = 'sawallet_api_copy'

-- 指定したDBのテーブル情報全てを取得
SELECT 
	`TABLE_CATALOG`, 
	`TABLE_SCHEMA`, 
	`TABLE_NAME`, 
	`COLUMN_NAME`, 
	`ORDINAL_POSITION`, 
	`COLUMN_DEFAULT`, 
	`IS_NULLABLE`, 
	`DATA_TYPE`, 
	`CHARACTER_MAXIMUM_LENGTH`, 
	`CHARACTER_OCTET_LENGTH`, 
	`NUMERIC_PRECISION`, 
	`NUMERIC_SCALE`, 
	`DATETIME_PRECISION`, 
	`CHARACTER_SET_NAME`, 
	`COLLATION_NAME`, 
	`COLUMN_TYPE`, 
	`COLUMN_KEY`, 
	`EXTRA`, 
	`PRIVILEGES`, 
	`COLUMN_COMMENT`, 
	`GENERATION_EXPRESSION` 
FROM 
	information_schema.columns 
WHERE 
	table_schema='sawallet_api_copy'

