import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { ConsultaService } from 'src/app/consulta.service';
import { Consultas } from 'src/app/consultas';
import { Remedios } from 'src/app/remedios';

@Component({
  selector: 'app-consulta-remedio-form',
  templateUrl: './consulta-remedio-form.component.html',
  styleUrls: ['./consulta-remedio-form.component.css']
})
export class ConsultaRemedioFormComponent implements OnInit {

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
  }

  getOne(id: number){
    this.service.getOne(id).subscribe(c=>this.consulta=c)

  }

  back() {
    this.router.navigate(['/consultas/' + this.id ])
  }

}
