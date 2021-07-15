var plus = document.querySelectorAll('.plus');
var counter = document.querySelectorAll('.counter');
var minus = document.querySelectorAll('.minus');

for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', function () {
     if (counter[i].innerText < 5) counter[i].innerText++;
     total();
    });
  
    minus[i].addEventListener('click', function () {
      if (counter[i].innerText > 1) counter[i].innerText--;
      total();
    });
  }


  var removeiteminchart = document.querySelectorAll('.remove')
  for (let i = 0; i <removeiteminchart.length; i++) {
      removeiteminchart[i].addEventListener('click',function(){
        removeiteminchart[i].parentElement.parentElement.remove()
        total();
      })
  }

  function total() {
    var quant = document.querySelectorAll('.counter')
    var prixitem = document.querySelectorAll('.price')
    var prixtotal = document.querySelector('.prixTotal')
    var sum = 0
    for (let i=0; i < quant.length; i++) {
      sum+= quant[i].innerText * prixitem[i].innerText;
    }
    prixtotal.innerText = sum;
  }
  total();


    var btnlike = document.getElementsByClassName('heart')
    var like = document.querySelectorAll('.fa-heart')

    for (let i=0; i < btnlike.length; i++) {
      btnlike[i].addEventListener('click',function() {
        if (like[i].style.color == "rgb(255, 77, 77)") like[i].style.color = "black"
        else like[i].style.color = "rgb(255, 77, 77)"

      })
    }