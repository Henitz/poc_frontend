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
import { TokenStorageService } from 'src/app/_services/token-storage.service';


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
  accountId = this.tokenStorage.getAccountID();
  constructor(
    private service: ConsultaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private medicoService: MedicosService,
    private pacienteService: PacientesService,
    private tokenStorage: TokenStorageService

  ) {
    this.consulta = new Consultas();
  }

  ngOnInit(): void {

    this.medicoService
    .getAll(this.accountId)
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
      if(!this.id){
        console.log(" NAO TEM ID PORTANTO EH NOVO POSTMAPPING")
        this.service.save(this.consulta).subscribe(c=>{this.router.navigate(['/consultas']); this.success = true})
      }
      if(this.id){
        console.log("  TEM ID PORTANTO EH ALTERACAO PUTMAPPING")
        this.service.update(this.id, this.consulta).subscribe(c=>{this.router.navigate(['/consultas']); this.success = true})
      }
    }



}

