import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Note} from "../shared/note.model";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {

  @Input() note: Note;
  @Output() noteDelete = new EventEmitter<number>();
  constructor() { }

  deleteNote() {
    this.noteDelete.emit(this.note.id);
  }

}
