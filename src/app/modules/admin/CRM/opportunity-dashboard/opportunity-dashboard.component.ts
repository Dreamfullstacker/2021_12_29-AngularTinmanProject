import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { KoneQTUtils } from 'app/core/koneqt.utils';
import moment from 'moment';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexOptions,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexLegend,
  ApexFill,
  ApexNonAxisChartSeries
} from 'ng-apexcharts';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { OpportunityDashboardService } from './opportunity-dashboard.service';
import { opportunityStatus, salesFunnelStatus, statusColor } from 'app/core/config/opportunity.config';
import { Months } from 'app/core/config/app.config';
import { groupBy } from 'lodash-es';


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

export type PieChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};


@Component({
  selector: 'app-opportunity-dashboard',
  templateUrl: './opportunity-dashboard.component.html',
  styleUrls: ['./opportunity-dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OpportunityDashboardComponent implements OnInit, OnDestroy {

  totalOpportunity: any[] = [];
  totalCustomer: any[] = [];
  totalRevenue: number = 0;
  activeOpportunity: any[] = [];
  activeRevenue: number = 0;
  revenueByMonth: number[] = new Array<number>(12).fill(0);
  opportunityByStage: Record<string, any[]> = {};
  opportunityCountry: Record<string, number> = {};
  isLoading$: Observable<boolean>;
  chartRevenueByMonth: ApexOptions = {};
  chartOpportunityByStatus: Partial<ChartOptions> = {};
  chartSalesFunnel: Partial<ChartOptions> = {};
  chartCustomerCountry: Partial<PieChartOptions> = {};
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _opportunityService: OpportunityDashboardService,
    private _koneqtUtils: KoneQTUtils
  ) { }

  ngOnInit(): void {
    this._opportunityService.opportunity$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((res: any) => {
        console.log(res);
        // Update the cabinet
        this.totalOpportunity = res.Data;
        this.initOpportunity();
        this._prepareChartData();
      });
    this.isLoading$ = this._opportunityService.isLoading$;
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void
  {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  /**
   * Initialize opportunity data
   */
  initOpportunity(): void {
    this.totalOpportunity = this.totalOpportunity.map(opportunity => (
      {
        ...opportunity,
        dateMonth: new Date(this._koneqtUtils.convertToNormalDate(opportunity.EstimateSaleDate)).getMonth()
      })
    );
    console.log(this.totalOpportunity);
    for (const opportunity of this.totalOpportunity) {
      // Make customer list
      if(this.totalCustomer.findIndex(cus => cus.org === opportunity.Organisation) === -1) {
        this.totalCustomer.push({
          org: opportunity.Organisation,
          country: opportunity.Country
        });
      }
      // Total Revenue
      if(Number(opportunity.OpportunityValue)) {
        this.revenueByMonth[opportunity.dateMonth] += Number(opportunity.OpportunityValue);
      }
      // Active Opportunity
      if(['won', 'lost', 'waiting'].indexOf(opportunity.Status) !== -1) {
        this.activeOpportunity.push(opportunity);
      }
      if(!Object.prototype.hasOwnProperty.call(this.opportunityByStage, opportunity.Status)) {
        this.opportunityByStage[opportunity.Status] = [];
      }
      this.opportunityByStage[opportunity.Status].push(opportunity);
    }
    this.totalRevenue = this.revenueByMonth.reduce((sum, revenue) => sum + revenue, 0);
    this.activeRevenue = this.activeOpportunity.reduce((sum, opportunity) => sum + Number(opportunity.OpportunityValue), 0);
  }

  getWinRate(): number {
    return Math.round(this.activeOpportunity.length / this.totalOpportunity.length * 100);
  }

  getChartSeriesByStage(): ApexAxisChartSeries {
    const chartSeries = [];
    for (const status of opportunityStatus) {
      const opByStageMonth = groupBy(this.opportunityByStage[status], 'dateMonth');
      const data = [];
      for(let i = 0; i < 12;i ++) {
        data.push(opByStageMonth[i]?.length??0);
      }
      chartSeries.push({
        name: status,
        data: data,
        color: statusColor[status]
      });
    }
    return chartSeries;
  }

  private _prepareChartData(): void {
    this.chartRevenueByMonth = {
      chart     : {
        animations: {
          speed           : 400,
          animateGradually: {
            enabled: false
          }
        },
        fontFamily: 'inherit',
        foreColor : 'inherit',
        width     : '100%',
        height    : '100%',
        type      : 'area',
        toolbar   : {
          show: false
        },
        zoom      : {
          enabled: false
        }
      },
      colors    : ['#818CF8'],
      dataLabels: {
        enabled: false
      },
      fill      : {
        colors: ['#312E81']
      },
      grid      : {
        show       : true,
        borderColor: '#334155',
        padding    : {
          top   : 10,
          bottom: -40,
          left  : 0,
          right : 0
        },
        position   : 'back',
        xaxis      : {
          lines: {
            show: true
          }
        }
      },
      series    : [{
        name: 'Revenue',
        data: this.revenueByMonth.map((rev, index) => ({
          x: moment().subtract(index + 1, 'months').toDate(),
          y: rev
        }))
      }],
      stroke    : {
        width: 2
      },
      tooltip   : {
        followCursor: true,
        theme       : 'dark',
        x           : {
          format: 'MMM, yyyy'
        },
        y           : {
          formatter: (value: number): string => `${value}`
        }
      },
      xaxis     : {
        axisBorder: {
          show: false
        },
        axisTicks : {
          show: false
        },
        crosshairs: {
          stroke: {
            color    : '#475569',
            dashArray: 0,
            width    : 2
          }
        },
        labels    : {
          offsetY: -20,
          style  : {
            colors: '#CBD5E1'
          }
        },
        tickAmount: 50,
        tooltip   : {
          enabled: false
        },
        type      : 'datetime'
      },
      yaxis     : {
        axisTicks : {
          show: false
        },
        axisBorder: {
          show: false
        },
        min       : (min): number => min - 120000,
        max       : (max): number => max + 120000,
        tickAmount: 5,
        show      : false
      }
    };
    this.chartOpportunityByStatus = {
      series: this.getChartSeriesByStage(),
      chart: {
        type: 'bar',
        height: 250,
        stacked: true,
        stackType: '100%'
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      xaxis: {
        categories: Months
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: 'right',
        offsetX: 0,
        offsetY: 50
      }
    };
    this.chartSalesFunnel = {
      series: [
        {
          name: 'basic',
          data: salesFunnelStatus.map(status => this.opportunityByStage[status]?.length??0)
        }
      ],
      chart: {
        type: 'bar',
        height: 160
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: salesFunnelStatus
      }
    };
    const country = groupBy(this.totalCustomer, 'country');
    this.chartCustomerCountry = {
      series: Object.values(country).map(val => val.length),
      chart: {
        type: 'pie'
      },
      labels: Object.keys(country),
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: '100%'
            },
            legend: {
              position: 'bottom'
            }
          }
        }
      ]
    };
  }
}
