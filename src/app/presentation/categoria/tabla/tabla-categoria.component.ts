import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaDomainEntity } from 'src/app/domain/entities/categoria.entity.domain';
import { CategoriaService } from 'src/app/domain/services/categoria.service.domain';
import { categoriaUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-categoria/delegate-categoria.infrastructure';
import { SweetAlert } from '../../shared/sweetAlert/sweet-alert.presentation';

@Component({
  selector: 'app-tabla-categoria',
  templateUrl: './tabla-categoria.component.html',
  styleUrls: ['./tabla-categoria.component.css'],
})
export class TablaCategoriaComponent implements OnInit ,AfterViewInit{
  delegateCategoria = categoriaUseCaseProviders;
  categorias!: CategoriaDomainEntity[];
  mostrarComponente: boolean = false;
  @Input() crearCategoria!: boolean;
  sweet = new SweetAlert();
  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
  ) {}
  ngAfterViewInit(): void {
    window.scroll(0,0)
  }
  finalizarCreacion(){
    this.mostrarComponente = false;
  }
  ngOnInit(): void {
    this.delegateCategoria.getAllCategoriaUseCaseProvider
      .useFactory(this.categoriaService)
      .execute();
    this.delegateCategoria.getAllCategoriaUseCaseProvider
      .useFactory(this.categoriaService)
      .statusEmmit.subscribe({
        next: (value: CategoriaDomainEntity[]) => {
          //this.categorias = value.map((x) => x.nombre);
          this.categorias = value;

        },
      });
  }

  eliminarCategoria(nombre:string){
    this.delegateCategoria.deleteCategoriaUseCaseProvider
      .useFactory(this.categoriaService)
      .execute(nombre).subscribe({
        next: (value : boolean) => {
          if(value){
            this.sweet.toFire('Completo', 'Categoria Eliminada', 'success');
            this.delegateCategoria.getAllCategoriaUseCaseProvider
            .useFactory(this.categoriaService)
            .execute();
          }else{
            this.sweet.toFire('Error', 'vuelva a intentar', 'error');

          }
         
        },
        error: () => {
          this.sweet.toFire('Error', 'vuelva a intentar', 'error');
        }
      });

  }
}