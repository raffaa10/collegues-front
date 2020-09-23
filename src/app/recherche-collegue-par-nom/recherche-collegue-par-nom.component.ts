import { Component, OnInit } from '@angular/core';
import { listeMatricules } from '../mock/matricules.mock'

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  listeM : string[];

  constructor() { }

  ngOnInit(): void {
  }

  rechercheCol() {
    this.listeM = listeMatricules;
  }

}
