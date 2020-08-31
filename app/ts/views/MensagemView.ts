// app/ts/views/MensagemView.ts

class MensagemView extends View<string>{

    /**
     * @param model 
     */
    template(model: string): string {
        return `<p class="alert alert-info">${model}</p>`;
    }
}
