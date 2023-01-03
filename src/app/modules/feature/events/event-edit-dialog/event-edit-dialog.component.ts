import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {EventModal} from "../../../../shared/model/event.model";

@Component({
    selector: 'app-event-edit-dialog',
    templateUrl: './event-edit-dialog.component.html',
    styleUrls: ['./event-edit-dialog.component.scss']
})
export class EventEditDialogComponent implements OnInit {

    form: FormGroup

    constructor(
        public dialogRef: MatDialogRef<EventEditDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: EventModal,
        private formBuilder: FormBuilder
    ) {
        this.form = this.formBuilder.group({
            'cycle': this.data.cycle,
            'event': this.data.event,
            'ts': this.data.ts,
        })
    }

    ngOnInit(): void {
    }

}
