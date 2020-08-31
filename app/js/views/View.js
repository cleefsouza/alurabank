// app/ts/view/View.ts
class View {
    /**
     * @param seletor
     */
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    /**
     * @param model
     */
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
    /**
     * @param model
     */
    template(model) {
        throw new Error("Implementar o método template.");
    }
}
