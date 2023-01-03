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
import {EventService} from "../../../../shared/service/event.service";
import {EventEditDialogComponent} from "../event-edit-dialog/event-edit-dialog.component";

@Component({
    selector: 'app-events-list',
    templateUrl: './events-list.component.html',
    styleUrls: ['./events-list.component.scss'],
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
export class EventsListComponent implements OnInit, OnDestroy {

    private _unsubscribeAll: Subject<any> = new Subject<any>();
    searchInputControl: FormControl = new FormControl();
    selectedObjectForm: FormGroup;
    flashMessage: 'success' | 'error' | null = null;

    objectList: EventModal[]
    isLoading = false
    selectedObject: EventModal;


    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _fuseConfirmationService: FuseConfirmationService,
        private matDialog: MatDialog,
        private _formBuilder: FormBuilder,
        private eventService: EventService
    ) {

    }

    ngOnInit(): void {
        this.isLoading = true

        // Create the selected product form
        this.selectedObjectForm = this._formBuilder.group({
            id: [''],
            currencyId: [''],
            address: [''],
            isActive: [false]
        });

        this.eventService.getList().pipe(
            takeUntil(this._unsubscribeAll)
        ).pipe().subscribe(result => {
            this.objectList = result
            this._changeDetectorRef.markForCheck()
            this.isLoading = false
        })
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
        // this.eventService.update(object)
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


    openEditDialog(object: EventModal) {
        this.matDialog.open(EventEditDialogComponent, {
            data: object,
            width: '500px'
        })
    }
}
