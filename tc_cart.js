"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Juan Verduzco
   Date:   02.28.19
   
   Filename: tc_cart.js
	
*/
////////// html code for the oder form //////////
var orderTotal = 0;
var cartHTML = "<table> <tr> <th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th> </tr>";
for (var i = 0; i <= 3; i++) {
    cartHTML += "<tr> <td><img src='tc_" + item[i] + ".png' alt='" + item[i] + "'/></td>";
    cartHTML += "<td>" + itemDescription[i] + "</td>" + "<td> $" + itemPrice[i] + "</td>" + "<td>" + itemQty[i] + "</td>";
    var itemCost = itemPrice[i] * itemQty[i];
    cartHTML += "<td>$" + itemCost + "</td>" + "</tr>";
    ////////// order subtotal //////////
    orderTotal = orderTotal + itemCost;
}
cartHTML += "<tr>" + "<td colspan='4'>Subtotal</td>" + "<td>$" + orderTotal + "</td>" + "</tr>" + "</table>";
document.getElementById("cart").innerHTML = cartHTML;