import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Note} from "../shared/note.model";

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent {

  @Input() notes: Note;
  @Output() noteDelete = new EventEmitter<number>();

  deleteNote(id: number) {
    this.noteDelete.emit(id);
  }

}
