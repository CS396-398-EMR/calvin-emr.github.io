var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"appRoutes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","redirectTo":"PATH_LOGIN","pathMatch":"full"},{"path":"PATH_LOGIN","component":"LoginComponent","canActivate":["LoginGuard"]},{"path":"PATH_FORGOT_PASSWORD","component":"ForgotPasswordComponent"},{"path":"PATH_PATIENTS","component":"PatientListComponent","canActivate":["AuthGuard"]},{"path":"PATH_STUDENTS","component":"StudentListComponent","canActivate":["AuthGuard"]},{"path":":collection/:id","component":"PatientDashboardComponent","canActivate":["AuthGuard"]},{"path":"PATH_CREATE_PATIENT","component":"CreatePatientComponent","canActivate":["AuthGuard","AdminGuard"]},{"path":"edit-patient/:id","component":"CreatePatientComponent","canActivate":["AuthGuard","AdminGuard"]},{"path":"PATH_MEDICATIONS","component":"MedicationListComponent","canActivate":["AuthGuard","AdminGuard"]},{"path":"PATH_ABOUT_US","component":"AboutUsComponent"},{"path":"PATH_PAGE_NOT_FOUND","component":"PageNotFoundComponent"},{"path":"**","redirectTo":"PATH_PAGE_NOT_FOUND"}],"kind":"module"},{"name":"routes","filename":"src/app/settings/settings-routing.module.ts","module":"SettingsRoutingModule","children":[{"path":"PATH_SETTINGS","component":"SettingsComponent","canActivateChild":["AuthGuard"],"children":[{"path":"","component":"SettingsProfileComponent"},{"path":"PATH_SETTINGS_GENERAL","component":"SettingsGeneralComponent"},{"path":"PATH_SETTINGS_HELP","component":"SettingsHelpComponent"},{"path":"PATH_CHANGE_PASSWORD","component":"ChangePasswordComponent"}]},{"path":"PATH_CHANGE_PASSWORD","component":"ChangePasswordComponent"}],"kind":"module"}]}