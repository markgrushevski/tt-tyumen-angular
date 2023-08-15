import { Component } from '@angular/core';
import { FieldEditorBaseComponent } from '../field-editor-base/field-editor-base.component';

@Component({
    selector: 'app-field-editor-email',
    template: ` <app-field-editor-base [fieldData]="fieldData" [fieldValues]="fieldValues"></app-field-editor-base> `
})
export class FieldEditorEmailComponent extends FieldEditorBaseComponent {}
