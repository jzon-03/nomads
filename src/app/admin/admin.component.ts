import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddMemberDialogComponent } from '../add-member-dialog/add-member-dialog.component';
import { MemberService } from '../member.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.css',
    standalone: false
})
export class AdminComponent implements OnInit {

    members: any;
    pw="46";
    allowed = false;
    isAscending: boolean = false; // Default to descending (R5 -> R1)

    constructor(
        private _dialog: MatDialog,
        private _membersService: MemberService,
        private _snackbar: MatSnackBar
    ){}

    ngOnInit(): void {
        this.getMembers();
    }

    toggleSortOrder() {
        this.isAscending = !this.isAscending;
        this.members = this.sortMembersByRank(this.members, this.isAscending);
      }
    
      sortMembersByRank(members: any[], ascending: boolean): any[] {
        const rankOrder: any = { R5: 5, R4: 4, R3: 3, R2: 2, R1: 1 };
    
        return members.sort((a, b) => {
          const rankA = rankOrder[a.Rank] || 0;
          const rankB = rankOrder[b.Rank] || 0;
          return ascending ? rankA - rankB : rankB - rankA; // Ascending or Descending
        });
      }

    getMembers(){
        this._membersService.get764Members().subscribe({
            next:(res)=>{
                this.members = res;
                console.log(res)
            }
        })
    }

    submit(pw: string){
        if(pw == "46"){
            this.allowed = true;
        }
    }
    
    addMember(){
        const dialogRef = this._dialog.open(AddMemberDialogComponent);

        dialogRef.afterClosed().subscribe({
            next:(res)=>{
                this.getMembers();
            }
        })
    }

    updateMemberRank(rank: string, id: number){
        const memberToUpdate = {
            MemberId: id,
            Rank: rank
        };

        this._membersService.updateRank(memberToUpdate).subscribe({
            next:(res)=>{
                console.log(res);
                this.getMembers();
            }
        });
    }

    deleteMember(id: number){
        if(confirm("Are you sure you want to delete member?")){
            const memberToDelete = {
                MemberId: id
            };
            
            this._membersService.updateRank(memberToDelete).subscribe({
                next:(res)=>{
                    console.log(res);
                    this.getMembers();
                    this._snackbar.open("Member deleted!", "Dismiss", {
                        duration: 4000
                    })
                }
            });
        }
    }
}
