/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const getNavAccounts = (): FuseNavigationItem => {
    return {
        id   : 'entities',
        title: 'Entities',
        type : 'group',
        children: [
            {
                id   : 'dashboards.entities',
                title: 'Entities',
                type : 'basic',
                link : '/admin/view/Accounts_Entity',
            },
        ]
    };
}

export const getNavMarketing = (personae: string): FuseNavigationItem => {
    const navbar: FuseNavigationItem = {
        id      : 'marketing',
        title   : 'Marketing',
        type    : 'group',
        children: [
            {
                id   : 'marketing.marketing.campaigns',
                title: 'Campaigns',
                type : 'basic',
                link : '/admin/view/Campaign'
            },
            {
                id   : 'marketing.marketing.groups',
                title: 'Groups',
                type : 'basic',
                link : '/admin/view/Group'
            },
            {
                id   : 'marketing.marketing.search-create',
                title: 'Search & Create Groups',
                type : 'basic',
                link : '/marketing/marketing/search-create'
            }
        ]
    };
    if(personae === 'Recruitment') {
        navbar.children = [
            ...navbar.children,
            {
                id      : 'marketing.surveys',
                title   : 'Surveys',
                type    : 'collapsable',
                children: [
                    {
                        id   : 'marketing.surveys.surveys',
                        title: 'Surveys',
                        type : 'basic',
                        link : '/admin/view/Survey'
                    },
                    {
                        id   : 'marketing.surveys.questions',
                        title: 'Survey Questions',
                        type : 'basic',
                        link : '/admin/view/Survey_Question'
                    },
                    {
                        id   : 'marketing.surveys.answers',
                        title: 'Survey Answers',
                        type : 'basic',
                        link : '/admin/view/Survey_Answer'
                    }
                ]
            },
            {
                id      : 'marketing.blog',
                title   : 'Blog',
                type    : 'collapsable',
                children: [
                    {
                        id   : 'marketing.blog.blogging',
                        title: 'Blogging',
                        type : 'basic',
                        link : '/admin/view/WebPostAdo'
                    }
                ]
            }
        ]
    }
    return navbar;
}

export const getNav_ISP = (): FuseNavigationItem => {
    return {
        id   : 'isp',
        title: 'ISP',
        type : 'group',
        children: [
            {
                id   : 'isp.main',
                title: 'Main',
                type : 'collapsable',
                children: [
                    {
                        id   : 'isp.main.dashboard',
                        title: 'ISP Dashboard',
                        type : 'basic',
                        link : '/Rpt_ISP_Dashboard2',
                    },
                    {
                        id   : 'isp.main.customers',
                        title: 'Customers',
                        type : 'basic',
                        link : '/admin/view/ERP_Customer',
                    },
                    {
                        id   : 'isp.main.sof',
                        title: 'SOF',
                        type : 'basic',
                        link : '/admin/view/ERP_ServiceOrder',
                    },
                    {
                        id   : 'isp.main.contracts',
                        title: 'Contracts',
                        type : 'basic',
                        link : '/admin/view/ERP_ContractManagement',
                    },
                    {
                        id   : 'isp.main.subscriptions',
                        title: 'Subscriptions',
                        type : 'basic',
                        link : '/admin/view/ERP_Subscription',
                    },
                    {
                        id   : 'isp.main.subscription_logs',
                        title: 'Subscription Logs',
                        type : 'basic',
                        link : '/admin/view/ERP_SubscriptionLogging',
                    },
                    {
                        id   : 'isp.main.radius_users',
                        title: 'Radius Users',
                        type : 'basic',
                        link : '/admin/view/ERP_AAAUser',
                    },
                ]
            },
            {
                id   : 'isp.service_order',
                title: 'Service Order',
                type : 'collapsable',
                children: [
                    {
                        id   : 'isp.service_order.contracts_active',
                        title: 'Contracts Active',
                        type : 'basic',
                        link : '/admin/view/ERP_ContractManagement',
                    },
                    {
                        id   : 'isp.service_order.contracts_done',
                        title: 'Contracts Done',
                        type : 'basic',
                        link : '/admin/view/ERP_ContractManagement',
                    },
                    {
                        id   : 'isp.service_order.sof_open',
                        title: 'SOF Open',
                        type : 'basic',
                        link : '/admin/view/ERP_ServiceOrder',
                    },
                    {
                        id   : 'isp.service_order.sof_relocation',
                        title: 'SOF Relocation',
                        type : 'basic',
                        link : '/admin/view/ERP_ServiceOrder',
                    },
                    {
                        id   : 'isp.service_order.sof_upgrade',
                        title: 'SOF Upgrade',
                        type : 'basic',
                        link : '/admin/view/ERP_ServiceOrder',
                    },
                    {
                        id   : 'isp.service_order.sof_job',
                        title: 'SOF Job',
                        type : 'basic',
                        link : '/admin/view/ERP_ServiceOrder',
                    },
                    {
                        id   : 'isp.service_order.sof_scheduled',
                        title: 'SOF Scheduled',
                        type : 'basic',
                        link : '/admin/view/ERP_ServiceOrder',
                    },
                    {
                        id   : 'isp.service_order.sof_done',
                        title: 'SOF Done',
                        type : 'basic',
                        link : '/admin/view/ERP_ServiceOrder',
                    },
                    {
                        id   : 'isp.service_order.sof_refund',
                        title: 'SOF Refund',
                        type : 'basic',
                        link : '/admin/view/ERP_ServiceOrder',
                    },
                ]
            },
        ]
    };
}

export const getNavERP_Invoicing = (): FuseNavigationItem => {
    return {
        id   : 'products',
        title: 'Products',
        type : 'group',
        children: [
            {
                id   : 'products.main',
                title: 'Main',
                type : 'collapsable',
                children: [
                    {
                        id   : 'products.main.invoice',
                        title: 'Invoice',
                        type : 'basic',
                        link : '/admin/view/ERP_Invoice',
                    },
                    {
                        id   : 'products.main.product',
                        title: 'Products',
                        type : 'basic',
                        link : '/admin/view/ERP_Product',
                    },
                    {
                        id   : 'products.main.sof',
                        title: 'SOF',
                        type : 'basic',
                        link : '/admin/view/ERP_ServiceOrder',
                    },
                ]
            },
            {
                id   : 'products.orders',
                title: 'Orders',
                type : 'collapsable',
                children: [
                    {
                        id   : 'products.orders.contracts_active',
                        title: 'Orders',
                        type : 'basic',
                        link : '/admin/view/ERP_Order',
                    },
                    {
                        id   : 'products.orders.contracts_done',
                        title: 'Order Items',
                        type : 'basic',
                        link : '/admin/view/ERP_Order_Item',
                    },
                ]
            },
            {
                id   : 'products.inventory',
                title: 'Inventory',
                type : 'collapsable',
                children: [
                    {
                        id   : 'products.inventory.job_cards',
                        title: 'Job Cards',
                        type : 'basic',
                        link : '/admin/view/ERP_WIPJobCard',
                    },
                    {
                        id   : 'products.inventory.deployments',
                        title: 'Deployments',
                        type : 'basic',
                        link : '/admin/view/ERP_Deployment',
                    },
                    {
                        id   : 'products.inventory.deployment_usages',
                        title: 'Deployment Usages',
                        type : 'basic',
                        link : '/admin/view/ERP_Deployment_Usage',
                    },
                    {
                        id   : 'products.inventory.facilities',
                        title: 'Facilities',
                        type : 'basic',
                        link : '/admin/view/ERP_Facility',
                    },
                    {
                        id   : 'products.inventory.inventory_items',
                        title: 'Inventory Items',
                        type : 'basic',
                        link : '/admin/view/ERP_Inventory_Item',
                    },
                ]
            },
            {
                id   : 'products.products',
                title: 'Products',
                type : 'collapsable',
                children: [
                    {
                        id   : 'products.products.products',
                        title: 'Products',
                        type : 'basic',
                        link : '/admin/view/ERP_WIPJobCard',
                    },
                    {
                        id   : 'products.products.price_component',
                        title: 'Price Component',
                        type : 'basic',
                        link : '/admin/view/ERP_Price_Component',
                    },
                    {
                        id   : 'products.products.product_category',
                        title: 'Product Category',
                        type : 'basic',
                        link : '/admin/view/ERP_Product_Category',
                    },
                    {
                        id   : 'products.products.product_category_definition',
                        title: 'Product Category Definition',
                        type : 'basic',
                        link : '/admin/view/ERP_Product_Category_Def',
                    },
                ]
            },
        ]
    };
}

export const getNavSales = (): FuseNavigationItem => {
    return {
        id   : 'sales',
        title: 'Sales',
        type : 'group',
        children: [
            {
                id   : 'sales.organisations',
                title: 'Organisations',
                type : 'basic',
                link : '/admin/view/Organisation',
            },
            {
                id   : 'sales.mycontacts',
                title: 'My Contacts',
                type : 'basic',
                link : '/admin/view/Contact',
            },
            {
                id   : 'sales.allcontacts',
                title: 'All Contacts',
                type : 'basic',
                link : '/admin/view/Contact',
            },
            {
                id   : 'sales.mycontacthot',
                title: 'My Contacts - Hot',
                type : 'basic',
                link : '/admin/view/Contact',
            },
            {
                id   : 'sales.opportunities',
                title: 'Opportunities',
                type : 'basic',
                link : '/admin/view/Opportunity',
            },
            {
                id   : 'sales.crm_opportunities',
                title: 'CRM Opportunities',
                type : 'basic',
                link : '/admin/CRM/Opportunity',
            },
            {
                id   : 'sales.kanban_opportunities',
                title: 'Kanban Opportunities',
                type : 'basic',
                link : '/admin/Kanban/Opportunity/Status',
            },
        ]
    };
}

export const getNavReports = (): FuseNavigationItem => {
    return {
        id   : 'reports',
        title: 'Reports',
        type : 'group',
        children: [
            {
                id   : 'reports.subscription_per_item',
                title: 'Subscriptions Per Item',
                type : 'basic',
                link : '/admin/view/Accounts_Entity',
            },
            {
                id   : 'reports.subscription_per_area',
                title: 'Subscriptions Per Area',
                type : 'basic',
                link : '/admin/view/Accounts_Entity',
            },
        ]
    };
}

export const getNavTinMan = (): FuseNavigationItem => {
    return {
        id   : 'client',
        title: 'Client',
        type : 'group',
        children: [
            {
                id   : 'client.vacancies',
                title: 'Vacancies',
                type : 'basic',
                link : '/admin/view/Tinman_Vacancy',
            },
            {
                id   : 'client.matches',
                title: 'Matches',
                type : 'basic',
                link : '/admin/view/Tinman_Match',
            },
            {
                id   : 'client.profiles',
                title: 'Profiles',
                type : 'basic',
                link : '/admin/view/Tinman_Profile',
            },
        ]
    };
}

export const getNavParty = (): FuseNavigationItem => {
    return {
        id   : 'party',
        title: 'Party',
        type : 'group',
        children: [
            {
                id   : 'party.parties',
                title: 'Parties',
                type : 'collapsable',
                children: [
                    {
                        id   : 'parties.organisation',
                        title: 'Organisations',
                        type : 'basic',
                        link : '/admin/view/Party_Organisation',
                    },
                    {
                        id   : 'parties.person',
                        title: 'Person',
                        type : 'basic',
                        link : '/admin/view/Party_Person',
                    },
                    {
                        id   : 'parties.contact_mechanism',
                        title: 'Contact Mechanism',
                        type : 'basic',
                        link : '/admin/view/Party_Contact_Mechanism',
                    },
                    {
                        id   : 'parties.party_classification',
                        title: 'Party Classification',
                        type : 'basic',
                        link : '/admin/view/Party_Classification',
                    },
                    {
                        id   : 'parties.party_roles',
                        title: 'Party Roles',
                        type : 'basic',
                        link : '/admin/view/Party_Role_Link',
                    },
                    {
                        id   : 'parties.party_relationships',
                        title: 'Party Relationships',
                        type : 'basic',
                        link : '/admin/view/Party_Relationship_Link',
                    },
                ]
            },
            {
                id   : 'party.definitions',
                title: 'Definitions',
                type : 'collapsable',
                children: [
                    {
                        id   : 'definitions.classifications',
                        title: 'Classifications',
                        type : 'basic',
                        link : '/admin/view/Party_Classification_Def',
                    },
                    {
                        id   : 'definitions.roles',
                        title: 'Roles',
                        type : 'basic',
                        link : '/admin/view/Party_Role_Def',
                    },
                    {
                        id   : 'definitions.relationships',
                        title: 'Relationships',
                        type : 'basic',
                        link : '/admin/view/Party_Relationship_Def',
                    },
                ]
            },
        ]
    };
}

export const getNavGlider = (): FuseNavigationItem => {
    return {
        id   : 'glider',
        title: 'Client',
        type : 'group',
        children: [
            {
                id   : 'client.vacancies',
                title: 'Vacancies',
                type : 'basic',
                link : '/admin/view/Tinman_Vacancy',
            },
            {
                id   : 'client.matches',
                title: 'Matches',
                type : 'basic',
                link : '/admin/view/Tinman_Match',
            },
        ]
    };
}

export const getNavProjects = (): FuseNavigationItem => {
    return {
        id      : 'projects',
        title   : 'Projects',
        type    : 'group',
        children: [
            {
                id   : 'dashboards.projects',
                title: 'Projects',
                type : 'basic',
                link : '/admin/view/Project'
            },
            {
                id   : 'dashboards.epics',
                title: 'Epics',
                type : 'basic',
                link : '/admin/view/ProjectEpic'
            },
            {
                id   : 'dashboards.tasks',
                title: 'Tasks',
                type : 'basic',
                link : '/admin/view/ProjectTask'
            },
            {
                id      : 'dashboards.dashboard-tasks',
                title   : 'Dashboard Tasks',
                type    : 'collapsable',
                children: [
                    {
                        id   : 'dashboards.dashboard-tasks.opentasks',
                        title: 'Open Tasks',
                        type : 'basic',
                        link : '/admin/PM/Kanban'
                    },
                    {
                        id   : 'dashboards.dashboard-tasks.opentasks-with-org',
                        title: 'Open Tasks With Organisation',
                        type : 'basic',
                        link : '/dashboards/dashboard-tasks/opentasks-with-org'
                    },
                    {
                        id   : 'dashboards.dashboard-tasks.tasks-groupby-project',
                        title: 'Tasks Group By Project',
                        type : 'basic',
                        link : '/dashboards/dashboard-tasks/tasks-groupby-project'
                    },
                    {
                        id   : 'dashboards.dashboard-tasks.tasks-groupby-epic',
                        title: 'Tasks Group By Epic',
                        type : 'basic',
                        link : '/dashboards/dashboard-tasks/tasks-groupby-epic'
                    },
                    {
                        id   : 'dashboards.dashboard-tasks.tasks-groupby-parenttask',
                        title: 'Tasks Group By Parent Task',
                        type : 'basic',
                        link : '/dashboards/dashboard-tasks/tasks-groupby-parenttask'
                    },
                ]
            },
            {
                id      : 'dashboards.dashboard-all',
                title   : 'Dashboard All',
                type    : 'collapsable',
                children: [
                    {
                        id   : 'dashboards.dashboard-all.all',
                        title: 'All Open Tasks',
                        type : 'basic',
                        link : '/admin/PM/Dashboard'
                    },
                    {
                        id   : 'dashboards.dashboard-all.groupby-user',
                        title: 'Group By User',
                        type : 'basic',
                        link : '/dashboards/dashboard-all/groupby-user'
                    },
                    {
                        id   : 'dashboards.dashboard-all.groupby-owner',
                        title: 'Group By Owner',
                        type : 'basic',
                        link : '/dashboards/dashboard-all/groupby-owner'
                    },
                    {
                        id   : 'dashboards.dashboard-all.groupby-parent',
                        title: 'Group By Parent',
                        type : 'basic',
                        link : '/dashboards/dashboard-all/groupby-parent'
                    },
                    {
                        id   : 'dashboards.dashboard-all.groupby-project',
                        title: 'Group By Project',
                        type : 'basic',
                        link : '/dashboards/dashboard-all/groupby-project'
                    },
                    {
                        id   : 'dashboards.dashboard-all.groupby-epic',
                        title: 'Group By Epic',
                        type : 'basic',
                        link : '/dashboards/dashboard-all/groupby-epic'
                    },
                ]
            },
            {
                id      : 'dashboards.time-sheet-reporting',
                title   : 'Time Sheet Reporting',
                type    : 'collapsable',
                children: [
                    {
                        id   : 'dashboards.time-sheet-reporting.reports',
                        title: 'Time Sheet Reports',
                        type : 'basic',
                        link : '/dashboards/time-sheet-reporting/reports'
                    },
                    {
                        id   : 'dashboards.time-sheet-reporting.charts',
                        title: 'Time Sheet Charts',
                        type : 'basic',
                        link : '/dashboards/time-sheet-reporting/charts'
                    }
                ]
            },
            {
                id      : 'dashboards.notes',
                title   : 'Notes',
                type    : 'basic',
                link    : '/admin/view/Note'
            }
        ]
    };
}

export const getNavRecruitment = (): FuseNavigationItem => {
    return {
        id      : 'recruitment',
        title   : 'Recruitment',
        type    : 'group',
        children: [
            {
                id   : 'recruitment.organisation',
                title: 'Organisation',
                type : 'basic',
                link : '/admin/view/Organisation'
            },
            {
                id   : 'recruitment.contact',
                title: 'Contact',
                type : 'basic',
                link : '/admin/view/ProjectEpic'
            },
            {
                id   : 'recruitment.candidates',
                title: 'Candidates',
                type : 'basic',
                link : '/admin/view/Candidates'
            },
            {
                id   : 'recruitment.job',
                title: 'Jobs',
                type : 'basic',
                link : '/admin/view/Job'
            },
            {
                id   : 'recruitment.application',
                title: 'Application',
                type : 'basic',
                link : '/admin/view/Application'
            },
            {
                id   : 'recruitment.saved_searches',
                title: 'Saved Searches',
                type : 'basic',
                link : '/AdminViewQuirk'
            },
            {
                id      : 'recruitment.applications',
                title   : 'Applications',
                type    : 'collapsable',
                children: [
                    {
                        id   : 'recruitment.applications.referral_entry',
                        title: 'Referral Entry',
                        type : 'basic',
                        link : '/RecruitReferral'
                    },
                    {
                        id   : 'recruitment.applications.all_application_main',
                        title: 'All Application Main',
                        type : 'basic',
                        link : '/Rpt_RSS_Applications'
                    },
                ]
            },
            {
                id      : 'recruitment.recruiter_reports',
                title   : 'Recruiter Reports',
                type    : 'collapsable',
                children: [
                    {
                        id   : 'recruitment.recruiter_reports.paperwork_report',
                        title: 'Paperwork Report',
                        type : 'basic',
                        link : '/Rpt_RSS_PaperWork'
                    },
                    {
                        id   : 'recruitment.recruiter_reports.paperwork_report',
                        title: 'All Applications Secondary',
                        type : 'basic',
                        link : '/Rpt_RSS_RecruiterJob'
                    },
                    {
                        id   : 'recruitment.recruiter_reports.paperwork_report',
                        title: 'Report Recruiter CV Search',
                        type : 'basic',
                        link : '/Rpt_CV_Search'
                    },
                    {
                        id   : 'recruitment.recruiter_reports.paperwork_report',
                        title: 'Recruiter Job Assignments',
                        type : 'basic',
                        link : '/admin/view/Job'
                    },
                ]
            },
            {
                id      : 'recruitment.reports',
                title   : 'Reports',
                type    : 'collapsable',
                children: [
                    {
                        id   : 'recruitment.reports.job_applications_chart',
                        title: 'Job Applications Chart',
                        type : 'basic',
                        link : '/ChartJobApplication'
                    },
                    {
                        id   : 'recruitment.reports.application_status_charts',
                        title: 'Application Status Charts',
                        type : 'basic',
                        link : '/ChartAppStatus'
                    },
                    {
                        id   : 'recruitment.reports.job_application_dashboard_slow',
                        title: 'Job Application Dashboard Slow',
                        type : 'basic',
                        link : '/Rpt_RSS_Job_App_Dashboard'
                    },
                ]
            },
            {
                id      : 'recruitment.candidates_actions',
                title   : 'Candidates Actions',
                type    : 'collapsable',
                children: [
                    {
                        id   : 'recruitment.candidates_actions.candidate_actions_today',
                        title: 'Candidate Actions Today',
                        type : 'basic',
                        link : '/RecruitAppInt/Today'
                    },
                    {
                        id   : 'recruitment.reports.all_my_candidate_actions',
                        title: 'All My Candidate Actions',
                        type : 'basic',
                        link : '/RecruitAppInt/All'
                    },
                    {
                        id   : 'recruitment.reports.all_candidate_actions',
                        title: 'All Candidate Actions',
                        type : 'basic',
                        link : '/RecruitAppInt'
                    },
                ]
            },
            {
                id      : 'recruitment.jobs',
                title   : 'Jobs',
                type    : 'collapsable',
                children: [
                    {
                        id   : 'recruitment.jobs.advanced_search',
                        title: 'Advanced Search',
                        type : 'basic',
                        link : '/RecruitAppX'
                    },
                    {
                        id   : 'recruitment.reports.my_open_jobs',
                        title: 'My Open Jobs',
                        type : 'basic',
                        link : '/RecruitJobList'
                    },
                    {
                        id   : 'recruitment.reports.all_open_jobs',
                        title: 'All Open Jobs',
                        type : 'basic',
                        link : '/RecruitJobList'
                    },
                    {
                        id   : 'recruitment.reports.all_jobs_listing',
                        title: 'All Jobs Listing',
                        type : 'basic',
                        link : '/admin/view/Job'
                    },
                ]
            },
            {
                id      : 'recruitment.my_clients',
                title   : 'My Clients',
                type    : 'collapsable',
                children: [
                    {
                        id   : 'recruitment.jobs.Prospecting',
                        title: 'Prospectingh',
                        type : 'basic',
                        link : '/RecruitAppX'
                    },
                    {
                        id   : 'recruitment.reports.my_open_jobs',
                        title: 'My Open Jobs',
                        type : 'basic',
                        link : '/RecruitJobList'
                    },
                    {
                        id   : 'recruitment.reports.all_open_jobs',
                        title: 'All Open Jobs',
                        type : 'basic',
                        link : '/RecruitJobList'
                    },
                    {
                        id   : 'recruitment.reports.all_jobs_listing',
                        title: 'All Jobs Listing',
                        type : 'basic',
                        link : '/admin/view/Job'
                    },
                ]
            },
            {
                id      : 'recruitment.all_clients',
                title   : 'All Clients',
                type    : 'collapsable',
                children: [
                    {
                        id      : 'recruitment.all_clients.all_prospecting',
                        title   : 'All Prospecting',
                        type    : 'basic',
                        link    : '/recruitment/all_clients/all_prospecting'
                    },
                    {
                        id      : 'recruitment.all_clients.potential',
                        title   : 'Potential',
                        type    : 'basic',
                        link    : '/recruitment/all_clients/potential'
                    },
                    {
                        id      : 'recruitment.all_clients.all_profile_sent',
                        title   : 'All Profiles Sent',
                        type    : 'basic',
                        link    : '/recruitment/all_clients/all_profile_sent'
                    },
                    {
                        id      : 'recruitment.all_clients.all_follow_up_terms',
                        title   : 'All Follow Up Terms',
                        type    : 'basic',
                        link    : '/recruitment/all_clients/all_follow_up_terms'
                    },
                    {
                        id      : 'recruitment.all_clients.all_pending_terms',
                        title   : 'All Pending Terms',
                        type    : 'basic',
                        link    : '/recruitment/all_clients/all_pending_terms'
                    },
                    {
                        id      : 'recruitment.all_clients.dormant_terms',
                        title   : 'Dormant Terms',
                        type    : 'basic',
                        link    : '/recruitment/all_clients/dormant_terms'
                    }
                ]
            },
        ]
    };
}

export const getNavERP_ACC = (): FuseNavigationItem => {
    return {
        id      : 'accounts',
        title   : 'Accounts',
        type    : 'group',
        children: [
            {
                id      : 'accounts.reporting',
                title   : 'REPORTING',
                type    : 'collapsable',
                children: [
                    {
                        id   : 'accounts.reporting.point_of_sale',
                        title: 'Point Of Sale',
                        type : 'basic',
                        link : '/ACC_Journal_Payment'
                    },
                    {
                        id   : 'accounts.reporting.subscription_review',
                        title: 'Subscription Review',
                        type : 'basic',
                        link : '/ERP_Subscription_Review'
                    },
                    {
                        id   : 'accounts.reporting.journal_dashboard',
                        title: 'Journal Dashboard',
                        type : 'basic',
                        link : '/Rpt_ACC_Dashboard'
                    },
                    {
                        id   : 'accounts.reporting.journal_accounts',
                        title: 'Journal Accounts',
                        type : 'basic',
                        link : '/Rpt_ACC_GLAcc'
                    },
                ]
            },
            {
                id      : 'accounts.gl_accounts',
                title   : 'GL ACCOUNTS',
                type    : 'collapsable',
                children: [
                    {
                        id   : 'accounts.gl_accounts.classes',
                        title: 'GL Accounts Classes',
                        type : 'basic',
                        link : '/admin/view/ACC_GL_AccountClass'
                    },
                    {
                        id   : 'accounts.gl_accounts.groups',
                        title: 'GL Accounts Groups',
                        type : 'basic',
                        link : '/admin/view/ACC_GL_AccountGroup'
                    },
                    {
                        id   : 'accounts.gl_accounts.account',
                        title: 'GL Accounts',
                        type : 'basic',
                        link : '/admin/view/ACC_GL_ChartOfAccount'
                    },
                ]
            },
            {
                id      : 'accounts.journal',
                title   : 'JOURNAL',
                type    : 'collapsable',
                children: [
                    {
                        id   : 'accounts.journal.entries',
                        title: 'Journal Entries',
                        type : 'basic',
                        link : '/admin/view/ACC_Journal_Entry'
                    },
                    {
                        id   : 'accounts.journal.document',
                        title: 'Journal Document',
                        type : 'basic',
                        link : '/admin/view/ACC_Journal_Document'
                    },
                    {
                        id   : 'accounts.journal.tax_type',
                        title: 'Journal Tax Type',
                        type : 'basic',
                        link : '/admin/view/ACC_Journal_TaxType'
                    }
                ]
            }
        ]
    };
}
