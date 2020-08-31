// app/ts/views/MensagemView.ts

class MensagemView {

    private _elemento: Element;

    /**
     * @param seletor
     */
    constructor(seletor: string) {
        this._elemento = document.querySelector(seletor);
    }

    update(model: string): void {
        this._elemento.innerHTML = this.template(model);
    }

    template(model: string): string {
        return `<p class="alert alert-info">${model}</p>`;
    }
}
