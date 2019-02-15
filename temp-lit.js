import {html,LitElement} from 'lit-element';


/**
 * @customElement
 * @polymer
 */
class LitTemplate extends LitElement{
  static get properties() {
    return {
      name:{type:String}
    };
  }
  
  constructor(){
    super();
    this.name = "Rahul"
  }

  render(){
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello ${this.name}!</h2>
    `;
  }
}

window.customElements.define('temp-lit', LitTemplate);
