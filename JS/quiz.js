
window.onload=function(){

	var idleTime=0;
	var x,y;
  var idleInterval = setInterval(timerIncrement, 10000); 
  var sleeping_brain = document.createElement("IMG");
  sleeping_brain.src="../Imagini/sleeping.gif";
  sleeping_brain.style.position="absolute";
  sleeping_brain.style.display="none";
  sleeping_brain.style.zIndex=10;


  

    window.onmousemove= function (e) {
        idleTime = 0;
          sleeping_brain.style.display="none";
          x=e.clientX;
          y=e.clientY;


        

    };
    


function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime >= 6) { 
    	  sleeping_brain.style.display="block";;
    	  sleeping_brain.style.left=x+10+"px";
    	  sleeping_brain.style.top=y+10+"px";


       
    }
}



// Div-ul in care se afla quiz-ul

var q = document.createElement("DIV");
q.id="qz";
q.style.margin="auto"
q.style.width="60%";
q.style.marginTop="12rem";
q.style.fontFamily="Indie Flower";
q.style.color="#9595b7";
q.style.fontSize="1.2rem";
q.style.padding="3rem";

q.style.textAlign="center";

var f = document.body.getElementsByClassName("footer-div")[0];
document.body.insertBefore(q,f);
 document.body.insertBefore(sleeping_brain,q);
 if(localStorage.getItem("story")!=null)
 {

 	var p = document.createElement("p");
 	p.innerHTML="Last uploaded story:";
 	p.style.margin="60px";
 	p.style.textAlign="center";
 	p.style.color="#9595b7";
 	p.style.fontFamily="Indie Flower";
	p.style.fontSize="2rem";
 	document.body.insertBefore(p,f);


 	var div_story = document.createElement("div");
 	var p = document.createElement("p");
 	p.innerHTML=localStorage.getItem("story");
 	div_story.appendChild(p);
 	p.style.padding="90px";
 	p.style.paddingTop="250px";
 	p.style.marginLeft="-700px";
 	p.style.marginRight="600px";


 	div_story.style.float="right";
 	div_story.style.textAlign="center";
 	div_story.style.color="#9595b7";
 	div_story.style.fontFamily="Indie Flower";
	div_story.style.fontSize="1.2rem";
	div_story.style.zIndex="10";
	div_story.style.width="500px";
	div_story.style.background="url('../Imagini/wisteria.png')";
	div_story.style.background="cover";
	div_story.style.backgroundRepeat="no-repeat";
	div_story.style.marginBottom="100px";
	div_story.style.height="600px";


	document.body.insertBefore(div_story,f);

 }

//Date despre utilizator

var date = document.createElement("div");
date.id="date_utilizator";
q.appendChild(date);

var age = document.createElement("INPUT");
age.setAttribute("type", "text");
age.id="age";
age.style.width="4rem";
age.style.border="0.01rem solid #9595b7";
age.style.textAlign="center";
age.style.outlineColor="#9595b7";
if(localStorage.getItem("age")!="") age.value=localStorage.getItem("age");
var textnode = document.createTextNode("I am a ");
date.appendChild(textnode);
date.appendChild(age);
textnode = document.createTextNode(" year old ");
date.appendChild(textnode);
 
var label = document.createElement("LABEL");
var c = document.createElement("INPUT");
c.setAttribute("type", "radio");
c.value="female";
c.name="gender";
if(localStorage.getItem("gender")=="female") c.checked=true;
label.htmlFor="female";
label.innerHTML="Female ";
date.appendChild(label);
date.appendChild(c);

var label = document.createElement("LABEL");
var c = document.createElement("INPUT");
c.setAttribute("type", "radio");
c.value="male";
c.name="gender";
if(localStorage.getItem("gender")=="male") c.checked=true;
label.htmlFor="male";
label.innerHTML=" Male ";
date.appendChild(label);
date.appendChild(c);

var label = document.createElement("LABEL");
var c = document.createElement("INPUT");
c.setAttribute("type", "radio");
c.value="other";
c.name="gender";
if(localStorage.getItem("gender")=="other") c.checked=true;
label.htmlFor="other";
label.innerHTML=" Other ";
date.appendChild(label);
date.appendChild(c);



//Alegerea testelor


var div_alegere = document.createElement("div");
div_alegere.style.marginTop="20px";
q.appendChild(div_alegere);
var alegere = document.createElement("p");
div_alegere.appendChild(alegere);
alegere.innerHTML="I want results for ";
var c = document.createElement("INPUT");
c.type="checkbox";
c.value="anxiety";
c.name="choice";
var label = document.createElement("LABEL");
label.innerHTML="Anxiety ";
label.htmlFor="anxiety";
div_alegere.appendChild(c);
div_alegere.appendChild(label);
var c = document.createElement("INPUT");
c.type="checkbox";
c.value="depression";
c.name="choice";
var label = document.createElement("LABEL");
label.innerHTML=" Depression ";
label.htmlFor="depression";
div_alegere.appendChild(c);
div_alegere.appendChild(label);
var c = document.createElement("INPUT");
c.type="checkbox";
c.value="bipolar";
c.name="choice";
var label = document.createElement("LABEL");
label.innerHTML="Bipolar Disorder ";
label.htmlFor="bipolar";
div_alegere.appendChild(c);
div_alegere.appendChild(label);

var start = document.createElement("BUTTON");
start.innerHTML="START";
start.style.display="block";
start.style.margin="auto";
start.style.marginTop="30px";
start.style.borderRadius="50%";
start.style.height="30px";
start.style.width="90px";
div_alegere.appendChild(start);

start.addEventListener("click", function(e){


	var exercising_brain = document.createElement("IMG");
  	exercising_brain.src="../Imagini/brain-exercise.gif";
	exercising_brain.style.position="absolute";
	exercising_brain.style.zIndex=10;
	exercising_brain.style.left=e.clientX+250+"px";
   	exercising_brain.style.top=e.clientY-100+"px";
   	document.body.appendChild(exercising_brain);

   	setTimeout(function(){

   	var teste=[]; 
   	var n=0;
   	teste[0]=0;
   	teste[1]=0;
   	teste[2]=0;

   	if(document.getElementsByName("choice")[0].checked==true) 
   	{
   		teste[0]=1;
   		n=n+3;
   	}

   	if(document.getElementsByName("choice")[1].checked==true) 
   	{
   		teste[1]=1;
   		n=n+3;
   	}

   	if(document.getElementsByName("choice")[2].checked==true) 
   	{
   		teste[2]=1;
   		n=n+3;
   	}

   	var rb_procent=100/n;
   	var rb_procent2=85/n;



	q.removeChild(div_alegere);
	document.body.removeChild(exercising_brain);

	var score_anxiety=0, score_depression=0, score_bipolar=0;


	var div_rb = document.createElement("div");
	q.appendChild(div_rb);
	div_rb.id="div-rb";
	var running_brain = document.createElement("IMG");
  	running_brain.src="../Imagini/running-brain.gif";
	running_brain.style.zIndex=10;
	running_brain.style.display="block";
	running_brain.style.width="100px";
	running_brain.style.height="100px";
	running_brain.style.marginLeft="0%";
	var procent = document.createElement("p");
	procent.innerHTML="0%";
	procent.style.textAlign="left";
	procent.style.marginLeft="5%";
   	div_rb.appendChild(running_brain);
   	div_rb.appendChild(procent);
   	div_rb.style.marginLeft="-14%";
   	var intrebari=[], disorders=[];
   	var k=0,i=0;


   	if(teste[0]==1) 
   	{

   		intrebari[k]="Not being able to stop or control worrying";
   		intrebari[k+1]="Trouble relaxing";
   		intrebari[k+2]="Feeling afraid as if something awful might happen";
   		disorders[k]="anxiety";
   		disorders[k+1]="anxiety";
   		disorders[k+2]="anxiety";
   		k=k+3;

   	}

   	if(teste[1]==1) 
   	{
   		intrebari[k]="The pleasure and joy has gone out of my life";
   		intrebari[k+1]="I feel sad, blue, and unhappy";
   		intrebari[k+2]="I feel fatigued";
   		disorders[k]="depression";
   		disorders[k+1]="depression";
   		disorders[k+2]="depression";
   		k=k+3;
   	}

   	if(teste[2]==1) 
   	{
   		intrebari[k]="At times I am much more talkative or speak much faster than usual";
   		intrebari[k+1]="I get into moods where I feel very ‘speeded-up’ or irritable";
   		intrebari[k+2]="My self-confidence ranges from great self-doubt to equally great overconfidence";
   		disorders[k]="bipolar";
   		disorders[k+1]="bipolar";
   		disorders[k+2]="bipolar";
   		k=k+3;
   	}
   		var div_i = document.createElement("div");
   		div_i.id="question_div";
   		q.appendChild(div_i);
   		var intrebare = document.createElement("p");
   		intrebare.style.fontSize="30px";
   		intrebare.style.fontWeight="bold";
   		intrebare.innerHTML=intrebari[0];
   		intrebare.name=disorders[0];
   		intrebare.id="question";
   		div_i.appendChild(intrebare);

   		div_i.appendChild(document.createElement("BR"));

   		var ok=0; 

		var label = document.createElement("LABEL");
		var c = document.createElement("INPUT");
		c.setAttribute("type", "radio");
		c.value=0;
		c.name="answer";
		c.onclick=function(){ok=1;}
		label.htmlFor=0;
		label.innerHTML="Not at all ";
		div_i.appendChild(label);
		div_i.appendChild(c);

		var label = document.createElement("LABEL");
		var c = document.createElement("INPUT");
		c.setAttribute("type", "radio");
		c.value=1;
		c.name="answer";
		c.onclick=function(){ok=1;}
		label.htmlFor=1;
		label.innerHTML=" Somewhat ";
		div_i.appendChild(label);
		div_i.appendChild(c);

		var label = document.createElement("LABEL");
		var c = document.createElement("INPUT");
		c.setAttribute("type", "radio");
		c.value=2;
		c.name="answer";
		c.onclick=function(){ok=1;}
		label.htmlFor=2;
		label.innerHTML=" Very much ";
		div_i.appendChild(label);
		div_i.appendChild(c);
		i=1;
		var elem1_ml=0;
   		var elem2_ml=5;

   	window.onkeydown=function(e){

   		if(i<k&&e.keyCode==39&&ok==1)
   		{

   			ok=0;


			var alegeri = document.getElementsByName("answer");
   			for(var j = 0 ; j<3 ; j++)
   				if(alegeri[j].checked==true &&  document.getElementById("question").name=="anxiety")
   				
   					score_anxiety=score_anxiety+parseInt(alegeri[j].value);

   					
   				else if(alegeri[j].checked==true &&  document.getElementById("question").name=="depression")
   					score_depression=score_depression+parseInt(alegeri[j].value);

  
   				else if(alegeri[j].checked==true &&  document.getElementById("question").name=="bipolar")

   					score_bipolar=score_bipolar+parseInt(alegeri[j].value);

   					



   			var div_rb=document.getElementById("div-rb");
   			var elem1 = div_rb.firstChild;
   			var elem2 = elem1.nextSibling;


			  var pos = 0;
			  var id = setInterval(frame, 50);
			  function frame() {
			    if (pos>rb_procent) {
			      clearInterval(id);
			      elem1_ml=elem1_ml + pos - 1;
			      elem2_ml=elem2_ml + pos - 1;

			    } else {
			      pos++; 
			      elem1.style.marginLeft = (elem1_ml + pos) + "%"; 
			      elem2.style.marginLeft = (elem2_ml + pos) + "%";
			      elem2.innerHTML = (elem2_ml - 5 + pos) + "%";
			    }
			  }

   		var div_i = document.createElement("div");
   		div_i.id="question_div"
   		var intrebare = document.createElement("p");
   		intrebare.style.fontSize="30px";
   		intrebare.style.fontWeight="bold";
   		intrebare.innerHTML=intrebari[i];
   		intrebare.name=disorders[i];
   		intrebare.id="question";
   		div_i.appendChild(intrebare);

   		div_i.appendChild(document.createElement("BR"));

		var label = document.createElement("LABEL");
		var c = document.createElement("INPUT");
		c.setAttribute("type", "radio");
		c.value=0;
		c.name="answer";
		c.onclick=function(){ok=1;}
		label.htmlFor=1;
		label.innerHTML="Not at all ";
		div_i.appendChild(label);
		div_i.appendChild(c);

		var label = document.createElement("LABEL");
		var c = document.createElement("INPUT");
		c.setAttribute("type", "radio");
		c.value=1;
		c.name="answer";
		c.onclick=function(){ok=1;}
		label.htmlFor=2
		label.innerHTML=" Somewhat ";
		div_i.appendChild(label);
		div_i.appendChild(c);

		var label = document.createElement("LABEL");
		var c = document.createElement("INPUT");
		c.setAttribute("type", "radio");
		c.value=2;
		c.name="answer";
		c.onclick=function(){ok=1;}
		label.htmlFor=3;
		label.innerHTML=" Very much ";
		div_i.appendChild(label);
		div_i.appendChild(c);
		i++;

		q.replaceChild(div_i,q.lastChild);

   		}
   		else if(i==k&&e.keyCode==39&&ok==1)

   		{
   			var alegeri = document.getElementsByName("answer");
   			for(var j = 0 ; j<3 ; j++)
   				if(alegeri[j].checked==true &&  document.getElementById("question").name=="anxiety")
   				
   					score_anxiety=score_anxiety+parseInt(alegeri[j].value);

   					
   				else if(alegeri[j].checked==true &&  document.getElementById("question").name=="depression")
   				
   					score_depression=score_depression+parseInt(alegeri[j].value);

   					
   				else if(alegeri[j].checked==true &&  document.getElementById("question").name=="bipolar")
   				
   					score_bipolar=score_bipolar+parseInt(alegeri[j].value);

   					

   				var div_rb=document.getElementById("div-rb");
   			var elem1 = div_rb.firstChild;
   			var elem2 = elem1.nextSibling;


			  var pos = 0;
			  var id = setInterval(frame, 50);
			  function frame() {
			    if (elem2.innerHTML=="100%") {
			      clearInterval(id);
			      elem1_ml=elem1_ml + pos - 1;
			      elem2_ml=elem2_ml + pos - 1;

			    } else {
			      pos++; 
			      elem1.style.marginLeft = (elem1_ml + pos) + "%"; 
			      elem2.style.marginLeft = (elem2_ml + pos) + "%";
			      elem2.innerHTML = (elem2_ml - 5 + pos) + "%";
			    }
			  }

			  setTimeout(function(){

			  	var gender = document.querySelector('input[name="gender"]:checked').value;
			  	var age  = document.getElementById("age").value;
			  	localStorage.setItem("gender", gender);
			  	localStorage.setItem("age", age);
			  	q.removeChild(document.getElementById("date_utilizator"));

			  	q.removeChild(document.getElementById("question_div"));
			  	q.removeChild(div_rb);
			  	var t = document.createTextNode("Choose the display mode: ");
			  	q.appendChild(t);

			  	var mod_afisare = document.createElement("SELECT");
			  	var points = document.createElement("OPTION");
			  	points.text="points";
			  	var percent = document.createElement("OPTION");
			  	percent.text="percent";
			  	mod_afisare.add(points);
			  	mod_afisare.add(percent);
			  	mod_afisare.value="points";
			  	mod_afisare.style.display="block";
			  	mod_afisare.style.border="1px solid purple";
			  	mod_afisare.style.margin="auto";
			  	mod_afisare.style.marginTop="20px";
			  	mod_afisare.style.marginBottom="20px";

			  	q.appendChild(mod_afisare);

			  	var div_rez=document.createElement("div");
			  	div_rez.id="result";
			  	q.appendChild(div_rez);

			  	if(teste[0]==1)
			  	{var p = document.createElement("p");
			  	p.innerHTML="Your score for the anxiety test is "+score_anxiety+" out of 6.";
			  	p.style.marginTop="15px";
			  	div_rez.appendChild(p);}
			  	if(teste[1]==1)
			  	{var p = document.createElement("p");
			  	p.innerHTML="Your score for the depression test is "+score_depression+" out of 6.";
			  	p.style.marginTop="15px";
			  	div_rez.appendChild(p);}
			  	if(teste[2]==1)
			  	{var p = document.createElement("p");
			  	p.innerHTML="Your score for the bipolar disorder test is "+score_bipolar+" out of 6.";
			  	p.style.marginTop="15px";
			  	div_rez.appendChild(p);}

			  	var avg;
					  	if(age>60) avg=2.5;
					  	else if(age>50) avg=3.5;
					  	else if(age>40) avg=4.5;
					  	else if(age>30) avg=3;
					  	else if(age>18) avg=2.7;

					  	var avg2;
					  	if(gender=="female") avg2=4.3;
					  	else if(gender=="male") avg2=2;
					  	else avg2=1.6;

					  	div_rez.appendChild(document.createElement("BR"));
					  	var average = document.createTextNode("The average result from people of similar age is "+avg+" and the average result from people of same gender is "+avg2+".");
					  	div_rez.appendChild(average);

			  	mod_afisare.onchange=function(){

			  		if(this.value=="points")
			  		{
			  			var div_rez=document.createElement("div");
			  			q.replaceChild(div_rez,document.getElementById("result"));
					  	div_rez.id="result";
					  

					  	if(teste[0]==1)
					  	{var p = document.createElement("p");
					  	p.innerHTML="Your score for the anxiety test is "+score_anxiety+" out of 6.";
					  	p.style.marginTop="15px";
					  	div_rez.appendChild(p);}
					  	if(teste[1]==1)
					  	{var p = document.createElement("p");
					  	p.innerHTML="Your score for the depression test is "+score_depression+" out of 6.";
					  	p.style.marginTop="15px";
					  	div_rez.appendChild(p);}
					  	if(teste[2]==1)
					  	{var p = document.createElement("p");
					  	p.innerHTML="Your score for the bipolar disorder test is "+score_bipolar+" out of 6.";
					  	p.style.marginTop="15px";
					  	div_rez.appendChild(p);}

					  
					

					  	var avg;
					  	if(age>60) avg=2.5;
					  	else if(age>50) avg=3.5;
					  	else if(age>40) avg=4.5;
					  	else if(age>30) avg=3;
					  	else if(age>18) avg=2.7;

					  	var avg2;
					  	if(gender=="female") avg2=4.3;
					  	else if(gender=="male") avg2=2;
					  	else avg2=1.6;

					  	div_rez.appendChild(document.createElement("BR"));
					  	var average = document.createTextNode("The average result from people of similar age is "+avg+" and the average result from people of same gender is "+avg2+".");
					  	div_rez.appendChild(average);


			  		}
			  		else
			  		{
			  			var div_rez=document.createElement("div");
			  			q.replaceChild(div_rez,document.getElementById("result"));
					  	div_rez.id="result";

					  	if(teste[0]==1)
					  	{var p = document.createElement("p");
					  	p.innerHTML="Your score for the anxiety test is "+Math.ceil(score_anxiety*100/6)+"% .";
					  	p.style.marginTop="15px";
					  	div_rez.appendChild(p);}
					  	if(teste[1]==1)
					  	{var p = document.createElement("p");
					  	p.innerHTML="Your score for the depression test is "+Math.ceil(score_depression*100/6)+"% .";
					  	p.style.marginTop="15px";
					  	div_rez.appendChild(p);}
					  	if(teste[2]==1)
					  	{var p = document.createElement("p");
					  	p.innerHTML="Your score for the bipolar disorder test is "+Math.ceil(score_bipolar*100/6)+"% .";
					  	p.style.marginTop="15px";
					  	div_rez.appendChild(p);}

				

					  	var avg;
					  	if(age>60) avg="45%";
					  	else if(age>50) avg="60%";
					  	else if(age>40) avg="80%";
					  	else if(age>30) avg="55";
					  	else if(age>18) avg="47%";

					  	var avg2;
					  	if(gender=="female") avg2="77%";
					  	else if(gender=="male") avg2="35%";
					  	else avg2="21%";

					  	div_rez.appendChild(document.createElement("BR"));
					  	var average = document.createTextNode("The average result from people of similar age is "+avg+" and the average result from people of same gender is "+avg2+".");
					  	div_rez.appendChild(average);

			  		}


			  	}

			  	q.appendChild(document.createElement("BR"));
			  	q.appendChild(document.createTextNode("Change the font size: "));
			  	q.appendChild(document.createElement("BR"));
			  	var f_size = document.createElement("INPUT");
			  	f_size.type="range";
			  	f_size.min=1.2;
			  	f_size.max=2.2;
			  	f_size.step=0.2;
			  	f_size.value=1.2;
			  	f_size.onchange=function(){q.style.fontSize=this.value+"rem";}
			  	q.appendChild(f_size);

			  	q.appendChild(document.createElement("BR"));
			  	var st = document.createElement("p");
			  	st.innerHTML="Tell us your story while forgetting about everything else..."
			  	st.style.fontWeight="bold";
			  	st.style.marginTop="100px";
			  	st.style.marginBottom="50px";
			  	st.style.fontSize="1.5rem";
			  	q.appendChild(st);
			  	var ta = document.createElement("TEXTAREA");
			  	ta.style.margin="auto";
			  	ta.style.marginTop="60px";
			  	ta.style.border="3px solid #9595b7";
			  	ta.style.color="#9595b7";
			  	ta.style.display="block";
			  	ta.style.height="300px";
			  	ta.style.width="400px";
			  	ta.style.outline="0.5px solid lavenderblush";

			

			  	var bt = document.createElement("BUTTON");
			  	bt.innerHTML="Send it to us";
			  	bt.style.display="block";
				bt.style.margin="auto";
				bt.style.marginTop="30px";
				bt.style.borderRadius="40%";
				bt.style.height="30px";
				bt.style.width="200px";
				bt.style.color="#9595b7";
			  	bt.onclick=function(){

			  		localStorage.setItem("story", ta.value);
			  		alert("Your story was uploaded.");
			  	}
			  	q.appendChild(ta);

			  	q.appendChild(bt);

			  }, 2000)
   			
   			
   		}
   		else if(ok==0)
   		{
   			alert("Trebuie sa selectezi o varianta.");
   		}

   	}

	},5000)

});












}
