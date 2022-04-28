import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { FuseNavigationItem, FuseNavigationService, FuseVerticalNavigationComponent } from '@fuse/components/navigation';
import { MatDrawer } from '@angular/material/sidenav';
import { appUserPersonae } from 'app/core/config/app.config';
import {
    getNavAccounts,
    getNavERP_ACC,
    getNavERP_Invoicing,
    getNavGlider,
    getNavMarketing,
    getNavParty,
    getNavProjects,
    getNavRecruitment,
    getNavReports,
    getNavSales,
    getNavTinMan,
    getNav_ISP
} from 'app/core/config/navigation.config';

@Component({
    selector     : 'modern-layout',
    templateUrl  : './modern.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ModernLayoutComponent implements OnInit, OnDestroy
{
    @ViewChild('matDrawer') matDrawer: MatDrawer;
    isScreenSmall: boolean;
    navigation: FuseNavigationItem[];
    drawerMode: 'side' | 'over';
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _fuseMediaWatcherService: FuseMediaWatcherService,
        private _fuseNavigationService: FuseNavigationService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for current year
     */
    get currentYear(): number
    {
        return new Date().getFullYear();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this.navigation = [];
        console.log(appUserPersonae);
        for (const personae of appUserPersonae) {
            switch(personae) {
                case 'Accounts':
                    this.navigation.push(getNavAccounts());
                    this.navigation.push(getNavMarketing(appUserPersonae[0]));
                    break;
                case 'Network':
                     this.navigation.push(getNavMarketing(appUserPersonae[0]));
                    break;
                case 'ISP':
                    this.navigation.push(getNav_ISP());
                    this.navigation.push(getNavSales());
                    this.navigation.push(getNavMarketing(appUserPersonae[0]));
                    this.navigation.push(getNavReports());
                    break;
                case 'Client_Tinman':
                    this.navigation.push(getNavTinMan());
                    this.navigation.push(getNavParty());
                    break;
                case 'Glider':
                    this.navigation.push(getNavGlider());
                    break;
                case 'Recruitment':
                    this.navigation.push(getNavRecruitment());
                    break;
                case 'Core':
                    this.navigation.push(getNavSales());
                    this.navigation.push(getNavMarketing(appUserPersonae[0]));
                    this.navigation.push(getNavParty());
                    break;
                    /**
                     * Modules
                     */
                case 'ERP_Invoicing':
                    this.navigation.push(getNavERP_Invoicing());
                    break;
                case 'ERP_ACC':
                    this.navigation.push(getNavERP_ACC());
                    break;
                case 'ERP_Sales':
                    //Customers
                    break;
                case 'ERP_WIP':
                    break;
                case 'Project':
                    this.navigation.push(getNavProjects());
                    break;
                case 'CRM_LEGACY':
                    // this.navigation.push(getNavCRM_Legacy());
                    break;
            }
        }
        console.log(this.navigation);

        // Subscribe to media changes
        this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({matchingAliases}) => {

                // Check if the screen is small
                this.isScreenSmall = !matchingAliases.includes('md');
                // if(this.isScreenSmall) {
                //     this.drawerMode = 'side';
                // }
            });
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

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle navigation
     *
     * @param name
     */
    toggleNavigation(name: string): void
    {
        // Get the navigation
        const navigation = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(name);

        if ( navigation )
        {
            // Toggle the opened status
            navigation.toggle();
        }
    }

    onBackdropClicked(): void {
        this.matDrawer.toggle();
    }
}
