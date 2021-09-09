import { environment } from './../../../environments/environment.prod';
import { PostsService } from './../../service/posts.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Postagem } from './../../model/Postagem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-delete',
  templateUrl: './post-delete.component.html',
  styleUrls: ['./post-delete.component.css']
})
export class PostDeleteComponent implements OnInit {
  postagem: Postagem = new Postagem()
  idPost: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostsService
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/login'])
    }

    this.idPost = this.route.snapshot.params['id']
    this.findByIdPost(this.idPost)
  }

  findByIdPost(id: number){
    this.postService.getByIdPost(id).subscribe((resp: Postagem) => {
      this.postagem = resp
    })
  }

  deletar(){
    this.postService.deletePostagem(this.idPost).subscribe(() => {
      alert('Post deletado')
      this.router.navigate(['/tema'])
    })
  }

}
