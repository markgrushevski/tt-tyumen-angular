import { Component, Input } from '@angular/core';
import { FieldBaseComponent } from '../field-base/field-base.component';
import { FieldEditorBooleanComponent } from '../field-editor-boolean/field-editor-boolean.component';
import { FieldEditorDateComponent } from '../field-editor-date/field-editor-date.component';
import { FieldEditorEmailComponent } from '../field-editor-email/field-editor-email.component';
import { FieldEditorNumberComponent } from '../field-editor-number/field-editor-number.component';

@Component({
    selector: 'app-field',
    template: `
        <label [for]="fieldData.name">
            <span>{{ fieldData.name }}: </span>
            <ndc-dynamic
                *ngIf="showEditor"
                [ndcDynamicComponent]="component"
                [ndcDynamicInputs]="{ fieldData, fieldValues }"
            ></ndc-dynamic>
            <span *ngIf="!showEditor">{{ fieldValues[fieldData.name] | json }}</span>
        </label>
    `
})
export class FieldComponent extends FieldBaseComponent {
    @Input({ required: true })
    showEditor!: boolean;

    get component() {
        switch (this.fieldData.type) {
            case 'boolean':
                return FieldEditorBooleanComponent;
            case 'date':
                return FieldEditorDateComponent;
            case 'email':
                return FieldEditorEmailComponent;
            case 'number':
                return FieldEditorNumberComponent;
        }
    }
}
