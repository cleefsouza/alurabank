// app/ts/view/View.ts

class View<T> {

    protected _elemento: Element;

    /**
     * @param seletor 
     */
    constructor(seletor: string) {
        this._elemento = document.querySelector(seletor);
    }

    /**
     * @param model 
     */
    update(model: T): void {
        this._elemento.innerHTML = this.template(model);
    }

    /**
     * @param model 
     */
    template(model: T): string {
        throw new Error("Implementar o método template.");
    }
}