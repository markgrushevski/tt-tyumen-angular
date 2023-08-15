import { Component } from '@angular/core';
import { Field } from './models/field';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    fieldDataList: readonly Field[] = [
        { name: 'Email', type: 'email' },
        { name: 'Password', type: 'password' },
        { name: 'Number', type: 'number' },
        { name: 'Text', type: 'text' }
    ];

    fieldValues: Record<string, unknown> = {
        Email: 'example@hotmail.com',
        Password: 'example',
        Number: 534,
        Text: 'some text'
    };
}
