import { Component } from '@angular/core';
import { FieldBaseComponent } from '../../components/field-base/field-base.component';
import { FieldEditorComponent } from '../field-editor/field-editor.component';
import { FieldValueComponent } from '../field-value/field-value.component';

@Component({
    selector: 'app-field',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.css']
})
export class FieldComponent extends FieldBaseComponent {
    showEditor = false;

    get component() {
        return this.showEditor ? FieldEditorComponent : FieldValueComponent;
    }
}
