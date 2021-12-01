import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Pacientes } from 'src/app/pacientes';
import { PacientesService } from 'src/app/pacientes.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-paciente-one',
  templateUrl: './paciente-one.component.html',
  styleUrls: ['./paciente-one.component.css'],
})
export class PacienteOneComponent implements OnInit {

  id!: number;
  paciente: Pacientes = new Pacientes();
  faArrowCircleLeft=faArrowCircleLeft;
  accountId = this.tokenStorage.getAccountID();



  constructor(

    private service: PacientesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tokenStorage: TokenStorageService
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getOne(this.id, this.accountId);
  }

  getOne(id: number, accountId: any){
    this.service.getOne(id, this.accountId).subscribe(p=>this.paciente=p);
  }

  back() {
    this.router.navigate(['/pacientes'])
  }
}
