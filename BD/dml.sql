
INSERT INTO TB_CATEGORIA(NM_CATEGORIA)
		VALUE('Gabinete');

INSERT INTO TB_DEPARTAMENTO(NM_DEPARTAMENTO)
		VALUE('Hardware');

INSERT INTO TB_USUARIO(NM_USUARIO, NM_SOBRENOME, DS_CPF, DT_NASCIMENTO, DS_GENERO, DS_EMAIL, DS_CELULAR, DS_SENHA)
		VALUES("Cauã","Mendes","50710090704","2004-08-05","Masculino", "cauamgomes010@gmail.com", "11959111413", "cauamgomes1234" );	

INSERT INTO TB_PRODUTO(ID_DEPARTAMENTO, NM_PRODUTO, VL_PRECO, VL_DESCONTO, VL_AVALIACAO, DS_FABRICANTE, QTD_ESTOQUE, DS_INFORMACOES, DS_DESCRICAO, DT_GARANTIA)
		VALUES(1,"Produto1",120 ,2 ,9.5 ,"Nasa", 1, "LEGAL", "simples", "2024-01-01" );

INSERT INTO TB_ADMIN_LOGIN (DS_EMAIL, DS_SENHA)
		VALUES ("adm", "1234");

SELECT 	ID_USUARIO     id,
	   NM_USUARIO   nome,
	   ds_email     email
    FROM   tb_usuario
    WHERE  ds_email      like  "cauamgomes010@gmail.com"
    AND    ds_senha      like  "cauamgomes1234";
    

SELECT ID_ADMIN_LOGIN   idADM,
	   DS_EMAIL         email
FROM TB_ADMIN_LOGIN
WHERE DS_EMAIL   like "cauaADMlogin@adm01.com"
  AND DS_SENHA   like "conectaadm2022";

  ---- Listar Produtos

  SELECT ID_PRODUTO              idProduto,
		 ID_DEPARTAMENTO         idDepartamento,
		 NM_PRODUTO              nomeProduto,
		 VL_PRECO                valorProduto,
		 VL_DESCONTO             valorDesconto, 
		 VL_AVALIACAO            avaliacao,
		 DS_FABRICANTE           fabricante,
		 QTD_ESTOQUE             estoque,
		 DS_INFORMACOES          informações,
		 DS_DESCRICAO            descricao,
		 DT_GARANTIA             garantia
	FROM TB_PRODUTO;	