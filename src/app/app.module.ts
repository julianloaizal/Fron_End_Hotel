import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

// RUTAS
import { APP_ROUTING } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
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
    HomeComponent,
    FooterComponent,
    MenuComponent,
    LoginComponent,
    UsuarioComponent,
    ReservacionComponent,
    PagoComponent,
    FacturaComponent,
    RegistroComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
