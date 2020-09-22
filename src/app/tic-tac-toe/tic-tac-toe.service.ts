import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API = 'http://gateway.marvel.com/v1/public/characters?';
const TIMESTAMP = '1600374615125';
const APIKEY = '9fd5ca904e1562787973ca2c13c8b6e8';
const HASH = 'ea52c4576631dbd3350054ad9d7dc3e2'

@Injectable({
  providedIn: 'root'
})
export class TicTacToeService {

  constructor(private http: HttpClient) { }

  // Busca na API da marvel
  getCharacters(): Observable<any> {
    return this.http.get<any>(`
              ${ API }ts=${ TIMESTAMP }&apikey=${ APIKEY }&hash=${ HASH }
            `);
  }

}
