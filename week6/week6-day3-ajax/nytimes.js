var authKey = "e1a39429b751476e9726fd48f7dce10f"

//These variables will hold results fromt he users inputs
var queryTerm = "";
var numResults = 0;
var startYear = 0;
var endYear = 0;

//queryTerm URL
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";

var articleCounter = 0;

function search(numArticles, queryURL){
	$.ajax({url: queryURL, method: "GET"})
		.done(function(queryData) {
			console.log(queryData);
		})
}