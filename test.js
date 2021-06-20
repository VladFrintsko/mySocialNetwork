fetch("https://billboard-api2.p.rapidapi.com/hot-100?date=2021-06-19&range=1-10", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "9b0ac7227amshf2a86c54234438bp1e0394jsn32fc9c91c980",
		"x-rapidapi-host": "billboard-api2.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});