import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  constructor(private gifsServices: GifsService ) {}

  @ViewChild('txtTagInput') public tagInput!: ElementRef<HTMLInputElement>;

  public searchTag(): void {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsServices.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
