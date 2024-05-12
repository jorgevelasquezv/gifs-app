import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-gif-card',
  templateUrl: './gif-card.component.html',
})
export class GifCardComponent implements OnInit {
  ngOnInit(): void {
    if (!this.gif) throw new Error('GifCardComponent: gif is required');
  }

  @Input() public gif?: Gif;

  public get url(): string {
    return this.gif?.images.original.url ?? '';
  }

  public get title(): string {
    return this.gif?.title ?? '';
  }
}
