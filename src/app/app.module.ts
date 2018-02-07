import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';



import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { CompCepComponent } from './comp-cep/comp-cep.component';
import { CepService } from './cep.service';




@NgModule({
  declarations: [
    AppComponent,
    CompCepComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCLYM2MZWbyVCZRlPgPc5qfVxuEpO9P504'})
  ],
  providers: [CepService],
  bootstrap: [AppComponent]
})
export class AppModule { }
