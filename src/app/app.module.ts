import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { RegistrousuarioComponent } from './registrousuario/registrousuario.component';
import { ReservacionComponent } from './reservacion/reservacion.component';
import { PagoComponent } from './pago/pago.component';
import { FacturaComponent } from './factura/factura.component';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    MenuComponent,
    UsuarioComponent,
    RegistrousuarioComponent,
    ReservacionComponent,
    PagoComponent,
    FacturaComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
