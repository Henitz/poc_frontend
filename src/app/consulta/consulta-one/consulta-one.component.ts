import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowCircleLeft, faPills } from '@fortawesome/free-solid-svg-icons';
import { ConsultaService } from 'src/app/consulta.service';
import { Consultas } from 'src/app/consultas';
import { Medicos } from 'src/app/medicos';
import { Pacientes } from 'src/app/pacientes';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-consulta-one',
  templateUrl: './consulta-one.component.html',
  styleUrls: ['./consulta-one.component.css']
})
export class ConsultaOneComponent implements OnInit {

  id!: number;
  consulta: Consultas = new Consultas();
  medico: Medicos = new Medicos();
  paciente: Pacientes = new Pacientes();

  faArrowCircleLeft=faArrowCircleLeft
  faPills = faPills;
  accountId = this.tokenStorage.getAccountID();

  constructor(

    private service: ConsultaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tokenStorage: TokenStorageService,

  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.getOne(this.id, this.accountId);
  }

  getOne(id: number, accountId: any){
    this.service.getOne(id, this.accountId).subscribe(c=>this.consulta=c);
  }

  back() {
    this.router.navigate(['/consultas']);
  }
  pills(id: number) {
    this.router.navigate(['/consulta-remedio-list/' + id]);
  }

}
