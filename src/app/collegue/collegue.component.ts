import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() col;

  modeAffichage = true;

  constructor() { }

  modifierCol() {
    alert("Vous allez modifier le collegue");
    this.modeAffichage = false;

  }
  creerCol(){
    console.log("Création d’un nouveau collègue.")
  }

  validerCol(): void {
    this.modeAffichage = true;
    alert("Verifiez les modifications");
  }


  ngOnInit(): void {
  }

}
