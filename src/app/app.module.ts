import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './core/header/header.component'
import { ListComponent } from './pages/list/list.component'
import { DetailComponent } from './pages/detail/detail.component'
import { CardComponent } from './pages/list/card/card.component'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    DetailComponent,
    CardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
