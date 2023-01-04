import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FeatureGroup} from "../../../../shared/model/feature-group.model";
import {Feature} from "../../../../shared/model/feature.model";

@Component({
    selector: 'app-feature-edit-dialog',
    templateUrl: './feature-edit-dialog.component.html',
    styleUrls: ['./feature-edit-dialog.component.scss']
})
export class FeatureEditDialogComponent implements OnInit {
    form: FormGroup

    constructor(
        public dialogRef: MatDialogRef<FeatureEditDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Feature,
        private formBuilder: FormBuilder
    ) {
        this.form = this.formBuilder.group({
            'groupName': this.data.groupName,
            'groupType': this.data.groupType,
            'features': this.data.features,
            'description': this.data.description,
        })
    }

    ngOnInit(): void {
    }

}
