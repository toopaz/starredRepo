## Front-end coding challenge

## Idea of the App
The task is to implement a small webapp that will list the most starred Github repos that were created in the last 30 days. You'll be fetching the sorted JSON data directly from the Github API (Github API explained down below).

## Features
 As a User I should be able to list the most starred Github repos that were created in the last 30 days.  
 As a User I should see the results as a list. One repository per row.  
 As a User I should be able to see for each repo/row the following details :  
Repository name  
Repository description  
Number of stars for the repo.  
Number of issues for the repo.  
Username and avatar of the owner.  
 As a User I should be able to keep scrolling and new results should appear (pagination).  
How to get the data from Github  
To get the most starred Github repos created in the last 30 days, you'll need to call the following endpoint :   https://api.github.com/search/repositories?q=created:>2020-08-04&sort=stars&order=desc The JSON data from Github will be paginated (you'll receive around 100 repos per JSON page). To get the 2nd page, you add &page=2 to the end of your API request : https://api.github.com/search/repositories?q=created:>2020-07-04&sort=stars&order=desc&page=2 To get the 3rd page, you add &page=3 ... etc You can read more about the Github API over here.

## Technologies Used in Project
Angular  
Bootstrap  
ngx-infinite-scroll  
Github API  
Moment.js  
git clone https://github.com/toopaz/starredRepo.git  

## How it works
 
npm install  
Running the app   
To get the app up and running run :  
ng serve   

The project will be available at : http://localhost:42000.
