import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicModule } from 'ng-dynamic-component';

import { AppComponent } from './app.component';
import { FieldBaseComponent } from './components/field-base/field-base.component';
import { FieldEditorComponent } from './components/field-editor/field-editor.component';
import { FieldValueComponent } from './components/field-value/field-value.component';
import { FieldComponent } from './components/field/field.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
    declarations: [
        AppComponent,
        FormComponent,
        FieldComponent,
        FieldEditorComponent,
        FieldValueComponent,
        FieldBaseComponent
    ],
    imports: [BrowserModule, DynamicModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
