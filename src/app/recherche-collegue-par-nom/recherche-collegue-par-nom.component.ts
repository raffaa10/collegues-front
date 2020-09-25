import { Component, OnInit } from '@angular/core';
import { listeMatricules } from '../mock/matricules.mock'
import { DataService } from '../services/data.service'

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  listeM : string[];



  constructor(private dateServ: DataService) { }

  ngOnInit(): void {
  }

  rechercheCol() {
    this.listeM = this.dateServ.rechercherParNom('cod');
  }

}
