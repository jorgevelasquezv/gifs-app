import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private gifsServices: GifsService) { }

  public get tags(): string[] {
    return this.gifsServices.tagsHistory;
  }

  public searchTag(tag: string): void {
    this.gifsServices.searchTag(tag);
  }
}
