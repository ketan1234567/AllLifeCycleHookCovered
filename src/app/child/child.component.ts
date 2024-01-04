import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  AllObjet=[
    ["ketan","vishal","rollw"]
  ]
  

  showMessage(anil:any,vishal:any){
    return anil+vishal;
  }
  changeData(val:any){
    console.log(val);

  
  }
 
  
  ngOnInit() {

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  ngAfterContentInit() {
    
    console.log("This is ngAfterContentInit child Method");
    

    
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
  }

}
