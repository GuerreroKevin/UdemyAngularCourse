import { Component } from '@angular/core';
import { PeliculaCreacionDTO } from '../peliculas';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { SelectorMultipleDTO } from '../../compartidos/components/selector-multiple/SelectorMultipleModelo';
import { MatNativeDateModule } from '@angular/material/core';
import { actorAutoCompleteDTO } from '../../actores/actores';

@Component({
  selector: 'app-crear-pelicula',
  imports: [FormularioPeliculasComponent, MatNativeDateModule],
  templateUrl: './crear-pelicula.component.html',
  styleUrl: './crear-pelicula.component.css'
})
export class CrearPeliculaComponent {

  generosSeleccionados: SelectorMultipleDTO[] = [];

  generosNoSeleccionados: SelectorMultipleDTO[] = [
    {llave: 1, valor: 'Drama'},
    {llave: 2, valor: 'Accion'},
    {llave: 3, valor: 'Comedia'}
  ];

  cinesSeleccionados: SelectorMultipleDTO[] = [];

  cinesNoSeleccionados: SelectorMultipleDTO[] = [
    {llave: 1, valor: 'Cinepolis'},
    {llave: 2, valor: 'Cinemex'},
    {llave: 3, valor: 'Cinemark'}
  ];

  actoresSeleccionado: actorAutoCompleteDTO[] = [];

  guardarCambios(pelicula: PeliculaCreacionDTO){
    console.log('creando pelicula', pelicula);
  }
}
