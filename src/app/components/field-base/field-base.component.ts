import { Component, Input } from '@angular/core';
import { Field } from '../../models/field';
import { FieldValues } from '../../models/fieldValues';

@Component({
    selector: 'app-field-base',
    template: ``
})
export class FieldBaseComponent {
    @Input({ required: true })
    fieldData!: Readonly<Field>;

    @Input({ required: true })
    fieldValues!: FieldValues;
}
