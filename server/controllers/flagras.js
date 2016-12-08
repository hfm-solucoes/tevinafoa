
module.exports = function(app){

	app.get('/flagras', function(req, res){
		var connection = app.persistencia.connectionFactory();
		var flagraDao = new app.persistencia.FlagraDao(connection);

		flagraDao.lista(function(erro, resultado){
			 res.format(res.json(resultado));
		});

	
	});






	app.put('/flagras/flagra/:id', function(req, res){
		var flagra = {}
		var id = req.params.id;

		flagra.id = id;
		flagra.status = "APROVADO";

		var connection = app.persistencia.connectionFactory();
		var flagraDao = new app.persistencia.FlagraDao(connection);

		flagraDao.atualiza(flagra, function(erro){
			if(erro){
				res.status(500).send(erro);
				return;
			}
			res.send(flagra);

		});

	});


	app.post('/flagras/flagra', function(req, res){

		req.assert("foto", "A foto é obrigatória").notEmpty();
		req.assert("descricao", "A descrição deve ser preenchida").notEmpty();
		var erros = req.validationErrors();

		if(erros){
			console.log("Erros de validacao encontrados");
			res.status(400).send(erros);
			return;
		}

		var flagra = req.body;
		console.log("processando a requisicao de um novo flagra");

		flagra.status = 'CRIADO';
		flagra.data = new Date;

		var connection = app.persistencia.connectionFactory();
		var flagraDao = new app.persistencia.FlagraDao(connection);

		flagraDao.salva(flagra, function(erro, resultado){
			if(erro){
				console.log("Erro no banco de dados");
				res.status(500).send(erro);
			} else {
				console.log('flagra criado');
				res.location('/flagras/flagra/'+resultado.insertId);
				res.status(201).json(flagra);
			}
			
		});
	});
}
