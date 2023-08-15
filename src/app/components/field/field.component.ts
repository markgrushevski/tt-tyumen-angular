import { Component } from '@angular/core';
import { FieldEditorEmailComponent } from 'src/app/components/field-editor-email/field-editor-email.component';
import { FieldEditorNumberComponent } from 'src/app/components/field-editor-number/field-editor-number.component';
import { FieldEditorPasswordComponent } from 'src/app/components/field-editor-password/field-editor-password.component';
import { FieldEditorTextComponent } from 'src/app/components/field-editor-text/field-editor-text.component';
import { FieldBaseComponent } from '../../components/field-base/field-base.component';

@Component({
    selector: 'app-field',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.css']
})
export class FieldComponent extends FieldBaseComponent {
    showEditor = false;

    get component() {
        switch (this.fieldData.type) {
            case 'email':
                return FieldEditorEmailComponent;
            case 'number':
                return FieldEditorNumberComponent;
            case 'password':
                return FieldEditorPasswordComponent;
            case 'text':
                return FieldEditorTextComponent;
        }
    }
}
