import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowCircleLeft, faSave } from '@fortawesome/free-solid-svg-icons';
import { ConsultaService } from 'src/app/consulta.service';
import { Consultas } from 'src/app/consultas';
import { Remedios } from 'src/app/remedios';
import { RemediosService } from 'src/app/remedios.service';

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
  faSave = faSave;
  success: boolean = false;
  remedios: Remedios[] = [];

  constructor(
    private service: ConsultaService,
    private remedioService: RemediosService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {

    this.id = this.activatedRoute.snapshot.params['id'];

   }

  ngOnInit(): void {
    this.remedioService.getAll().subscribe((r) => (this.remedios = r));
    this.getOne(this.id)
  }

  getOne(id: number){
    this.service.getOne(id).subscribe(c=>this.consulta=c)

  }

  back() {
    this.router.navigate(['/consultas/' + this.id ])
  }

  redirectTo(url: string){
    this.router.navigateByUrl('/',{skipLocationChange: true}).then(()=>
    this.router.navigate([url]));
  }

  save() {
    this.consulta.remedios.push(this.remedio);
    this.service
      .update(this.id, this.consulta)
        .subscribe(c=>{
          this.redirectTo('/consulta-remedio-list/' + this.consulta.id)
        })
  }
}
