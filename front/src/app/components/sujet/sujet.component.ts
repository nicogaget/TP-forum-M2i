import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Sujet } from 'src/app/models/sujet.entity';
import { SujetService } from 'src/app/_services/sujet.service';

@Component({
  selector: 'app-sujet',
  templateUrl: './sujet.component.html',
  styleUrls: ['./sujet.component.scss'],
})
export class SujetComponent implements OnInit {
  @Input() sujet!: Sujet;
  nbrMessage!: number;
  @Input() showMessage!: boolean;
  sujetId!: string;

  constructor(private service: SujetService) {}
  like() {
    this.service.like(this.sujet.id).subscribe((response) => {
      console.log("j'aime");
    });
    this.sujet.likes += 1;
  }
  unlike() {
    this.service.unlike(this.sujet.id).subscribe((response) => {
      console.log("j'aime pas");
      this.sujet.likes -= 1;
    });
  }

  ngOnInit(): void {}
}
