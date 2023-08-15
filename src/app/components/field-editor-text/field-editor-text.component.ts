import { Component } from '@angular/core';
import { FieldEditorBaseComponent } from '../field-editor-base/field-editor-base.component';

@Component({
    selector: 'app-field-editor-text',
    template: ` <app-field-editor-base [fieldData]="fieldData" [fieldValues]="fieldValues"></app-field-editor-base> `
})
export class FieldEditorTextComponent extends FieldEditorBaseComponent {}
