import { PacienteOneComponent } from './../paciente-one/paciente-one.component';
import { Component, OnInit } from '@angular/core';
import { faArrowCircleLeft, faSave } from '@fortawesome/free-solid-svg-icons';
import { Pacientes } from 'src/app/pacientes'
import { PacientesService } from 'src/app/pacientes.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Planosdesaude } from 'src/app/planosdesaude';
import { taggedTemplate } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-paciente-form',
  templateUrl: './paciente-form.component.html',
  styleUrls: ['./paciente-form.component.css']
})
export class PacienteFormComponent implements OnInit {

  paciente!: Pacientes;
  success: boolean = false;
  faSave=faSave;
  faArrowCircleLeft=faArrowCircleLeft;
  planosdesaude: Planosdesaude[]= [];
  id!: number;

  constructor(
    private service: PacientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.paciente = new Pacientes();
   }

  ngOnInit(): void {

    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams => {
      this.id = urlParams['id']
      if(this.id){
        this.service
              .getOne(this.id)
              .subscribe(
                response => this.paciente = response ,
                errorResponse => this.paciente = new Pacientes()
              )
      }
    })

    this.planosdesaude =  [
      {
        "nome": "UNIMED",
      },
      {
        "nome": "BRADESCO"
      },
      {
        "nome": "PREVENT_SENIOR"
      }
    ]

    console.log(this.id);

  }

  save() {
    if(this.id) {
      this.service.edit(this.id, this.paciente).subscribe(p=>{this.router.navigate(['/pacientes']); this.success = true})
    }else {
      this.service.save(this.paciente).subscribe(p=>{this.router.navigate(['/pacientes']); this.success = true})
    }

  }



}
