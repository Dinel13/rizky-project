create table pdfs (
    id INT NOT NULL AUTO_INCREMENT,
    judul varchar(255) NOT NULL UNIQUE,
    deskripsi varchar(255) NOT NULL DEFAULT '',
    file varchar(255) NOT NULL DEFAULT '',
    materi varchar(50) NOT NULL DEFAULT '',
    posisi integer NOT NULL DEFAULT 999,
    PRIMARY KEY (id)
);

CREATE INDEX pdfs_materi ON pdfs (materi);