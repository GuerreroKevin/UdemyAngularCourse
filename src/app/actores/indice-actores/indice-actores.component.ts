import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-indice-actores',
  imports: [RouterLink, MatButtonModule],
  templateUrl: './indice-actores.component.html',
  styleUrl: './indice-actores.component.css'
})
export class IndiceActoresComponent {

}
