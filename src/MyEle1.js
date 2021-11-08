import { html, css, LitElement } from 'lit';
import {repeat} from 'lit/directives/repeat.js';

export class MyEle1 extends LitElement {


static get styles() {
    return css`
    table, th, td 
      {
          border: solid 1px #f7f5f5;
          border-collapse: collapse;
          padding: 2px 3px;
          text-align: center;
      }
          
      :host {
        display: block;
        padding: 45px;
        font-size: large;
        color: var(--my-ele1-text-color, #f3f1f1);
 
        th, td, p, input {
          font:14px Verdana;
      }
      
      }
    `;
  }


  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
      employeeDetails: { type: Object },
      //my_array: { type: String },
      //my_array1: { type: Object },

      // countofemployees:{ type: Number}
    };
  }

  constructor() {

    super();
    
    this.counter = 10;
    this.x = 0;
  
  }


genRows1(){
//;  
return html`  

${repeat(this.employeeDetails.items, (employee) =>  html`
<tr >
    <td>${employee.name}&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp</td>
   <td>${employee.personal_email}</td>
    <td>${employee.status} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp</td>
    
  </tr>
`)}

`;
}  

  render() {
   

   // this.my_array = JSON.stringify(this.employeeDetails);
    
    //debugger ;

   // this.my_array1 = JSON.parse(this.my_array);
   
    //alert(this.my_array)
    //debugger

    return html`
          
      <table >
      <tr>
       <th>NAME &nbsp &nbsp </th>
       
       <th>EMAIl ADDRESS &nbsp &nbsp</th>
       <th>STATUS &nbsp &nbsp&nbsp &nbsp</th>
      </tr>
      ${this.genRows1()}
      
      </table>
     <h2> Total number of Employees :  ${this.employeeDetails.total} </h2>
    

      <br>
      <br><br>
      <br> 
      
      
    `    ;

  }
}
