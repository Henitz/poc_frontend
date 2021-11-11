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

  back() {
    this.router.navigate(['/consulta-list/'])
  }

  pills(id: number) {
    this.router.navigate(['/consulta-remedio-form/' + id])
  }



}
