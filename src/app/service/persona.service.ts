import {Injectable} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { UsuarioComponent } from '../components/usuario/usuario.component';

@Injectable()
export class PersonaService {
    constructor(
        private personaSer: UsuarioComponent) { }
    private persona: any = [
    {
        tipoidentificacion: 'Cedula de ciudadania',
        id: '129128321',
        nombre: 'Alvaro ',
        apellido: 'Nuñez',
        correo: 'RodolfoAndres@user.com',
        direccion: 'Cra-25#38 d sur int 02',
        sexo: 'Masculino',
        telefono: 26857643,
        contrasena: '*******'
    }
    ];
    getPersona() {
        return this.personaSer.ngOnInit();
    }
}

export interface Persona {
    tipoidentificacion: string;
    id: string;
    nombre: string;
    apellido: string;
    correo: string;
    direccion: string;
    sexo: string;
    telefono: number;
    contrasena: string;

}
