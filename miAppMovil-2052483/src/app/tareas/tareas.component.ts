import { Component, OnInit, ViewChild } from '@angular/core';
import { Tarea } from 'src/Tarea';
import { AgregarTareaComponent } from './agregar-tarea/agregar-tarea.component';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent  implements OnInit {

  @ViewChild(AgregarTareaComponent) child: any;

  agregarTarea(){
    this.tareas.push(this.child.newTarea);
  }

  constructor() { }

  ngOnInit() {}

  tareas : Tarea[] = [  ];

  showDetails(description: string){
    alert(description);
  }
}
