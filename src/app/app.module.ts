import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// RUTAS
import { APP_ROUTING } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ReservacionComponent } from './components/reservacion/reservacion.component';
import { PagoComponent } from './components/pago/pago.component';
import { FacturaComponent } from './components/factura/factura.component';
import { RegistroComponent } from './components/registro/registro.component';
import { importType } from '@angular/compiler/src/output/output_ast';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    MenuComponent,
    UsuarioComponent,
    ReservacionComponent,
    PagoComponent,
    FacturaComponent,
    RegistroComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
