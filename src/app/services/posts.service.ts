import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ResponsePosts } from '../interfaces/interfaces';

const URL=environment.url;
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  paginaPosts=0;
  constructor(private http:HttpClient) { }

  getPosts(){
    this.paginaPosts++;
    let headers=new HttpHeaders({
      'x-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVlOWFjOWE4ZWU2M2E3Mzk2NGRjMjI1MyIsIm5hbWUiOiJKdWFuIFBlcmV6IFBlcmVpcmEiLCJlbWFpbCI6ImRvdWdsYXNAaG90bWFpbC5jb20iLCJhdmF0YXIiOiJhdi0xLnBuZyJ9LCJpYXQiOjE1ODczNTA5ODIsImV4cCI6MTU4OTk0Mjk4Mn0.UlwVuj7pjXFbubdwdRdZI4Qirgy3aS4bQGjuzf9gHPM"
    });
    return this.http.get<ResponsePosts>(`${URL}/posts/?pagina=${this.paginaPosts}`, {headers:headers});
  }
}
