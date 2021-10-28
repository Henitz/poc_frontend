import { MedicosService } from 'src/app/medicos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { faArrowCircleLeft, faSave } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { ConsultaService } from 'src/app/consulta.service';
import { Consultas } from 'src/app/consultas';
import { Medicos } from 'src/app/medicos';
import { PacientesService } from 'src/app/pacientes.service';
import { Pacientes } from 'src/app/pacientes';


@Component({
  selector: 'app-consulta-form',
  templateUrl: './consulta-form.component.html',
  styleUrls: ['./consulta-form.component.css']
})
export class ConsultaFormComponent implements OnInit {


  consulta!: Consultas;
  success: boolean = false;
  faSave=faSave;
  faArrowCircleLeft=faArrowCircleLeft;

  id!: number

  medico: Medicos | undefined;
  medicos: Medicos[] = [];

  paciente: Pacientes | undefined;
  pacientes: Pacientes[] = [];

  constructor(
    private service: ConsultaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private medicoService: MedicosService,
    private pacienteService: PacientesService,

  ) {
    this.consulta = new Consultas();
  }

  ngOnInit(): void {

    this.medicoService
    .getAll()
    .subscribe(
      response => this.medicos = response );

      this.pacienteService
    .getAll()
    .subscribe(
      response => this.pacientes = response );


    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams => {
      this.id = urlParams['id']
      if(this.id){
        this.service
              .getOne(this.id)
              .subscribe(
                response => this.consulta = response ,
                errorResponse => this.consulta = new Consultas()
              )
      }
    })



  }
    save() {
      console.log(this.consulta)
     this.service.save(this.consulta).subscribe(c=>{this.router.navigate(['/consultas']); this.success = true})
    }



}

