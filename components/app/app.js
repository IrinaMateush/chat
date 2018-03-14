import {Chat} from "./../chat/chat.js"
import {Form} from "./../form/form.js"

class App {
    constructor({el}){
        this.el = el;
        this.Chat = new Chat();
        this.Form = new Form();

        this.render();
    }
    render() {
        this.el.innerHTML = `
            <h3>Заголовок</h3>
        `;
    }
}