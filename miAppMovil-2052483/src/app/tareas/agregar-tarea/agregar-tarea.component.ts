import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarea } from 'src/Tarea';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.scss'],
})
export class AgregarTareaComponent  implements OnInit {

  newTarea: Tarea = {
    Name: '',
    Month: -1,
    Year: -1,
    Description: '',
  }

  constructor() { }

  ngOnInit() {}
}
