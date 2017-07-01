import { Component } from '@angular/core';
import {Note} from "./shared/note.model";
import {NoteService} from "./shared/note.service";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  providers: [
    NoteService
  ]
})
export class NotesComponent {

  notes: Subject<Note[]>

  constructor(private noteService: NoteService) {
    this.notes = noteService.getNote();
  }

  addNote(note: Note): void {
    this.noteService.addNote(note);
  }

  deleteNote(id: number): void {
    this.noteService.deleteNote(id);
  }

}
