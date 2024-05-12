import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  public gifs: Gif[] = [];
  private _tagsHistory: string[] = [];
  private apiKey: string = 'QvNkVULuMmG31s9itgQJpQAk5c3gmUHE';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
    this.readLocalStorage();
    if (this._tagsHistory.length > 0)
      this.searchTag(this._tagsHistory[0] || '');
  }

  public get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  private organizeTagsHistory(tag: string): void {
    tag = tag.toLowerCase();

    this._tagsHistory.unshift(tag);

    this._tagsHistory = [...new Set(this._tagsHistory)];
    this._tagsHistory = this._tagsHistory.slice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private readLocalStorage(): void {
    const history = localStorage.getItem('history');
    if (history) {
      this._tagsHistory = JSON.parse(history);
    }
  }

  public searchTag(tag: string): void {
    if (tag.trim().length === 0) return;

    this.organizeTagsHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', '10');

    this.http
      .get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((response: SearchResponse) => {
        this.gifs = response.data;
      });
  }
}
