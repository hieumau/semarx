import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {fuseAnimations} from "../../../../../@fuse/animations";
import {FuseConfirmationService} from "../../../../../@fuse/services/confirmation";
import {EventModal} from "../../../../shared/model/event.model";
import {FeatureGroup} from "../../../../shared/model/feature-group.model";
import {EventService} from "../../../../shared/service/event.service";
import {FeatureGroupService} from "../../../../shared/service/feature-group.service";
import {EventEditDialogComponent} from "../../events/event-edit-dialog/event-edit-dialog.component";
import {FeatureGroupEditDialogComponent} from "../feature-group-edit-dialog/feature-group-edit-dialog.component";

@Component({
    selector: 'app-feature-group-list',
    templateUrl: './feature-group-list.component.html',
    styleUrls: ['./feature-group-list.component.scss'],
    styles: [
        /* language=SCSS */
        `
            .event-grid {
                grid-template-columns: 35px 25% 25% auto 100px;
            }
        `
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: fuseAnimations
})
export class FeatureGroupListComponent implements OnInit, OnDestroy {

    private _unsubscribeAll: Subject<any> = new Subject<any>();
    searchInputControl: FormControl = new FormControl();
    selectedObjectForm: FormGroup;
    flashMessage: 'success' | 'error' | null = null;

    objectList: FeatureGroup[]
    isLoading = false


    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _fuseConfirmationService: FuseConfirmationService,
        private matDialog: MatDialog,
        private _formBuilder: FormBuilder,
        private featureGroupService: FeatureGroupService
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
            this.objectList = result
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

    /**
     * Create
     */
    create(): void {
        // // Create the product
        // this._inventoryService.createProduct().subscribe((newProduct) => {
        //
        //     // Go to new product
        //     this.selectedObject = newProduct;
        //
        //     // Fill the form
        //     this.selectedProductForm.patchValue(newProduct);
        //
        //     // Mark for check
        //     this._changeDetectorRef.markForCheck();
        // });
    }

    /**
     * Show flash message
     */
    showFlashMessage(type: 'success' | 'error'): void {
        // Show the message
        this.flashMessage = type;

        // Mark for check
        this._changeDetectorRef.markForCheck();

        // Hide it after 3 seconds
        setTimeout(() => {

            this.flashMessage = null;

            // Mark for check
            this._changeDetectorRef.markForCheck();
        }, 1000);
    }


    /**
     * Update the selected object using the form data
     */
    updateSelectedObject(): void {
        // this.selectedObjectForm.disable()
        // // Get the object
        // const object = this.selectedObjectForm.getRawValue();
        //
        // // Update the object on the server
        // this.featureGroupService.update(object)
        //     .pipe()
        //     .subscribe((result) => {
        //         var index = this.objectList.findIndex(o => o.id === result.id);
        //         this.objectList[index] = result
        //         // this.selectedObject = result
        //         // Show a success message
        //         this.showFlashMessage('success');
        //     }, error => {
        //         this.showFlashMessage('error');
        //     })
        //     .add(() => {
        //         this.selectedObjectForm.enable()
        //     })
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }


    openEditDialog(object: FeatureGroup) {
        this.matDialog.open(FeatureGroupEditDialogComponent, {
            data: object,
            width: '500px'
        })
    }
}
