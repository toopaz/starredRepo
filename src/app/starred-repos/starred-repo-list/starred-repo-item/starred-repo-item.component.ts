import { StarredRepo } from './../../starredRepo.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-starred-repo-item',
  templateUrl: './starred-repo-item.component.html',
  styleUrls: ['./starred-repo-item.component.css']
})
export class StarredRepoItemComponent implements OnInit {
  @Input() starredRepo;
  public _MS_PER_DAY = 1000 * 60 * 60 * 24;
  diff: number;
  diffDays: number;

  constructor() { }

  ngOnInit(): void {
    this.diff = Date.now() - +(new Date(this.starredRepo.created_at));
    this.diffDays = Math.floor(this.diff / this._MS_PER_DAY);
  }

}
