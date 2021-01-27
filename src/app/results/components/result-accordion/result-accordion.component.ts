import { Component, OnInit, Input } from '@angular/core';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject } from 'rxjs';
import { YodaTranslationService } from 'src/app/services/translation/yoda-translation.service';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'app-result-accordion',
  templateUrl: './result-accordion.component.html',
  styleUrls: ['./result-accordion.component.css']
})
export class ResultAccordionComponent implements OnInit {

  @Input() movie: Movie;

  yodaTranslation$ = new BehaviorSubject<string>('');

  constructor(private translationService: YodaTranslationService) { }

  ngOnInit(): void {
  }

  getTranslation(acc:NgbAccordion, toTranslate: string) {
    if (acc.isExpanded('movie-accordion')){
      return;
    }

    this.translationService.fetch(toTranslate)
      .subscribe(translated => {
        this.yodaTranslation$.next(translated);
        acc.expand('movie-accordion');
      },
      error => {
        console.log('translation error', error);
        this.yodaTranslation$.next('Translation not found.');
        acc.expand('movie-accordion');
      }
    );
  }

}
