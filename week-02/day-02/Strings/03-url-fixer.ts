'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

function modifieUrl(url:string){
   let urlArray: string[] = url.split("/");
   urlArray[4] = "nevertellmetheodds";
   urlArray[0] = urlArray[0] + ":";
   url = urlArray.join("/");
   return url;

   
};

console.log(modifieUrl(url))