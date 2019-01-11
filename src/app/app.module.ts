import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './containers/main/main.component';
import { ItemComponent } from './components/item/item.component';
import { HeaderComponent } from './containers/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { LibraryService } from './shared/services/library.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardsService } from './shared/guards/auth-guards.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ItemComponent,
    HeaderComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    LibraryService,
    AuthGuardsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
