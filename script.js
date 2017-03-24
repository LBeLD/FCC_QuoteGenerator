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
    var colors = ['#C63D0F','#3B3738','#FFE658','#7E8F7C','#005A31','#A8CD1B','#CBE32D','#F3FAB6','#000000','#2B2B2B','#DE1B1B','#E9E581','#4A96AD','#E44424','#67BCDB'];
    var randomPicker = Math.floor(Math.random()*colors.length);
    $('body').css('background-color', colors[randomPicker]);
    $('button').css('background-color', colors[randomPicker]);
  }
//add button event New Quote Button handler
$('#newQuote').on('click', getNewQuote);
$('#newQuote').on('click', colorChanger);

//add share Twitter button event handler;
$('#tweet').on('click', function(){
  window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + quote + '" -- ' + author));
})

});
