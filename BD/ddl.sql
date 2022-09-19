CREATE DATABASE bytespeedDB;
USE bytespeedDB;

CREATE TABLE TB_ADMIN_LOGIN(
ID_ADMIN_LOGIN   INT PRIMARY KEY AUTO_INCREMENT,
DS_EMAIL         VARCHAR(100),
DS_SENHA         VARCHAR(100)
);

CREATE TABLE TB_CATEGORIA(
ID_CATEGORIA             INT PRIMARY KEY AUTO_INCREMENT,
NM_CATEGORIA             VARCHAR(100)
);

CREATE TABLE TB_PRODUTO_CATEGORIA(
ID_PRODUTO_CATEGORIA     INT PRIMARY KEY AUTO_INCREMENT,
ID_CATEGORIA             INT,
ID_PRODUTO               INT,
FOREIGN KEY (ID_CATEGORIA) REFERENCES TB_CATEGORIA(ID_CATEGORIA),
FOREIGN KEY (ID_PRODUTO) REFERENCES TB_PRODUTO(ID_PRODUTO)
);

CREATE TABLE TB_PRODUTO(
ID_PRODUTO               INT PRIMARY KEY AUTO_INCREMENT,
ID_DEPARTAMENTO          INT,
NM_PRODUTO               VARCHAR(200),
VL_CODIGO_PRODUTO        DECIMAL(5,2),  
VL_DESCONTO              DECIMAL(5,2), 
VL_AVALIACAO             DECIMAL(5,2),
DS_FABRICANTE            VARCHAR(200),
QTD_ESTOQUE              INT,
DS_CARACTERISTICAS       VARCHAR(500),
DS_INFORMACOES           VARCHAR(500),
DS_DESCRICAO             VARCHAR(500),
DT_GARANTIA              DATETIME,
FOREIGN KEY(ID_DEPARTAMENTO) REFERENCES TB_DEPARTAMENTO (ID_DEPARTAMENTO)
);

CREATE TABLE TB_DEPARTAMENTO(
ID_DEPARTAMENTO      INT PRIMARY KEY,
NM_DEPARTAMENTO      VARCHAR(50),
IMG_CAPA             BLOB
);

CREATE TABLE TB_PRODUTO_IMAGEM(
ID_PRODUTO_IMAGEM    INT PRIMARY KEY AUTO_INCREMENT,
ID_PRODUTO           INT,
IMG_PRODUTO          BLOB,
FOREIGN KEY (ID_PRODUTO) REFERENCES TB_PRODUTO(ID_PRODUTO)
);

CREATE TABLE TB_USUARIO_FAVORITO(
ID_USUARIO_FAVORITO    INT PRIMARY KEY AUTO_INCREMENT,
ID_USUARIO             INT,
ID_PRODUTO             INT,
FOREIGN KEY (ID_USUARIO) REFERENCES TB_USUARIO (ID_USUARIO),
FOREIGN KEY (ID_PRODUTO) REFERENCES TB_PRODUTO (ID_PRODUTO)	
);

CREATE TABLE TB_PRODUTO_AVALIACAO(
ID_PRODUTO_AVALIACAO    INT PRIMARY KEY AUTO_INCREMENT,
ID_USUARIO              INT,
ID_PRODUTO              INT,
VL_GERAL                INT,
VL_DESEMPENHO           INT,
VL_ATENDIMENTO          INT,
VL_SATISFACAO           INT,
FOREIGN KEY (ID_USUARIO) REFERENCES TB_USUARIO (ID_USUARIO),
FOREIGN KEY (ID_PRODUTO) REFERENCES TB_PRODUTO (ID_PRODUTO)	
);

CREATE TABLE TB_USUARIO(
ID_USUARIO        INT PRIMARY KEY AUTO_INCREMENT,
NM_USUARIO        VARCHAR(100),
NM_SOBRENOME      VARCHAR(200),
DS_CPF            VARCHAR(14),
DT_NASCIMENTO     DATE,
DS_GENERO         VARCHAR(100),
DS_EMAIL          VARCHAR(100),
DS_CELULAR        VARCHAR(100),
DS_SENHA          VARCHAR(100)
);

CREATE TABLE TB_LOGIN(
ID_LOGIN         INT PRIMARY KEY AUTO_INCREMENT,
ID_USUARIO       INT,
FOREIGN KEY (ID_USUARIO) REFERENCES TB_USUARIO (ID_USUARIO)
);

CREATE TABLE TB_USUARIO_CARTAO(
ID_USUARIO_CARTAO    INT PRIMARY KEY AUTO_INCREMENT,
ID_USUARIO           INT,
NM_CARTAO            VARCHAR(100),
NR_CARTAO            INT,
DT_VALIDADE          DATE, 
NR_CVV               VARCHAR(3),
DS_CPF               VARCHAR(14),
DT_NASCIMENTO        DATE,
FOREIGN KEY (ID_USUARIO) REFERENCES TB_USUARIO (ID_USUARIO) 
);

CREATE TABLE TB_USUARIO_ENDERECO(
ID_USUARIO_ENDERECO      INT PRIMARY KEY AUTO_INCREMENT,
ID_USUARIO               INT,
DS_LOGADOURO             VARCHAR(100),
NR_NUMERO                INT,
NM_BAIRRO                VARCHAR(100),
DS_CEP                   VARCHAR(50),
NM_CIDADE                VARCHAR(300),
NM_ESTADO                VARCHAR(100),
DS_COMPLEMENTO           VARCHAR(100),
DS_CASA                  VARCHAR(9),
FOREIGN KEY (ID_USUARIO) REFERENCES TB_USUARIO (ID_USUARIO)
);

CREATE TABLE TB_PEDIDO(
ID_PEDIDO                INT PRIMARY KEY AUTO_INCREMENT,
ID_USUARIO               INT,
ID_USUARIO_ENDERECO      INT,
ID_CUPOM                 INT,
DT_PEDIDO                DATETIME,
NR_NOTA_FISCAL           INT,
VL_FRETE                 DECIMAL(2,2),
DS_STATUS                VARCHAR(100),
QTD_PRODUTO              INT,
FOREIGN KEY (ID_USUARIO) REFERENCES TB_USUARIO (ID_USUARIO),
FOREIGN KEY (ID_USUARIO_ENDERECO) REFERENCES TB_USUARIO_ENDERECO (ID_USUARIO_ENDERECO),
FOREIGN KEY (ID_CUPOM) REFERENCES TB_CUPOM (ID_CUPOM)
);

CREATE TABLE TB_PEDIDO_ITEM(
ID_PEDIDO_ITEM     INT PRIMARY KEY AUTO_INCREMENT,
ID_PEDIDO          INT,
ID_PRODUTO         INT,
VL_PRODUTO         DECIMAL(5,2),
QTD_PRODUTO        INT,
FOREIGN KEY (ID_PEDIDO) REFERENCES TB_PEDIDO (ID_PEDIDO),
FOREIGN KEY (ID_PRODUTO) REFERENCES TB_PRODUTO (ID_PRODUTO)
);

CREATE TABLE TB_CUPOM(
ID_CUPOM         INT PRIMARY KEY AUTO_INCREMENT,
NM_CUPOM         VARCHAR(100),
VL_CUPOM         DECIMAL(5,2),
DT_CADASTRO      DATE,
DT_VENCIMENTO    DATE,
IMG_CUPOM        BLOB
);

CREATE TABLE TB_PIX(
ID_PIX           INT PRIMARY KEY AUTO_INCREMENT,
ID_USUARIO       INT,
DS_CHAVE_PIX     VARCHAR(100),
FOREIGN KEY (ID_USUARIO) REFERENCES TB_USUARIO (ID_USUARIO)
);