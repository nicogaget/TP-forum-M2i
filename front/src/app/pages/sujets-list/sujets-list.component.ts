import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message.entity';
import { Sujet } from 'src/app/models/sujet.entity';
import { SujetService } from 'src/app/_services/sujet.service';

@Component({
  selector: 'app-sujets-list',
  templateUrl: './sujets-list.component.html',
  styleUrls: ['./sujets-list.component.scss'],
})
export class SujetsListComponent implements OnInit {
  // sujets: Sujet[] = [
  //   {
  //     id: '1',
  //     title: 'videos',
  //     likes: 5,
  //     messages: [
  //       {
  //         id: '1',
  //         content: 'message 1',
  //         likes: 5,
  //         createdAt: new Date(),
  //         updatedAt: new Date(),
  //       },
  //       {
  //         id: '2',
  //         content: 'message 2',
  //         likes: 5,
  //         createdAt: new Date(),
  //         updatedAt: new Date(),
  //       },
  //       {
  //         id: '3',
  //         content: 'message 3',
  //         likes: 5,
  //         createdAt: new Date(),
  //         updatedAt: new Date(),
  //       },
  //     ],
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: '2',
  //     title: 'jeux',
  //     likes: 2,
  //     messages: [
  //       {
  //         id: '1',
  //         content: 'message 1',
  //         likes: 5,
  //         createdAt: new Date(),
  //         updatedAt: new Date(),
  //       },
  //       {
  //         id: '2',
  //         content: 'message 2',
  //         likes: 5,
  //         createdAt: new Date(),
  //         updatedAt: new Date(),
  //       },
  //       {
  //         id: '3',
  //         content: 'message 3',
  //         likes: 5,
  //         createdAt: new Date(),
  //         updatedAt: new Date(),
  //       },
  //     ],
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: '3',
  //     title: 'Bières',
  //     likes: 0,
  //     messages: [
  //       {
  //         id: '1',
  //         content: 'message 1',
  //         likes: 5,
  //         createdAt: new Date(),
  //         updatedAt: new Date(),
  //       },
  //     ],
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: '4',
  //     title: 'vins',
  //     likes: 10,
  //     messages: [
  //       {
  //         id: '1',
  //         content: 'message 1',
  //         likes: 5,
  //         createdAt: new Date(),
  //         updatedAt: new Date(),
  //       },
  //       {
  //         id: '2',
  //         content: 'message 2',
  //         likes: 5,
  //         createdAt: new Date(),
  //         updatedAt: new Date(),
  //       },
  //     ],
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  // ];
  sujets!: Sujet[];
  showMessage: boolean = false;
  constructor(private service: SujetService) {}

  initSujets() {
    this.service.findAll().subscribe((response) => {
      this.sujets = response;
    });
  }

  ngOnInit(): void {
    this.initSujets();
  }
}
