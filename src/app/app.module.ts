import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './pages/Dashboard/dashboard/dashboard.component';
import { MinhaCarteiraComponent } from './pages/MinhaCarteira/minha-carteira/minha-carteira.component';
import { ativoService } from './services/ativoService'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MinhaCarteiraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    DashboardComponent,
    NgbModule
  ],
  providers: [
    ativoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
