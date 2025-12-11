import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { retry } from "rxjs";

export function primeraLetraMayuscula(): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
        const valor = <string>control.value;

        if(!valor) return null;
        if(valor.length === 0) return null;

        const primerLetra = valor[0];

        if (primerLetra !== primerLetra.toUpperCase()){
            return{
                primeraLetraMayuscula: {
                    mensaje: 'La primera letra debe ser mayuscula'
                }
            }
        }

        return null;

    }
}

export function fechaNoPuedeSerFutura(): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
        const fechaEscogidaPorElUsuario = new Date(control.value);
        const hoy = new Date();

        if (fechaEscogidaPorElUsuario > hoy){
            return {
                futuro: {
                    mensaje: 'La fecha no puede ser del futuro'
                }
            }
        }
        
        return null;
    }
}