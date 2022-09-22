import { Component, OnInit } from '@angular/core';
import { ComidaTipicaService } from 'src/app/services/comida-tipica.service';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})



export class TemplateComponent implements OnInit {

  constructor(private comidaTipicaService: ComidaTipicaService) { }

  bandera: boolean = false;

  listCategory: any[] = [];



  ngOnInit(): void {
    this.comidaTipicaService.getCategory().subscribe(response => {
      this.listCategory = response.categories;
    })
  }


  selectedCategory(category: string) {
    this.comidaTipicaService.selectedCategory.next(category);
  }

}
