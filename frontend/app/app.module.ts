import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ApiService } from './api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		FooterComponent
	],
	imports: [
		NgbModule,
		FormsModule,
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
	],
	providers: [
		ApiService
	],
	bootstrap: [AppComponent],
	entryComponents: [ ]
})
export class AppModule { }
