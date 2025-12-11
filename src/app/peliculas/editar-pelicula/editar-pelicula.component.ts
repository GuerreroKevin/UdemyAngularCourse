import { Component, Input, numberAttribute } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../peliculas';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { MatNativeDateModule } from '@angular/material/core';
import { SelectorMultipleDTO } from '../../compartidos/components/selector-multiple/SelectorMultipleModelo';
import { actorAutoCompleteDTO } from '../../actores/actores';

@Component({
  selector: 'app-editar-pelicula',
  imports: [FormularioPeliculasComponent, MatNativeDateModule],
  templateUrl: './editar-pelicula.component.html',
  styleUrl: './editar-pelicula.component.css'
})
export class EditarPeliculaComponent {

  @Input({transform: numberAttribute})
  id!: number;

  pelicula: PeliculaDTO = {id: 1, titulo: 'Spoider-Man', trailer: 'ADS', fechaLanzamiento: new Date('2018-06-28'), poster: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832'}


  generosSeleccionados: SelectorMultipleDTO[] = [
    {llave: 2, valor: 'Accion'}];

  generosNoSeleccionados: SelectorMultipleDTO[] = [
    {llave: 1, valor: 'Drama'},
    {llave: 3, valor: 'Comedia'}
  ];

  cinesSeleccionados: SelectorMultipleDTO[] = [
    {llave: 3, valor: 'Cinemark'}];

  cinesNoSeleccionados: SelectorMultipleDTO[] = [
    {llave: 1, valor: 'Cinepolis'},
    {llave: 2, valor: 'Cinemex'}
  ];

  actoresSeleccionados: actorAutoCompleteDTO[] = [
    { id: 3, nombre: 'Robert De Niro', personaje: 'Father', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Robert_de_Niro-9578.jpg/500px-Robert_de_Niro-9578.jpg' }
  ]
  
  guardarCambios(pelicula: PeliculaCreacionDTO){
    console.log('editando Pelicula', pelicula);
  }
}
