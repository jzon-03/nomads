import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-protein-calc-image',
    templateUrl: './calc-image.component.html',
    styleUrl: './calc-image.component.css',
    standalone: false
})
export class ProteinCalcImageComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public path: string
  ){}
}
