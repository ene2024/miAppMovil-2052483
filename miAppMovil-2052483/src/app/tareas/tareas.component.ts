import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from 'src/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  enlistNewTask(tarea: Tarea){
    this.tareas.push(tarea);
  }

  @Input() task: Tarea = {
    Name: '',
    Month: 1,
    Year: 1,
    Description: '',
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
