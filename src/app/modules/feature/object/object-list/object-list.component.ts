import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {fuseAnimations} from "../../../../../@fuse/animations";
import {FuseConfirmationService} from "../../../../../@fuse/services/confirmation";
import {Feature} from "../../../../shared/model/feature.model";
import {Object} from "../../../../shared/model/object.model";
import {FeatureService} from "../../../../shared/service/feature.service";
import {ObjectService} from "../../../../shared/service/object.service";
import {FeatureEditDialogComponent} from "../../feature/feature-edit-dialog/feature-edit-dialog.component";
import {ObjectFormDialogComponent} from "../object-form-dialog/object-form-dialog.component";

@Component({
    selector: 'app-object-list',
    templateUrl: './object-list.component.html',
    styleUrls: ['./object-list.component.scss'],
    styles: [
        /* language=SCSS */
        `
            .object-grid {
                grid-template-columns: 20% 20% 20% auto 100px;
            }
        `
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: fuseAnimations
})
export class ObjectListComponent implements OnInit {

    private _unsubscribeAll: Subject<any> = new Subject<any>();
    searchInputControl: FormControl = new FormControl();
    selectedObjectForm: FormGroup;
    flashMessage: 'success' | 'error' | null = null;

    objectList: Object[]
    isLoading = false


    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _fuseConfirmationService: FuseConfirmationService,
        private matDialog: MatDialog,
        private _formBuilder: FormBuilder,
        private objectService: ObjectService
    ) {
        this.isLoading = true

        // Create the selected product form
        this.selectedObjectForm = this._formBuilder.group({
            id: [''],
            currencyId: [''],
            address: [''],
            isActive: [false]
        });

        this.objectService.getList().pipe(
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
        // this.objectService.update(object)
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


    openEditDialog(object?: Object) {
        this.matDialog.open(ObjectFormDialogComponent, {
            data: object,
            width: '500px'
        })
    }

    isShowName(index: number): boolean {
        if (index == 0) {
            return true
        } else {
            return this.objectList[index].name != this.objectList[index - 1].name
        }
    }
}
