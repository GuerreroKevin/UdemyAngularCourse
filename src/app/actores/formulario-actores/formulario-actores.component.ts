import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { ActorCreacionDTO, ActorDTO } from '../actores';
import { fechaNoPuedeSerFutura } from '../../compartidos/funciones/validaciones';
import { InputImgComponent } from "../../compartidos/components/input-img/input-img.component";

@Component({
  selector: 'app-formulario-actores',
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, InputImgComponent],
  templateUrl: './formulario-actores.component.html',
  styleUrl: './formulario-actores.component.css'
})
export class FormularioActoresComponent implements OnInit {
  ngOnInit(): void {
    if (this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  private formBuilder = inject(FormBuilder);

  @Output()
  posteoFormulario = new EventEmitter<ActorCreacionDTO>();

  @Input()
  modelo?: ActorDTO;

  form = this.formBuilder.group({
    nombre: ['', {
      validators: [Validators.required]
    }],
    fechaNacimiento: new FormControl<Date | null>(null, {
      validators: [Validators.required, fechaNoPuedeSerFutura()]
    }),
    foto: new FormControl<File | string | null>(null)
  })

  obtenerErrorCampoNombre(){
    let campo = this.form.controls.nombre;

    if(campo.hasError('required')){
      return 'El campo Nombre es requerido';
    }

    return "";
  }

  obtenerErrorCampoFechaNacimiento(){
    let campo = this.form.controls.fechaNacimiento;


    if(campo.hasError('required')){
      return 'El campo Fecha Nacimiento es requerido';
    }
    
    if(campo.hasError("futuro")){
      return campo.getError('futuro').mensaje;
    }

    return "";
  }
  
  archivoSeleccionado(file: File){
    this.form.controls.foto.setValue(file);
  }

  guardarCambios(){
    if(!this.form.valid){
      return;
    }

    const actor = this.form.value as ActorCreacionDTO;

    if(typeof actor.foto === "string"){
      actor.foto = undefined;
    }

    this.posteoFormulario.emit(actor);
  }

}
