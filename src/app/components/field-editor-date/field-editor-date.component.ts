import { Component } from '@angular/core';
import { FieldBaseComponent } from '../field-base/field-base.component';

@Component({
    selector: 'app-field-editor-date',
    template: ` <input type="date" [(ngModel)]="fieldValues[fieldData.name]" [name]="fieldData.name" /> `
})
export class FieldEditorDateComponent extends FieldBaseComponent {}
