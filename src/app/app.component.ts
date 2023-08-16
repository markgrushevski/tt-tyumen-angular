import { Component } from '@angular/core';
import { Field } from './models/field';

@Component({
    selector: 'app-root',
    template: ` <app-form [fieldDataList]="fieldDataList" [fieldValues]="fieldValues"></app-form> `
})
export class AppComponent {
    fieldDataList: Readonly<Field[]> = [
        { name: 'Boolean', type: 'boolean' },
        { name: 'Date', type: 'date' },
        { name: 'Email', type: 'email' },
        { name: 'Number', type: 'number' }
    ];

    fieldValues: Record<string, unknown> = {
        Boolean: true,
        Date: '2020-07-07',
        Email: 'example@hotmail.com',
        Number: 9000
    };
}
