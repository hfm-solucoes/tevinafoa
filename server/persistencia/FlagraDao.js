function FlagraDao(connection) {
    this._connection = connection;
  }

  FlagraDao.prototype.salva = function(flagra,callback) {
      this._connection.query('INSERT INTO flagras SET ?', flagra, callback);
  }

    FlagraDao.prototype.atualiza = function(flagra,callback) {
      this._connection.query('UPDATE flagras SET status = ? where id = ?', [flagra.status, flagra.id], callback);
  }

  FlagraDao.prototype.lista = function(callback) {
      this._connection.query('select * from flagras',callback);
  }

  FlagraDao.prototype.buscaPorId = function (id,callback) {
      this._connection.query("select * from flagras where id = ?",[id],callback);
  }

  module.exports = function(){
      return FlagraDao;
  };