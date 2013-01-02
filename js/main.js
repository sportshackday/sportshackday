$(document).ready(function () {

function getTweets() {
  $(".tweets").miniTwitter({
    query: "#sportshackday OR @sportshackday OR sportshackday.com",
    limit: 10
  });
}

// populate tweets imperatively
getTweets();

// timer to update tweets every 10 seconds
setInterval(function(){ getTweets(); }, 10000);
});