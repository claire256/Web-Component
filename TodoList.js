const template = document.createElement("template");
template.innerHTML =`
   <style>
   section{
    width:1000px;  
    background-color: #E5E5F5;
    height: 100vh;
    padding-top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
   }
   .container{
       width:300px;  
       background-color: white;  
       height: 640px;
       box-shadow:10px 15px 25px 0px #D3CEEB;
    }
    .wrapper{
       padding-left: 20px 
    }
   .check{
       display:flex;
       flex-direction: column
   }
   input .box{
   
     }
   p{
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
    color: #A8A8A8;
    font-size: 14px;
   }
   label{
   color: #A8A8A8;
   font-family: Arial, Helvetica, sans-serif;
   font-size: 14px;
   }
   .sec-one{
       display: flex;
       align-items: center;
       justify-content: space-between;
   }
   sec-two{
    display: flex;
    align-items: center;
    justify-content: space-between;
   }
   .sec-two button{
       width: 130px;
       height: 40px;
       border-radius: 35px;
       border: none;
       font-family: Arial, Helvetica, sans-serif;
       color:#A8A8A8;
       font-size: 18px
   }
   .bar{
       width: 90%;
       height: 10px;
       border: solid black 1px;
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
   .complete{
       text-align: center;
       color:#B3B3EF
   }
   .back{
    color: #B3B3EF;
    padding-top: 8%;
   }
   span{
       font-size: 40px;
   }
   </style>
   <section>
   <div class="container">
   <div class="wrapper">
   <p class="back"><span>&#x2190</span> Back to lists</p>
   <div class="sec-one">
   <h1>TODAY</h1>
   <button id="add">+</button>
   </div>
   <div class="bar"> </div>
   <p class="complete">33% complete</p>
   <div class="check">
   <label><input type="checkbox" class="box"/>Meditation</label><br>
   <label><input type="checkbox"/>Pick up Ann</label><br>
   <label><input type="checkbox"/>Set up meeting with Jay</label><br>
   <label><input type="checkbox"/>Finish Daily Ui</label><br>
   <label><input type="checkbox"/>Second edits on article</label><br>
   <label><input type="checkbox"/>Email Chris</label><br>
   </div>
   <p>Pull from recurring lists</p>
   <div class="sec-two">
   <button style="background-color:#F5ED84 ;">Daily</button>
   <button style="background-color:#B5EA81;">Weekly</button>
   </div>
   <div class="sec-two" style="padding-top: 18px;">
   <button style="background-color:#F3A9A9;">Monthly</button>
   <button style="background-color:#B3B3EF ;">Occasional</button>
   </div>
   </div>
   </div>
   </section>
`
class TodoComponent extends HTMLElement{
    constructor(){
        super()
        const shadow = this.attachShadow({mode: "open"})
        shadow.append(template.content.cloneNode(true))
    }
}
customElements.define("todo-list", TodoComponent)