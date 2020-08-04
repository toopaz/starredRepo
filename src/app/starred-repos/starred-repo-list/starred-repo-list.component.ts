import { RepoService } from './../../service/repo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starred-repo-list',
  templateUrl: './starred-repo-list.component.html',
  styleUrls: ['./starred-repo-list.component.css']
})
export class StarredRepoListComponent implements OnInit {

  repos: any;
  page: number = 1;
  repolist: Array<any> = [];


  constructor(private repoService: RepoService) { }

  ngOnInit(): void {
    this.getRepos();
  }

  // load Repos
  getRepos(){
    this.repoService.getStarredRepo(this.page).subscribe(
      (starredRepoList) => {
        this.repos = starredRepoList['items']; //get items from data
        this.repolist.push(this.repos); // push items in another list when we load more data on scroll
      }
    )
  }

  onScroll() {
    this.page++;
    this.getRepos();
   }

}
