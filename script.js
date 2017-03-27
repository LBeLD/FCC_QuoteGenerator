$(document).ready(function(){
  var quote;
  var author;
  //AJAX request
  function getNewQuote (){
    $.ajax({
      url:'http://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp'
      },
      //in case of success callback function
      success: function(response){
        quote = response.quoteText;
        author = response.quoteAuthor;
        $('#quote').text(quote);
        if (author){
          $('#author').text(author);
        } else {
          $('#author').text('unknow');
        }
      }

    });
  }
  //run function to get quote when page is loaded
  getNewQuote();
  //random color picker function
  function colorChanger (){
    var colors = ['#161718','#064507','#025ba1','#d52d2d','#c8bc1b','#7c1e78','#046f6f','#d0990b','#3c303e','#303c70','#9a2525','#4e3582','#416b44','#725777'];
    var randomPicker = Math.floor(Math.random()*colors.length);
    $('body').css('background-color', colors[randomPicker]);
    $('#newQuote').css('color', colors[randomPicker]);
    $('#tweet').css('color', colors[randomPicker]);
  }
//add button event New Quote Button handler
$('#newQuote').on('click', getNewQuote);
$('#newQuote').on('click', colorChanger);

//add share Twitter button event handler;
$('#tweet').on('click', function(){
  window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + quote + '" -- ' + author));
})

});
