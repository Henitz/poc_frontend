import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { faArrowCircleLeft, faSave } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { EnumEspecialidade } from 'src/app/enumEspecialidade';
import { Especialidade } from 'src/app/especialidade';

import { Medicos } from 'src/app/medicos';
import { MedicosService } from 'src/app/medicos.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-medico-form',
  templateUrl: './medico-form.component.html',
  styleUrls: ['./medico-form.component.css']
})
export class MedicoFormComponent implements OnInit {

  medico!: Medicos;
  success: boolean = false;
  faSave=faSave;
  faArrowCircleLeft=faArrowCircleLeft;
  especialidades: Especialidade[] = [];
  id!: number;

  enumEspecialidade = EnumEspecialidade;
  enumKeys = Object.keys(EnumEspecialidade) as (keyof typeof EnumEspecialidade)[];
  accountId = this.tokenStorage.getAccountID();
  constructor(
    private service: MedicosService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private tokenStorage: TokenStorageService,
  ) {
    this.enumKeys=Object.keys(EnumEspecialidade) as (keyof typeof EnumEspecialidade)[];

    this.medico = new Medicos();
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams => {
      this.id = urlParams['id']
      if(this.id){
        this.service
              .getOne(this.id, this.accountId)
              .subscribe(
                response => this.medico = response ,
                errorResponse => this.medico = new Medicos()
              )
      }
    })

    this.especialidades = [
      {
         "nome":"ORTOPEDISTA",
      },
      {
        "nome":"CLINICO_GERAL",
      },
      {
        "nome":"NEUROLOGISTA",
      }
    ]
  }
    save() {
      console.log(this.medico)
      if(!this.id){
        console.log(" NAO TEM ID PORTANTO EH NOVO POSTMAPPING")
        this.service.save(this.medico, this.accountId).subscribe(c=>{this.router.navigate(['/medicos']); this.success = true})
      }
      if(this.id){
        console.log("  TEM ID PORTANTO EH ALTERACAO PUTMAPPING")
        this.service.update(this.id, this.medico, this.accountId).subscribe(c=>{this.router.navigate(['/medicos']); this.success = true})
      }
    }
}
