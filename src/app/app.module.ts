import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerateCatalogueComponent } from './components/generate-catalogue/generate-catalogue.component';
import { HttpClientModule} from '@angular/common/http'
import { NgxUiLoaderModule, NgxUiLoaderService } from 'ngx-ui-loader';

@NgModule({
  declarations: [
    AppComponent,
    GenerateCatalogueComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxUiLoaderModule
  ],
  providers: [NgxUiLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
