import { Component, ContentChild } from '@angular/core';
import {  } from '@angular/core/primitives/signals';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  @ContentChild(ChildComponent) ChildCP = {} as ChildComponent;

  mainArray:any
  ngOnInit() {

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  ngAfterContentInit() {

    console.log("This is ngAfterContentInit parent Method");
    
    const OurMain=this.ChildCP.showMessage(50,90)
    console.log(OurMain);

    this.ChildCP.AllObjet=[
      ['rajshree','snehal','ajuja']
    ]


    



    //console.log(this.ChildCP.AllObjet.value);
    
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
  }
  ngAfterContentChecked() {
    const AddArray= this.ChildCP.AllObjet
    this.mainArray=AddArray
    console.log(this.mainArray);
    

    console.log("This is ngAfterContentChecked  parent Method");
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    
  }

}
