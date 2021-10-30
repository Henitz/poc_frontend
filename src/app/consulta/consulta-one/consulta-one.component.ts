import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { ConsultaService } from 'src/app/consulta.service';
import { Consultas } from 'src/app/consultas';
import { Medicos } from 'src/app/medicos';
import { Pacientes } from 'src/app/pacientes';

@Component({
  selector: 'app-consulta-one',
  templateUrl: './consulta-one.component.html',
  styleUrls: ['./consulta-one.component.css']
})
export class ConsultaOneComponent implements OnInit {

  id!: number;
  consulta: Consultas = new Consultas();
  medico: Medicos = new Medicos();
  paciente: Pacientes = new Pacientes();

  faArrowCircleLeft=faArrowCircleLeft

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
    this.router.navigate(['/consultas'])
  }

}
