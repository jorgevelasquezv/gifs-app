import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css',
})
export class LazyImageComponent implements OnInit {
  @Input() public url!: string;

  @Input() public alt: string = '';

  private hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error('Attribute "url" is required');
  }

  public handleLoad(): void {
    this.hasLoaded = true;
  }

  public get showImage(): boolean {
    return this.hasLoaded;
  }
}
