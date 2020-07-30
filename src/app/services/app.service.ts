import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'; 
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map'; 
import { Post } from './post'; 

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = 'http://localhost:3001/'; 

  constructor(private http: Http) { }

  fetch(slug): Observable<Post> {
    return this.http
                .get(`${this.url}posts/${slug}`)
                .map(res => res.json().post); 
  }

  fetchAll(): Observable<Post[]> {
    return this.http
                .get(`${this.url}posts`)
                .map(res => res.json().posts); 
  }

  fetchServer() {
    return this.http.get(this.url)
  }

  save(title: string, body: string): Observable<Post> {
    
    const data = JSON.stringify({ title, body}); 
    let headers = new Headers(); 
    headers.append('Content-Type', 'application/json'); 
    const options = new RequestOptions({ headers }); 

    return this.http
                .post(`${this.url}posts`, data, options)
                .map(res => res.json()); 
  }
}
