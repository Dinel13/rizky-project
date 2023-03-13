create table materis (
    id INT NOT NULL AUTO_INCREMENT,
    judul varchar(255) NOT NULL UNIQUE,
    deskripsi varchar(255) NOT NULL DEFAULT '',
    url varchar(50) NOT NULL DEFAULT '',
    PRIMARY KEY (id)
);