import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicModule } from 'ng-dynamic-component';

import { AppComponent } from './app.component';
import { FieldBaseComponent } from './components/field-base/field-base.component';
import { FieldEditorBaseComponent } from './components/field-editor-base/field-editor-base.component';
import { FieldEditorEmailComponent } from './components/field-editor-email/field-editor-email.component';
import { FieldEditorNumberComponent } from './components/field-editor-number/field-editor-number.component';
import { FieldEditorPasswordComponent } from './components/field-editor-password/field-editor-password.component';
import { FieldEditorTextComponent } from './components/field-editor-text/field-editor-text.component';
import { FieldComponent } from './components/field/field.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
    declarations: [
        AppComponent,
        FormComponent,
        FieldComponent,
        FieldBaseComponent,
        FieldEditorEmailComponent,
        FieldEditorPasswordComponent,
        FieldEditorNumberComponent,
        FieldEditorTextComponent,
        FieldEditorBaseComponent
    ],
    imports: [BrowserModule, DynamicModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
