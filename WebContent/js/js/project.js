function myfunction()
{
 //----------------FIRST SECTION-----------//
  
	var  section1=document.createElement("SECTION");
	section1.id="first";
	document.body.appendChild(section1);

  //-----HEADER SECTION-----------//

	var  header=document.createElement("HEADER");
	section1.appendChild(header);

	var heading=document.createElement("H3");
	var headingnode=document.createTextNode("envato");
	var span=document.createElement("SPAN");
	var spannode=document.createTextNode("market");
	span.appendChild(spannode);
	heading.appendChild(headingnode);
	heading.appendChild(span);
	header.appendChild(heading);
    
    var para=document.createElement("P");
    var paratext=document.createTextNode("Buy Now");
    para.appendChild(paratext);
    header.appendChild(para);
//----------END HEADER----------------//

//HEADING//
    var division=document.createElement("DIV");
    division.setAttribute("class","content");
    section1.appendChild(division);

    var center=document.createElement("center");
    division.appendChild(center);

    var headingtwo=document.createElement("p");
    headingtwo.setAttribute("id","para1")
    var headingtext=document.createTextNode("THE BOARD");
    headingtwo.appendChild(headingtext);
    center.appendChild(headingtwo);

     var headingtwo=document.createElement("p");
     headingtwo.setAttribute("id","para2");
    var headingtext=document.createTextNode("YOUR SIMPLE ELEGANT THEME");
    headingtwo.appendChild(headingtext);
    center.appendChild(headingtwo);

    //---HOME SECTION----//
    
    var section2=document.createElement("SECTION");
    section2.setAttribute("id","home");
    document.body.appendChild(section2);

    var divisionthird=document.createElement("div");
    divisionthird.setAttribute("class","list");
    section2.appendChild(divisionthird);

    var unorder=document.createElement("ul");
    divisionthird.appendChild(unorder);

    //HOME LIST//

    var list1=document.createElement("li");
    var anch = document.createElement("a");
    anch.setAttribute("href","#home");
    var listnode=document.createTextNode("HOME");
    list1.appendChild(anch);
    anch.appendChild(listnode);
    unorder.appendChild(list1);

    var list1=document.createElement("li");
    var anch = document.createElement("a");
    anch.setAttribute("href","#about");
    var listnode=document.createTextNode("ABOUT US");
    list1.appendChild(anch);
    anch.appendChild(listnode);
    unorder.appendChild(list1);

    var list1=document.createElement("li");
    var anch = document.createElement("a");
    anch.setAttribute("href","#ourwork");
    var listnode=document.createTextNode("WORK");
    list1.appendChild(anch);
    anch.appendChild(listnode);
    unorder.appendChild(list1);

    var list1=document.createElement("li");
    var anch = document.createElement("a");
    anch.setAttribute("href","#offers");
    var listnode=document.createTextNode("OFFERS");
    list1.appendChild(anch);
    anch.appendChild(listnode);
    unorder.appendChild(list1);

    
     

    //END OF LIST//

    //SLIDEIMAGES DIV//

    var slideshow=document.createElement("div");
    slideshow.setAttribute("id","slideshow");
    section2.appendChild(slideshow);

    var slideimg=document.createElement("div");
    var image=document.createElement("img");
    image.setAttribute("src","../images/ta.jpg");
    slideimg.appendChild(image);
    slideshow.appendChild(slideimg);

    var slideimg=document.createElement("div");
    var image=document.createElement("img");
    image.setAttribute("src","../images/t1.jpg");
    slideimg.appendChild(image);
    slideshow.appendChild(slideimg);

var slideimg=document.createElement("div");
    var image=document.createElement("img");
    image.setAttribute("src","../images/t2.jpg");
    slideimg.appendChild(image);
    slideshow.appendChild(slideimg);

//END FIRST SECTION//

//-----START ABOUT SECTION------//

    var section3=document.createElement("SECTION");
    section3.setAttribute("id","about");
    document.body.appendChild(section3);

    var aboutdiv=document.createElement("div");
    aboutdiv.setAttribute("class","about");
    section3.appendChild(aboutdiv);
      
      var center=document.createElement("center");
      aboutdiv.appendChild(center);

    var head3=document.createElement("h3");
    var headtext=document.createTextNode("ABOUT  US");
    head3.appendChild(headtext);
    center.appendChild(head3);

    var  line=document.createElement("p");
    var linetext=document.createTextNode("This is photoshop's verson of Lorem Ipsum");
    line.appendChild(linetext);
    center.appendChild(line);

   var  line=document.createElement("p");
    var linetext=document.createTextNode("proin Gravida nibh vel velit auctor aliquet,Aenean sollicitudin,lorem quis bibendum aucto.");
    line.appendChild(linetext);
    center.appendChild(line);
//-------WHO WE ARE-------------//
    var paradiv=document.createElement("div");
    paradiv.setAttribute("id","firstpara");
    aboutdiv.appendChild(paradiv);

    var head3=document.createElement("h4");
    var headtext=document.createTextNode("WHO WE ARE");
    head3.appendChild(headtext);
    paradiv.appendChild(head3);

    var line=document.createElement("p");
    var linetext=document.createTextNode("Lorem ipsum dolor sit amet,consectetur");
    line.appendChild(linetext);
    paradiv.appendChild(line);

    var line=document.createElement("p");
    var linetext=document.createTextNode("adipiscing elit.Sed ac mollis odio,vitea");
    line.appendChild(linetext);
    paradiv.appendChild(line);

    var line=document.createElement("p");
    var linetext=document.createTextNode("elementum sapien.Aliquam vestibulum et erat");
    line.appendChild(linetext);
    paradiv.appendChild(line);

    var line=document.createElement("p");
    var linetext=document.createTextNode("eu elementum.Cras lacus massa ,molesite");
    line.appendChild(linetext);
    paradiv.appendChild(line);

    var line=document.createElement("p");
    var linetext=document.createTextNode("sollicitudin pulvinar vitae,pretium eu mauris.");
    line.appendChild(linetext);
    paradiv.appendChild(line);

    var paradiv=document.createElement("div");
    paradiv.setAttribute("id","firstpara");
    aboutdiv.appendChild(paradiv);
//---------OUR GOAL----------------//
    var head3=document.createElement("h4");
    var headtext=document.createTextNode("OUR GOAL");
    head3.appendChild(headtext);
    paradiv.appendChild(head3);

    var line=document.createElement("p");
    var linetext=document.createTextNode("Lorem ipsum dolor sit amet,consectetur");
    line.appendChild(linetext);
    paradiv.appendChild(line);

    var line=document.createElement("p");
    var linetext=document.createTextNode("adipiscing elit.Sed ac mollis odio,vitea");
    line.appendChild(linetext);
    paradiv.appendChild(line);

    var line=document.createElement("p");
    var linetext=document.createTextNode("elementum sapien.Aliquam vestibulum et erat");
    line.appendChild(linetext);
    paradiv.appendChild(line);

    var line=document.createElement("p");
    var linetext=document.createTextNode("eu elementum.Cras lacus massa ,molesite");
    line.appendChild(linetext);
    paradiv.appendChild(line);

    var line=document.createElement("p");
    var linetext=document.createTextNode("sollicitudin pulvinar vitae,pretium eu mauris.");
    line.appendChild(linetext);
    paradiv.appendChild(line);

    //----------OUR PHILOSOPHY----------//

var paradiv=document.createElement("div");
    paradiv.setAttribute("id","firstpara");
    aboutdiv.appendChild(paradiv);

    var head3=document.createElement("h4");
    var headtext=document.createTextNode("OUR PHILOSOPHY");
    head3.appendChild(headtext);
    paradiv.appendChild(head3);

    var line=document.createElement("p");
    var linetext=document.createTextNode("Lorem ipsum dolor sit amet,consectetur");
    line.appendChild(linetext);
    paradiv.appendChild(line);

    var line=document.createElement("p");
    var linetext=document.createTextNode("adipiscing elit.Sed ac mollis odio,vitea");
    line.appendChild(linetext);
    paradiv.appendChild(line);

    var line=document.createElement("p");
    var linetext=document.createTextNode("elementum sapien.Aliquam vestibulum et erat");
    line.appendChild(linetext);
    paradiv.appendChild(line);

    var line=document.createElement("p");
    var linetext=document.createTextNode("eu elementum.Cras lacus massa ,molesite");
    line.appendChild(linetext);
    paradiv.appendChild(line);

    var line=document.createElement("p");
    var linetext=document.createTextNode("sollicitudin pulvinar vitae,pretium eu mauris.");
    line.appendChild(linetext);
    paradiv.appendChild(line);

//----------MEET THE DEAM DIV---------//

   var imagediv=document.createElement("div");
   imagediv.setAttribute("class","gallery");
   aboutdiv.appendChild(imagediv);

   var heading=document.createElement("h5");
   var headtext=document.createTextNode("MEET THE TEAM");
   heading.appendChild(headtext);
   imagediv.appendChild(heading);

   //---------MEET THE DEAM IMAGES--------//

   var man=document.createElement("div");
   man.setAttribute("class","photos");
   imagediv.appendChild(man);

   var picture=document.createElement("img");
   picture.setAttribute("id","picture");
   picture.setAttribute("src","../images/team01.jpg");
   man.appendChild(picture);
  
   var text=document.createElement("p");
   text.setAttribute("id","John");
   var textnode=document.createTextNode("John Doe");
   text.appendChild(textnode);
   man.appendChild(text);
    var text=document.createElement("p");
   var textnode=document.createTextNode("Graphic Designer");
   text.appendChild(textnode);
   man.appendChild(text);

  var man=document.createElement("div");
   man.setAttribute("class","photos");
   imagediv.appendChild(man);

   var picture=document.createElement("img");
   picture.setAttribute("id","picture");
   picture.setAttribute("src","../images/team02.jpg");
   man.appendChild(picture);
  
   var text=document.createElement("p");
     text.setAttribute("id","John");
   var textnode=document.createTextNode("John Doe");
   text.appendChild(textnode);
   man.appendChild(text);
   var text=document.createElement("p");
   var textnode=document.createTextNode("Graphic Designer");
   text.appendChild(textnode);
   man.appendChild(text);

   var man=document.createElement("div");
   man.setAttribute("class","photos");
   imagediv.appendChild(man);

   var picture=document.createElement("img");
   picture.setAttribute("id","picture");
   picture.setAttribute("src","../images/team03.jpg");
   man.appendChild(picture);
  
   var text=document.createElement("p");
   text.setAttribute("id","John");
   var textnode=document.createTextNode("John Doe");
   text.appendChild(textnode);
   man.appendChild(text);
    var text=document.createElement("p");
   var textnode=document.createTextNode("Graphic Designer");
   text.appendChild(textnode);
   man.appendChild(text);

//END OF ABOUT SECTION//

//--------START OF WORK SECTION----------//

   var section4=document.createElement("SECTION");
   section4.setAttribute("id","ourwork");
   document.body.appendChild(section4);

   var workdiv=document.createElement("div");
   workdiv.setAttribute("class","work");
   section4.appendChild(workdiv);

   var center=document.createElement("center");
      workdiv.appendChild(center);


   var head3=document.createElement("h3");
    var headtext=document.createTextNode("OUR WORK");
    head3.appendChild(headtext);
    center.appendChild(head3);

    var  line=document.createElement("p");
    var linetext=document.createTextNode("This is photoshop's verson of Lorem Ipsum");
    line.appendChild(linetext);
    center.appendChild(line);

   var  line=document.createElement("p");
    var linetext=document.createTextNode("proin Gravida nibh vel velit auctor aliquet,Aenean sollicitudin,lorem quis bibendum aucto.");
    line.appendChild(linetext);
    center.appendChild(line);
    
    var unorderone=document.createElement("ul");
    center.appendChild(unorderone);

    //---WORK LIST----//

    var list=document.createElement("li");
    list.setAttribute("id","all");
    var listnode=document.createTextNode("ALL");
    list.appendChild(listnode);
    unorderone.appendChild(list);

    var list=document.createElement("li");
    var listnode=document.createTextNode("MOTION");
    list.appendChild(listnode);
    unorderone.appendChild(list);

    var list=document.createElement("li");
    var listnode=document.createTextNode("WEB DESIGN");
    list.appendChild(listnode);
    unorderone.appendChild(list);

    var list=document.createElement("li");
    var listnode=document.createTextNode("PHOTOGRAPHY");
    list.appendChild(listnode);
    unorderone.appendChild(list);

    var list=document.createElement("li");
    var listnode=document.createTextNode("PRINT");
    list.appendChild(listnode);
    unorderone.appendChild(list);

    //-----------END OF LIST-----//

    //-------WORK SECTION IMAGES------//

    var nextdiv=document.createElement("div");
    nextdiv.setAttribute("class","contenttwo");
    workdiv.appendChild(nextdiv);

//---------FIRST ROW-----------//

    var gallery=document.createElement("div");
    gallery.setAttribute("class","photostwo");
    nextdiv.appendChild(gallery);

   var picture=document.createElement("img");
   picture.setAttribute("id","pictureone");
   picture.setAttribute("src","../images/one.jpg");
   gallery.appendChild(picture);


   var gallery=document.createElement("div");
   gallery.setAttribute("class","photostwo");
   nextdiv.appendChild(gallery);

   var picture=document.createElement("img");
   picture.setAttribute("id","pictureone");
   picture.setAttribute("src","../images/two.jpg");
   gallery.appendChild(picture);
  

   var gallery=document.createElement("div");
   gallery.setAttribute("class","photostwo");
   nextdiv.appendChild(gallery);

   var picture=document.createElement("img");
   picture.setAttribute("id","pictureone");
   picture.setAttribute("src","../images/3.jpg");
   gallery.appendChild(picture);

   var gallery=document.createElement("div");
   gallery.setAttribute("class","photostwo");
   nextdiv.appendChild(gallery);


   //---------SECOND ROW---------------//

   var picture=document.createElement("img");
   picture.setAttribute("id","pictureone");
   picture.setAttribute("src","../images/four.jpg");
   gallery.appendChild(picture);

   var gallery=document.createElement("div");
   gallery.setAttribute("class","photostwo");
   workdiv.appendChild(gallery);

   var picture=document.createElement("img");
   picture.setAttribute("id","pictureone");
   picture.setAttribute("src","../images/51.jpg");
   gallery.appendChild(picture);

   var gallery=document.createElement("div");
   gallery.setAttribute("class","photostwo");
   nextdiv.appendChild(gallery);

   var picture=document.createElement("img");
   picture.setAttribute("id","pictureone");
   picture.setAttribute("src","../images/6.jpg");
   gallery.appendChild(picture);

   var gallery=document.createElement("div");
   gallery.setAttribute("class","photostwo");
   nextdiv.appendChild(gallery);

   //--------THIRD ROW---------------//

   var picture=document.createElement("img");
   picture.setAttribute("id","pictureone");
   picture.setAttribute("src","../images/seven.jpg");
   gallery.appendChild(picture);

   var gallery=document.createElement("div");
   gallery.setAttribute("class","photostwo");
   nextdiv.appendChild(gallery);

   var picture=document.createElement("img");
   picture.setAttribute("id","pictureone");
   picture.setAttribute("src","../images/eight.jpg");
   gallery.appendChild(picture);

   var gallery=document.createElement("div");
   gallery.setAttribute("class","photostwo");
   nextdiv.appendChild(gallery);

   var picture=document.createElement("img");
   picture.setAttribute("id","pictureone");
   picture.setAttribute("src","../images/9.jpg");
   gallery.appendChild(picture);
  
  //--------END OF IMAGES----------//


   var divisionfive=document.createElement("div");
   divisionfive.setAttribute("class","rolling");
   workdiv.appendChild(divisionfive);

   //-----LATASET PROJECT------------//
   
   var para=document.createElement("p");
   var paratext=document.createTextNode("LATAEST PROJECT");
   para.appendChild(paratext);
   divisionfive.appendChild(para);

   var center=document.createElement("center");
   divisionfive.appendChild(center);

   var rollimage=document.createElement("img");
   rollimage.setAttribute("src","../images/nn.jpg");
   center.appendChild(rollimage);

   var divisionsix=document.createElement("div");
   divisionsix.setAttribute("class","clients");
   divisionfive.appendChild(divisionsix);

   var heading=document.createElement("p");
   var headingtext=document.createTextNode("OUR CLIENTS");
   heading.appendChild(headingtext);
   divisionsix.appendChild(heading);

//-------------CLIENTS DIV--------------//

   var clientsdiv=document.createElement("div");
   clientsdiv.setAttribute("class","clientsgallery");
   workdiv.appendChild(clientsdiv);

   var touch=document.createElement("div");
   touch.setAttribute("id","clientsimage");
   clientsdiv.appendChild(touch);

   var image=document.createElement("img");
   image.setAttribute("src","../images/clientone.png");
   touch.appendChild(image);

   var text=document.createElement("p");
   text.setAttribute("class","yellow");
   var textnode=document.createTextNode("TOUCH");
   text.appendChild(textnode);
   touch.appendChild(text);

   var text=document.createElement("p");
   var textnode=document.createTextNode("Can touch this");
   text.appendChild(textnode);
   touch.appendChild(text);
   
   var grab=document.createElement("div");
   grab.setAttribute("id","clientsimage");
   clientsdiv.appendChild(grab);

   var image=document.createElement("img");
   image.setAttribute("src","../images/clienttwo.png");
   grab.appendChild(image);

   var text=document.createElement("p");
     text.setAttribute("class","yellow");
   var textnode=document.createTextNode("GRAB");
   text.appendChild(textnode);
   grab.appendChild(text);

   var text=document.createElement("p");
   var textnode=document.createTextNode("Can grab this");
   text.appendChild(textnode);
   grab.appendChild(text);


var responsive=document.createElement("div");
   responsive.setAttribute("id","clientsimage");
   clientsdiv.appendChild(responsive);

   var image=document.createElement("img");
   image.setAttribute("src","../images/clientthree.png");
   responsive.appendChild(image);

   var text=document.createElement("p");
     text.setAttribute("class","yellow");
   var textnode=document.createTextNode("RESPONSIVE");
   text.appendChild(textnode);
   responsive.appendChild(text);

   var text=document.createElement("p");
   var textnode=document.createTextNode("Fully responsive!");
   text.appendChild(textnode);
   responsive.appendChild(text);

var css3=document.createElement("div");
   css3.setAttribute("id","clientsimage");
   clientsdiv.appendChild(css3);

   var image=document.createElement("img");
   image.setAttribute("src","../images/clientfour.png");
   css3.appendChild(image);

   var text=document.createElement("p");
     text.setAttribute("class","yellow");
   var textnode=document.createTextNode("CSS3");
   text.appendChild(textnode);
   css3.appendChild(text);

   var text=document.createElement("p");
   var textnode=document.createTextNode("3D Acceleration.");
   text.appendChild(textnode);
   css3.appendChild(text);

var multiply=document.createElement("div");
   multiply.setAttribute("id","clientsimage");
   clientsdiv.appendChild(multiply);

   var image=document.createElement("img");
   image.setAttribute("src","../images/clientfive.png");
   multiply.appendChild(image);

   var text=document.createElement("p");
     text.setAttribute("class","yellow");
   var textnode=document.createTextNode("MULTIPLY");
   text.appendChild(textnode);
   multiply.appendChild(text);

   var text=document.createElement("p");
   var textnode=document.createTextNode("Owls on page.");
   text.appendChild(textnode);
   multiply.appendChild(text);

//----------END OF WORK SECTION-------------//

//----------START IN OFFERS SECTION-------------//

   var section5=document.createElement("SECTION");
   section5.setAttribute("id","offers");
   document.body.appendChild(section5);

   var offersdiv=document.createElement("div");
   offersdiv.setAttribute("class","offers");
   section5.appendChild(offersdiv);

   var center=document.createElement("center");
      offersdiv.appendChild(center);


   var head3=document.createElement("h3");
    var headtext=document.createTextNode("OFFERS");
    head3.appendChild(headtext);
    center.appendChild(head3);

    var  line=document.createElement("p");
    var linetext=document.createTextNode("This is photoshop's verson of Lorem Ipsum");
    line.appendChild(linetext);
    center.appendChild(line);

   var  line=document.createElement("p");
    var linetext=document.createTextNode("proin Gravida nibh vel velit auctor aliquet,Aenean sollicitudin,lorem quis bibendum aucto.");
    line.appendChild(linetext);
    center.appendChild(line);

    //---------------OFFERS IMAGE--------------//

    var offersimg=document.createElement("div");
    offersimg.setAttribute("class","offersgallery");
    offersdiv.appendChild(offersimg);
//-----------IMAGE FOR FIRST DIV---------------//
    var offerspicure=document.createElement("div");
    offerspicure.setAttribute("id","offersimage");
    offersimg.appendChild(offerspicure);

    var ima=document.createElement("img");
    ima.setAttribute("src","../images/offerone.jpg");
    offerspicure.appendChild(ima);

    var heading5=document.createElement("h5");
    var headingtext=document.createTextNode("STARTED DEAL");
    heading5.appendChild(headingtext);
    offerspicure.appendChild(heading5);

    var line=document.createElement("p");
    var listnode=document.createTextNode("Lorem ipsum dolor sit amet,")
    line.appendChild(listnode);
    offerspicure.appendChild(line);

     var line=document.createElement("p");
    var listnode=document.createTextNode("consectetur adipisicing elit,")
    line.appendChild(listnode);
    offerspicure.appendChild(line);

     var line=document.createElement("p");
    var listnode=document.createTextNode("Architecto, harum, doloribus. ")
    line.appendChild(listnode);
    offerspicure.appendChild(line);

     var line=document.createElement("p");
    var listnode=document.createTextNode("Ducimus, cumque, voluptatibus")
    line.appendChild(listnode);
    offerspicure.appendChild(line);

     var line=document.createElement("p");
    var listnode=document.createTextNode("provident ipsa soluta officia ")
    line.appendChild(listnode);
    offerspicure.appendChild(line);


var line=document.createElement("p");
    var listnode=document.createTextNode("dolorum minus praesentium ")
    line.appendChild(listnode);
    offerspicure.appendChild(line);

    var line=document.createElement("p");
    var listnode=document.createTextNode("consequatur fugiat voluptates! ")
    line.appendChild(listnode);
    offerspicure.appendChild(line);

    var line=document.createElement("p");
    line.setAttribute("id","month");
    var listnode=document.createTextNode("person/month");
     line.appendChild(listnode);
    var span=document.createElement("span");
    var spantext=document.createTextNode("$20");
      span.appendChild(spantext);
     line.appendChild(span);
    offerspicure.appendChild(line);

    var line=document.createElement("p");
       line.setAttribute("class","Now");
    var listnode=document.createTextNode("Submit Now ");
    line.appendChild(listnode);
    offerspicure.appendChild(line);

    //--------------SECOND DIV FOR IMAGE-------------//

    var offerspicure=document.createElement("div");
    offerspicure.setAttribute("id","offersimage");
    offersimg.appendChild(offerspicure);

    var imatwo=document.createElement("img");
    imatwo.setAttribute("src","../images/offertwo.jpg");
    offerspicure.appendChild(imatwo);

    var heading5=document.createElement("h5");
    var headingtext=document.createTextNode("BEST CHOICE");
    heading5.appendChild(headingtext);
    offerspicure.appendChild(heading5);

    var line=document.createElement("p");
    var listnode=document.createTextNode("Lorem ipsum dolor sit amet,")
    line.appendChild(listnode);
    offerspicure.appendChild(line);

     var line=document.createElement("p");
    var listnode=document.createTextNode("consectetur adipisicing elit,")
    line.appendChild(listnode);
    offerspicure.appendChild(line);

     var line=document.createElement("p");
    var listnode=document.createTextNode("Architecto, harum, doloribus. ")
    line.appendChild(listnode);
    offerspicure.appendChild(line);

     var line=document.createElement("p");
    var listnode=document.createTextNode("Ducimus, cumque, voluptatibus")
    line.appendChild(listnode);
    offerspicure.appendChild(line);

     var line=document.createElement("p");
    var listnode=document.createTextNode("provident ipsa soluta officia ")
    line.appendChild(listnode);
    offerspicure.appendChild(line);


var line=document.createElement("p");
    var listnode=document.createTextNode("dolorum minus praesentium ")
    line.appendChild(listnode);
    offerspicure.appendChild(line);

    var line=document.createElement("p");
    var listnode=document.createTextNode("consequatur fugiat voluptates! ")
    line.appendChild(listnode);
    offerspicure.appendChild(line);

    var line=document.createElement("p");
    line.setAttribute("id","month");
    var listnode=document.createTextNode("person/month ");
     line.appendChild(listnode);
    var span=document.createElement("span");
    var spantext=document.createTextNode("$40");
      span.appendChild(spantext);
     line.appendChild(span);
    offerspicure.appendChild(line);

    var line=document.createElement("p");
       line.setAttribute("class","Now");
    var listnode=document.createTextNode("Submit Now ");
    line.appendChild(listnode);
    offerspicure.appendChild(line);

    //--------------------IMAGE DIV FOR FOUR---------------//

    var offerspicure=document.createElement("div");
    offerspicure.setAttribute("id","offersimage");
    offersimg.appendChild(offerspicure);

    var imathree=document.createElement("img");
    imathree.setAttribute("src","../images/offerthree.jpg");
    offerspicure.appendChild(imathree);

    var heading5=document.createElement("h5");
    var headingtext=document.createTextNode("ABOVE & BEYOND");
    heading5.appendChild(headingtext);
    offerspicure.appendChild(heading5);

    var line=document.createElement("p");
    var listnode=document.createTextNode("Lorem ipsum dolor sit amet,")
    line.appendChild(listnode);
    offerspicure.appendChild(line);

     var line=document.createElement("p");
    var listnode=document.createTextNode("consectetur adipisicing elit,")
    line.appendChild(listnode);
    offerspicure.appendChild(line);

     var line=document.createElement("p");
    var listnode=document.createTextNode("Architecto, harum, doloribus. ")
    line.appendChild(listnode);
    offerspicure.appendChild(line);

     var line=document.createElement("p");
    var listnode=document.createTextNode("Ducimus, cumque, voluptatibus")
    line.appendChild(listnode);
    offerspicure.appendChild(line);

     var line=document.createElement("p");
    var listnode=document.createTextNode("provident ipsa soluta officia ")
    line.appendChild(listnode);
    offerspicure.appendChild(line);


var line=document.createElement("p");
    var listnode=document.createTextNode("dolorum minus praesentium ")
    line.appendChild(listnode);
    offerspicure.appendChild(line);

    var line=document.createElement("p");
    var listnode=document.createTextNode("consequatur fugiat voluptates! ")
    line.appendChild(listnode);
    offerspicure.appendChild(line);

    var line=document.createElement("p");
    line.setAttribute("id","month");
    var listnode=document.createTextNode("person/month  ");
     line.appendChild(listnode);
    var span=document.createElement("span");
    var spantext=document.createTextNode("$60");
      span.appendChild(spantext);
     line.appendChild(span);
    offerspicure.appendChild(line);

    var line=document.createElement("p");
       line.setAttribute("class","Now");
    var listnode=document.createTextNode("Submit Now ");
    line.appendChild(listnode);
    offerspicure.appendChild(line);

    //-------------------IMAGE FOR FOUR--------------//

    var offerspicure=document.createElement("div");
    offerspicure.setAttribute("id","offersimage");
    offersimg.appendChild(offerspicure);

    var imafour=document.createElement("img");
    imafour.setAttribute("src","../images/offerfour.jpg");
    offerspicure.appendChild(imafour);

    var heading5=document.createElement("h5");
    var headingtext=document.createTextNode("THE ULTIMATE");
    heading5.appendChild(headingtext);
    offerspicure.appendChild(heading5);

    var line=document.createElement("p");
    var listnode=document.createTextNode("Lorem ipsum dolor sit amet,")
    line.appendChild(listnode);
    offerspicure.appendChild(line);

     var line=document.createElement("p");
    var listnode=document.createTextNode("consectetur adipisicing elit,")
    line.appendChild(listnode);
    offerspicure.appendChild(line);

     var line=document.createElement("p");
    var listnode=document.createTextNode("Architecto, harum, doloribus. ")
    line.appendChild(listnode);
    offerspicure.appendChild(line);

     var line=document.createElement("p");
    var listnode=document.createTextNode("Ducimus, cumque, voluptatibus")
    line.appendChild(listnode);
    offerspicure.appendChild(line);

     var line=document.createElement("p");
    var listnode=document.createTextNode("provident ipsa soluta officia ")
    line.appendChild(listnode);
    offerspicure.appendChild(line);


var line=document.createElement("p");
    var listnode=document.createTextNode("dolorum minus praesentium ")
    line.appendChild(listnode);
    offerspicure.appendChild(line);

    var line=document.createElement("p");
    var listnode=document.createTextNode("consequatur fugiat voluptates! ")
    line.appendChild(listnode);
    offerspicure.appendChild(line);

    var line=document.createElement("p");
    line.setAttribute("id","month");
    var listnode=document.createTextNode("person/month");
        line.appendChild(listnode);
    var span=document.createElement("span");
    var spantext=document.createTextNode("$80");
      span.appendChild(spantext);
     line.appendChild(span);
    offerspicure.appendChild(line);

    var line=document.createElement("p");
    line.setAttribute("class","Now");
    var listnode=document.createTextNode("Submit Now ");
    line.appendChild(listnode);
    offerspicure.appendChild(line);


    
   

}