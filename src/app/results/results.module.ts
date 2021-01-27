import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './containers/results/results.component';
import { ResultAccordionComponent } from './components/result-accordion/result-accordion.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ResultsComponent, ResultAccordionComponent],
  imports: [
    CommonModule,
    NgbAccordionModule
  ],
  exports: [
    ResultsComponent
  ]
})
export class ResultsModule { }
