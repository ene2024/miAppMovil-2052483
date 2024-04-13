import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  tareas : any = [
    {
      nombre: "arturo",
      ap1: "garza",
      ap2: "rodriguez"
    },
  ];
/*
  addTask(title: string, date: string, description: string): void{
    alert("Im here");
  }*/

  addTask(): void{
    alert("Im here");
  }

}
