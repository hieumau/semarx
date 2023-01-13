import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {FuseConfirmationService} from "../../../../@fuse/services/confirmation";
import {EventModal} from "../../../shared/model/event.model";
import {FeatureGroup, GroupType} from "../../../shared/model/feature-group.model";
import {Feature} from "../../../shared/model/feature.model";
import {Object} from "../../../shared/model/object.model";
import {EventService} from "../../../shared/service/event.service";
import {FeatureGroupService} from "../../../shared/service/feature-group.service";
import {FeatureService} from "../../../shared/service/feature.service";
import {ObjectService} from "../../../shared/service/object.service";
import {
    FeatureGroupEditDialogComponent
} from "../feature-group/feature-group-edit-dialog/feature-group-edit-dialog.component";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    private _unsubscribeAll: Subject<any> = new Subject<any>();
    searchInputControl: FormControl = new FormControl();
    selectedObjectForm: FormGroup;
    flashMessage: 'success' | 'error' | null = null;

    objectList: Object[]
    objectNameList: string[] = ['Banana', 'Apple', 'Rabbit', 'Cat']
    objectVerticalFeatures: Feature[] = []
    objectHorizonFeatures: Feature[] = []

    isLoading = false

    groupList: FeatureGroup[]
    featureList: Feature[]
    eventList: EventModal[]

    horizonGroups: FeatureGroup[] = []
    verticalGroups: FeatureGroup[] = []

    GROUP_TYPES = GroupType

    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _fuseConfirmationService: FuseConfirmationService,
        private matDialog: MatDialog,
        private _formBuilder: FormBuilder,
        private featureGroupService: FeatureGroupService,
        private featureService: FeatureService,
        private eventService: EventService,
        private objectService: ObjectService,
    ) {
        this.isLoading = true

        // Create the selected product form
        this.selectedObjectForm = this._formBuilder.group({
            id: [''],
            currencyId: [''],
            address: [''],
            isActive: [false]
        });

        this.featureGroupService.getList().pipe(
            takeUntil(this._unsubscribeAll)
        ).pipe().subscribe(result => {
            this.groupList = result
            this._changeDetectorRef.markForCheck()
            this.isLoading = false

            this.featureService.getList().pipe(
                takeUntil(this._unsubscribeAll)
            ).pipe().subscribe(result => {
                this.featureList = result
                this._changeDetectorRef.markForCheck()
                this.isLoading = false

                this.mappingData()
            })
        })


        this.eventService.getList().pipe(
            takeUntil(this._unsubscribeAll)
        ).pipe().subscribe(result => {
            this.eventList = result
            this._changeDetectorRef.markForCheck()
            this.isLoading = false
        })


        this.objectService.getList().pipe(
            takeUntil(this._unsubscribeAll)
        ).pipe().subscribe(result => {
            this.objectList = result
            this.objectVerticalFeatures = []
            this.objectVerticalFeatures.push(this.featureList[0])
            this.objectVerticalFeatures.push(this.featureList[3])
            this.objectVerticalFeatures.push(this.featureList[6])
            this.objectHorizonFeatures.push(this.featureList[10])
            this.objectHorizonFeatures.push(this.featureList[12])
            this.objectHorizonFeatures.push(this.featureList[14])
            this._changeDetectorRef.markForCheck()
            this.isLoading = false
        })

    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }


    private mappingData() {
        this.groupList.forEach(group => {
            group.featureList = this.featureList.filter(f => f.groupId == group.id)
        })

        // remove group not have feature
        this.groupList = this.groupList.filter(g => g.featureList.length > 0)

        this.horizonGroups = []
        this.verticalGroups = []

        this.horizonGroups.push(this.groupList[0])
        this.horizonGroups.push(this.groupList[1])
        this.horizonGroups.push(this.groupList[2])
        this.verticalGroups.push(this.groupList[3])
        this.verticalGroups.push(this.groupList[4])
        this.verticalGroups.push(this.groupList[5])
    }

    getRandomNumber(): number {
        return Math.round(Math.random() * 1000) / 1000
    }
}
