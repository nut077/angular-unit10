import { Injectable } from '@angular/core';
import {Note} from "./note.model";
import {Subject} from "rxjs/Subject";

@Injectable()
export class NoteService {

  private notes: Note[] = [];
  private notesStream = new Subject<Note[]>();

  addNote(note: Note): void {
    this.notes = [...this.notes, note];
    this.broadcast();
  }

  deleteNote(id: number): void {
    this.notes = this.notes.filter(note => note.id !== id);
    this.broadcast();
  }

  getNote(): Subject<Note[]> {
    return this.notesStream;
  }

  private broadcast(): void {
    this.notesStream.next(this.notes);
  }

}
