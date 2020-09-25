import { Injectable } from '@angular/core';
import { collegueMock3 } from '../mock/collegues.mock';
import { listeMatricules } from '../mock/matricules.mock';
import { Collegue } from '../models/collegue';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  rechercherParNom(nom: string) : string[] {
    // TODO retourner une liste de matricules fictifs à partir du fichier
    //`src/app/mock/matricules.mock.ts`.
    return listeMatricules;
    }
    recupererCollegueCourant(): Collegue {
    // TODO retourner le collègue fictif à partir du fichier
    //`src/app/mock/collegues.mock.ts`.
    return collegueMock3;

    }
  
}
