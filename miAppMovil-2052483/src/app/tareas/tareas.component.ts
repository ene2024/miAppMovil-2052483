import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from 'src/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent  implements OnInit {

  @Input() task: Tarea = {
    Name: '',
    Month: 1,
    Year: 1,
    Description: '',
  } //EL ENLACE ES CORRECTO, FALTA PODER HACER PUSH DE ESTE DATO RECIBIDO

  constructor() { }

  ngOnInit() {}

  addNewTask(){
    this.tareas.push(this.task);
  }

  tareas : Tarea[] = [
    {
      Name: 'Hola',
      Month: 1,
      Year: 1,
      Description: 'Arturo'
    }
  ]

}
