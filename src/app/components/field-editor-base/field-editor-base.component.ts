import { Component } from '@angular/core';
import { FieldBaseComponent } from 'src/app/components/field-base/field-base.component';

@Component({
    selector: 'app-field-editor-base',
    template: `<input [(ngModel)]="fieldValues[fieldData.name]" [type]="fieldData.type" [name]="fieldData.name" />`
})
export class FieldEditorBaseComponent extends FieldBaseComponent {}
