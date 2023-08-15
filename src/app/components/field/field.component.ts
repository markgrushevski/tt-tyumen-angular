import { Component, Input } from '@angular/core';
import { Field } from '../../models/field';

@Component({
    selector: 'app-field',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.css']
})
export class FieldComponent {
    @Input({ required: true })
    fieldData!: Field;

    @Input({ required: true })
    fieldValues!: Record<string, unknown>;
}
