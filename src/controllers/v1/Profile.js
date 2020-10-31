module.exports = function(){

    this.store = (req, res, next) => {
        return res.send('Perfil criado com sucesso');
    }
    
    this.update =  (req, res, next) => {
        return res.send('Perfil atualizado com sucesso');
    }
    
    this.find =  (req, res, next) => {
        return res.send('Perfil encontrado com sucesso');
    }

    this.remove =  (req, res, next) => {
        return res.send('Perfil removido com sucesso');
    }

    return this
}