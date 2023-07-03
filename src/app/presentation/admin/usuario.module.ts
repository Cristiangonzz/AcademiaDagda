import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from './create-user/create-user.component';
import { RoutingUsuarioModule } from './routing-usuario.module';
import { InscribirUsuarioCursoComponent } from './inscribir-usuario-curso/inscribir-usuario-curso.component';
import { AdminCursoComponent } from './admin-cursos/admin-curso.component';
import { AdminUsuarioComponent } from './admin-usuarios/admin-usuario.component';
import { AdminMembresiaComponent } from './admin-membresia/admin-membresia.component';
@NgModule({
  declarations: [
    CreateUserComponent,
    InscribirUsuarioCursoComponent,
    AdminCursoComponent,
    AdminUsuarioComponent,
    AdminMembresiaComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RoutingUsuarioModule,
  ],
  exports: [
    CreateUserComponent,
    InscribirUsuarioCursoComponent,
    AdminCursoComponent,
    AdminUsuarioComponent,
  ],
})
export class UsuarioModule {}
