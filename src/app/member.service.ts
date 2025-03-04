import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private url = '/src/assets/members.json';

  constructor(private http: HttpClient) {}

  getMembers(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  get764Members(){
    return this.http.get('https://api.sharpfloornc.com/members.php');
  }
  
  insertMember(body: any){
    return this.http.post('https://api.sharpfloornc.com/insert_member.php', body);
  }

  updateRank(body: any){
    return this.http.post('https://api.sharpfloornc.com/update_member_rank.php', body);
  }
}
