// import './ProgressBar.js';
class CheckboxComponent extends HTMLElement{
    constructor(){
        super()
        const shadow = this.attachShadow({mode: "open"})
        shadow.innerHTML =`
        <div class="check">
        <input type="checkbox"/>
        <label><slot></slot></label><br><br>
        </div>
         
        <style>
         input[type="checkbox"] {
            appearance: none;
            -webkit-appearance: none;
            display: flex;
            align-content: center;
            justify-content: center;
            font-size: 2rem;
            padding: 0.1rem;
            border: 0.10rem solid #B5EA81;
            border-radius: 50%;
          }
        input[type="checkbox"]::before {
            content: "";
            width: 0.8rem;
            height: 0.8rem;
            clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
            transform: scale(0);
            background-color: #B5EA81;
          }
         input[type="checkbox"]:checked::before {
            transform: scale(1);
          }
         input[type="checkbox"]:hover {
            color: black;
          }
        label{
            color: #A8A8A8;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 15px;
            }
        .check{
            display: flex;
            gap: 12px;
            align-items: center
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



