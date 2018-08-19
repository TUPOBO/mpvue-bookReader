create table books(
  id int not null auto_increment primary key,
  isbn VARCHAR(20) NOT NULL,
  openid VARCHAR(50) NOT NULL,
  title VARCHAR(100) NOT NULL,
  image VARCHAR(100),
  alt VARCHAR(100) NOT NULL,
  publisher VARCHAR(100) NOT NULL,
  summary VARCHAR(1000) NOT NULL,
  price VARCHAR(100),
  rate float,
  tags VARCHAR(100),
  author VARCHAR(100)
)