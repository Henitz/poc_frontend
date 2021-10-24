import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { faArrowCircleLeft, faSave } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Especialidade } from 'src/app/especialidade';
import { Medicos } from 'src/app/medicos';
import { MedicosService } from 'src/app/medicos.service';

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

  constructor(
    private service: MedicosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.medico = new Medicos();
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams => {
      this.id = urlParams['id']
      if(this.id){
        this.service
              .getOne(this.id)
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
      console.log("Salvar Aqui")
     this.service.save(this.medico).subscribe(c=>{this.router.navigate(['/medicos']); this.success = true})
    }
}
