import { HttpClientModule } from '@angular/common/http';
import { RepoService } from './service/repo.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarredReposComponent } from './starred-repos/starred-repos.component';
import { StarredRepoListComponent } from './starred-repos/starred-repo-list/starred-repo-list.component';
import { StarredRepoItemComponent } from './starred-repos/starred-repo-list/starred-repo-item/starred-repo-item.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    StarredReposComponent,
    StarredRepoListComponent,
    StarredRepoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [RepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
