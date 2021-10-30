import { MedicosService } from 'src/app/medicos.service';
import { Component, OnInit } from '@angular/core';
import { Medicos } from 'src/app/medicos';
import { ActivatedRoute, Router } from '@angular/router'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-medico-one',
  templateUrl: './medico-one.component.html',
  styleUrls: ['./medico-one.component.css']
})
export class MedicoOneComponent implements OnInit {

  id!: number;
  medico: Medicos = new Medicos();
  faArrowCircleLeft=faArrowCircleLeft


  constructor(
    private service: MedicosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.getOne(this.id)
  }

  getOne(id: number){
    this.service.getOne(id).subscribe(c=>this.medico=c)
  }

  back() {
    this.router.navigate(['/medicos'])
  }
}
