
/*global $ APIKEY*/
$(document).ready(function () {
    $.ajax({
        method: "GET",
        url: "https://newsapi.org/v2/sources",
        data: { category: "technology", language: "en", country: "us",  apiKey: APIKEY},
        success: function(data){
            if(data.status == "ok") {
                console.log(data)
                for (var i = 0; i < data.sources.length; i++) {
                    var source = document.createElement("OPTION");
                    source.setAttribute("value", data.sources[i].id)
                    source.innerHTML = data.sources[i].name;
                    document.getElementById("selection").appendChild(source)
                }
            }
        }
        
    })

        $('#source').submit(function(event) {
            event.preventDefault();
            $.ajax({
                method: "GET",
                url: "https://newsapi.org/v2/top-headlines",
                data: { sources: document.getElementById("selection").value, apiKey: APIKEY},
                success: function(data) {
                    if(data.status == "ok") {
                        for (var i = 0; i < data.articles.length; i++) {
                            var h = document.createElement("H1");
                            h.innerHTML = data.articles[i].title;
                            document.getElementById("headlines").appendChild(h);
                        }    
                    }
                }
            })
        });
})