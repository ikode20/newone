import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';


const YODA_API = 'https://api.funtranslations.com/translate/yoda.json'

@Injectable({
  providedIn: 'root'
})
export class YodaTranslationService {

  constructor(private http: HttpClient) { }

  fetch(text: string): Observable<string> {
    const params = new HttpParams()
      .set('text', text);

    return this.http.get<string>(YODA_API, { params }).pipe(pluck('contents', 'translated'));
  }
}
