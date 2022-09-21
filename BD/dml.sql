--Carga Inicial
INSERT INTO TB_CATEGORIA(NM_CATEGORIA)
		VALUE('Hard Disk');

INSERT INTO TB_DEPARTAMENTO(NM_DEPARTAMENTO)
		VALUE('games');

--Inserir Usuario
INSERT INTO TB_USUARIO(NM_USUARIO, NM_SOBRENOME, DS_CPF, DT_NASCIMENTO, DS_GENERO, DS_EMAIL, DS_CELULAR, DS_SENHA)
				VALUES("Cauã","Mendes","50710090704","2004-08-05","Masculino", "cauamgomes010@gmail.com", "11959111413", "cauamgomes1234" );	


--Inserir ADM
INSERT INTO TB_ADMIN_LOGIN (DS_EMAIL, DS_SENHA)
				    VALUES ("cauaADMlogin@adm01.com", "conectaadm2022");

--Login Usuario
SELECT 	ID_USUARIO     id,
	   NM_USUARIO   nome,
	   ds_email     email
    FROM   tb_usuario
    WHERE  ds_email      like  "cauamgomes010@gmail.com"
    AND    ds_senha      like  "cauamgomes1234";
    
--Login ADM    
SELECT ID_ADMIN_LOGIN   idADM,
	   DS_EMAIL         email
FROM TB_ADMIN_LOGIN
WHERE DS_EMAIL   like "cauaADMlogin@adm01.com"
  AND DS_SENHA   like "conectaadm2022";