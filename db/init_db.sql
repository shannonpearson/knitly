CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY,
  firstname text,
  lastname text,
  email text,
  password text,
  created_on timestamp,
  updated_on timestamp,
  last_login timestamp
);

INSERT INTO users (id, firstname, lastname, email, password, created_on, updated_on)
VALUES ('1ae3ebd5-177f-4fda-a5b2-f21b7e4bba64', 'Jean-Luc', 'Picard', 'jlp@starfleet.org', 'random', NOW(), NOW());