var compt=0
var pseudo = prompt("pseudo")

$(document).ready(function(){
  $('#boutton').click(function() {
     humain();
     setTimeout(bot,500)

  });

  function humain(){
                   var message = $('#message').val();
                   var envoie =$('<p class="lol" ></p>').text(pseudo + " : " + message);
                   $(".bg").append(envoie)
                   $('#message').val("").focus()
                   $(".bg").scrollTop($(".bg").height() + 1000000)
                };
  function bot(){
    var tab = ["bonjour", "salut", "coucou"]
    var ajout =$('<p class="lol2"></p>').text(tab[compt]);
    $(".bg").append(ajout)
    compt++
    $(".bg").scrollTop($(".bg").height() + 1000000)
    if (compt==tab.length){
      compt=0
    }
  };
});

$(document).ready(function(){
  $('#message').keypress(function(e) {
    if (e.keyCode == 13) {
     humain();
     setTimeout(bot,500)

  }
});

  function humain(){
                   var message = $('#message').val();
                   var envoie =$('<p class="lol" ></p>').text(pseudo + " : " + message);
                   $(".bg").append(envoie)
                   $('#message').val("")
                   $(".bg").scrollTop($(".bg").height() + 1000000)
                };

  function bot(){
    var tab = ["bonjour", "salut", "coucou"]
    var ajout =$('<p class="lol2"></p>').text(tab[compt]);
    $(".bg").append(ajout)
    compt++
    $(".bg").scrollTop($(".bg").height() + 1000000)
    if (compt==tab.length){
      compt=0
    }
  };
});
