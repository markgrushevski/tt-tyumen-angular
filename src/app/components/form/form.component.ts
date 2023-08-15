import { Component, Input } from '@angular/core';
import { Field } from '../../models/field';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent {
    @Input({ required: true })
    fieldDataList!: Readonly<Field[]>;

    @Input({ required: true })
    fieldValues!: Record<string, unknown>;
}
