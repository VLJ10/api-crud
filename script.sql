use db_locadora_filme_ds2t_25_2;
create table tbl_filme (	
	id int primary key not null auto_increment,
    nome varchar(100) not null,
    sinopse text,
    data_lancamento date,
    duracao time not null,
    orcamento decimal not null,
    trailer varchar(200),
    capa varchar(200)
	);

alter table tbl_filme modify column orcamento decimal(13, 2);


insert into tbl_filme (nome, sinopse, data_lancamento, duracao, orcamento, trailer) 
	values('Carros', 'Ao viajar para a Califórnia, o famoso carro de corridas Relâmpago McQueen se perde e vai parar em Radiator Springs, uma cidadezinha na Rota 66. 
		Ele conhece novos amigos e aprende lições que mudam sua forma de encarar a vida.', 
        '2006-06-30', '01:57:00', 120000000.00, 'https://www.youtube.com/watch?v=pLLuHeWu-TE' );

insert into tbl_filme (nome, sinopse, data_lancamento, duracao, orcamento, trailer) 
	values('X-Men Origens: Wolverine', 'Tentando esquecer seu passado sombrio, Logan, mais conhecido como Wolverine, parece ter encontrado o amor e a felicidade com Kayla Silverfox. 
			Mas a paz de Logan é abalada quando Victor Creed, seu irmão cruel, assassina brutalmente Kayla. 
            A sede de vingança de Logan o leva ao programa Arma X. Ele passa por um processo doloroso para fortalecer seus ossos com adamantium, o que o torna praticamente indestrutível.', 
        '2009-04-30', '01:47:00', 150000000.00, 'https://www.youtube.com/watch?v=yawHvdrZrcs' );

insert into tbl_filme (nome, sinopse, data_lancamento, duracao, orcamento, trailer) 
	values('O Hobbit: A Batalha dos Cinco Exércitos', 'O dragão Smaug lança sua fúria ardente contra a Cidade do Lago que fica próxima da montanha de Erebor. 
			Bard consegue derrotá-lo, mas, rapidamente, sem a ameaça do dragão, inicia-se uma batalha pelo controle de Erebor e sua riqueza. 
            Os anões, liderados por Thorin, adentram a montanha e estão dispostos a impedir a entrada de elfos, anões e orcs. 
			Bilbo Bolseiro e Gandalf tentam impedir a guerra.', 
        '2014-12-07', '02:24:00', 270000000.00, 'https://www.youtube.com/watch?v=iVAgTiBrrDA' );

show tables;
show columns from tbl_filme;
select * from tbl_filme;