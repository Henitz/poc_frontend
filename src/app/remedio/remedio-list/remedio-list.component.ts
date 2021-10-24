import { RemedioFormComponent } from './../remedio-form/remedio-form.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEye, faPencilAlt, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Remedios } from 'src/app/remedios';
import { RemediosService } from 'src/app/remedios.service';

@Component({
  selector: 'app-remedio-list',
  templateUrl: './remedio-list.component.html',
  styleUrls: ['./remedio-list.component.css']
})
export class RemedioListComponent implements OnInit {

  faPlusSquare = faPlusSquare;
  faEye = faEye;
  faTrash = faTrash;
  faPencilAlt = faPencilAlt;

  remedioSelecionadoExibir = new Remedios();
  remedioSelecionadoDelete = new Remedios();
  remedioSelecionadoAtivar = new Remedios();

  remedios: Remedios[] = [];

  blockDeletion: Boolean = false;


  constructor(private service: RemediosService, private router: Router) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((p) => (this.remedios = p));
  }
  prepararExibir(remedio: Remedios){
    this.remedioSelecionadoExibir = remedio
  }

  exibir() {
    this.router.navigate(['/remedios/' + this.remedioSelecionadoExibir.id ])
  }
  preparaDelete(remedio: Remedios){
    this.remedioSelecionadoDelete = remedio;
  }

  delete() {
    this.service.delete(this.remedioSelecionadoDelete.id).subscribe(
          m=> { this.blockDeletion = m.block_delecao;
          this.ngOnInit()
        }
      )
  }

  alterar(id: number) {
    this.router.navigate(['/remedios/form/' + id])
  }

  form() {
    this.router.navigate(['/remedios/form'])
  }
}
