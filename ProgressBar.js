class ProgressBarComponent extends HTMLElement{
    static get observedAttributes(){
        return["percent"]
    }
       constructor(){
        super()
        const shadow = this.attachShadow({mode: "open"})
        shadow.innerHTML=`
        <div class="bar"><div class="fill"></div></div>
        <p class="complete">${this.percent}% complete</p>
       <style>
      .bar{
       width: 90%;
       height: 10px;
       border: solid #d4d3d3 0.5px;
       border-radius: 10px;
       }
      .bar .fill{
       width: 0;
       background: #B3B3EF;
       height: 100%;
       border-right-radius: 10px;
       transition: width 60s;
       border-radius: 10px;
      }
     p{
       text-align: center;
       color:#B3B3EF
      }
     </style>`
    }

    get percent(){
        const value = this.getAttribute("percent")
        if(isNaN(value)){
            return 0
        }
        if(value < 0){
        return 0
        }
        if(value > 100){
        return 100
        }
        return Number(value)
    }
    
    set percent(value){
        this.setAttribute("percent", value)
    }
    
    attributeChangedCallback(name){
        if(name === "percent"){
            this.shadowRoot.querySelector(".fill").style.width = `${this.percent}%`
        }
    }
}

customElements.define("progress-bar", ProgressBarComponent)