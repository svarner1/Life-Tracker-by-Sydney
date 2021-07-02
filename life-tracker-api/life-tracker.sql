\echo 'Delete and recreate auth_starter db?'
\prompt 'Return for yes or control-C to cancel > ' answer

DROP DATABASE IF EXISTS life_tracker;
CREATE DATABASE life_tracker;
\connect life_tracker

\i life-tracker-schema.sql

-- \echo 'Delete and recreate auth_starter_test db?'
-- \prompt 'Return for yes or control-C to cancel > ' answer

-- DROP DATABASE IF EXISTS life_tracker_test;
-- CREATE DATABASE life_tracker_test;
-- \connect life_tracker_test

-- \i life-tracker-schema.sql
