import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicModule } from 'ng-dynamic-component';

import { AppComponent } from './app.component';
import { FieldBaseComponent } from './components/field-base/field-base.component';
import { FieldEditorBooleanComponent } from './components/field-editor-boolean/field-editor-boolean.component';
import { FieldEditorDateComponent } from './components/field-editor-date/field-editor-date.component';
import { FieldEditorEmailComponent } from './components/field-editor-email/field-editor-email.component';
import { FieldEditorNumberComponent } from './components/field-editor-number/field-editor-number.component';
import { FieldComponent } from './components/field/field.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
    declarations: [
        AppComponent,
        FormComponent,
        FieldComponent,
        FieldBaseComponent,
        FieldEditorEmailComponent,
        FieldEditorNumberComponent,
        FieldEditorDateComponent,
        FieldEditorBooleanComponent
    ],
    imports: [BrowserModule, DynamicModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
