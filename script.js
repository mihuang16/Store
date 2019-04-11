$("#purchase").hide();
$("#total").hide();
var add = [];
var total = 0;

$("#add").click(function() {
    $("#purchase").show();
    $("#total").show();
    var img = $("#img").val();
    add.push(img);
    var item = $("#item").val();
    alert(item + " added to cart!");
    add.push(item);
    var price = $("#price").val();
    add.push(price);
    $("#cart").append("<div id='stored'><img id='size' src='"+img+"'><p>"+item+"</p><p>$"+price+"</p></div><br><br>");
    price = parseInt(price);
    total = total+price;
    $("#total").text("Total: $"+total);
    console.log(total);
});

$("#purchase").click(function() {
   alert("Thank you for purchasing your items at The Store!");
});