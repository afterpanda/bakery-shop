$(document).ready(function(){

  var cart =[];

  var selectedItem = {
    'name':"Maple Apple Pecan",
    'type':"Single Roll",
    'flavor':[],
    'value':1,
  };


  loadCart();
  listCart();
  displayCart();

  console.log(cart.length);

  function saveCart(){
    localStorage.setItem("shoppingCart",JSON.stringify(cart));
  };

  function loadCart(){
    cart = JSON.parse(localStorage.getItem("shoppingCart"));
    if (cart == null) {
      cart =[];
    }
  };

  function listCart(){
    var cartCopy = [];
    for (var i in cart){
      var item = cart[i];
      var itemCopy = {};
      for (var p in item) {
        itemCopy[p] = item[p];
      }
      cartCopy.push(itemCopy);
    }
    return cartCopy;

  };

  function clearCart(){
    cart = [];
  };

  function displayCart(){
    var cartArray = listCart();
    var cartItem = cartArray[0];
    var imageSrc = '';
    var price = null;
    var orderPrice = 0;
    var totalPrice = 0;

    for(var i in cartArray){

      if (cartArray[i].type == "Single Roll") {
        imageSrc = 'assets/product10@2x.png';
        price = 4.99;
      }else if(cartArray[i].type == "6 Packs"){
        imageSrc = 'assets/product1@2x.png';
        price = 15.99;
      }else if(cartArray[i].type == "12 Packs"){
        imageSrc = 'assets/product6@2x.png';
        price = 19.99;
      }

      orderPrice += price;
      totalPrice = orderPrice + 5;

      var replaceHtml1 = "<div class='cart-item' id = 'cart-item"+ i +"'><div class='item-image'><img src=" + imageSrc + " alt='item-image' ></div><div class='item-detail'><div class='item-detail-left'>";
      var replaceName = "<h6>"+ cartArray[i].name +"</h6>";
      var replaceType = "<p>Type: "+ cartArray[i].type +"</p>";
      var replaceFlavor = "<p>Flavor: "+ cartArray[i].flavor +"</p>";
      var replaceValue = "<p>Number: "+ cartArray[i].value +"</p>";
      var replacePrice = "<h6> $"+ price +"</h6>";
      var replaceHtml2 = "<a class='remove-button' id = 'remove" + i + "'>REMOVE</h6></div><div class='item-detail-right'>"
      var replaceTotal = "<h6>Total: $ "+ price * cartArray[i].value +"</h6>"+"</div></div></div>";

      var replaceTextAll = replaceHtml1 + replaceName + replaceType + replaceFlavor + replaceValue + replacePrice + replaceHtml2 + replaceTotal;

      $(".column-2").append(replaceTextAll);
      $('#image-detail-page').attr('src',imageSrc);
    }
    $("#order-value").html("$" + orderPrice);
    $("#total-value").html("$" + totalPrice);

  };



  function disableFlavors(){
    $("#flavor-1").addClass("flavor-item-disabled");
    $("#flavor-2").addClass("flavor-item-disabled");
    $("#flavor-3").addClass("flavor-item-disabled");
    $("#flavor-4").addClass("flavor-item-disabled");
    $("#flavor-5").addClass("flavor-item-disabled");
    $("#flavor-6").addClass("flavor-item-disabled");
    $("#flavor-7").addClass("flavor-item-disabled");
    $("#flavor-8").addClass("flavor-item-disabled");
    $("#flavor-9").addClass("flavor-item-disabled");
    $("#flavor-10").addClass("flavor-item-disabled");
    $("#flavor-11").addClass("flavor-item-disabled");
    $("#flavor-12").addClass("flavor-item-disabled");
    $("#flavor-13").addClass("flavor-item-disabled");
    $("#flavor-14").addClass("flavor-item-disabled");
    $("#flavor-15").addClass("flavor-item-disabled");
    $("#flavor-1").removeClass("flavor-item");
    $("#flavor-2").removeClass("flavor-item");
    $("#flavor-3").removeClass("flavor-item");
    $("#flavor-4").removeClass("flavor-item");
    $("#flavor-5").removeClass("flavor-item");
    $("#flavor-6").removeClass("flavor-item");
    $("#flavor-7").removeClass("flavor-item");
    $("#flavor-8").removeClass("flavor-item");
    $("#flavor-9").removeClass("flavor-item");
    $("#flavor-10").removeClass("flavor-item");
    $("#flavor-11").removeClass("flavor-item");
    $("#flavor-12").removeClass("flavor-item");
    $("#flavor-13").removeClass("flavor-item");
    $("#flavor-14").removeClass("flavor-item");
    $("#flavor-15").removeClass("flavor-item");
    $("#flavor-1").removeClass("flavor-item-active");
    $("#flavor-2").removeClass("flavor-item-active");
    $("#flavor-3").removeClass("flavor-item-active");
    $("#flavor-4").removeClass("flavor-item-active");
    $("#flavor-5").removeClass("flavor-item-active");
    $("#flavor-6").removeClass("flavor-item-active");
    $("#flavor-7").removeClass("flavor-item-active");
    $("#flavor-8").removeClass("flavor-item-active");
    $("#flavor-9").removeClass("flavor-item-active");
    $("#flavor-10").removeClass("flavor-item-active");
    $("#flavor-11").removeClass("flavor-item-active");
    $("#flavor-12").removeClass("flavor-item-active");
    $("#flavor-13").removeClass("flavor-item-active");
    $("#flavor-14").removeClass("flavor-item-active");
    $("#flavor-15").removeClass("flavor-item-active");
    $("#flavor-16").removeClass("flavor-item-active");

  };

  function enableFlavors(){
    $("#flavor-1").removeClass("flavor-item-disabled");
    $("#flavor-2").removeClass("flavor-item-disabled");
    $("#flavor-3").removeClass("flavor-item-disabled");
    $("#flavor-4").removeClass("flavor-item-disabled");
    $("#flavor-5").removeClass("flavor-item-disabled");
    $("#flavor-6").removeClass("flavor-item-disabled");
    $("#flavor-7").removeClass("flavor-item-disabled");
    $("#flavor-8").removeClass("flavor-item-disabled");
    $("#flavor-9").removeClass("flavor-item-disabled");
    $("#flavor-10").removeClass("flavor-item-disabled");
    $("#flavor-11").removeClass("flavor-item-disabled");
    $("#flavor-12").removeClass("flavor-item-disabled");
    $("#flavor-13").removeClass("flavor-item-disabled");
    $("#flavor-14").removeClass("flavor-item-disabled");
    $("#flavor-15").removeClass("flavor-item-disabled");
    $("#flavor-1").addClass("flavor-item");
    $("#flavor-2").addClass("flavor-item");
    $("#flavor-3").addClass("flavor-item");
    $("#flavor-4").addClass("flavor-item");
    $("#flavor-5").addClass("flavor-item");
    $("#flavor-6").addClass("flavor-item");
    $("#flavor-7").addClass("flavor-item");
    $("#flavor-8").addClass("flavor-item");
    $("#flavor-9").addClass("flavor-item");
    $("#flavor-10").addClass("flavor-item");
    $("#flavor-11").addClass("flavor-item");
    $("#flavor-12").addClass("flavor-item");
    $("#flavor-13").addClass("flavor-item");
    $("#flavor-14").addClass("flavor-item");
    $("#flavor-15").addClass("flavor-item");
    $("#flavor-1").removeClass("flavor-item-active");
    $("#flavor-2").removeClass("flavor-item-active");
    $("#flavor-3").removeClass("flavor-item-active");
    $("#flavor-4").removeClass("flavor-item-active");
    $("#flavor-5").removeClass("flavor-item-active");
    $("#flavor-6").removeClass("flavor-item-active");
    $("#flavor-7").removeClass("flavor-item-active");
    $("#flavor-8").removeClass("flavor-item-active");
    $("#flavor-9").removeClass("flavor-item-active");
    $("#flavor-10").removeClass("flavor-item-active");
    $("#flavor-11").removeClass("flavor-item-active");
    $("#flavor-12").removeClass("flavor-item-active");
    $("#flavor-13").removeClass("flavor-item-active");
    $("#flavor-14").removeClass("flavor-item-active");
    $("#flavor-15").removeClass("flavor-item-active");
    $("#flavor-16").removeClass("flavor-item-active");

  };

  function addUpTo3Flavors(){
    if ($('.flavor-item-active').length > 2) {
      $('.flavor-item').addClass("flavor-item-disabled");
      $('.flavor-item').removeClass("flavor-item");
    } else {
      $('.flavor-item-disabled').addClass("flavor-item");
      $('.flavor-item-disabled').removeClass("flavor-item-disabled");
    }
  };

  $("#add-to-cart").click(function(){
    event.preventDefault();
    //cart = [];
    //var selected = $('.flavor-item-active')
    //console.log(selected);
    //for(var i = 0; i<selected.length; i++) {
      //selectedItem.flavor.push(selected[i].innerText)
    //};

    //selectedItem.flavor.push($(".flavor-item-active").attr("flavor"));
    //console.log(selectedItem.flavor);
    cart.push(selectedItem);
    saveCart();
    console.log(cart.length);
    location.reload();
    itemCount++;
  });

  $(".dropbnt").click(function(){
    $(".dropdown-content").fadeToggle(200);
  });

  $("#type-1").click(function(event){
    event.preventDefault();
    var type = $(this).attr("type");
    selectedItem.type = type;
    $(this).addClass("type-item-active");
    $("#type-6").removeClass("type-item-active");
    $("#type-12").removeClass("type-item-active");
    $("#price-detail-page").html("$4.99");
    $('#image-detail-page').attr('src','assets/product10@2x.png');
    disableFlavors();
  });

  $("#type-6").click(function(event){
    event.preventDefault();
    var type = $(this).attr("type");
    selectedItem.type = type;
    $(this).addClass("type-item-active");
    $("#type-1").removeClass("type-item-active");
    $("#type-12").removeClass("type-item-active");
    $("#price-detail-page").html("$15.99");
    $('#image-detail-page').attr('src','assets/product1@2x.png');
    enableFlavors();
  });

  $("#type-12").click(function(event){
    event.preventDefault();
    var type = $(this).attr("type");
    selectedItem.type = type;
    $(this).addClass("type-item-active");
    $("#type-1").removeClass("type-item-active");
    $("#type-6").removeClass("type-item-active");
    $("#price-detail-page").html("$19.99");
    $('#image-detail-page').attr('src','assets/product6@2x.png');
    enableFlavors();
  });

  $("#flavor-1").click(function(event){
    event.preventDefault();
    var flavor = $(this).attr("flavor");
    selectedItem.flavor.push(flavor);
    $(this).toggleClass("flavor-item-active");
    $(this).toggleClass("flavor-item");
    addUpTo3Flavors(flavor);
  });

  $("#flavor-2").click(function(event){
    event.preventDefault();
    var flavor = $(this).attr("flavor");
    selectedItem.flavor.push(flavor);
    $(this).toggleClass("flavor-item-active");
    $(this).toggleClass("flavor-item");
    addUpTo3Flavors();
  });

  $("#flavor-3").click(function(event){
    event.preventDefault();
    var flavor = $(this).attr("flavor");
    selectedItem.flavor.push(flavor);
    $(this).toggleClass("flavor-item-active");
    $(this).toggleClass("flavor-item");
    addUpTo3Flavors();
  });

  $("#flavor-4").click(function(event){
    event.preventDefault();
    var flavor = $(this).attr("flavor");
    selectedItem.flavor.push(flavor);
    $(this).toggleClass("flavor-item-active");
    $(this).toggleClass("flavor-item");
    addUpTo3Flavors();
  });

  $("#flavor-5").click(function(event){
    event.preventDefault();
    var flavor = $(this).attr("flavor");
    selectedItem.flavor.push(flavor);
    $(this).toggleClass("flavor-item-active");
    $(this).toggleClass("flavor-item");
    addUpTo3Flavors();
  });

  $("#flavor-6").click(function(event){
    event.preventDefault();
    var flavor = $(this).attr("flavor");
    selectedItem.flavor.push(flavor);
    $(this).toggleClass("flavor-item-active");
    $(this).toggleClass("flavor-item");
    addUpTo3Flavors();
  });

  $("#flavor-7").click(function(event){
    event.preventDefault();
    var flavor = $(this).attr("flavor");
    selectedItem.flavor.push(flavor);
    $(this).toggleClass("flavor-item-active");
    $(this).toggleClass("flavor-item");
    addUpTo3Flavors();
  });

  $("#flavor-8").click(function(event){
    event.preventDefault();
    var flavor = $(this).attr("flavor");
    selectedItem.flavor.push(flavor);
    $(this).toggleClass("flavor-item-active");
    $(this).toggleClass("flavor-item");
    addUpTo3Flavors();
  });

  $("#flavor-9").click(function(event){
    event.preventDefault();
    var flavor = $(this).attr("flavor");
    selectedItem.flavor.push(flavor);
    $(this).toggleClass("flavor-item-active");
    $(this).toggleClass("flavor-item");
    addUpTo3Flavors();
  });

  $("#flavor-10").click(function(event){
    event.preventDefault();
    var flavor = $(this).attr("flavor");
    selectedItem.flavor.push(flavor);
    $(this).toggleClass("flavor-item-active");
    $(this).toggleClass("flavor-item");
    addUpTo3Flavors();
  });

  $("#flavor-11").click(function(event){
    event.preventDefault();
    var flavor = $(this).attr("flavor");
    selectedItem.flavor.push(flavor);
    $(this).toggleClass("flavor-item-active");
    $(this).toggleClass("flavor-item");
    addUpTo3Flavors();
  });

  $("#flavor-12").click(function(event){
    event.preventDefault();
    var flavor = $(this).attr("flavor");
    selectedItem.flavor.push(flavor);
    $(this).toggleClass("flavor-item-active");
    $(this).toggleClass("flavor-item");
    addUpTo3Flavors();
  });

  $("#flavor-13").click(function(event){
    event.preventDefault();
    var flavor = $(this).attr("flavor");
    selectedItem.flavor.push(flavor);
    $(this).toggleClass("flavor-item-active");
    $(this).toggleClass("flavor-item");
    addUpTo3Flavors();
  });

  $("#flavor-14").click(function(event){
    event.preventDefault();
    var flavor = $(this).attr("flavor");
    selectedItem.flavor.push(flavor);
    $(this).toggleClass("flavor-item-active");
    $(this).toggleClass("flavor-item");
    addUpTo3Flavors();
  });

  $("#flavor-15").click(function(event){
    event.preventDefault();
    var flavor = $(this).attr("flavor");
    selectedItem.flavor.push(flavor);
    $(this).toggleClass("flavor-item-active");
    $(this).toggleClass("flavor-item");
    addUpTo3Flavors();
  });



  $(".dropdown-number").click(function(event){
    event.preventDefault();
    selectedItem.value = $(this).attr("value");
    var replaceText = "<div id='dropbnt-num'>"+ selectedItem.value +"</div>";
    $("#dropbnt-num").replaceWith(replaceText);
    $(".dropdown-content").hide(200);
    $
  });

  for(var i = 0; i < cart.length; i++){
    $('#remove'+ i).click( createCallback ( i ) );
    }

/*
  function createCallback(i){
    return function(){
      var temLocalCart = JSON.parse(localStorage.getItem("shoppingCart"))
      console.log(temLocalCart)
      temLocalCart.splice(i,1);
      localStorage.setItem("shoppingCart",JSON.stringify(temLocalCart))
      console.log(cart);
      //saveCart();
      $('#cart-item'+ i).remove();
    }
  }
*/

  function createCallback(i){
    return function(){

      cart.splice(i,1,'empty');
      $('#cart-item'+ i).remove();
      var tempCart = [];
      for(i = 0; i< cart.length; i++){
        if(cart[i] != 'empty'){
          tempCart.push(cart[0])
        }
      }
      //console.log(tempCart)
      localStorage.setItem("shoppingCart",JSON.stringify(tempCart))
      //console.log(cart);
      //console.log(localStorage.getItem("shoppingCart"));

      $('#cart-item'+ i).remove();
      //saveCart();
      //loadCart();
    }
  }

});
