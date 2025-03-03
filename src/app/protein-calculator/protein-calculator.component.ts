import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ProteinCalcImageComponent } from './protein-calc-image/protein-calc-image.component';

interface SeasonNode{
  season: number,
  title: string,
  buildings: SeasonBuildings
}

interface SeasonBuildings{
  seasonBuilding1: string,
  seasonBuilding2: string,
  seasonBuilding3: string,
  seasonBuilding4: string,
  seasonBuilding5: string,
}

const calcData: SeasonNode[] = [
  {
    season: 1,
    title: 'Protein Farm Calculator',
    buildings:
      {
        seasonBuilding1: "Protein Farm I",
        seasonBuilding2: "Protein Farm II",
        seasonBuilding3: "Protein Farm III",
        seasonBuilding4: "Protein Farm IV",
        seasonBuilding5: "Protein Farm Weekly Pass",
      }
  },
  {
    season: 2,
    title: 'Protein Farm Calculator',
    buildings:
      {
        seasonBuilding1: "Titanium Alloy Factoy No.1",
        seasonBuilding2: "Titanium Alloy Factoy No.2",
        seasonBuilding3: "Titanium Alloy Factoy No.3",
        seasonBuilding4: "Titanium Alloy Factoy No.4",
        seasonBuilding5: "Titanium Alloy Factoy Weekly Pass",
      }
  },
  {
    season: 1,
    title: 'Protein Farm Calculator',
    buildings:
      {
        seasonBuilding1: "Protein Farm I",
        seasonBuilding2: "Protein Farm II",
        seasonBuilding3: "Protein Farm III",
        seasonBuilding4: "Protein Farm IV",
        seasonBuilding5: "Protein Farm Weekly Pass",
      }
  }
]

@Component({
  selector: 'app-protein-calculator',
  templateUrl: './protein-calculator.component.html',
  styleUrls: ['./protein-calculator.component.css'] // Corrected key name
})
export class ProteinCalculatorComponent implements OnInit {

  season1 = {
    title: 'Protein Farm Calculator',
    buildings:
      {
        seasonBuilding1: "Protein Farm I",
        seasonBuilding2: "Protein Farm II",
        seasonBuilding3: "Protein Farm III",
        seasonBuilding4: "Protein Farm IV",
        seasonBuilding5: "Protein Farm Weekly Pass",
      }
  }

  season2 = {
      title: 'Protein Farm Calculator',
      buildings:
        {
          seasonBuilding1: "Titanium Alloy Factoy No.1",
          seasonBuilding2: "Titanium Alloy Factoy No.2",
          seasonBuilding3: "Titanium Alloy Factoy No.3",
          seasonBuilding4: "Titanium Alloy Factoy No.4",
          seasonBuilding5: "Titanium Alloy Factoy Weekly Pass",
        }
  }

  selectedSeason!: SeasonNode;

  proteinForm: FormGroup;
  totalOutput = 0;
  hours: number = 0;
  completionTime?: Date; // To store the calculated completion date and time
  

  private readonly localStorageKey = 'proteinFormValues';

  calcData = calcData;

  constructor(
    private fb: FormBuilder,
    private _dialog: MatDialog
  ) {
    this.proteinForm = this.fb.group({
      pfi: [0],
      pfii: [0],
      pfiii: [0],
      pfiv: [0],
      pfWP: [0],
      currentP: [0],
      requiredP: [0]
    });
  }

  ngOnInit(): void {
    const savedValues = localStorage.getItem(this.localStorageKey);
    if (savedValues) {
      this.proteinForm.patchValue(JSON.parse(savedValues));
      this.updateTotalOutput();
    }

    const season = localStorage.getItem("season");
    if(season){
      this.selectedSeason = JSON.parse(season);
    }else{
      console.log(this.calcData[0])
      this.selectedSeason = this.calcData[0];
      localStorage.setItem("season", JSON.stringify(this.selectedSeason));
    }

    this.proteinForm.valueChanges.subscribe(() => {
      this.updateTotalOutput();
      this.saveFormValues();
    });
  }

  setLocalStorage(){
    console.log(this.selectedSeason)
  }

  private updateTotalOutput(): void {
    const { pfi, pfii, pfiii, pfiv, pfWP, currentP, requiredP } = this.proteinForm.value;
    this.totalOutput = pfi + pfii + pfiii + pfiv + pfWP;

    let deltaP = requiredP - currentP;
    this.hours = this.totalOutput > 0 ? deltaP / this.totalOutput : 0;

    // Calculate the completion time if hours is valid
    if (this.hours > 0) {
      const currentTime = new Date();
      this.completionTime = new Date(currentTime.getTime() + this.hours * 3600000);
    } else {
      this.completionTime = undefined;
    }
  }

  private saveFormValues(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.proteinForm.value));
  }

  setAlarm(): void {
    if (this.completionTime) {
      const alarmTime = this.completionTime.toLocaleString();
      alert(`Alarm set for ${alarmTime}`);
    } else {
      alert('Invalid completion time. Please check your input.');
    }
  }

  clearForm(){
    if(window.confirm("Are you sure you want to clear form?")){
      this.proteinForm.reset();
    }
  }

  openDialog(path: string){
    this._dialog.open(ProteinCalcImageComponent, {
      data: path
    })
  }
}
