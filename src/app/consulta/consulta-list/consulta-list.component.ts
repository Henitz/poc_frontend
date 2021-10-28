import { Consultas } from './../../consultas';
import { ConsultaService } from 'src/app/consulta.service';
import { Component, OnInit } from '@angular/core';
import { faEye, faPencilAlt, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Medicos } from 'src/app/medicos';
import { MedicosService } from 'src/app/medicos.service';
import { Pacientes } from 'src/app/pacientes';

@Component({
  selector: 'app-consulta-list',
  templateUrl: './consulta-list.component.html',
  styleUrls: ['./consulta-list.component.css']
})
export class ConsultaListComponent implements OnInit {

  faPlusSquare = faPlusSquare;
  faEye = faEye;
  faTrash = faTrash;
  faPencilAlt = faPencilAlt;

  consultaSelecionadoExibir = new Consultas();
  consultaSelecionadoDelete = new Consultas();
  consultaSelecionadoAtivar = new Consultas();

  consultas: Consultas[] = [];
  blockDeletion: Boolean = false;

  medico: Medicos | undefined;
  medicos: Medicos[] = [];

  paciente: Pacientes | undefined;
  pacientes: Pacientes[] = [];

  constructor(
    private service: ConsultaService,
    private router: Router,
    private medicoService: MedicosService,
     ) {

      }

  ngOnInit(): void {
    this.service.getAll().subscribe((p) => (this.consultas = p));



  }
  form() {

    this.medicoService
    .getAll()
    .subscribe(
      response => this.medicos = response );


    this.router.navigate(['consultas/consulta-list'])
  }

  prepararExibir(consulta: Consultas){
    this.consultaSelecionadoExibir = consulta
  }

  exibir() {
    this.router.navigate(['/consultas/' + this.consultaSelecionadoExibir.id ])
  }
  preparaDelete(consulta: Consultas){
    this.consultaSelecionadoDelete = consulta;
  }

  delete() {
    this.service.delete(this.consultaSelecionadoDelete.id).subscribe(
          m=> { this.blockDeletion = m.block_delecao;
          this.ngOnInit()
        }
      )
  }

  alterar(id: number) {
    this.router.navigate(['/consultas/consulta-form/' + id])
  }
}
