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
      my_array: { type: String },
      my_array1: { type: Object },

      // countofemployees:{ type: Number}
    };
  }

  constructor() {

    super();
    
    this.counter = 10;
    this.x = 0;
  
  }


genRows1(){debugger;
return html`  

${repeat(this.my_array1, (employee) => employee.data, (employee.data, index) => html`
<tr >
    <td >${employee.data[0].name}&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp</td>
    <td>${employee.data[0].Full Name}&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp</td>
    <td>${employee.data[0].status} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp</td>
    <td>${employee.emailAddress}</td>
    
  </tr>
`)}

`;



}  

/*genTable(empDb,count3){ 
 
  //alert(empDb.userId)
  //alert(empDb.firstName)
  
  if (count3 < this.my_array1.length)
  return html`

  <table border: solid 1px #f7f5f5;>
  <tr >
    <td >${empDb.userId}&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp</td>
    <td>${empDb.firstName}&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp</td>
    <td>${empDb.phoneNumber} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp</td>
    <td>${empDb.emailAddress}</td>
    <br>
  </tr>
  
  </table>
  ${this.genRows(this.my_array1,this.my_array1.length)}
   
  `;
  else
   return;

 };

 genRows(empDb,count2){

 // alert (count2)
  

  if( this.x < count2) { 
     
    
    return this.genTable(empDb[this.x],this.x++);
  
  }


 } */



  render() {
   

    this.my_array = JSON.stringify(this.employeeDetails);

    this.my_array1 = JSON.parse(this.my_array);
    //debugger
/*
    //Access data of json file employees.json fetched and returned from html file 
    this.my_array = JSON.stringify(this.employeeDetails)
    //this.my_array = this.employeeDetails
    alert(this.my_array)
    //my_array is string containing json file data
    this.my_array1 = JSON.parse(this.my_array);

    console.log(this.my_array1[0].firstName);
    /* Note: json.parse returned object but key and values were not 
    accessible until console.log was used. After that though key and 
    values were not visible automatically but accessing them after this.array1.key _name 
    worked fine as per syntax */

    //alert(typeof(this.my_array1)); //returns[ object ]
    //alert(this.my_array1[0].userId);

    //let key1 = Object.keys(this.my_array1);
    //let val  = Object.values(this.my_array1);
/*
     */
   
    let i = 0;
    let x = 0;
    let count2 = this.my_array1.length;

    return html`
      
     
      <table >
      <tr>
       <th>NAME &nbsp &nbsp </th>
       <th>FULL NAME  &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp </th>
       <th>STATUS &nbsp &nbsp</th>
       <th>EMAIl ADDRESS &nbsp &nbsp&nbsp &nbsp</th>
      </tr>
      ${this.genRows1()}
      </table>
     

      <br>
      <br><br>
      <br> 
      
      
    `    ;

  }
}
