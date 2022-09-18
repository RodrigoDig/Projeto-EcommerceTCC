

--LOGIN ADM
SELECT id_usuario       id,
       nm_usuario     nome,
       ds_email      email,
FROM   tb_usuario
WHERE  ds_email      =  'admlogin@adm.com'
and    DS_SENHA      =  'senha123'