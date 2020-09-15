DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users;

create table users (
    id serial primary key,
    username VARCHAR(20),
    password VARCHAR(20),
    profile_pic TEXT
);

create table if not EXISTS posts (
    id serial primary key,
    title VARCHAR(45),
    img TEXT,
    content TEXT,
    author_id INT REFERENCES users(id)
);

ALTER TABLE users
ALTER password
TYPE TEXT;