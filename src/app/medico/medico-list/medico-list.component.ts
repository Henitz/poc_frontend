import { Component, OnInit } from '@angular/core';
import { MedicosService } from 'src/app/medicos.service'
import { Medicos } from 'src/app/medicos'
import { Router } from '@angular/router';
import { faPlusSquare, faEye, faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Identifiers } from '@angular/compiler/src/render3/r3_identifiers';

@Component({
  selector: 'app-medico-list',
  templateUrl: './medico-list.component.html',
  styleUrls: ['./medico-list.component.css']
})
export class MedicoListComponent implements OnInit {

  faPlusSquare = faPlusSquare;
  faEye = faEye;
  faTrash = faTrash;
  faPencilAlt = faPencilAlt;

  medicoSelecionadoExibir = new Medicos();
  medicoSelecionadoDelete = new Medicos();
  medicoSelecionadoAtivar = new Medicos();

  medicos: Medicos[] = [];

  blockDeletion: Boolean = false;

  constructor(private service: MedicosService, private router: Router) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((p) => (this.medicos = p));
  }
  form() {
    this.router.navigate(['medicos/medico-list'])
  }

  prepararExibir(medico: Medicos){
    this.medicoSelecionadoExibir = medico
  }

  exibir() {
    this.router.navigate(['/medicos/' + this.medicoSelecionadoExibir.id ])
  }
  preparaDelete(medico: Medicos){
    this.medicoSelecionadoDelete = medico;
  }

  delete() {
    this.service.delete(this.medicoSelecionadoDelete.id).subscribe(
          m=> { this.blockDeletion = m.block_delecao;
          this.ngOnInit()
        }
      )
  }

  alterar(id: number) {
    console.log(id);
    console.log('Teste editar');
    this.router.navigate(['/medicos/medico-form/' + id]);
  }
}
