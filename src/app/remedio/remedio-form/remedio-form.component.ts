import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { faArrowCircleLeft, faSave } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Remedios } from 'src/app/remedios';
import { RemediosService } from 'src/app/remedios.service';

@Component({
  selector: 'app-remedio-form',
  templateUrl: './remedio-form.component.html',
  styleUrls: ['./remedio-form.component.css']
})
export class RemedioFormComponent implements OnInit {

  remedio!: Remedios;

  success: boolean = false;

  faSave=faSave;
  faArrowCircleLeft=faArrowCircleLeft;

  id!: number;

  constructor(

    private service: RemediosService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) {
    this.remedio = new Remedios();
   }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams => {
      this.id = urlParams['id']
      if(this.id){
        this.service
              .getOne(this.id)
              .subscribe(
                response => this.remedio = response ,
                errorResponse => this.remedio = new Remedios()
              )
      }
    })


  }
    save() {
      console.log("Salvar Aqui")
     // this.service.save(this.cliente).subscribe(c=>{this.cliente=c; this.success = true})
     this.service.save(this.remedio).subscribe(c=>{this.router.navigate(['/remedios']); this.success = true})
     //this.service.save(this.cliente).subscribe(c=>{this.router.navigate(['/clientes'])})
    }



}
