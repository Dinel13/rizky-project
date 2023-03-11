create table users (
    email varchar(255) NOT NULL UNIQUE,
    password varchar(255),
    token varchar(255),
    PRIMARY KEY (email)
);