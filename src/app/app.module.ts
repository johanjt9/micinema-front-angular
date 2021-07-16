import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalasComponent } from './components/salas/salas.component';
import { SalascreateComponent } from './components/salascreate/salascreate.component';
import { MicinemaComponent } from './components/micinema/micinema.component';

@NgModule({
  declarations: [
    AppComponent,
    SalasComponent,
    SalascreateComponent,
    MicinemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
