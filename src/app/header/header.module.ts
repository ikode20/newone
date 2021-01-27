import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './containers/header/header.component';



@NgModule({
  declarations: [SearchComponent, HeaderComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
