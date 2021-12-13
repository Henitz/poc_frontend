import { MedicosService } from 'src/app/medicos.service';
import { Component, OnInit } from '@angular/core';
import { Medicos } from 'src/app/medicos';
import { ActivatedRoute, Router } from '@angular/router'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-medico-one',
  templateUrl: './medico-one.component.html',
  styleUrls: ['./medico-one.component.css']
})
export class MedicoOneComponent implements OnInit {

  id!: number;
  medico: Medicos = new Medicos();
  faArrowCircleLeft=faArrowCircleLeft
  accountId = this.tokenStorage.getAccountID();

  constructor(
    private service: MedicosService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tokenStorage: TokenStorageService
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.getOne(this.id, this.accountId)
  }

  getOne(id: number, accountId: any){
    console.log("aqui2")
    this.service.getOne(id, this.accountId).subscribe(c=>this.medico=c)
  }

  back() {
    this.router.navigate(['/medicos'])
  }
}
