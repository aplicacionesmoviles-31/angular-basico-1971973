import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  galeria = true;

  mostrarGaleria(mostrarSiNo:  boolean) {
    this.galeria = mostrarSiNo;
  }

  usuario = {
    "nombre":"pablo capistran",
    "alias": "@mzflayn._",
    "fotoPerfil": "../assets/imagenes/pf.jpg",
    "seguidores": 1500,
    "seguidos": 200,
    "bio": "19y", 
    "publicaciones" : [ {
      "usuario": "@zflayn._",
      "imagen": "../assets/imagenes/p1.jpg",
      "caption": "Dibujo",
      "comentario": "", 
      "id": "a1"
    },
    {
      "usuario": "@zflayn._",
      "imagen": "../assets/imagenes/fd.jpg",
      "caption": "Holaaaaa",
      "comentario": "", 
      "id": "a2"
    },
    {
      "usuario": "@zflayn._",
      "imagen": "../assets/imagenes/pf.jpg",
      "caption": "Soi io ",
      "comentario": "", 
      "id": "a3"
    }
    ]
  }

}
