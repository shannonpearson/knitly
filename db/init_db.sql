CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY,
  firstname text,
  lastname text,
  created_on timestamp,
  update_on timestamp
);