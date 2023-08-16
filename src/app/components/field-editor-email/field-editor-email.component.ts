import { Component } from '@angular/core';
import { FieldBaseComponent } from '../field-base/field-base.component';

@Component({
    selector: 'app-field-editor-email',
    template: ` <input type="email" [(ngModel)]="fieldValues[fieldData.name]" [name]="fieldData.name" /> `
})
export class FieldEditorEmailComponent extends FieldBaseComponent {}
