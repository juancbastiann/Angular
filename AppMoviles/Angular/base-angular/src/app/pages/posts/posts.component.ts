import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
//posts: any;
//mensajes: any[] = [];
  mensajes: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.mensajes = this.dataService.getPosts();
  }
}