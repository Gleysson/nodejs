module.exports = function(){

    this.store = (req, res, next) => {
        return res.send('Usuário criado com sucesso');
    }
    
    this.update =  (req, res, next) => {
        return res.send('Usuário atualizado com sucesso');
    }
    
    this.find =  (req, res, next) => {
        return res.send('Usuário encontrado com sucesso');
    }

    this.remove =  (req, res, next) => {
        return res.send('Usuário removido com sucesso');
    }

    return this
}