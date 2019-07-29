import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() {
    // to have required params:
    this.route.paramMap.subscribe();
    // or:  
    // let id = this.route.snapshot.paramMap.get('id');

    //to have optional params:
    this.route.queryParamMap.subscribe();
    // or:
    //let pageNumber = this.route.snapshot.queryParamMap.get('pageNumber')


    this.service.getAll()
      .subscribe(followers => this.followers = followers);
  }
}
