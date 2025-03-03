import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import * as members from '../../assets/members.json';

// Define the structure of a Member
interface Alliance {
  AllianceId: string;
  AllianceCode: string;
  AllianceName: string;
}

interface Member {
  MemberId: string;
  UserName: string;
  UID: string | null;
  Rank: string;
  Alliance: Alliance;
}

@Component({
    selector: 'app-members',
    templateUrl: './members.component.html',
    styleUrls: ['./members.component.css'],
    standalone: false
})
export class MembersComponent implements OnInit {
  leader: any;
  ranks: any;
  r4Members: Member[] = [];
  r3Members: Member[] = [];
  r2Members: Member[] = [];
  r1Members: Member[] = [];

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.leader = members.leader;
    this.ranks = members.ranks;
    this.memberService.get764Members().subscribe(data => {
      const result = Object.values(data);
      this.r4Members = this.filterRankR4(result);
      this.r3Members = this.filterRankR3(result);
      this.r2Members = this.filterRankR2(result);
      this.r1Members = this.filterRankR1(result);
    });
  }

  // Function to filter members with Rank "R4"
  filterRankR4(members: Member[]): Member[] {
    return members.filter(member => member.Rank === "R4");
  }

  // Function to filter members with Rank "R3"
  filterRankR3(members: Member[]): Member[] {
    return members.filter(member => member.Rank === "R3");
  }

  // Function to filter members with Rank "R3"
  filterRankR2(members: Member[]): Member[] {
    return members.filter(member => member.Rank === "R2");
  }

  // Function to filter members with Rank "R3"
  filterRankR1(members: Member[]): Member[] {
    return members.filter(member => member.Rank === "R1");
  }
}
