import { Component, Input } from '@angular/core';
import { Field } from '../../models/field';

@Component({
    selector: 'app-field-base',
    template: ``
})
export class FieldBaseComponent {
    @Input({ required: true })
    fieldData!: Readonly<Field>;

    @Input({ required: true })
    fieldValues!: Record<string, unknown>;
}
