import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Remedios } from 'src/app/remedios';
import { RemediosService } from 'src/app/remedios.service';

@Component({
  selector: 'app-remedio-one',
  templateUrl: './remedio-one.component.html',
  styleUrls: ['./remedio-one.component.css']
})
export class RemedioOneComponent implements OnInit {

  id!: number;
  remedio: Remedios = new Remedios();
  faArrowCircleLeft=faArrowCircleLeft

  constructor(
    private service: RemediosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getOne(this.id)
  }

  getOne(id: number){
    this.service.getOne(id).subscribe(c=>this.remedio=c)
  }

  back() {
    this.router.navigate(['/remedio'])
  }

}


