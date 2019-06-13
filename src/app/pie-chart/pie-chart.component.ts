import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pie-chart',
    templateUrl: './pie-chart.component.html',
    styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
    data: any;

    constructor() {
        // this.data = {
        //     labels: ['Jan', 'Feb', 'March'],
        //     datasets: [
        //         {
        //             data: [305, 51, 111],
        //             hoverBackgroundColor: [
        //                 '#FF6371',
        //                 '#36A2EB',
        //                 '#FFCE45'
        //             ],
        //             backgroundColor: [
        //                 '#FF6371',
        //                 '#36A2EB',
        //                 '#FFCE45'
        //             ]
        //         }]
        // };
    }

    public pieChartLabels: string[] = ['Chrome', 'Safari', 'Firefox', 'Internet Explorer', 'Other'];
    public pieChartData: number[] = [40, 20, 20, 10, 10];
    public pieChartType = 'pie';

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

    ngOnInit() {
    }

}
