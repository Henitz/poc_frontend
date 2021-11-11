import { RemediosService } from './../../remedios.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultaService } from 'src/app/consulta.service';
import { Consultas } from 'src/app/consultas';
import { Remedios } from 'src/app/remedios';
import { faArrowCircleLeft, faPills, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-consulta-remedio-list',
  templateUrl: './consulta-remedio-list.component.html',
  styleUrls: ['./consulta-remedio-list.component.css']
})
export class ConsultaRemedioListComponent implements OnInit {

  position: any;
  id!: number;
  consulta: Consultas = new Consultas();
  remedio: Remedios = new Remedios();
  faArrowCircleLeft = faArrowCircleLeft;

  constructor(
    private service: ConsultaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.getOne(this.id)
  }

  getOne(id: number){
    this.service.getOne(id).subscribe(c=>this.consulta=c)

  }

  excluir(remedio: Remedios){
    this.position  = this.consulta.remedios.indexOf(remedio);
    this.consulta.remedios.splice(this.position,1);
    this.service
      .update(this.id, this.consulta)
        .subscribe(c=>this.router.navigate(['/consulta-remedio-list/' + this.consulta.id]))
  }
  back() {
    this.router.navigate(['/consulta-list/'])
  }

  pills(id: number) {
    this.router.navigate(['/consulta-remedio-form/' + id])
  }



}
