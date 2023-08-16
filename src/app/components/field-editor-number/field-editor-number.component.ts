import { Component } from '@angular/core';
import { FieldBaseComponent } from '../field-base/field-base.component';

@Component({
    selector: 'app-field-editor-number',
    template: ` <input type="number" [(ngModel)]="fieldValues[fieldData.name]" [name]="fieldData.name" /> `
})
export class FieldEditorNumberComponent extends FieldBaseComponent {}
