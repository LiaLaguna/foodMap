$(document).ready(function(){

/* Modal */
  $('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
  })

  var $restaurantText1 = $(".restaurant-name1");
  var $addressText1 = $("#address1");
  var $priceText1 = $("#price1");
  var $ratingText1 = $("#rating1");
  var $restaurantData1 = restaurants[0].name;
  $restaurantText1.text($restaurantData1);
  var $addressData1 = restaurants[0].vicinity;
  $addressText1.text($addressData1)
  var $priceData1 = restaurants[0].price_level;
  $priceText1.text('Precio: ' + $priceData1);
  var $ratingData1 = restaurants[0].rating;
  $ratingText1.text('Rating: ' + $ratingData1);

  var $restaurantText2 = $(".restaurant-name2");
  var $addressText2 = $("#address2");
  var $priceText2 = $("#price2");
  var $ratingText2 = $("#rating2");
  var $restaurantData2 = restaurants[1].name;
  $restaurantText2.text($restaurantData2);
  var $addressData2 = restaurants[1].vicinity;
  $addressText2.text($addressData2)
  var $priceData2 = restaurants[1].price_level;
  $priceText2.text('Precio: ' + $priceData2);
  var $ratingData2 = restaurants[1].rating;
  $ratingText2.text('Rating: ' + $ratingData2);

  var $restaurantText3 = $(".restaurant-name3");
  var $addressText3 = $("#address3");
  var $priceText3 = $("#price3");
  var $ratingText3 = $("#rating3");
  var $restaurantData3 = restaurants[2].name;
  $restaurantText3.text($restaurantData3);
  var $addressData3 = restaurants[2].vicinity;
  $addressText3.text($addressData3)
  var $priceData3 = restaurants[2].price_level;
  $priceText3.text('Precio: ' + $priceData3);
  var $ratingData3 = restaurants[2].rating;
  $ratingText3.text('Rating: ' + $ratingData3);

  var $restaurantText4 = $(".restaurant-name4");
  var $addressText4 = $("#address4");
  var $priceText4 = $("#price4");
  var $ratingText4 = $("#rating4");
  var $restaurantData4 = restaurants[3].name;
  $restaurantText4.text($restaurantData4);
  var $addressData4 = restaurants[3].vicinity;
  $addressText4.text($addressData4)
  var $priceData4 = restaurants[3].price_level;
  $priceText4.text('Precio: ' + $priceData4);
  var $ratingData4 = restaurants[3].rating;
  $ratingText4.text('Rating: ' + $ratingData4);

  var $restaurantText5 = $(".restaurant-name5");
  var $addressText5 = $("#address5");
  var $priceText5 = $("#price5");
  var $ratingText5 = $("#rating5");
  var $restaurantData5 = restaurants[4].name;
  $restaurantText5.text($restaurantData5);
  var $addressData5 = restaurants[4].vicinity;
  $addressText5.text($addressData5)
  var $priceData5 = restaurants[4].price_level;
  $priceText5.text('Precio: ' + $priceData5);
  var $ratingData5 = restaurants[4].rating;
  $ratingText5.text('Rating: ' + $ratingData5);

  var $restaurantText6 = $(".restaurant-name6");
  var $addressText6 = $("#address6");
  var $priceText6 = $("#price6");
  var $ratingText6 = $("#rating6");
  var $restaurantData6 = restaurants[5].name;
  $restaurantText6.text($restaurantData6);
  var $addressData6 = restaurants[5].vicinity;
  $addressText6.text($addressData6)
  var $priceData6 = restaurants[5].price_level;
  $priceText6.text('Precio: ' + $priceData6);
  var $ratingData6 = restaurants[5].rating;
  $ratingText6.text('Rating: ' + $ratingData6);

  var $restaurantText7 = $(".restaurant-name7");
  var $addressText7 = $("#address7");
  var $priceText7 = $("#price7");
  var $ratingText7 = $("#rating7");
  var $restaurantData7 = restaurants[6].name;
  $restaurantText7.text($restaurantData7);
  var $addressData7 = restaurants[6].vicinity;
  $addressText7.text($addressData7)
  var $priceData7 = restaurants[6].price_level;
  $priceText7.text('Precio: ' + $priceData7);
  var $ratingData7 = restaurants[6].rating;
  $ratingText7.text('Rating: ' + $ratingData7);

  var $restaurantText8 = $(".restaurant-name8");
  var $addressText8 = $("#address8");
  var $priceText8 = $("#price8");
  var $ratingText8 = $("#rating8");
  var $restaurantData8 = restaurants[7].name;
  $restaurantText8.text($restaurantData8);
  var $addressData8 = restaurants[7].vicinity;
  $addressText8.text($addressData8)
  var $priceData8 = restaurants[7].price_level;
  $priceText8.text('Precio: ' + $priceData8);
  var $ratingData8 = restaurants[7].rating;
  $ratingText8.text('Rating: ' + $ratingData8);

  var $restaurantText9 = $(".restaurant-name9");
  var $addressText9 = $("#address9");
  var $priceText9 = $("#price9");
  var $ratingText9 = $("#rating9");
  var $restaurantData9 = restaurants[8].name;
  $restaurantText9.text($restaurantData9);
  var $addressData9 = restaurants[8].vicinity;
  $addressText9.text($addressData9)
  var $priceData9 = restaurants[8].price_level;
  $priceText9.text('Precio: ' + $priceData9);
  var $ratingData9 = restaurants[8].rating;
  $ratingText9.text('Rating: ' + $ratingData9);


});
