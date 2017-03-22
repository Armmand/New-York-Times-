var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
    'api-key': "715843db19ac400ebf3085dc0e9910b9",
    'q': "Matt Damon"
});
$.ajax({
    url: url,
    method: 'GET',
}).done(function(result) {
    console.log(result);
}).fail(function(err) {
    throw err;
});

for (var i = 0; i>10;i++) {
	var subject=
}