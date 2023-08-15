import { Component } from '@angular/core';
import { Field } from './models/field';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    fieldDataList: Readonly<Field[]> = [
        { name: 'Email', type: 'email' },
        { name: 'Number', type: 'number' },
        { name: 'Password', type: 'password' },
        { name: 'Text', type: 'text' }
    ];

    fieldValues: Record<string, unknown> = {
        Email: 'example@hotmail.com',
        Number: '534',
        Password: 'example',
        Text: 'some text'
    };
}
