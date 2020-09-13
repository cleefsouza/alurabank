// app/ts/view/View.ts
class View {
    /**
     * @param seletor
     */
    constructor(seletor) {
        this._elemento = $(seletor);
    }
    /**
     * @param model
     */
    update(model) {
        this._elemento.html(this.template(model));
    }
}
