-- テーブルごとのカラム一覧
SELECT table_schema AS database_name
      ,table_name AS table_name
      ,GROUP_CONCAT(column_name) AS column_names
FROM  information_schema.columns
WHERE table_schema NOT IN ('mysql', 'perfomance_schema', 'infomation_schema')
GROUP BY table_schema,  table_name  