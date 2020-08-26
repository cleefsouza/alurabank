// app/ts/models/Negociacoes.ts

class Negociacoes {

    private _negociacoes: Negociacao[] = [];

    /**
     * @param negociacao
     */
    adiciona(negociacao: Negociacao) {
        this._negociacoes.push(negociacao);
    }

    getArray(): Negociacao[] {
        return [].concat(this._negociacoes);
    }
}
