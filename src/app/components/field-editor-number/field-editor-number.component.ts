import { Component } from '@angular/core';
import { FieldEditorBaseComponent } from '../field-editor-base/field-editor-base.component';

@Component({
    selector: 'app-field-editor-number',
    template: ` <app-field-editor-base [fieldData]="fieldData" [fieldValues]="fieldValues"></app-field-editor-base>`
})
export class FieldEditorNumberComponent extends FieldEditorBaseComponent {}
