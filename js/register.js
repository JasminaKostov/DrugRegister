
var arrayPills = [            
{name:"aspirin", genericName: "acetylsalicylic acid", mg: "100mg,300mg,500mg", brand:"BAYER"},
{name:"vitamin C", genericName: "ascorbic acid",mg:"500mg,1000mg",brand:"KRKA,ALKALOID,REPLEK"},
{name:"vitamin b6", genericName: "pyridoxine",mg:"20mg",brand:"KRKA,ALKALOID,GALENIKA"}, 
{name:"blokmax", genericName: "ibuprofen",mg:"200mg,400mg,100mg",brand:"ALKALOID"},
{name:"amoksiklav", genericName: "amoxicilin,clavulanic acid",mg:"475mg,625mg,1000mg",brand:"GLAXO"},
{name:"hiconcil", genericName: "amoxicilin",mg:"500mg,250mg",brand:"KRKA"},
{name:"klimicin", genericName: "klindamicin",mg:"150mg,300mg",brand:"LEK"},
{name:"ampicilin", genericName: "ampicilin",mg:"500mg",brand:"ALKALOID"},
{name:"lekoklar", genericName: "clarithromicyn",mg:"500mg",brand:"LEK"},
{name:"vitamin e", genericName: "tocopherol",mg:"400mg,100mg",brand:"KRKA,ALKALOID,REPLEK"},
{name:"zinnat", genericName: "cefuroxime",mg:"500mg,250mg,150mg",brand:"GLAXO"},
{name:"pancef", genericName: "cefixime",mg:"400mg,100mg",brand:"ALKALOID"},
{name:"enap", genericName: "enalapril",mg:"5mg,10mg,20mg",brand:"KRKA"},
{name:"skopril", genericName: "lisinopril",mg:"5mg,10mg,20mg",brand:"ALKALOID"},
{name:"bromergon", genericName: "bromocriptine",mg:"2,5mg",brand:"SANDOZ"},
{name:"atoris", genericName: "atorvastatin",mg:"5mg,10mg,20mg,40mg,80mg",brand:"KRKA"},
{name:"roswera", genericName: "rousuvastatin",mg:"5mg,10mg,20mg,40mg",brand:"KRKA,LEK"},
{name:"propranolol", genericName: "propranolol",mg:"10mg",brand:"ALKALOID,ACTAVIS"},
{name:"bloxan", genericName: "metroprolol",mg:"100mg",brand:"KRKA"},
{name:"flagil", genericName: "metronidazol",mg:"500mg,400mg,200mg",brand:"ALKALOID"},
{name:"aerius", genericName: "desloratidin",mg:"5mg",brand:"MSD"},
{name:"loratidin", genericName: "loratidin",mg:"10mg",brand:"ALKALOID,REPLEK"},
{name:"letizen", genericName: "cetirizin",mg:"10mg",brand:"LEK"},
{name:"plitop", genericName: "methyldigoxin",mg:"0,1mg",brand:"PLIVA"},
{name:"demetrin", genericName: "demetrazepam",mg:"10mg",brand:"HEMOPHARM"},
{name:"loram", genericName: "lorazepam",mg:"2,5mg",brand:"LEK"},
{name:"helex", genericName: "alprazolam",mg:"0,25mg,0,5mg.1mg",brand:"KRKA"},
{name:"elicea", genericName: "escitalopram",mg:"5mg,10mg,20mg",brand:"KRKA"},
{name:"brufen", genericName: "ibuprofen",mg:"200mg,400mg",brand:"KRKA"},
{name:"atenolol", genericName: "atenololum",mg:"50mg,100mg",brand:"ALKALOID,REPLEK"},
{name:"diazepam", genericName: "diazepamum",mg:"2mg,5mg,10mg",brand:"ALKALOID,JAKA"},
{name:"lexilium", genericName: "bromazepam",mg:"1,5mg,3mg,6mg",brand:"ALKALOID"},
{name:"andol", genericName: "acetylsalicylic acid",mg:"100mg,300mg",brand:"PLIVA"},
{name:"ketonal", genericName: "ketoprofen",mg:"50mg,100mg,150mg,200mg",brand:"LEK"},
{name:"naklofen", genericName: "diklofenak",mg:"50mg,75mg,100mg",brand:"KRKA"},
{name:"nalgesin", genericName: "naproxenum",mg:"375mg,550mg",brand:"KRKA"},
{name:"daleron", genericName: "paracetamol",mg:"500mg",brand:"KRKA"},
{name:"analgin", genericName: "natrium metamizolat monohidrat",mg:"500mg",brand:"ALKALOID"},
{name:"vitamin b1", genericName: "tiamin",mg:"100mg",brand:"ERBAVITA"},
{name:"vitamin b2", genericName: "riboflavin",mg:"250mg",brand:""},
{name:"palin", genericName: "piperidinum acid",mg:"200mg,1000mg",brand:"ALKALOID"},
{name:"nolicin", genericName: "norfloxacin",mg:"400mg",brand:"KRKA"},
{name:"dexason", genericName: "dexamethasonum",mg:"1,5mg",brand:"PLIVA"},
{name:"hepatrombin", genericName: "heparin natrium",mg:"30 000IE,50 000IE",brand:"HEMOPHARM"},
{name:"dekotal", genericName: "diflucortolone",mg:"20mg",brand:"ALKALOID"},
{name:"advantan", genericName: "methylprednisolone aceponate",mg:"5g",brand:"BAYER"},
{name:"garamicin", genericName: "gentamycin",mg:"15g",brand:"LEK"},
{name:"vitamin b9", genericName: "folic acid",mg:"0,4mg,5mg",brand:"KRKA,ALKALOID,REPLEK"},
]
//word typing for pills name
var pillsNames=[]; //nizata sto ke se polni samo so name od arrayPills;

function getPillsNames(arrayPills){
	for(var i=0;i<arrayPills.length;i++) {
		pillsNames.push(arrayPills[i].name);
	}
	return pillsNames;
};
$(function (){
    getPillsNames(arrayPills);
	$("#pillsName").autocomplete({
	   source: pillsNames	
     });
});
//word typing for generic name
var genericNames=[];//niza sto ke se polni so genericName od arrayPills;
function getGenericNames(arrayPills){
	for(var i=0;i<arrayPills.length;i++) {
		genericNames.push(arrayPills[i].genericName);
	}
	return genericNames;
};
$(function (){
    getGenericNames(arrayPills);
	$("#name").autocomplete({
	   source: genericNames	
     });
 
});
// input za prebaruvanje po ime
var btn = document.getElementById("searchBtn");
var pillDesc = "";

btn.addEventListener("click",function(){
	var inputName = document.getElementById("pillsName").value.toLowerCase();
	for(var i = 0; i< arrayPills.length; i++){
		if(arrayPills[i].name == inputName)
		   pillDesc = arrayPills[i];
	  
	};
	if(pillDesc =="")alert("lekot " + inputName +  " ne postoi") //ne e dovrsen kodot na ovaa linija "and operator is missing";
		
	else{
	document.getElementById("input1").innerHTML = pillDesc.genericName + " " + pillDesc.mg;
	document.getElementById("brand").innerHTML = pillDesc.brand;
    }
	
	changeVisibility(pillDesc);//funkcija za prikazuvanje na tabela spored rezultat...
});
    function changeVisibility(inputName) {
   if(inputName!="") document.getElementById("table1").className = "table table-bordered table-striped table-visible";
	};
	
//input za prebaruvanje po genericko ime;	
var nameDesc = [];

var table = document.getElementById('table2');
$("#table2").addClass("table-invisible");
btn.addEventListener("click",function(){
	var inputName = document.getElementById("name").value.toLowerCase();
	for (var i = 0;i<arrayPills.length;i++){
		if(arrayPills[i].genericName == inputName)
		   nameDesc.push(arrayPills[i]);
	}
	if(nameDesc.length === 0) {
		$("#table2").addClass("table-invisible");
		
	}else  {
	$("#table2").removeClass("table-visible");
     for(var j=0 ; j < nameDesc.length ; j++){
		var tr = document.createElement('tr');
		var td = document.createElement('td');
		var td1 = document.createElement('td');
		var name = "";
		var brand = "";
		  table.appendChild(tr);
		  tr.appendChild(td);
		  tr.appendChild(td1);
		  name = document.createTextNode(nameDesc[j].name + " " + nameDesc[j].mg);
		  brand = document.createTextNode(nameDesc[j].brand);
		  td.appendChild(name);
		  td1.appendChild(brand);
		 
	  }
	}
	changeVisibility2(nameDesc);

	function changeVisibility2(inputName) {
    if(inputName!="") document.getElementById("table2").className = "table table-bordered table-striped table-visible";
    };
     
});   