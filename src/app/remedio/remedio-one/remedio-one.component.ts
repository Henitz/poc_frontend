import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Remedios } from 'src/app/remedios';
import { RemediosService } from 'src/app/remedios.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-remedio-one',
  templateUrl: './remedio-one.component.html',
  styleUrls: ['./remedio-one.component.css']
})
export class RemedioOneComponent implements OnInit {

  id!: number;
  remedio: Remedios = new Remedios();
  faArrowCircleLeft=faArrowCircleLeft;
  accountId = this.tokenStorage.getAccountID();

  constructor(
    private service: RemediosService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tokenStorage: TokenStorageService,
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.getOne(this.id, this.accountId);
  }

  getOne(id: number,accountId: any){
    this.service.getOne(id, this.accountId).subscribe(c=>this.remedio=c);
  }

  back() {
    this.router.navigate(['/remedios']);
  }

}


