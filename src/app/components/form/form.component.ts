import { Component, Input } from '@angular/core';
import { Field } from '../../models/field';
import { FieldEditorComponent } from '../field-editor/field-editor.component';
import { FieldComponent } from '../field/field.component';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent {
    @Input({ required: true })
    fieldDataList!: readonly Field[];

    @Input({ required: true })
    fieldValues!: Record<string, unknown>;

    showEditor = false;

    get component() {
        return this.showEditor ? FieldEditorComponent : FieldComponent;
    }
}
