
class CheckboxComponent extends HTMLElement{
    constructor(){
        super()
        const shadow = this.attachShadow({mode: "open"})
        shadow.innerHTML =`
        <div class="check">
        <label><input type="checkbox" class="box"/><slot></slot></label><br>
        
        </div>        
        <style>
        input[type = "checkbox"]{
              font-size: 30px;
              background: red  
        }
        .check{
            display:flex;
            flex-direction: column
        }
        label{
            color: #A8A8A8;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 14px;
            }
        </style>        
        `
        this.checkbox = shadow.querySelector("input");
    }
    static get observedAttributes(){
        return["checked"]
    }

    
    attributeChangedCallback(name, oldvalue, newValue){
        if(name === "checked")this.updateChecked(newValue)
    }

    updateChecked(value){
     this.checkbox.checked = value!= null && value !== 'false'
    }
}
customElements.define("check-box", CheckboxComponent)


const item = document.querySelector('check-box')
let checked = true;

setInterval(()=>{
    checked = !checked
    item.setAttribute("checked", checked)
}, 500)


