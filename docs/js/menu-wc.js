'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">calvin-emr documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter additional">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#additional-pages"'
                            : 'data-target="#xs-additional-pages"' }>
                            <span class="icon ion-ios-book"></span>
                            <span>Important</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"' }>
                                    <li class="link ">
                                        <a href="additional-documentation/data-flow.html" data-type="entity-link" data-context-id="additional">Data Flow</a>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/cloud-functions.html" data-type="entity-link" data-context-id="additional">Cloud Functions</a>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/angular-cli.html" data-type="entity-link" data-context-id="additional">Angular CLI</a>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/deployment.html" data-type="entity-link" data-context-id="additional">Deployment</a>
                                    </li>
                        </ul>
                    </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-e9c1da002176e76debc1a01bfd5a12681c3018b45058a55cd6ab8775065386cd6fe1998c246e334f37c35088f8f0920aa3f2c5a640ec23b0f1e42f29ea58a53e"' : 'data-target="#xs-components-links-module-AppModule-e9c1da002176e76debc1a01bfd5a12681c3018b45058a55cd6ab8775065386cd6fe1998c246e334f37c35088f8f0920aa3f2c5a640ec23b0f1e42f29ea58a53e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-e9c1da002176e76debc1a01bfd5a12681c3018b45058a55cd6ab8775065386cd6fe1998c246e334f37c35088f8f0920aa3f2c5a640ec23b0f1e42f29ea58a53e"' :
                                            'id="xs-components-links-module-AppModule-e9c1da002176e76debc1a01bfd5a12681c3018b45058a55cd6ab8775065386cd6fe1998c246e334f37c35088f8f0920aa3f2c5a640ec23b0f1e42f29ea58a53e"' }>
                                            <li class="link">
                                                <a href="components/AboutUsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutUsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreatePatientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreatePatientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForgotPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ForgotPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PatientFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PatientFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PatientListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PatientListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PatientListDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PatientListDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudentDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudentListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudentPatientSelectDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentPatientSelectDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-e9c1da002176e76debc1a01bfd5a12681c3018b45058a55cd6ab8775065386cd6fe1998c246e334f37c35088f8f0920aa3f2c5a640ec23b0f1e42f29ea58a53e"' : 'data-target="#xs-injectables-links-module-AppModule-e9c1da002176e76debc1a01bfd5a12681c3018b45058a55cd6ab8775065386cd6fe1998c246e334f37c35088f8f0920aa3f2c5a640ec23b0f1e42f29ea58a53e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-e9c1da002176e76debc1a01bfd5a12681c3018b45058a55cd6ab8775065386cd6fe1998c246e334f37c35088f8f0920aa3f2c5a640ec23b0f1e42f29ea58a53e"' :
                                        'id="xs-injectables-links-module-AppModule-e9c1da002176e76debc1a01bfd5a12681c3018b45058a55cd6ab8775065386cd6fe1998c246e334f37c35088f8f0920aa3f2c5a640ec23b0f1e42f29ea58a53e"' }>
                                        <li class="link">
                                            <a href="injectables/AboutService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MedicationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MedicationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PatientService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PatientService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ToastService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToastService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MedicationsModule.html" data-type="entity-link" >MedicationsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MedicationsModule-21e6cbb286639e30962ad67ed03bcf7ecf0fcf92dd7667c41b9c91b60e702acda4c60616bdba360322f04c683ea064acb8d70550f318db6c53875e0bc4b7290e"' : 'data-target="#xs-components-links-module-MedicationsModule-21e6cbb286639e30962ad67ed03bcf7ecf0fcf92dd7667c41b9c91b60e702acda4c60616bdba360322f04c683ea064acb8d70550f318db6c53875e0bc4b7290e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MedicationsModule-21e6cbb286639e30962ad67ed03bcf7ecf0fcf92dd7667c41b9c91b60e702acda4c60616bdba360322f04c683ea064acb8d70550f318db6c53875e0bc4b7290e"' :
                                            'id="xs-components-links-module-MedicationsModule-21e6cbb286639e30962ad67ed03bcf7ecf0fcf92dd7667c41b9c91b60e702acda4c60616bdba360322f04c683ea064acb8d70550f318db6c53875e0bc4b7290e"' }>
                                            <li class="link">
                                                <a href="components/MedicationDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MedicationDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MedicationListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MedicationListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PatientDashboardModule.html" data-type="entity-link" >PatientDashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PatientDashboardModule-b030575758f77713ab2a8ebbecdaccae000ee0cc93ec9d7e59416f902ee87f8eeba54f6ce4df930ee1bcff5518a92b09e66821d9a1fc14317526ad5d253c6cd1"' : 'data-target="#xs-components-links-module-PatientDashboardModule-b030575758f77713ab2a8ebbecdaccae000ee0cc93ec9d7e59416f902ee87f8eeba54f6ce4df930ee1bcff5518a92b09e66821d9a1fc14317526ad5d253c6cd1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PatientDashboardModule-b030575758f77713ab2a8ebbecdaccae000ee0cc93ec9d7e59416f902ee87f8eeba54f6ce4df930ee1bcff5518a92b09e66821d9a1fc14317526ad5d253c6cd1"' :
                                            'id="xs-components-links-module-PatientDashboardModule-b030575758f77713ab2a8ebbecdaccae000ee0cc93ec9d7e59416f902ee87f8eeba54f6ce4df930ee1bcff5518a92b09e66821d9a1fc14317526ad5d253c6cd1"' }>
                                            <li class="link">
                                                <a href="components/AdministerMedDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdministerMedDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdministrationScheduleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdministrationScheduleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AssessmentInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AssessmentInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AssessmentRowComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AssessmentRowComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AssessmentsHistoryTabComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AssessmentsHistoryTabComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AssessmentsTabComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AssessmentsTabComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardiovascularFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardiovascularFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardiovascularInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardiovascularInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GastrointestinalFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GastrointestinalFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GastrointestinalInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GastrointestinalInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GenitourinaryFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GenitourinaryFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GenitourinaryInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GenitourinaryInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HistoryAndPhysicalTabComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HistoryAndPhysicalTabComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IntegumentaryFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IntegumentaryFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IntegumentaryInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IntegumentaryInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MarTabComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarTabComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MedicationScheduleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MedicationScheduleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MusculoskeletalFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MusculoskeletalFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MusculoskeletalInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MusculoskeletalInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NeurologicalFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NeurologicalFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NeurologicalInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NeurologicalInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoteEditDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoteEditDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoteFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoteFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrderEditDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderEditDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrderFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PatientDashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PatientDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PatientDashboardTabComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PatientDashboardTabComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrnScheduleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrnScheduleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProgressNotesTabComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProgressNotesTabComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProviderChartsTabComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProviderChartsTabComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProviderOrdersTabComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProviderOrdersTabComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PsychosocialFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PsychosocialFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PsychosocialInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PsychosocialInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RespiratoryFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RespiratoryFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RespiratoryInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RespiratoryInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VitalsChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VitalsChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VitalsFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VitalsFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VitalsTabComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VitalsTabComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PatientDashboardModule-b030575758f77713ab2a8ebbecdaccae000ee0cc93ec9d7e59416f902ee87f8eeba54f6ce4df930ee1bcff5518a92b09e66821d9a1fc14317526ad5d253c6cd1"' : 'data-target="#xs-injectables-links-module-PatientDashboardModule-b030575758f77713ab2a8ebbecdaccae000ee0cc93ec9d7e59416f902ee87f8eeba54f6ce4df930ee1bcff5518a92b09e66821d9a1fc14317526ad5d253c6cd1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PatientDashboardModule-b030575758f77713ab2a8ebbecdaccae000ee0cc93ec9d7e59416f902ee87f8eeba54f6ce4df930ee1bcff5518a92b09e66821d9a1fc14317526ad5d253c6cd1"' :
                                        'id="xs-injectables-links-module-PatientDashboardModule-b030575758f77713ab2a8ebbecdaccae000ee0cc93ec9d7e59416f902ee87f8eeba54f6ce4df930ee1bcff5518a92b09e66821d9a1fc14317526ad5d253c6cd1"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MedicationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MedicationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PatientService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PatientService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ToastService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToastService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsModule.html" data-type="entity-link" >SettingsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SettingsModule-ca5a267047bd52ce35bf04842ce07fa891dae861cd5b0e2474bd15503d5255a36e7bca2494be61a8b282e626185b0c63b19558b2dceb86634b56f84225a4cff2"' : 'data-target="#xs-components-links-module-SettingsModule-ca5a267047bd52ce35bf04842ce07fa891dae861cd5b0e2474bd15503d5255a36e7bca2494be61a8b282e626185b0c63b19558b2dceb86634b56f84225a4cff2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingsModule-ca5a267047bd52ce35bf04842ce07fa891dae861cd5b0e2474bd15503d5255a36e7bca2494be61a8b282e626185b0c63b19558b2dceb86634b56f84225a4cff2"' :
                                            'id="xs-components-links-module-SettingsModule-ca5a267047bd52ce35bf04842ce07fa891dae861cd5b0e2474bd15503d5255a36e7bca2494be61a8b282e626185b0c63b19558b2dceb86634b56f84225a4cff2"' }>
                                            <li class="link">
                                                <a href="components/ChangePasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChangePasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SettingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SettingsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SettingsGeneralComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SettingsGeneralComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SettingsHelpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SettingsHelpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SettingsProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SettingsProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsRoutingModule.html" data-type="entity-link" >SettingsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-48c9d6c6d8ef98bc6b289e171c349f2cc4f6f0d6de9e53af75a91436f72620c1a180598c0811d7632a2dce118e7e9afe27c2aab34f5dbaf275c69614dc2a3ff1"' : 'data-target="#xs-components-links-module-SharedModule-48c9d6c6d8ef98bc6b289e171c349f2cc4f6f0d6de9e53af75a91436f72620c1a180598c0811d7632a2dce118e7e9afe27c2aab34f5dbaf275c69614dc2a3ff1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-48c9d6c6d8ef98bc6b289e171c349f2cc4f6f0d6de9e53af75a91436f72620c1a180598c0811d7632a2dce118e7e9afe27c2aab34f5dbaf275c69614dc2a3ff1"' :
                                            'id="xs-components-links-module-SharedModule-48c9d6c6d8ef98bc6b289e171c349f2cc4f6f0d6de9e53af75a91436f72620c1a180598c0811d7632a2dce118e7e9afe27c2aab34f5dbaf275c69614dc2a3ff1"' }>
                                            <li class="link">
                                                <a href="components/ConfirmationDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmationDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmrCheckboxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmrCheckboxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmrCheckboxGroupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmrCheckboxGroupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmrDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmrDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmrInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmrInputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmrListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmrListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExpansionPanelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExpansionPanelComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FileUploadDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FileUploadDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HtmlDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HtmlDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PasswordInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PasswordInputComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-48c9d6c6d8ef98bc6b289e171c349f2cc4f6f0d6de9e53af75a91436f72620c1a180598c0811d7632a2dce118e7e9afe27c2aab34f5dbaf275c69614dc2a3ff1"' : 'data-target="#xs-directives-links-module-SharedModule-48c9d6c6d8ef98bc6b289e171c349f2cc4f6f0d6de9e53af75a91436f72620c1a180598c0811d7632a2dce118e7e9afe27c2aab34f5dbaf275c69614dc2a3ff1"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-48c9d6c6d8ef98bc6b289e171c349f2cc4f6f0d6de9e53af75a91436f72620c1a180598c0811d7632a2dce118e7e9afe27c2aab34f5dbaf275c69614dc2a3ff1"' :
                                        'id="xs-directives-links-module-SharedModule-48c9d6c6d8ef98bc6b289e171c349f2cc4f6f0d6de9e53af75a91436f72620c1a180598c0811d7632a2dce118e7e9afe27c2aab34f5dbaf275c69614dc2a3ff1"' }>
                                        <li class="link">
                                            <a href="directives/UniqueEntryValidatorDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UniqueEntryValidatorDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AssessmentForm.html" data-type="entity-link" >AssessmentForm</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Assessment.html" data-type="entity-link" >Assessment</a>
                            </li>
                            <li class="link">
                                <a href="classes/Cardiovascular.html" data-type="entity-link" >Cardiovascular</a>
                            </li>
                            <li class="link">
                                <a href="classes/Developer.html" data-type="entity-link" >Developer</a>
                            </li>
                            <li class="link">
                                <a href="classes/FormOption.html" data-type="entity-link" >FormOption</a>
                            </li>
                            <li class="link">
                                <a href="classes/Gastrointestinal.html" data-type="entity-link" >Gastrointestinal</a>
                            </li>
                            <li class="link">
                                <a href="classes/GeneralInfo.html" data-type="entity-link" >GeneralInfo</a>
                            </li>
                            <li class="link">
                                <a href="classes/Genitourinary.html" data-type="entity-link" >Genitourinary</a>
                            </li>
                            <li class="link">
                                <a href="classes/HistoryAndPhysical.html" data-type="entity-link" >HistoryAndPhysical</a>
                            </li>
                            <li class="link">
                                <a href="classes/Integumentary.html" data-type="entity-link" >Integumentary</a>
                            </li>
                            <li class="link">
                                <a href="classes/Medication.html" data-type="entity-link" >Medication</a>
                            </li>
                            <li class="link">
                                <a href="classes/Musculoskeletal.html" data-type="entity-link" >Musculoskeletal</a>
                            </li>
                            <li class="link">
                                <a href="classes/Neurological.html" data-type="entity-link" >Neurological</a>
                            </li>
                            <li class="link">
                                <a href="classes/Patient.html" data-type="entity-link" >Patient</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProgressNote.html" data-type="entity-link" >ProgressNote</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProviderOrder.html" data-type="entity-link" >ProviderOrder</a>
                            </li>
                            <li class="link">
                                <a href="classes/Psychosocial.html" data-type="entity-link" >Psychosocial</a>
                            </li>
                            <li class="link">
                                <a href="classes/Respiratory.html" data-type="entity-link" >Respiratory</a>
                            </li>
                            <li class="link">
                                <a href="classes/TableAction.html" data-type="entity-link" >TableAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/TableEvent.html" data-type="entity-link" >TableEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/Vital.html" data-type="entity-link" >Vital</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/PatientDashboardStore.html" data-type="entity-link" >PatientDashboardStore</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AdminGuard.html" data-type="entity-link" >AdminGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/LoginGuard.html" data-type="entity-link" >LoginGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/DegreeInfo.html" data-type="entity-link" >DegreeInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FormControlData.html" data-type="entity-link" >FormControlData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InterdisciplinaryTeamForm.html" data-type="entity-link" >InterdisciplinaryTeamForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LoginDialogData.html" data-type="entity-link" >LoginDialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MedicalCondition.html" data-type="entity-link" >MedicalCondition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MedicalConditionForm.html" data-type="entity-link" >MedicalConditionForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MedicationDialogData.html" data-type="entity-link" >MedicationDialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MedicationScheduleOrder.html" data-type="entity-link" >MedicationScheduleOrder</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PatientDashboardState.html" data-type="entity-link" >PatientDashboardState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PatientListDialogData.html" data-type="entity-link" >PatientListDialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RouteForm.html" data-type="entity-link" >RouteForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SimPerson.html" data-type="entity-link" >SimPerson</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});