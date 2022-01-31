var len;
var results = '';
var imgSize = 800;

function changeBG(){
  console.log('changing bg');
  $('body').css('background-image', 'url(' + 'https://picsum.photos/' + imgSize + ')')
  if(imgSize == 800) imgSize = 1000
  else imgSize = 800
}

function getTime(){
var today = new Date();
var date = today.getHours()+':'+today.getMinutes();
var timep = "<p class='text-center'> Current Time " + date + "</p>"
$('#time').html(timep);
$('#time').dialog();
}

function lucky(){
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
      beforeSend: function (xhrObj) {
        xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "d53cbe0b763545e6a6916dd2396a9835");
      },
      type: "GET",
    })
    .done(function (data) {
      window.location.href = data.webPages.value[0].url;
    })
    .fail(function () {
      alert("error");
    });
}

function apiSearch() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
      beforeSend: function (xhrObj) {
        xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "d53cbe0b763545e6a6916dd2396a9835");
      },
      type: "GET",
    })
    .done(function (data) {
      len = data.webPages.value.length;
      for (i = 0; i < len; i++) {
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
      }

      $('#searchResults').html(results);
      $('#searchResults').dialog();
    })
    .fail(function () {
      alert("error");
    });
}