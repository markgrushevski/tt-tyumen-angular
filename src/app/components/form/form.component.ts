import { Component, Input } from '@angular/core';
import { Field } from '../../models/field';
import { FieldValues } from '../../models/fieldValues';

@Component({
    selector: 'app-form',
    template: `
        <form>
            <fieldset>
                <legend>Field group</legend>
                <button (click)="showEditor = !showEditor">{{ showEditor ? 'End editing' : 'Edit fields' }}</button>
                <app-field
                    *ngFor="let fieldData of fieldDataList"
                    [fieldData]="fieldData"
                    [fieldValues]="fieldValues"
                    [showEditor]="showEditor"
                ></app-field>
            </fieldset>
        </form>
    `
})
export class FormComponent {
    @Input({ required: true })
    fieldDataList!: Readonly<Field[]>;

    @Input({ required: true })
    fieldValues!: FieldValues;

    showEditor: boolean = false;
}
