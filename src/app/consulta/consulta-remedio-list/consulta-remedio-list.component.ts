import { RemediosService } from './../../remedios.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultaService } from 'src/app/consulta.service';
import { Consultas } from 'src/app/consultas';
import { Remedios } from 'src/app/remedios';
import { faArrowCircleLeft, faPills, faTrash } from '@fortawesome/free-solid-svg-icons';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-consulta-remedio-list',
  templateUrl: './consulta-remedio-list.component.html',
  styleUrls: ['./consulta-remedio-list.component.css']
})
export class ConsultaRemedioListComponent implements OnInit {

  position: any;
  id!: number;
  consulta: Consultas = new Consultas();
  remedio: Remedios = new Remedios();
  faArrowCircleLeft = faArrowCircleLeft;
  faPills = faPills;
  faTrash = faTrash;
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
    this.getOne(this.id, this.accountId)
  }

  getOne(id: number,accountId: any){
    this.service.getOne(id, accountId).subscribe(c=>this.consulta=c)

  }

  redirectTo(url: string){
    this.router.navigateByUrl('/',{skipLocationChange: true}).then(()=>
    this.router.navigate([url]));
  }

  excluir(remedio: Remedios){
    this.position  = this.consulta.remedios.indexOf(remedio);
    this.consulta.remedios.splice(this.position,1);
    this.service
      .update(this.id, this.consulta, this.accountId)
      .subscribe(c=>{
        this.redirectTo('/consulta-remedio-list/' + this.consulta.id)
      })
        /* .subscribe(c=>this.router.navigate(['/consulta-remedio-list/' + this.consulta.id])) */
  }


  back() {
    this.router.navigate(['/consulta-list/'])
  }

  pills(id: number) {
    this.router.navigate(['/consulta-remedio-form/' + id])
  }



}
