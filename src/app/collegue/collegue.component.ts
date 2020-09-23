import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() col;
  constructor() { }

  modifierCol() {
    alert("Vous allez modifier le collegue")
  }
  creerCol(){
    console.log("Création d’un nouveau collègue.")
  }

  ngOnInit(): void {
  }

}
