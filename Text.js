class TextComponent extends HTMLElement{
    constructor(){
        super()
        const shadow = this.attachShadow({mode: "open"})
        shadow.innerHTML=`
        <style>
        p{
         font-family: Arial, Helvetica, sans-serif;
         font-weight: 100;
         color: #A8A8A8;
         font-size: 15px;
         }         
        </style>
         <p><slot></slot></p>
        
        `
    }
}
customElements.define("text-comp", TextComponent)