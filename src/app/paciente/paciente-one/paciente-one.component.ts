import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Pacientes } from 'src/app/pacientes';
import { PacientesService } from 'src/app/pacientes.service';

@Component({
  selector: 'app-paciente-one',
  templateUrl: './paciente-one.component.html',
  styleUrls: ['./paciente-one.component.css']
})
export class PacienteOneComponent implements OnInit {

  id!: number;
  paciente: Pacientes = new Pacientes();
  faArrowCircleLeft=faArrowCircleLeft



  constructor(

    private service: PacientesService,
    private activatedRoute: ActivatedRoute,
    private router: Router

  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getOne(this.id)
  }

  getOne(id: number){
    this.service.getOne(id).subscribe(p=>this.paciente=p)
  }

  back() {
    this.router.navigate(['/paciente'])
  }
}
