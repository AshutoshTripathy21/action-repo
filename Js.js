<!DOCTYPE html>

<html>

<head>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"

<script src="script.js" lang="text/javascript"></script>

<title>Kwality Refrigerator Service Centre</title>

<style type="text/css">

body {

color: #000000;

background-color: #5D6D7E;

width: 80%;

margin-left: 10%;

font-size: 30px;

font-family: Georgia;

}

I

}

label, output {

color: #FFFFFF;

font-weight: 500;

}

::placeholder {

color: #999999;

font-family: Arial, Helvetica, sans-serif;

font-size: 16px;

#result(

font-family: Georgia:
font-size: 25px;

font-style: italic;

color:#FFFFFF;

}

h2 {

color: #FFFFFF;

}

table {

font-family: Calibri;

width: 90%;

font-size: 20px;

}

td {

}

padding: 3px;

I

textarea, select, input[type=text], input[type=tel], input[type=email],

#duration {

width: 70%;

border-radius: 5px;

color: #000000;

}

#submit, #reset {

}

margin-left: 85px;
#type, #brand {

}

width: 70%;

color: #000000;

background-color: #eee;

border-radius: 5px;

font-size: 15px;

padding: 3px;

</style>

</head>

<body class="demo">

<div id="header" class="page-header">

<h2>KWALITY REFRIGERATOR SERVICE CENTRE</h2>

</div>

<form onsubmit="return bookAppointment()">

<table id="appointment">

I

<tr>

<td><label>Customer Name</label></td>

<td><input type="text" id="customername"

placeholder="Enter your name" required></td>

<td><input type="tel" id="mobilenumber"

placeholder="Enter your mobile number" required></td>

</tr>

<tr>

<td><label>Mobile Number</label></td>
</tr>

<tr>

<td><label>Email id</label></td>
<td><input type="email" id="email"

placeholder="Enter your email" required></td>

</tr>

<tr>

<td><label>Address</label></td>

<td><textarea rows="3" cols="20" id="address"

placeholder="Enter your address" required></textarea></td>

</tr>

<tr>

<td><label>Brand</label></td>

<td><select id="brand">

<option value="LG" id="lg">LG</option>

<option value="Whirlpool" id="whirlpool">Whirlpool</option>

<option value="Insignia" id="insignia">Insignia</option>

<option value="Maytag" id"maytag">Maytag</option>

</select></td>

</tr>

<tr>

<td><label>Type</label></td>

<td><Select id="type">

<option value="bottomfreezer" id="bottomfreezer">Bottom-Freezer</option >

<option value="topfreezer" id="topfreezer">Top-Freezer</option

<option value="sidebyside" id="sidebyside">Side By Side</option>

<option value="frenchdoor" id="frenchdoor">French Door</option>

</tr>

</Select></td>

<tr>

<td><label>Service(s)</label></td>

<td><input type='checkbox' id='coolingissue' name='services'
value="coolingissue" />&nbsp;<label>No/Less Cooling</label>&nbsp;&nbsp; <input

type='checkbox' id='excessivefrost' name='services'

value="excessivefrost" />&nbsp; <label>Excessive Frost</label><br>

<input type='checkbox' id='waterleaks' name='services'

value="waterleaks" />&nbsp; <label>Water Leaks</label>&nbsp;&nbsp;<input

type='checkbox' id='otherissues' name='services'

value="otherissues" />&nbsp;<label>Other issues</label></td>

</tr>

<tr>

<td><label>Is maintenance required*</label></td>

<td><input type='radio' id='yes' value="Yes" name="maintenance" />&nbsp; <label>Yes</label>&nbsp;&nbsp;

</tr>

<input type='radio' id='no' value="No" name="maintenance" />&nbsp; < label>No</label></td>

<tr>

<td><label>Duration in months from the previous service</label></td>

<td><input type="range" title="8 to 6 months" id="duration"

value="3" min="0" max="6" step="1"

oninput="this.nextElementSibling.value this.value"><output></output></td>

</tr>

<tr>

ENG

IN

<td></td>

<td><input type="submit" id='submit' value="SUBMIT"

class="btn btn-success" /><input

type='reset' id='reset' value="CLEAR" class="btn btn-warning" /></td>

</tr>

</table>

<div id="result"></div>

<!--<div id="result2"></div>-->
</form>

</body>

</html>

js 

function bookAppointment(){

try{

// Get all the needed components using DOM

// Invoke getTotalServiceCount method to get the service's count and calculate the cost of service(s) by invoking // If more than 2 services are selected, then calculateDiscount method must be invoked for discount calculation

/ If the customer requires maintenance on a regular basis, call getMaintenanceCost which adds maintenance fee with

/ // Display the output as given in the question description within div id "result"

// Note: Use Math.round() method to round-off the service_cost

} catch(err){

T document.getElementById("result").innerHTML="Function bookAppointment: "+err; }

return false;

} function getTotalServiceCount() {

try{

var service_count=0;

// Return the count of service(s) selected by the customer

} catch(err){

document.getElementById("result").innerHTML="Function getTotalServiceCount: "+err;

} return service_count;

1

3

4

7

8

و

6} function getServiceCost() {

try{

var service cost-9:

Return the summation of service_cost of selected service(s)

} catch(err){

document.getElementById("result").innerHTML="Function getServiceCost: "+err;

}

return service_cost;

}

} function calculateDiscount(service_cost) {

try{

// As the service count is more than 2, 10% discount is given for the customer

// Return the service_cost after discount

} catch(err){

document.getElementById("result").innerHTML="Function calculateDiscount: "+err;

}

return service_cost;

}

function getMaintenanceCost(service_cost) {

try{

// If the customer selects "yes" for maintenance, then add $20 as maintenance_cost to service_c

} catch(err) {

document.getElementById("result").innerHTML="Function getMaintenanceCost: "+err;

} return service_cost;


