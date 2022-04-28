import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

// @formatter:off
// tslint:disable:max-line-length
export const appRoutes: Route[] = [

    // Redirect empty path to '/dashboard'
    {path: '', pathMatch : 'full', redirectTo: 'dashboard'},

    // Redirect signed in user to the '/dashboard'
    //
    // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'dashboard'},

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {
                path: 'sign-in',
                loadChildren: (): any => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule)
            },
            {
                path: 'sign-up',
                loadChildren: (): any => import('app/modules/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule)
            }
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {
                path: 'sign-out',
                loadChildren: (): any => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule)
            }
        ]
    },

    // Landing routes
    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {
                path: 'home',
                loadChildren: (): any => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule)
            },
        ]
    },

    // Admin routes
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            // Homepage
            {
                path: 'dashboard',
                component: LayoutComponent,
                loadChildren: (): any => import('app/modules/admin/dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'assessment',
                canActivate: [AuthGuard],
                canActivateChild: [AuthGuard],
                component: LayoutComponent,
                data: {
                    layout: 'empty'
                },
                children: [
                    {
                        path: '',
                        loadChildren: (): any => import('app/modules/assessment/assessment/assessment.module').then(m => m.AssessmentModule)
                    },
                    {
                        path: 'help',
                        loadChildren: (): any => import('app/modules/assessment/guide/guide.module').then(m => m.GuideModule)
                    },
                    {
                        path: 'profile',
                        loadChildren: (): any => import('app/modules/assessment/profile-select/profile-select.module').then(m => m.ProfileSelectModule)
                    },
                    {
                        path: 'help2',
                        loadChildren: (): any => import('app/modules/assessment/guide2/guide2.module').then(m => m.Guide2Module)
                    },
                    {
                        path: 'help3',
                        loadChildren: (): any => import('app/modules/assessment/guide3/guide3.module').then(m => m.Guide3Module)
                    },
                    {
                        path: 'help4',
                        loadChildren: (): any => import('app/modules/assessment/guide4/guide4.module').then(m => m.Guide4Module)
                    }
                ]
            },
            // License routes
            // {
            //     path: 'license',
            //     loadChildren: (): any => import('app/modules/license/license.module').then(m => m.LicenseModule)
            // },
            // Admin
            {
                path: 'admin',
                component: LayoutComponent,
                children: [
                    // Thinqpage
                    {
                        path: 'thinq/:appId',
                        loadChildren: (): any => import('app/modules/admin/thinq/thinq.module').then(m => m.ThinqModule)
                    },
                    // Admin view cabinet
                    {
                        path: 'view/:cabinet',
                        loadChildren: (): any => import('app/modules/admin/admin-view/admin-view.module').then(m => m.AdminViewModule)
                    },
                    // Create Appdata
                    {
                        path: 'create',
                        loadChildren: (): any => import('app/modules/admin/create-thinq/create-thinq.module').then(m => m.CreateThinqModule)
                    },
                    {
                        path: 'create/:appId',
                        loadChildren: (): any => import('app/modules/admin/create-thinq/create-thinq.module').then(m => m.CreateThinqModule)
                    },
                    // Relate page
                    {
                        path: 'relate/:appId',
                        loadChildren: (): any => import('app/modules/admin/relate-thinq/relate-thinq.module').then(m => m.RelateThinqModule)
                    },
                    // Document preview page
                    {
                        path: 'document/view/:appId',
                        loadChildren: (): any => import('app/modules/admin/document-view/document-view.module').then(m => m.DocumentViewModule)
                    },
                    // Generic Kanban page
                    {
                        path: 'Kanban/:cabinet/:field',
                        loadChildren: (): any => import('app/modules/admin/kanban-board/kanban-board.module').then(m => m.KanbanBoardModule)
                    },
                    // Project Management
                    {
                        path: 'PM',
                        children: [
                            // Project kanban view
                            {
                                path: 'Kanban',
                                loadChildren: (): any => import('app/modules/admin/project-management/kanban-board/kanban-board.module')
                                    .then(m => m.PMKanbanBoardModule)
                            },
                            // Project dashboard view
                            {
                                path: 'Dashboard',
                                loadChildren: (): any => import('app/modules/admin/project-management/pm-dashboard/pm-dashboard.module')
                                    .then(m => m.PMDashboardModule)
                            },
                        ]
                    },
                    // CRM
                    {
                        path: 'CRM',
                        children: [
                            {
                                path: 'Opportunity',
                                loadChildren: (): any => import('app/modules/admin/CRM/opportunity-dashboard/opportunity-dashboard.module')
                                    .then(m => m.OpportunityDashboardModule)
                            }
                        ]
                    }
                ]
            }
        ]
    },
];
