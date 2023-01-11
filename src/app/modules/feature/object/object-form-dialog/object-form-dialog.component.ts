import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Feature} from "../../../../shared/model/feature.model";
import {Object} from "../../../../shared/model/object.model";
import {ObjectService} from "../../../../shared/service/object.service";

@Component({
    selector: 'app-object-form-dialog',
    templateUrl: './object-form-dialog.component.html',
    styleUrls: ['./object-form-dialog.component.scss']
})
export class ObjectFormDialogComponent implements OnInit {
    form: FormGroup

    isCreateMode = true
    categoryList: any[] = [];
    featureList: any[] = [];

    constructor(
        public dialogRef: MatDialogRef<ObjectFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Object,
        private formBuilder: FormBuilder,
        private objectService: ObjectService
    ) {
        if (data) {
            this.isCreateMode = false
            this.form = this.formBuilder.group({
                'name': this.data.name,
                'category': this.data.category,
                'dimension': this.data.dimension,
                'feature': this.data.feature,
            })
        } else {
            this.isCreateMode = true
            this.form = this.formBuilder.group({
                'name': '',
                'category': '',
                'dimension': '',
                'feature': '',
            })
        }

        objectService.getList().subscribe(value => {
            this.categoryList = Array.from(new Set(value.map(o => o.category)));
            this.featureList = Array.from(new Set(value.map(o => o.feature)));
        })

    }


    ngOnInit(): void {
    }

}
