import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() col;

  modeAffichage = true;

  constructor(private dateServ: DataService) { }

  modifierCol() {
    alert("Vous allez modifier le collegue");
    this.modeAffichage = false;
    this.col = this.dateServ.recupererCollegueCourant();

  }
  creerCol(){
    console.log("Création d’un nouveau collègue.")
  }

  validerCol(): void {
    this.modeAffichage = true;
    alert("Verifiez les modifications");
  }


  ngOnInit(): void {
    //this.col = this.dateServ.recupererCollegueCourant();
  }

}
