

 function checkMyForm() {

     // this will validate the form on the home page
     //here are all my local variables
     var fName = document.forms["CustomerDetails"]["firstName"].value;
     var sName = document.forms["CustomerDetails"]["Surname"].value;
     var eMail = document.forms["CustomerDetails"]["email"].value;
     var atMail = eMail.indexOf("@");
     var dotMail = eMail.lastIndexOf(".");


     // here are if statements to ensure the user enters data, if they don't then they cant continue
     // I have also added isNaN to the coding to ensure the user enters the right kind of data.

     if (isNaN(fName) === false || isNaN(sName) === false) {
         alert("Please make sure all fields are filled in \nYou can only enter characters for your name");
         return false;
     }
     /*     if (fName===null || fName==="") {
        alert("Please enter your First name");
        return false;
    }
	  else {
	  
   
	if (sName===null || sName==="") {
		alert("Please enter your Surname");
		return false;
	}
	
	}
	*/
     if (eMail === null || eMail === "") {
         alert("Please enter your Email Address");
         return false;
     }
     if (atMail < 1 || dotMail < atMail + 2 || dotMail + 2 >= eMail.length) {
         alert("Please enter a valid e-mail address");
         return false;
     } else {
         alert("welcome" + " " + fName + " " + sName);
         location.href = "search.html";
         return true;
     }
 };




 // this will validate the search preferences the user has chosen on the form within the search page


 //here is the validation for the option boxes and also the messages which would occur if the specific box was to be selected


 function validate() {

     if (!document.SearchEngine.upfrontCost[0].checked && !document.SearchEngine.upfrontCost[1].checked && !document.SearchEngine.upfrontCost[2].checked) {
         alert("Please select an option for upfront cost");
         return false;
     }
	 var mobFront = "";
	 var front_array = document.SearchEngine.upfrontCost;
	 for (i = 0; i < front_array.length; i++)
    if (front_array[i].checked) {
	mobFront = front_array[i].value;
	console.log(front_array);
	}
	 
	  //these if statements where used for debugging purposes
     /*
     if (document.SearchEngine.upfrontCost[0].checked) {
         alert("you selected £49");
     }
     if (document.SearchEngine.upfrontCost[1].checked) {
         alert("you selected £79");
     }
     if (document.SearchEngine.upfrontCost[2].checked) {
         alert("you selected none");

     }
*/
     //this will alert the user of what they have selected for their minimum and maximum prices
     var min = document.getElementById("Minimum").value;
     var max = document.getElementById("Maximum").value;
	 console.log(min);
     /*
     alert(" your Max price is: " + max + ". your Min price is: " + min);
    */

	var mobLength = "";
	var length_array = document.SearchEngine.option;
	for (i = 0; i < length_array.length; i++)
    if (length_array[i].checked) {
	mobLength = length_array[i].value;
	}

     if ((document.SearchEngine.option[0].checked === false) && (document.SearchEngine.option[1].checked === false) && (document.SearchEngine.option[2].checked === false)) {
         alert("Length of contract has to be selected");
         return false;
     }
	 /*
	  if (document.SearchEngine.option[2].checked === "Any") {
          ShowEverything();
     }
	 */
	 //these if statements where used for debugging purposes
	 
     /*
     if (document.SearchEngine.option[0].checked) {
         alert("you have selected 18 months");
     }

     if (document.SearchEngine.option[1].checked) {
         alert("you have selected 24 months");
     }
     if (document.SearchEngine.option[2].checked) {
         alert("you have selected any");
     }
*/


     //here is the validation for the radio buttons of the network and brand options and also the messages which would occur if the specific box was to be selected

	//this will validate the selection for the network options
	
	var mobNetwork = "";
	var network_array = document.SearchEngine.network;
	for (i = 0; i < network_array.length; i++)
    if (network_array[i].checked) {
	mobNetwork = network_array[i].value;
	}
    if (!document.SearchEngine.network[0].checked && !document.SearchEngine.network[1].checked && !document.SearchEngine.network[2].checked && !document.SearchEngine.network[3].checked) {
         alert("Please select an option for a network");
         return false;
     }
	 
	 //these if statements where used for debugging purposes
     /*
	 if (document.SearchEngine.network[0].checked) {
         alert("you have selected O3");
     }

     if (document.SearchEngine.network[1].checked) {
         alert("you have selected Z-mobile");
     }
     if (document.SearchEngine.network[2].checked) {
         alert("you have selected NN");
     }
	if (document.SearchEngine.network[3].checked) {
         alert("you have selected Fodavone");
     }
     */
	 
     //this will check what the user has selected and then store that value in the variable mobBrand
	 var mobBrand = "";
	var brand_array = document.SearchEngine.brand;
for (i = 0; i < brand_array.length; i++)
    if (brand_array[i].checked) {
        mobBrand = brand_array[i].value;
	 }
	  if (!document.SearchEngine.brand[0].checked && !document.SearchEngine.brand[1].checked && !document.SearchEngine.brand[2].checked && !document.SearchEngine.brand[3].checked && !document.SearchEngine.brand[4].checked && !document.SearchEngine.brand[5].checked) {
         alert("Please select an option for a brand");
         return false;
     }
	 
	 
	 //these if statements where used for debugging purposes
     /*
	  if (document.SearchEngine.brand[0].checked) {
         alert("you have selected Apple");
     }
	if (document.SearchEngine.brand[1].checked) {
         alert("you have selected Nokia");
     }
	 if (document.SearchEngine.brand[2].checked) {
         alert("you have selected LG");
     }
	 if (document.SearchEngine.brand[3].checked) {
         alert("you have selected Samsung");
     }
	if (document.SearchEngine.brand[4].checked) {
         alert("you have selected Sony");
     }
	 if (document.SearchEngine.brand[5].checked) {
         alert("you have selected Motorola");
     }
	*/

     //this will display what the user has selected from the drop down boxes for their minutes, texts and data
     var feat = document.getElementById("MyFeatures").value;
     var minutes = document.getElementById("MinFeatures").value;
     var data = document.getElementById("DataFeatures").value;
	 
	 //these statements where used for debugging purposes
     /*
     alert(" the number of texts you have select is: " + feat);
     alert(" the number of minutes you have selected is " + minutes);
     alert(" the number of data you have selected is " + data);
    */

     //this array and object combination will help with how the user will display their results depending on what they choose

     function phone(Brand, Model, Network, Minutes, Texts, Data, UpfrontCost, MonthlyCost, LengthOfContract) {

         this.Brand = Brand;
         this.Model = Model;
         this.Network = Network;
         this.Minutes = Minutes;
         this.Texts = Texts;
         this.Data = Data;
         this.UpfrontCost = UpfrontCost;
         this.MonthlyCost = MonthlyCost;
         this.LengthOfContract = LengthOfContract;
     }
     var Mobile = [];

     //here is all the data processed from whatever the user selects from the form, this will display the result one the user clicks submit according to the preferences selected
     Mobile.push(new phone("Motorola", "StarTac", "Z-mobile", 300, 3500, "N/A", 0, 5, 24));
     Mobile.push(new phone("Nokia", 3310, "O3", 100, 5000, "N/A", 0, 2, 24));
     Mobile.push(new phone("Apple", "iPhone 5c", "Fodavone", 300, "Unlimited", "250MB", 0, 22, 24));
     Mobile.push(new phone("Apple", "iPhone 5c", "NN", 1000, "Unlimited", "2GB", 49, 34, 18));
     Mobile.push(new phone("Samsung", "Galaxy S5", "O3", 500, "Unlimited", "500MB", 0, 24, 24));
     Mobile.push(new phone("Samsung", "Galaxy S5", "Fodavone", 600, "Unlimited", "1GB", 0, 27, 24));
     Mobile.push(new phone("LG", "G3", "NN", 1000, "Unlimited", "1GB", 0, 31, 24));
     Mobile.push(new phone("Nokia", "Lumia 925", "Fodavone", 600, "Unlimited", "500MB", 0, 27, 18));
     Mobile.push(new phone("LG", "Optimus L7 2", "NN", 250, 5000, "500MB", 0, 12, 24));
     Mobile.push(new phone("Sony", "Xperia Z3", "O3", "Unlimited", "Unlimited", "1GB", 79, 38, 24));
     Mobile.push(new phone("Sony", "Xperia Z3", "NN", "Unlimited", "Unlimited", "10GB", 0, 44, 24));


//here are all my variables which will deal with the filtering of the application and match the user's preferences against the data stored within the arrays/objects
var mobileMin = minutes;
var myBrand = mobBrand;
var myData = data;
var myTexts = feat;
var myNetwork = mobNetwork;
var myLength = mobLength;
var myFront = mobFront;

var maximum = parseInt(max);
var minimum = parseInt(min);






var resultTable ="<table border=1 width=100%><tr>";

resultTable +="<tr><th> Brand</th><th>Model</th><th>Network </th> <th> Minutes </th> <th> Texts </th>  <th> Data </th>  <th> Upfront Cost </th>  <th> Monthly Cost</th>  <th>Contract Length </th> </tr>";

          for (var i = 0; i < Mobile.length; i++) {

	  //this will display data only if the data matches the information stored within the mobile array/object
	  if (Mobile[i].Minutes.toString() === mobileMin && Mobile[i].Brand === myBrand && Mobile[i].Data.toString() === myData && Mobile[i].Texts.toString() === myTexts && Mobile[i].MonthlyCost < maximum && Mobile[i].MonthlyCost > minimum && Mobile[i].Network.toString() === myNetwork && Mobile[i].LengthOfContract.toString() === myLength && Mobile[i].UpfrontCost.toString() === myFront) {
	    
resultTable +="<tr><td>" + Mobile[i].Brand + "</td>" + "<td>" +  Mobile[i].Model.toString() + "</td>"  +  "<td>" + Mobile[i].Network.toString() + "</td>" + "<td>" + Mobile[i].Minutes.toString() + "</td>"+ "<td>" + Mobile[i].Texts.toString() + "</td>" + "<td>" + Mobile[i].Data.toString() + "</td>" + "<td>" + Mobile[i].UpfrontCost.toString() + "</td>" + "<td>"+ Mobile[i].MonthlyCost + "</td>" + "<td>"+ Mobile[i].LengthOfContract.toString() + "</td></tr>";
	  console.log(Mobile[i].Brand + Mobile[i].Model.toString() + Mobile[i].Network.toString() + Mobile[i].Minutes.toString() + Mobile[i].Texts.toString() + Mobile[i].Data.toString() + Mobile[i].UpfrontCost.toString() + Mobile[i].MonthlyCost + Mobile[i].LengthOfContract.toString());
	  
	  }
	
}

resultTable += "</tr></table>";

//this will call the table and display the results once the user has clicked the submit button, the table will only show if any of the data the user has selected matches the data in the mobile array
document.getElementById("tableOne").innerHTML = resultTable;
return false;
	
          
 };

