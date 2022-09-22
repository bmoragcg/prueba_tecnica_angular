import { Component, Input, OnInit } from '@angular/core';

import { ComidaTipicaService } from 'src/app/services/comida-tipica.service';

export interface Tags {
  "id_tags": 1,
  "nombre": "BeaverTails",
  "cantidad": 4
}

@Component({
  selector: 'app-comida-tipica',
  templateUrl: './comida-tipica.component.html',
  styleUrls: ['./comida-tipica.component.scss']
})
export class ComidaTipicaComponent implements OnInit {

  constructor(private comidaTipicaService: ComidaTipicaService) { }


  listFood: any[] = [];
  listTags: Tags[] = [];
  listCategory: any[] = [];
  urlImage: string = '';

  seacrhByNombre: string = ''

  starRating = 5;
  solicitudesCumplidas = 0;
  totalCalificacion = 0;
  porcentajeCumplimiento = 0;
  selectedEstrellas = 0;


  pagina: number = 0;
  mostrar: number = 5;


  ngOnInit(): void {

    this.comidaTipicaService.dataInit().subscribe(response => {
      this.listFood = response.meals;
    })

    this.comidaTipicaService.selectedCategory.subscribe(category => {
      this.comidaTipicaService.getMealsByCategory(category).subscribe(response => {

        this.listFood = response.meals;
      })
    })
  }

  searchPlato() {
    this.comidaTipicaService.getFoodByName(this.seacrhByNombre).subscribe(response => {
      this.listFood = response.meals;
    })

    this.comidaTipicaService.saveTags(this.seacrhByNombre).subscribe(response => { })

    this.comidaTipicaService.getTags().subscribe(response => {
      this.listTags = response.message;
    })

  }

  saveCalificacion() {
  }

  saveMeGusta() {
  }

  meGusta(id: number) {
    let icon = document.querySelector(`#like-${id}`) as HTMLInputElement;
    icon.classList.toggle('active');
  }

  paginadorSiguientePrincipal() {
    if (this.mostrar >= this.listFood.length) { return; }
    this.pagina = this.pagina + 5;
    this.mostrar = this.mostrar + 5;
  }

  paginadorAnteriorPrincipal() {
    if (this.pagina <= 0) { return; }
    this.pagina = this.pagina - 5;
    this.mostrar = this.mostrar - 5;
  }



}
