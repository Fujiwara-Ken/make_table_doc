-- 'mysql', 'performance_schema', 'information_schema', 'sys'を除いたテーブル一覧取得

SELECT table_schema AS database_name
      , table_name   AS table_name
FROM information_schema.tables
WHERE table_schema NOT IN ('mysql', 'perfomance_schema', 'information_schema')
AND table_type = 'BASE TABLE'
ORDER BY table_schema, table_type, table_name;

-- 特定ののテーブル一覧を取得
SELECT table_name FROM information_schema.tables WHERE table_schema = 'table_name' AND table_type = 'BASE TABLE'
