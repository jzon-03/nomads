import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-add-member-dialog',
  templateUrl: './add-member-dialog.component.html',
  styleUrls: ['./add-member-dialog.component.css'],
  standalone: false
})
export class AddMemberDialogComponent {
  memberForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddMemberDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private _membersService: MemberService
  ) {
    this.memberForm = this.fb.group({
      UserName: ['', Validators.required],
      UID: ['0000', [Validators.required]],
      AllianceId: ['1', Validators.required],
      Rank: ['', Validators.required],
      HQLevel: ['', [Validators.required, Validators.min(1)]],
      Description: ['']
    });
  }

  submit() {
    if (this.memberForm.valid) {
      this._membersService.insertMember(this.memberForm.value).subscribe({
        next:(res)=>{
          this.dialogRef.close(res);
        },
        error:(err)=>{
          console.log("Server error!");
        }
      })
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
