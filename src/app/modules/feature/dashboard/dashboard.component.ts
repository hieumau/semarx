import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
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
    ApexAxisChartSeries,
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexPlotOptions,
    ApexResponsive,
    ApexXAxis,
    ApexLegend,
    ApexFill
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    responsive: ApexResponsive[];
    xaxis: ApexXAxis;
    legend: ApexLegend;
    fill: ApexFill;
};

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


    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

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


        this.chartOptions = {
            dataLabels: {
              enabled: false
            },
            series: [
                {
                    name: "PRODUCT A",
                    data: [44, 55, 41, 67, 22, 43, 10, 20, 40, 23, 43, 23, 54, 34, 54, 54, 43, 10, 20, 55, 41, 67]
                },
                {
                    name: "PRODUCT B",
                    data: [13, 23, 20, 8, 13, 27, 32, 20, 34, 21, 54, 67, 22, 43, 10, 20, 55, 41, 67, 22, 43, 10]
                },
                {
                    name: "PRODUCT C",
                    data: [11, 17, 15, 15, 21, 14, 30, 22, 34, 22, 54, 13, 27, 32, 20, 34, 13, 27, 32, 20, 34, 21]
                },
            ],
            chart: {
                type: "bar",
                height: 350,
                stacked: true,
                toolbar: {
                    show: true
                },
                zoom: {
                    enabled: true
                },
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: "bottom",
                            offsetX: -10,
                            offsetY: 0
                        }
                    }
                }
            ],
            plotOptions: {
                bar: {
                    horizontal: false,
                    dataLabels: {

                    },
                    borderRadius: 10,
                },

            },
            xaxis: {
                type: "category",
                categories: [
                    "Round",
                    "Long",
                    "Flat",
                    "Flat",
                    "Red",
                    "Red",
                    "Red",
                    "Yellow",
                    "Yellow",
                    "Yellow",
                    "Green",
                    "Green",
                    "Green",
                    "Green",
                    "Green",
                    "Round",
                    "Round",
                    "Round",
                    "Round",
                    "Round",
                    "Round",
                    "Round",
                ]
            },
            legend: {
                show: false,
                position: "right",
                offsetY: 40
            },
            fill: {
                opacity: 1,
                colors: ['#1433cc', '#7189ff', '#bcc7ff']
            }
        };
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
