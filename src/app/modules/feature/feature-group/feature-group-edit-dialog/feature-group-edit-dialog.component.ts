import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {EventModal} from "../../../../shared/model/event.model";
import {FeatureGroup} from "../../../../shared/model/feature-group.model";

@Component({
    selector: 'app-feature-group-edit-dialog',
    templateUrl: './feature-group-edit-dialog.component.html',
    styleUrls: ['./feature-group-edit-dialog.component.scss']
})
export class FeatureGroupEditDialogComponent implements OnInit {

    form: FormGroup

    constructor(
        public dialogRef: MatDialogRef<FeatureGroupEditDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: FeatureGroup,
        private formBuilder: FormBuilder
    ) {
        this.form = this.formBuilder.group({
            'id': this.data.id,
            'name': this.data.name,
            'type': this.data.type,
        })
    }

    ngOnInit(): void {
    }

}
