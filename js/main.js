var compt=0
var pseudo = prompt("pseudo")

// bouton au click
$(document).ready(function(){
  $('#boutton').click(function() {
     humain();
     setTimeout(bot,500)

  });

  function humain(){
            var message = $('#message').val();
            var image=$(".bg").append('<img id="theimg" src="img/personne.png" />')
            var envoie =$('<p class="lol" ></p>').text(message);
            $(".bg").append(envoie)
            $('#message').val("")
            $(".bg").scrollTop($(".bg").height() + 1000000)
            };

  function bot(){
            var tab = ["Bonjour :)", "Ca va bien et toi ?", "Au revoir !"]
            var ajout =$('<p class="lol2"></p>').text(tab[compt]);
            $(".bg").append(ajout)
            compt++
            $(".bg").scrollTop($(".bg").height() + 1000000)
            if (compt==tab.length){
              compt=0
                }
              };
            });

// bouton entrée
$(document).ready(function(){
  $('#message').keypress(function(e) {
    if (e.keyCode == 13) {
     humain();
     setTimeout(bot,500)

  }
});

  function humain(){
                   var message = $('#message').val();
                   var image=$(".bg").append('<img id="theimg" src="img/personne.png" />')
                   var envoie =$('<p class="lol" ></p>').text(message);
                   $(".bg").append(envoie)
                   $('#message').val("")
                   $(".bg").scrollTop($(".bg").height() + 1000000)
                  };

  function bot(){
                  var tab = ["Bonjour :)", "Ca va bien et toi ?", "Au revoir !"]
                  var ajout =$('<p class="lol2"></p>').text(tab[compt]);
                  $(".bg").append(ajout)
                  compt++
                  $(".bg").scrollTop($(".bg").height() + 1000000)
                  if (compt==tab.length){
                    compt=0
                      }
                    };
                  });
