
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


	---- User Login

    SELECT 	ID_USUARIO     id,
	   NM_USUARIO   nome,
	   ds_email     email
    FROM   tb_usuario
    WHERE  NM_USUARIO	 like  'Cauã'
	AND	   ds_email      like  "cauamgomes010@gmail.com"
    AND    ds_senha      like  "cauamgomes1234";
    
	

  ---- Adm Login	

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

	---- Alterar Produto	

 UPDATE TB_PRODUTO
	   SET ID_DEPARTAMENTO    =     1,
		   NM_PRODUTO         =    'Produto1',
		   VL_PRECO           =     120,
		   VL_DESCONTO        =     2, 
		   VL_AVALIACAO       =     9.5,
		   DS_FABRICANTE      =     'Nasa',
		   QTD_ESTOQUE        =     1,
		   DS_INFORMACOES     =     'LEGAL',
		   DS_DESCRICAO       =     'simples',
		   DT_GARANTIA        =     "2024-01-01"
	WHERE  ID_PRODUTO = 1;

	-- INSERIR AVALIACAO CLIENTE 
    
	INSERT INTO TB_PRODUTO_AVALIACAO(ID_USUARIO, ID_PRODUTO, VL_GERAL, VL_DESEMPENHO, VL_ATENDIMENTO, VL_SATISFACAO)
							  VALUES(1, 6, 5, 5, 5, 5);

	-- VERIFICAR AVALIAÇOES DO PRODUTO

	    SELECT  ID_PRODUTO  idProd,
			NM_USUARIO  usuario,
            VL_GERAL     avGeral,
            VL_DESEMPENHO avDesempenho,
            VL_ATENDIMENTO avAtendimento,
            VL_SATISFACAO  avSatsfacao
    FROM 	TB_PRODUTO_AVALIACAO
 INNER JOIN TB_USUARIO
		 ON TB_USUARIO.ID_USUARIO = TB_PRODUTO_AVALIACAO.ID_USUARIO
    WHERE   ID_PRODUTO = 1;
                              