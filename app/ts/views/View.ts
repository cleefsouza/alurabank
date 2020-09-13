// app/ts/view/View.ts

abstract class View<T> {

    protected _elemento: JQuery;

    /**
     * @param seletor 
     */
    constructor(seletor: string) {
        this._elemento = $(seletor);
    }

    /**
     * @param model 
     */
    update(model: T): void {
        this._elemento.html(this.template(model));
    }

    /**
     * @param model 
     */
    abstract template(model: T): string;
}