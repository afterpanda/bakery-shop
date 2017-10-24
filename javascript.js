$(document).ready(function(){

  var cart = [];

  var selectedItem = {
    'name':"Maple Apple Pecan",
    'type':null,
    'flavor':null,
    'value':null,
  };

  $("#add-to-cart").click(function(){
    cart.push(selectedItem);
    console.log(cart);
  });

  $(".dropbnt").click(function(){
    $(".dropdown-content").fadeToggle(200);
    console.log("jiji");
  });

  $("#type-1").click(function(event){
    event.preventDefault();
    var type = $(this).attr("type");
    console.log(type);
    selectedItem.type = type;
    $(this).addClass("type-item-active");
    $("#type-6").removeClass("type-item-active");
    $("#type-12").removeClass("type-item-active");
    $("#flavor-1").addClass("flavor-item-disabled");
    $("#flavor-2").addClass("flavor-item-disabled");
    $("#flavor-3").addClass("flavor-item-disabled");
  })

  $("#type-6").click(function(event){
    event.preventDefault();
    var type = $(this).attr("type");
    console.log(type);
    selectedItem.type = type;
    $(this).addClass("type-item-active");
    $("#type-1").removeClass("type-item-active");
    $("#type-12").removeClass("type-item-active");
    $("#flavor-1").removeClass("flavor-item-disabled");
    $("#flavor-2").removeClass("flavor-item-disabled");
    $("#flavor-3").removeClass("flavor-item-disabled");
  })

  $("#type-12").click(function(event){
    event.preventDefault();
    var type = $(this).attr("type");
    console.log(type);
    selectedItem.type = type;
    $(this).addClass("type-item-active");
    $("#type-1").removeClass("type-item-active");
    $("#type-6").removeClass("type-item-active");
    $("#flavor-1").removeClass("flavor-item-disabled");
    $("#flavor-2").removeClass("flavor-item-disabled");
    $("#flavor-3").removeClass("flavor-item-disabled");
  })

  $("#flavor-1").click(function(event){
    event.preventDefault();
    var flavor = $(this).attr("flavor");
    console.log(flavor);
    selectedItem.flavor = flavor;
    $(this).addClass("flavor-item-active");
    $("#flavor-2").removeClass("flavor-item-active");
    $("#flavor-3").removeClass("flavor-item-active");
  })

  $("#flavor-2").click(function(event){
    event.preventDefault();
    var flavor = $(this).attr("flavor");
    console.log(flavor);
    selectedItem.flavor = flavor;
    $(this).addClass("flavor-item-active");
    $("#flavor-1").removeClass("flavor-item-active");
    $("#flavor-3").removeClass("flavor-item-active");
  })

  $("#flavor-3").click(function(event){
    event.preventDefault();
    var flavor = $(this).attr("flavor");
    selectedItem.flavor = flavor;
    console.log(selectedItem.flavor);
    $(this).addClass("flavor-item-active");
    $("#flavor-1").removeClass("flavor-item-active");
    $("#flavor-2").removeClass("flavor-item-active");
  })

  $(".dropdown-number").click(function(event){
    event.preventDefault();
    selectedItem.value = $(this).attr("value");
    var replaceText = "<div id='dropbnt-num'>"+ selectedItem.value +"</div>";
    $("#dropbnt-num").replaceWith(replaceText);
  })


});
