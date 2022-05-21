import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.buscarPublicacion();
  }

  publicacion = this.ruta.snapshot.params['id'];

  //BD
  publicaciones = [ {
    "usuario": "@zflayn._",
    "imagen": "../assets/imagenes/p1.jpg",
    "caption": "Dibujo",
    "comentario": "", 
    "id": "a1"
  },
  {
    "usuario": "zflayn._",
    "imagen": "../assets/imagenes/fd.jpg",
    "caption": "Holaaaaa",
    "comentario": "", 
    "id": "a2"
  },
  {
    "usuario": "@zflayn._",
    "imagen": "../assets/imagenes/pf.jpg",
    "caption": "Soi io",
    "comentario": "", 
    "id": "a3"
  }
  ];

  publicacionDetalle: any= {}

  buscarPublicacion(): any {
    for(let i = 0; i < this.publicaciones.length; i++) {
      if(this.publicaciones[i].id == this.publicacion) {
        this.publicacionDetalle = this.publicaciones[i];
      }
    }
    return this.publicacionDetalle;
  }


}
