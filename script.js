 choice = document.getElementsByName("result");
choice.innerHTML = "hello";

//let toggle;


function spinFunction1(){
	 toggle = false;
getData();

}

 function spinFunction2(){
getData();
}



async function getData(){

	//const bag = [];
    const response = await fetch("https://bitome.github.io/test2/animal.csv");
    const data = await response.text();
    
    const species = data.split(',');
    const i = Math.floor(Math.random()* 10);

    const pick = species[i];
   
   // bag.push(pick);


 
    let draw1 = document.getElementById("animal3");
    let draw2 = document.getElementById("animal4");
   
//let pick = document.querySelectorAll('input[value="animal 2"]');
if(!toggle){
draw1.value = pick; 
toggle = true;   //
}else{

draw2.value = pick; 

}
	
	let part1 = draw1.value.substring(0,2);
	let part2 = draw2.value.slice(-3);
  document.getElementById("result").innerHTML = "Draw a " + part1+"o"+part2; 
    
 //    console.log(response);
 //console.log(bag);
    console.log(i);
    console.log(species);
    console.log(pick);
    console.log(data);

   // return {bag};
}
