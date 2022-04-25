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
                            <span>Additional documentation</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"' }>
                                    <li class="link ">
                                        <a href="additional-documentation/workflow.html" data-type="entity-link" data-context-id="additional">Workflow</a>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/data-flow.html" data-type="entity-link" data-context-id="additional">Data Flow</a>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/special-components.html" data-type="entity-link" data-context-id="additional">Special Components</a>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/cloud-functions.html" data-type="entity-link" data-context-id="additional">Cloud Functions</a>
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
                                            'data-target="#components-links-module-AppModule-2d9f56a65fe17725f9b77a0be248362daa0b870dd95c06b4d268ba4ab2368a6233bea6f9c714a3d3497b06555526ac3017d03465d30fea0651e20aaaab88c588"' : 'data-target="#xs-components-links-module-AppModule-2d9f56a65fe17725f9b77a0be248362daa0b870dd95c06b4d268ba4ab2368a6233bea6f9c714a3d3497b06555526ac3017d03465d30fea0651e20aaaab88c588"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-2d9f56a65fe17725f9b77a0be248362daa0b870dd95c06b4d268ba4ab2368a6233bea6f9c714a3d3497b06555526ac3017d03465d30fea0651e20aaaab88c588"' :
                                            'id="xs-components-links-module-AppModule-2d9f56a65fe17725f9b77a0be248362daa0b870dd95c06b4d268ba4ab2368a6233bea6f9c714a3d3497b06555526ac3017d03465d30fea0651e20aaaab88c588"' }>
                                            <li class="link">
                                                <a href="components/AboutUsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutUsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdministerMedDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdministerMedDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
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
                                                <a href="components/ChangePasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChangePasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfirmationDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmationDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreatePatientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreatePatientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmrCheckboxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmrCheckboxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmrCheckboxGroupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmrCheckboxGroupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmrInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmrInputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmrListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmrListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmrTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmrTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExpansionPanelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExpansionPanelComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FileUploadDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FileUploadDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForgotPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ForgotPasswordComponent</a>
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
                                                <a href="components/IntegumentaryFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IntegumentaryFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IntegumentaryInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IntegumentaryInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainNavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainNavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MarTabComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarTabComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MedDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MedDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MedicationListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MedicationListComponent</a>
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
                                                <a href="components/NoteFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoteFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrderEditDialog.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderEditDialog</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrderFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PatientDashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PatientDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PatientHistoryFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PatientHistoryFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PatientListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PatientListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PatientListDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PatientListDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProviderChartsTabComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProviderChartsTabComponent</a>
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
                                                <a href="components/StudentListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudentPatientSelectDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentPatientSelectDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TabComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TabComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserRegistrationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserRegistrationComponent</a>
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
                                        'data-target="#directives-links-module-AppModule-2d9f56a65fe17725f9b77a0be248362daa0b870dd95c06b4d268ba4ab2368a6233bea6f9c714a3d3497b06555526ac3017d03465d30fea0651e20aaaab88c588"' : 'data-target="#xs-directives-links-module-AppModule-2d9f56a65fe17725f9b77a0be248362daa0b870dd95c06b4d268ba4ab2368a6233bea6f9c714a3d3497b06555526ac3017d03465d30fea0651e20aaaab88c588"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AppModule-2d9f56a65fe17725f9b77a0be248362daa0b870dd95c06b4d268ba4ab2368a6233bea6f9c714a3d3497b06555526ac3017d03465d30fea0651e20aaaab88c588"' :
                                        'id="xs-directives-links-module-AppModule-2d9f56a65fe17725f9b77a0be248362daa0b870dd95c06b4d268ba4ab2368a6233bea6f9c714a3d3497b06555526ac3017d03465d30fea0651e20aaaab88c588"' }>
                                        <li class="link">
                                            <a href="directives/UniqueEntryValidatorDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UniqueEntryValidatorDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-2d9f56a65fe17725f9b77a0be248362daa0b870dd95c06b4d268ba4ab2368a6233bea6f9c714a3d3497b06555526ac3017d03465d30fea0651e20aaaab88c588"' : 'data-target="#xs-injectables-links-module-AppModule-2d9f56a65fe17725f9b77a0be248362daa0b870dd95c06b4d268ba4ab2368a6233bea6f9c714a3d3497b06555526ac3017d03465d30fea0651e20aaaab88c588"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-2d9f56a65fe17725f9b77a0be248362daa0b870dd95c06b4d268ba4ab2368a6233bea6f9c714a3d3497b06555526ac3017d03465d30fea0651e20aaaab88c588"' :
                                        'id="xs-injectables-links-module-AppModule-2d9f56a65fe17725f9b77a0be248362daa0b870dd95c06b4d268ba4ab2368a6233bea6f9c714a3d3497b06555526ac3017d03465d30fea0651e20aaaab88c588"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MedicationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MedicationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PatientService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PatientService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
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
                                <a href="classes/DeveloperProfile.html" data-type="entity-link" >DeveloperProfile</a>
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
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="classes/Patient.html" data-type="entity-link" >Patient</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProgressNotes.html" data-type="entity-link" >ProgressNotes</a>
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
                                <a href="classes/TableColumn.html" data-type="entity-link" >TableColumn</a>
                            </li>
                            <li class="link">
                                <a href="classes/TableEvent.html" data-type="entity-link" >TableEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/Update.html" data-type="entity-link" >Update</a>
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
                                    <a href="injectables/AboutService.html" data-type="entity-link" >AboutService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
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
                                <a href="interfaces/AdministerMedDialogData.html" data-type="entity-link" >AdministerMedDialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConfirmationDialogData.html" data-type="entity-link" >ConfirmationDialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FileUploadDialogData.html" data-type="entity-link" >FileUploadDialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FormControlData.html" data-type="entity-link" >FormControlData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InterdisciplinaryTeamForm.html" data-type="entity-link" >InterdisciplinaryTeamForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MedicalCondition.html" data-type="entity-link" >MedicalCondition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MedicalConditionForm.html" data-type="entity-link" >MedicalConditionForm</a>
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