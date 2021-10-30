import { PacientesService } from './../../pacientes.service';
import { Pacientes } from './../../pacientes';
import { Component, OnInit } from '@angular/core';
import { faEye, faPencilAlt, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {

  faPlusSquare = faPlusSquare;
  faEye = faEye;
  faTrash = faTrash;
  faPencilAlt = faPencilAlt;

  pacienteSelecionadoExibir = new Pacientes();
  pacienteSelecionadoDelete = new Pacientes();
  pacienteSelecionadoAtivar = new Pacientes();

  pacientes: Pacientes[] = [];

  blockDeletion: Boolean = false;



  constructor(private service: PacientesService, private router: Router) { }

  ngOnInit(): void {
  this.service.getAll().subscribe((p) => (this.pacientes = p));
  }

  prepararExibir(paciente: Pacientes) {
    this.pacienteSelecionadoExibir = paciente
  }

  exibir() {
    this.router.navigate(['/pacientes/' + this.pacienteSelecionadoExibir.id])
  }
  preparaDelete(paciente: Pacientes){
    this.pacienteSelecionadoDelete = paciente;
  }

  delete() {
    this.service.delete(this.pacienteSelecionadoDelete.id).subscribe(
          m=> { this.blockDeletion = m.block_delecao;
          this.ngOnInit()
        }
      )
  }

  alterar(id: number) {
    this.router.navigate(['/pacientes/paciente-form/' + id])
  }

  form() {
    this.router.navigate(['/pacientes/form'])
  }
}
