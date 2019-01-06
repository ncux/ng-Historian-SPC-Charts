import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  headers = new HttpHeaders({
    'Authorization': `Bearer ${environment.access_token}`,
  });

  public tagsArray = [];

  private tagsUrl = environment.tagsUrl;
  private staticTags = `assets/data/tags - verbose.json`;

  constructor(private http: HttpClient) { }

  getAllTags() {
    return this.http.get<string[]>(this.staticTags, { headers: this.headers }).subscribe(data => {
      const tags = data['Tags'];
      tags.map(tag => {
        const allTags = tag.Tagname;
        this.tagsArray.push(allTags);
        // console.log(allTags);
        return this.tagsArray;
      });
    });
  }



}
