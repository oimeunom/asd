	menuListArray = ["Pepperoni",
                        "4 Cheese",
                        "Portuguese",
                        "Pepperoni",
                        "Chocolate with bananas",
                        "banoffee"];

    function addItem(){
        var htmldata;
		var imgtags='<img id="im1" src="pizzaImg.png"/>'
        var item=document.getElementById("addItem").value;
        menuListArray.sort();
        htmldata=""
        for(var i=0;i<menuListArray.length;i++){
            htmldata=htmldata+imgtags+ menuListArray[i]+'<br>';
        }
         document.getElementById("displayAddedMenu").innerHTML = htmldata;
         
    }
    function getMenu(){
        var nomedapizza="";
        menuListArray.sort();
        for(var i=0;i<menuListArray.length;i++){
            nomedapizza=nomedapizza+ menuListArray[i] + '<br>'
        }
        document.getElementById("displayMenu").innerHTML = nomedapizza;   
    }

function addTop(){
	var item=document.getElementById("addItem").value;
    menuListArray.push(item);  
	addItem();
}