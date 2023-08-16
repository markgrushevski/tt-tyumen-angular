import { Component } from '@angular/core';
import { FieldBaseComponent } from '../field-base/field-base.component';

@Component({
    selector: 'app-field-editor-boolean',
    template: ` <input type="checkbox" [(ngModel)]="fieldValues[fieldData.name]" [name]="fieldData.name" /> `
})
export class FieldEditorBooleanComponent extends FieldBaseComponent {}
