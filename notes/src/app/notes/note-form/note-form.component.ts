import {Component, ElementRef, EventEmitter, Output, Renderer, ViewChild} from '@angular/core';
import {Note} from "../shared/note.model";

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent {

  @Output() formSubmit = new EventEmitter();
  @ViewChild('input') inputElement: ElementRef;
  constructor(private renderer: Renderer) { }

  addNote(content: string) {
    const newNote = new Note(+new Date(), content);
    this.formSubmit.emit(newNote);
    this.clearInputField();
  }

  private clearInputField(): void {
    this.renderer.setElementProperty(
      this.inputElement.nativeElement, 'value', null
    );
  }
}
