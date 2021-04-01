import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-swiftview',
  templateUrl: './swiftview.component.html',
  styleUrls: ['./swiftview.component.css'],
})
export class SwiftviewComponent implements OnInit, AfterViewInit {
  selectedIndex: number;
  isOpen: boolean;
  isClose: boolean;
  isRunning: boolean;
  timeoutId: number;
  isEditing: boolean;
  @ViewChild('search') search;

  constructor(private titleService: Title) {
    this.selectedIndex = 0;
    this.isOpen = false;
    this.isClose = false;
    this.isRunning = false;
    this.isEditing = false;
    titleService.setTitle(
      'SwiftView - View, convert, print and manage your documents'
    );
  }

  onSelected(index: number, event: MouseEvent): void {
    event.preventDefault();
    this.selectedIndex = index;
  }

  showSearch(): void {
    if (!this.isOpen) {
      this.isOpen = true;
      this.search.nativeElement.classList.add('open');
    }
  }

  hideSearch(): void {
    this.isEditing = false;
    if (this.isClose) {
      this.isClose = false;
      setTimeout(() => {
        this.search.nativeElement.classList.add('close');
      }, 3000);
    } else {
      this.isRunning = true;
    }
  }

  ngAfterViewInit(): void {
    this.search.nativeElement.addEventListener('mouseenter', () => {
      clearTimeout(this.timeoutId);
      this.isEditing = true;
    });
    this.search.nativeElement.addEventListener('animationend', (event) => {
      if (event.animationName === 'close') {
        this.isOpen = false;
        this.search.nativeElement.classList.remove('close');
        this.search.nativeElement.classList.remove('open');
      } else {
        this.isClose = true;
        if (!this.isEditing) {
          this.timeoutId = setTimeout(() => {
            this.search.nativeElement.classList.add('close');
          }, 2000);
        }
        if (this.isRunning) {
          this.isRunning = false;
          this.search.nativeElement.classList.add('close');
        }
      }
    });
  }

  ngOnInit(): void {}
}
