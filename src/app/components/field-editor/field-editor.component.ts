import { Component } from '@angular/core';
import { FieldComponent } from '../field/field.component';

@Component({
    selector: 'app-field-editor',
    templateUrl: './field-editor.component.html',
    styleUrls: ['./field-editor.component.css']
})
export class FieldEditorComponent extends FieldComponent {}
