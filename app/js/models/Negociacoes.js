// app/ts/models/Negociacoes.ts
class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    /**
     * @param negociacao
     */
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    getArray() {
        return [].concat(this._negociacoes);
    }
}
