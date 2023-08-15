import { Component, Input } from '@angular/core';
import { Field } from '../../models/field';

@Component({
    selector: 'app-form',
    template: `
        <form>
            <fieldset>
                <legend>Field group</legend>
                <app-field
                    *ngFor="let fieldData of fieldDataList"
                    [fieldData]="fieldData"
                    [fieldValues]="fieldValues"
                ></app-field>
            </fieldset>
        </form>
    `,
    styleUrls: ['./form.component.css']
})
export class FormComponent {
    @Input({ required: true })
    fieldDataList!: Readonly<Field[]>;

    @Input({ required: true })
    fieldValues!: Record<string, unknown>;
}
