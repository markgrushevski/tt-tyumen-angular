import { Component } from '@angular/core';
import { FieldEditorEmailComponent } from '../field-editor-email/field-editor-email.component';
import { FieldEditorNumberComponent } from '../field-editor-number/field-editor-number.component';
import { FieldEditorPasswordComponent } from '../field-editor-password/field-editor-password.component';
import { FieldEditorTextComponent } from '../field-editor-text/field-editor-text.component';
import { FieldBaseComponent } from '../field-base/field-base.component';

@Component({
    selector: 'app-field',
    template: `
        <label [for]="fieldData.name">
            <button (click)="showEditor = !showEditor">{{ showEditor ? 'End editing' : 'Edit field' }}</button>
            <span>&nbsp;{{ fieldData.name }}:&nbsp;</span>
            <ndc-dynamic
                *ngIf="showEditor"
                [ndcDynamicComponent]="component"
                [ndcDynamicInputs]="{ fieldData, fieldValues }"
            ></ndc-dynamic>
            <span *ngIf="!showEditor">{{ fieldValues[fieldData.name] }}</span>
        </label>
    `
})
export class FieldComponent extends FieldBaseComponent {
    showEditor = false;

    get component() {
        switch (this.fieldData.type) {
            case 'email':
                return FieldEditorEmailComponent;
            case 'number':
                return FieldEditorNumberComponent;
            case 'password':
                return FieldEditorPasswordComponent;
            case 'text':
                return FieldEditorTextComponent;
        }
    }
}
