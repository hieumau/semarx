import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-table-cell-progress-background',
    templateUrl: './table-cell-progress-background.component.html',
    styleUrls: ['./table-cell-progress-background.component.scss']
})
export class TableCellProgressBackgroundComponent implements OnInit {

    @Input()
    number: number

    percentage: string

    constructor() {

    }

    ngOnInit(): void {
        this.percentage = (this.number * 100) + '%'
    }

}
