import { MedicosService } from 'src/app/medicos.service';
import { Medicos } from 'src/app/medicos';
import { Component, OnInit } from '@angular/core';
import { faArrowCircleLeft, faSave } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { Observable } from 'rxjs';



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


  }
    save() {
      console.log("Salvar Aqui")
     // this.service.save(this.cliente).subscribe(c=>{this.cliente=c; this.success = true})
     this.service.save(this.medico).subscribe(c=>{this.router.navigate(['/medicos']); this.success = true})
     //this.service.save(this.cliente).subscribe(c=>{this.router.navigate(['/clientes'])})
    }



}
