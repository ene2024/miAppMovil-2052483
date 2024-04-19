import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarea } from 'src/Tarea';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.scss'],
})
export class AgregarTareaComponent  implements OnInit {

  ////

  @Output() enlistTask = new EventEmitter <Tarea>();

  addTask(task: Tarea){
    this.enlistTask.emit(task);
    alert("Im here: 1");
  }

  ////

  newTarea: Tarea = {
    Name: '',
    Month: 1,
    Year: 1,
    Description: '',
  }

  tareas: Tarea[] = [];

  constructor() { }

  ngOnInit() {}

  logTask(){
    alert(this.newTarea.Month);
  }

}
