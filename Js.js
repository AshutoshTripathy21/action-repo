body>

<h1>Heyday Bakes</h1>

<form onsubmit="return display()">

<input id="name" type="text" placeholder="Customer Name"><br><br>

<input id="phoneNumber" type="tel" placeholder="Phone Number"><br><br>

<select id="productsType" onchange="getSelected ProductsType(this)">

<option value="select" disabled selected hidden>-Select Products Type-</option>

<option value="Dairy Products">Dairy Products</option>

<option value="Baking Products">Baking Products</option>

</select><br><br>

<select id="products">

<option value="">-Select Products-</option>

</select><br><br>

<input id="quantity" type="number" placeholder="Quantity" min="1" step="1"><br><br>

<input type="submit" value="Add Product" id="add">

</form>

<br>

<input type="submit" value="Bill" id="bill" onclick="return calculateTotalBill();">

<br><br>

<div>

<table id="productDetails">

<tr>

<th>S No</th>
<th>Product Name</th>

<th>Cost</th>

<th>Quantity</th>

<th>Amount</th>

I

</tr>

<tr>

<td><p id="sNo"></p></td>

<td><p id="productName"></p></td>

<td><p id="cost"></p></td>

<td><p id="quantity1"></p></td>

<td><p id="amount"></p></td>

</tr>

</table>

</div>

<div id="result"></div>

</body>

</html>

js

//Don't change or delete the try/catch block

var sNo=1;

var totalCost = 0;

function getSelectedProductsType(productsType) {

try{

// Populate products with respect to the products type selected

}catch(err){

document.getElementById("result").innerHTML="Function getSelected ProductsType: "+ err;

}

I

}

function display() {

try{

// Get the value of product and quantity by using DOM methods into variables: products & quantity.

// Invoke getProductCost function by passing 'products' as the parameter, and fetch the returned value into variable cost. / Invoke calculate ProductCost function by passing cost and quantity as parameters, and fetch the returned value into vari

/ // Invoke generateBill function by passing sNo, products, cost, quantity and amount as the parameters.

catch(err) {

document.getElementById("result1").innerHTML="Function display: "+err;

X

}

return false;

function getProductCost(products) {

// This method should return the product cost

// Refer to the price table in the description

}

function calculateProductCost(cost, quantity) {

// This method should calculate the product cost based on the cost and quantity

}

function generateBill (sNo, products, cost, quantity, amount) {

// This method should add the product details into the table

// Use the respective ids and display the product details

}

function calculateTotalBill() {

// Display the result statement as given in the description, in the div tag with id "result1"

X

minal

I

Feedback

X

}
