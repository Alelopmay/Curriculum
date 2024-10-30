import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  private _isLoggedIn: boolean = false;
  isAjustVisible = false;

  // Controlar si el menú está colapsado
  isNavbarCollapsed = true;

  constructor(private router: Router) { }

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  @Input()
  set isLoggedIn(value: boolean) {
    this._isLoggedIn = value;
  }

  @Output() toggleAjust = new EventEmitter<void>(); // Emitimos el evento hacia el AppComponent
  @Output() closeNav = new EventEmitter<void>();
}
