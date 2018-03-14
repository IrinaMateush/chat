export class Form {
    constructor({el}) {
        this.el = el;
    }
    render() {
        this.el = `
        <textarea></textarea>
        <input type="submit" value="Отправить">
        `
    };
} 