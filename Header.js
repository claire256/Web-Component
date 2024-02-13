const template = document.createElement("template");
template.innerHTML =`
   <style>
   p{
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
    color: #A8A8A8;
    font-size: 14px;
   }
   .sec-one{
       display: flex;
       align-items: center;
       justify-content: space-between;
   }
    h1{
       color: #7F7F7F;
       font-family: Arial, Helvetica, sans-serif;
       font-weight: 100;
   }
   .sec-one #add{
       width: 40px;
       height: 40px;
       border-radius: 50%;
       border-color:#B3B3EF;
       font-family: Arial, Helvetica, sans-serif;
       color: #B3B3EF;
       background: transparent;
       font-size: 30px;
       margin-right: 20px;
   }
   .back{
    color: #B3B3EF;
    padding-top: 5%;
   }
   span{
       font-size: 40px;
   }
   </style>
   <p class="back"><span>&#x2190</span> Back to lists</p>
   <div class="sec-one">
   <h1>TODAY</h1>
   <button id="add">+</button>
   </div>
`
class HeaderComponent extends HTMLElement{
    constructor(){
        super()
        const shadow = this.attachShadow({mode: "open"})
        shadow.append(template.content.cloneNode(true))
        this.checkbox = shadow.querySelector("input");
        // this.shadow.adoptedStyleSheets = [styles]
    }
    
    static get observedAttributes(){
        return["checked"]
    }
    
    attributeChangedCallback(name, oldvalue, newValue){
        if(name === "checked")this.updateChecked(newValue)
    }

}
customElements.define("header-comp", HeaderComponent)