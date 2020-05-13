import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Computadora } from '../models/Computadora';


const url = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class ComputadorasService {

  constructor(private http: HttpClient) { }

  getComputadoras() {
    return this.http.get<Computadora>(`${url}`);
  }

  getComputadoraById(id: string) {
    return this.http.get<Computadora>(`${url}computadora/${id}`);
  }

}