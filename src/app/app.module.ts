import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { TableroAdminComponent } from './tablero-admin/tablero-admin.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { RecursosComponent } from './recursos/recursos.component';
import { NuevaPagPostComponent } from './nueva-pag-post/nueva-pag-post.component';
import { NuevaPagEstaticaComponent } from './nueva-pag-estatica/nueva-pag-estatica.component';
import { AdminPostComponent } from './admin-post/admin-post.component';
import { SeleccionarTemaComponent } from './seleccionar-tema/seleccionar-tema.component';
import { CrearTemaComponent } from './crear-tema/crear-tema.component';
import { AdminUsuariosComponent } from './admin-usuarios/admin-usuarios.component';
import { AdminPaginasComponent } from './admin-paginas/admin-paginas.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { ColorPickerModule } from '@iplab/ngx-color-picker';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { SeguridadPaginasComponent } from './seguridad-paginas/seguridad-paginas.component';
import { HttpClientModule } from "@angular/common/http";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { PaginaPrincipalShowComponent } from './pagina-principal-show/pagina-principal-show.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginaEstaticaComponent } from './pagina-estatica/pagina-estatica.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    TableroAdminComponent,
    PaginaPrincipalComponent,
    RecursosComponent,
    NuevaPagPostComponent,
    NuevaPagEstaticaComponent,
    AdminPostComponent,
    SeleccionarTemaComponent,
    CrearTemaComponent,
    AdminUsuariosComponent,
    AdminPaginasComponent,
    UsuariosComponent,
    SeguridadPaginasComponent,
    PaginaPrincipalShowComponent,
    PaginaEstaticaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ColorPickerModule,
    HttpClientModule,
    FormsModule,
    CKEditorModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
