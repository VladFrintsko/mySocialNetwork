fetch("https://bing-news-search1.p.rapidapi.com/news/trendingtopics?safeSearch=Off&textFormat=Raw", {
	"method": "GET",
	"headers": {
		"x-bingapis-sdk": "true",
		"x-rapidapi-key": "9b0ac7227amshf2a86c54234438bp1e0394jsn32fc9c91c980",
		"x-rapidapi-host": "bing-news-search1.p.rapidapi.com"
	}
})
.then(response => {
	return response.json();
})
.then(data => console.log(data))
.catch(err => {
	console.error(err);
});