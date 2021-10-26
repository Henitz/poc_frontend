import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { faArrowCircleLeft, faSave } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { ConsultaService } from 'src/app/consulta.service';
import { Consultas } from 'src/app/consultas';


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



  constructor(
    private service: ConsultaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.consulta = new Consultas();
  }

  ngOnInit(): void {
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

