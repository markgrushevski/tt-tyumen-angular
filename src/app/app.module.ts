import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicModule } from 'ng-dynamic-component';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { FieldComponent } from './components/field/field.component';
import { FieldEditorComponent } from './components/field-editor/field-editor.component';

@NgModule({
    declarations: [AppComponent, FormComponent, FieldComponent, FieldEditorComponent],
    imports: [BrowserModule, DynamicModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
