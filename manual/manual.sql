-- show all tables in the database using sqlite3
select name from sqlite_master where type='table' order by name;
+-----------------+
|      name       |
+-----------------+
| SequelizeMeta   |
| sqlite_sequence |
| tasks           |
| users           |
+-----------------+

select * from users limit 5;

select * from tasks limit 5;
