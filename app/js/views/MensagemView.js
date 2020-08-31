// app/ts/views/MensagemView.ts
class MensagemView extends View {
    /**
     * @param model
     */
    template(model) {
        return `<p class="alert alert-info">${model}</p>`;
    }
}
