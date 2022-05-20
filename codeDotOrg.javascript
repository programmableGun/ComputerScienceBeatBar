//WARNING IF YOUR COMPUTER CAN'T RUN BIG GAMES THEN THE MUSIC WILL BE OFF BEAT AND 
//to run game you have to refresh the browser then run and let music play for 2 seconds then click reset and you should be good to go go go
World.frameRate=30;  
playSound("sound://category_loops/stabilizing_breath_loop1.mp3",true);

/*
top 10 Normal
----
Owner Score|Ben 8827 78% rank:A MaxCombo:73
----
1st | Jay 4368 39% rank:D MaxCombo:21
2nd | Brendan 2756 E
3rd | Johnny 2743 24% rank:E MaxCombo:5 
4th | Mr.Bartly 2704 24% rank:E MaxCombo:4
5th | Christian 2691 24% rank:E MaxCombo:4
6th | Ahab 2444 22% rank:E MaxCombo:2
7th | Orion 2262 20% rank:E MaxCombo:7
8th | Bryce 2197 19% rank:E MaxCombo:3
9th | Kai 2041 18% rank:E MaxCombo:4
10th| Carter 2028 18% rank:E MaxCombo:2
11th| Roewn 2002 18% rank:E MaxCmobo:3
12th| Zack 1872 17% rank E MaxCombo:1





SPECIAL RANK
>Johnny (Bruh)
>
>
>
>
top 3 Fast (2.0x speed)
>Ben 8229 73% rank:A MaxCombo:44
>Jonny 2015 18% rankE MaxCombo:2 
>
*/
camera.on(true);
// Create your variables here

var musicBar=createSprite(200,14000); //-8000 is drums //350 is defualt  // 14000 60 fps fast //go down to tutorial function to change speed offset
musicBar.visible=false;
musicBar.setAnimation("musicBar");
musicBar.setFrame(1);
musicBar.velocityY=-10;
textSize(25);
var highcombo=0;
var combo=0;
var ColR=0;
var ColG=0;
var ColB=0;
var Blocks=createGroup();
var score=0;  
var Costume="musicCube";
var Rank=null;
var stuff="";
var Star1=createSprite(0,randomNumber(0,400));
var Star2=createSprite(0,randomNumber(0,400));
var Star3=createSprite(0,randomNumber(0,400));
var Star4=createSprite(0,randomNumber(0,400));
var Star5=createSprite(0,randomNumber(0,400));
//1350 for 30fps 675 for 60fps
var song="rockefeller-street_3.mp3";  //Fast-for-60 or 3 as in (street_3) for 30
var rankP=0;

Star1.setAnimation("star");
Star2.setAnimation("star");
Star3.setAnimation("star");
Star4.setAnimation("star");
Star5.setAnimation("star");

/*
TIMING
-----------
To calculate Timing follow this method
1. Calculate the distance between int block and pad
2. Divide by FPS
3. Divide by Velocity Y
4. Then minus dely


*/


  
  var musicblock1=createSprite(50,-200);
  Blocks.add(musicblock1);
  
    var musicblock2=createSprite(100,-450);
  Blocks.add(musicblock2);
  
    var musicblock3=createSprite(150,-500);
  Blocks.add(musicblock3);
  
  var musicblock4=createSprite(50,-600);
  Blocks.add(musicblock4);
  
  var musicblock5=createSprite(100,-1050);
  Blocks.add(musicblock5);
  
  var musicblock6=createSprite(50,-1450);
  Blocks.add(musicblock6);
  
  var musicblock7=createSprite(150,-1600);
  Blocks.add(musicblock7);
  
        var musicblock8=createSprite(200,-1900);
  Blocks.add(musicblock8);
    
  
    var musicblock9=createSprite(150,-2000);
  Blocks.add(musicblock9);

  
  var musicblock10=createSprite(200,-2100);
  Blocks.add(musicblock10);
  
  var musicblock11=createSprite(150,-2200);
  Blocks.add(musicblock11);
 
  var musicblock12=createSprite(200,-2300);
  Blocks.add(musicblock12);
  
  var musicblock13=createSprite(150,-2400);
  Blocks.add(musicblock13);
  
    var musicblock14=createSprite(200,-2500);
  Blocks.add(musicblock14);
  
    var musicblock15=createSprite(150,-2600);
  Blocks.add(musicblock15);
  
    var musicblock16=createSprite(200,-2700);
  Blocks.add(musicblock16);
  
   var musicblock17=createSprite(250,-2750);
  Blocks.add(musicblock17);
  
  var musicblock18=createSprite(250,-3000);
  Blocks.add(musicblock18);
  
  var musicblock19=createSprite(300,-3200);
  Blocks.add(musicblock19);
  
  var musicblock20=createSprite(350,-3250);
  Blocks.add(musicblock20);
  
  
    var musicblock21=createSprite(50,-3350);
  Blocks.add(musicblock21);
  
      var musicblock22=createSprite(100,-3450);
  Blocks.add(musicblock22);
  
      var musicblock23=createSprite(150,-3500);
  Blocks.add(musicblock23);
  
        var musicblock24=createSprite(200,-3550);
  Blocks.add(musicblock24);
        
        var musicblock25=createSprite(250,-3600);
  Blocks.add(musicblock25); //top score has  been 962 at thus point might want to change score sytem soon
  /*
  when the beat drops do fjdksal on order like the drums
  */
    
        var musicblock26=createSprite(150,-4150);
  Blocks.add(musicblock26);
        
          var musicblock27=createSprite(250,-4250);
  Blocks.add(musicblock27);
  var musicblock28=createSprite(300,-4350);
  Blocks.add(musicblock28);

    var musicblock29=createSprite(200,-4400);
  Blocks.add(musicblock29);

    var musicblock30=createSprite(250,-4450);
  Blocks.add(musicblock30);

    var musicblock31=createSprite(200,-4500);
  Blocks.add(musicblock31);

    var musicblock32=createSprite(150,-4550);
  Blocks.add(musicblock32);

    var musicblock33=createSprite(200,-4650);
  Blocks.add(musicblock33);

    var musicblock34=createSprite(250,-4850);
  Blocks.add(musicblock34);

      
     var musicblock35=createSprite(300,-5000);
  Blocks.add(musicblock35);

      var musicblock36=createSprite(350,-5050);
  Blocks.add(musicblock36);

  var musicblock37=createSprite(300,-5100);
  Blocks.add(musicblock37);
  
  var musicblock38=createSprite(250,-5150);
  Blocks.add(musicblock38);
  
  var musicblock39=createSprite(200,-5200);
  Blocks.add(musicblock39);
  
  var musicblock40=createSprite(150,-5250);
  Blocks.add(musicblock40);
  
  var musicblock41=createSprite(100,-5300);
  Blocks.add(musicblock41);
  
  var musicblock42=createSprite(50,-5350);
  Blocks.add(musicblock42);
  
  var musicblock43=createSprite(100,-5400);
  Blocks.add(musicblock43);
  
  var musicblock44=createSprite(150,-6000);
  Blocks.add(musicblock44);
  
  var musicblock249=createSprite(200,-6500);
  Blocks.add(musicblock249);
  
  var musicblock254=createSprite(50,-6750);
  Blocks.add(musicblock254);
  
  
  
  var musicblock250=createSprite(250,-7000);
  Blocks.add(musicblock250);
  
  var musicblock255=createSprite(200,-7250);
  Blocks.add(musicblock255);
  
  var musicblock251=createSprite(300,-7500);
  Blocks.add(musicblock251);

var musicblock256=createSprite(100,-7750);
  Blocks.add(musicblock256);
    
  var musicblock252=createSprite(350,-8000);
  Blocks.add(musicblock252);
  
  var musicblock253=createSprite(100,-8250);
  Blocks.add(musicblock253);
  

  
  
  //CRAZY STARTS HERE or aka drums
  
  var musicblock45=createSprite(200,-9050);
  Blocks.add(musicblock45);
  
   var musicblock46=createSprite(250,-9075);
  Blocks.add(musicblock46);
  
     var musicblock47=createSprite(200,-9100);
  Blocks.add(musicblock47);
  
     var musicblock48=createSprite(250,-9125);
  Blocks.add(musicblock48);
  
     var musicblock49=createSprite(200,-9150);
  Blocks.add(musicblock49);
  
     var musicblock50=createSprite(250,-9175);
  Blocks.add(musicblock50);
  
     var musicblock51=createSprite(200,-9200);
  Blocks.add(musicblock51);
  

               var musicblock53=createSprite(300,-9275);
  Blocks.add(musicblock53);
  
  var musicblock54=createSprite(150,-9300);
  Blocks.add(musicblock54);
  
  var musicblock55=createSprite(300,-9325);
  Blocks.add(musicblock55);
  
    var musicblock56=createSprite(150,-9350);
  Blocks.add(musicblock56);
  
     var musicblock57=createSprite(300,-9375);
  Blocks.add(musicblock57);
  
       var musicblock65=createSprite(150,-9400);
  Blocks.add(musicblock65);
  
  
      
  
  
     var musicblock58=createSprite(300,-9425);
  Blocks.add(musicblock58);
  
     var musicblock59=createSprite(150,-9450);
  Blocks.add(musicblock59);
  
     var musicblock60=createSprite(200,-9475);
  Blocks.add(musicblock60);
  
                          var musicblock61=createSprite(250,-9500);
  Blocks.add(musicblock61);
  
       var musicblock62=createSprite(200,-9525);
  Blocks.add(musicblock62);
  
       var musicblock63=createSprite(250,-9550);
  Blocks.add(musicblock63);
  
       var musicblock64=createSprite(200,-9575);
  Blocks.add(musicblock64);
  
         var musicblock66=createSprite(250,-9600);
  Blocks.add(musicblock66);
  
         var musicblock67=createSprite(300,-9650); //
  Blocks.add(musicblock67);
  
           var musicblock68=createSprite(150,-9675);
  Blocks.add(musicblock68);
  
           var musicblock69=createSprite(300,-9700);
  Blocks.add(musicblock69);
  
           var musicblock70=createSprite(150,-9725);
  Blocks.add(musicblock70);
  
           var musicblock71=createSprite(300,-9750);
  Blocks.add(musicblock71);
  
           var musicblock72=createSprite(150,-9775);
  Blocks.add(musicblock72);
  
           var musicblock73=createSprite(300,-9800);
  Blocks.add(musicblock73);
  
         var musicblock74=createSprite(150,-9825);
  Blocks.add(musicblock74);
           var musicblock75=createSprite(300,-9850);
  Blocks.add(musicblock75);
  
           var musicblock76=createSprite(150,-9875);
  Blocks.add(musicblock76);
  
             var musicblock77=createSprite(200,-9925);
  Blocks.add(musicblock77);
  
               var musicblock78=createSprite(250,-9950);
  Blocks.add(musicblock78);
  
               var musicblock79=createSprite(200,-9975);
  Blocks.add(musicblock79);
  
               var musicblock80=createSprite(250,-10000);
  Blocks.add(musicblock80);
  
                 var musicblock81=createSprite(200,-10025);
  Blocks.add(musicblock81);
                
                var musicblock82=createSprite(250,-10050);
  Blocks.add(musicblock82);
  
  var musicblock83=createSprite(200,-10075);
  Blocks.add(musicblock83);
  
  var musicblock84=createSprite(300,-10125);
  Blocks.add(musicblock84);
  
  var musicblock85=createSprite(250,-10150);
  Blocks.add(musicblock85);
  
  var musicblock86=createSprite(300,-10175);
  Blocks.add(musicblock86);
  
  var musicblock87=createSprite(250,-10200);
  Blocks.add(musicblock87);
  
  var musicblock88=createSprite(300,-10225);
  Blocks.add(musicblock88);
  
  var musicblock89=createSprite(250,-10250);
  Blocks.add(musicblock89);
  
  
  var musicblock90=createSprite(300,-10275);
  Blocks.add(musicblock90);

  
    var musicblock91=createSprite(250,-10300);
  Blocks.add(musicblock91);

    var musicblock92=createSprite(350,-10350);
  Blocks.add(musicblock92);

      var musicblock93=createSprite(50,-10375);
  Blocks.add(musicblock93);

      var musicblock94=createSprite(350,-10400);
  Blocks.add(musicblock94);

        var musicblock95=createSprite(50,-10425);
  Blocks.add(musicblock95);

        var musicblock96=createSprite(350,-10450);
  Blocks.add(musicblock96);

        var musicblock97=createSprite(50,-10475);
  Blocks.add(musicblock97);

        var musicblock98=createSprite(350,-10500);
  Blocks.add(musicblock98);

  
        var musicblock99=createSprite(250,-10525);
  Blocks.add(musicblock99);

        var musicblock100=createSprite(200,-10550);
  Blocks.add(musicblock100); 
  
          var musicblock101=createSprite(250,-10575);
  Blocks.add(musicblock101); 
  
          var musicblock102=createSprite(200,-10600);
  Blocks.add(musicblock102); 
  
            var musicblock103=createSprite(250,-10625);
  Blocks.add(musicblock103); 
  
            var musicblock104=createSprite(200,-10650);
  Blocks.add(musicblock104); 
  
            var musicblock105=createSprite(250,-10675);
  Blocks.add(musicblock105); 
  
            var musicblock106=createSprite(200,-10700);
  Blocks.add(musicblock106); 
  
            var musicblock107=createSprite(250,-10725);
  Blocks.add(musicblock107); 
  
            var musicblock108=createSprite(200,-10750);
  Blocks.add(musicblock108); 
  
            var musicblock109=createSprite(250,-10775);
  Blocks.add(musicblock109); 
  
            var musicblock110=createSprite(200,-10800);
  Blocks.add(musicblock110); 
  
            var musicblock111=createSprite(300,-10825);
  Blocks.add(musicblock111); 
  
            var musicblock112=createSprite(150,-10850);
  Blocks.add(musicblock112); 
  
              var musicblock113=createSprite(300,-10875);
  Blocks.add(musicblock113); 
  
              var musicblock114=createSprite(150,-10900);
  Blocks.add(musicblock114); 
  
              var musicblock115=createSprite(300,-10925);
  Blocks.add(musicblock115); 
  
              var musicblock116=createSprite(150,-10950);
  Blocks.add(musicblock116); 
  
              var musicblock117=createSprite(300,-10975);
  Blocks.add(musicblock117); 
  
              var musicblock118=createSprite(150,-11000);
  Blocks.add(musicblock118); 
  
              var musicblock119=createSprite(300,-11025);
  Blocks.add(musicblock119); 
  
              var musicblock120=createSprite(150,-11050);
  Blocks.add(musicblock120); 
  
              var musicblock121=createSprite(250,-11125);
  Blocks.add(musicblock121); 
  
                var musicblock122=createSprite(200,-11150);
  Blocks.add(musicblock122); 
  
                var musicblock123=createSprite(250,-11175);
  Blocks.add(musicblock123); 
  
                var musicblock124=createSprite(200,-11200);
  Blocks.add(musicblock124); 
  
                var musicblock125=createSprite(250,-11225);
  Blocks.add(musicblock125); 
  
                var musicblock126=createSprite(200,-11250);
  Blocks.add(musicblock126); 
  
                var musicblock127=createSprite(250,-11275);
  Blocks.add(musicblock127); 
  
                var musicblock128=createSprite(150,-11300);
  Blocks.add(musicblock128); 
  
                  var musicblock129=createSprite(300,-11325);
  Blocks.add(musicblock129); 
  
                  var musicblock130=createSprite(150,-11350);
  Blocks.add(musicblock130); 
  
                    var musicblock131=createSprite(300,-11375);
  Blocks.add(musicblock131); 
  
                    var musicblock132=createSprite(200,-11425);
  Blocks.add(musicblock132); 
  
                      var musicblock133=createSprite(250,-11450);
  Blocks.add(musicblock133); 
  
                        var musicblock134=createSprite(200,-11475);
  Blocks.add(musicblock134); 
  
                        var musicblock135=createSprite(250,-11500);
  Blocks.add(musicblock135); 
  
                        var musicblock136=createSprite(200,-11525);
  Blocks.add(musicblock136); 
  
                        var musicblock137=createSprite(250,-11550);
  Blocks.add(musicblock137); 
  
   var musicblock138=createSprite(200,-11575);
  Blocks.add(musicblock138); 
  
   var musicblock139=createSprite(250,-11600);
  Blocks.add(musicblock139); 
  
   var musicblock140=createSprite(200,-11625);
  Blocks.add(musicblock140); 
  
   var musicblock141=createSprite(250,-11650);
  Blocks.add(musicblock141); 
  
   var musicblock142=createSprite(200,-11675);
  Blocks.add(musicblock142); 
  
   var musicblock143=createSprite(150,-11725);
  Blocks.add(musicblock143); 
  
   var musicblock144=createSprite(300,-11750);
  Blocks.add(musicblock144); 
  
   var musicblock145=createSprite(150,-11775);
  Blocks.add(musicblock145); 
  
   var musicblock146=createSprite(300,-11800);
  Blocks.add(musicblock146); 
  
   var musicblock147=createSprite(150,-11825);
  Blocks.add(musicblock147); 
  
     var musicblock148=createSprite(300,-11850);
  Blocks.add(musicblock148); 
  
       var musicblock149=createSprite(150,-11875);
  Blocks.add(musicblock149); 
  
  
       var musicblock150=createSprite(300,-11900);
  Blocks.add(musicblock150); 

  
         var musicblock151=createSprite(200,-11950);
  Blocks.add(musicblock151); 
  
           var musicblock152=createSprite(250,-11975);
  Blocks.add(musicblock152); 
  
           var musicblock153=createSprite(200,-12000);
  Blocks.add(musicblock153); 
  
           var musicblock154=createSprite(250,-12050);
  Blocks.add(musicblock154); 
  
           var musicblock155=createSprite(200,-12100);
  Blocks.add(musicblock155); 
  
           var musicblock156=createSprite(50,-12300);
  Blocks.add(musicblock156); 
  
             var musicblock157=createSprite(100,-12350);
  Blocks.add(musicblock157); 
  
               var musicblock158=createSprite(150,-12400);
  Blocks.add(musicblock158); 
  
               var musicblock159=createSprite(200,-12450);
  Blocks.add(musicblock159); 
  

  
  
               var musicblockDROP=createSprite(200,-12600);
  musicblockDROP.setAnimation("musicCube_copy_1");
  musicblockDROP.scale=2.0;
  Blocks.add(musicblockDROP);
  
                 var musicblockDROP1=createSprite(50,-12700);
  musicblockDROP1.setAnimation("musicCube_copy_1");
  musicblockDROP1.scale=2.0;
  Blocks.add(musicblockDROP1);
  
                 var musicblockDROP2=createSprite(50,-12800);
  musicblockDROP2.setAnimation("musicCube_copy_1");
  musicblockDROP2.scale=2.0;
  Blocks.add(musicblockDROP2);
  
                   var musicblockDROP3=createSprite(350,-12900);
  musicblockDROP3.setAnimation("musicCube_copy_1");
  musicblockDROP3.scale=2.0;
  Blocks.add(musicblockDROP3);
  
  
                   var musicblockDROP4=createSprite(50,-13000);
  musicblockDROP4.setAnimation("musicCube_copy_1");
  musicblockDROP4.scale=2.0;
  Blocks.add(musicblockDROP4);
  
                   var musicblockDROP5=createSprite(350,-13100);
  musicblockDROP5.setAnimation("musicCube_copy_1");
  musicblockDROP5.scale=2.0;
  Blocks.add(musicblockDROP5);
  
                   var musicblockDROP6=createSprite(50,-13200);
  musicblockDROP6.setAnimation("musicCube_copy_1");
  musicblockDROP6.scale=2.0;
  Blocks.add(musicblockDROP6);
  
                   var musicblockDROP7=createSprite(350,-13300);
  musicblockDROP7.setAnimation("musicCube_copy_1");
  musicblockDROP7.scale=2.0;
  Blocks.add(musicblockDROP7);
  
                   var musicblockDROP8=createSprite(50,-13400);
  musicblockDROP8.setAnimation("musicCube_copy_1");
  musicblockDROP8.scale=2.0;
  Blocks.add(musicblockDROP8);
  
  
                     var musicblockDROP9=createSprite(350,-13500);
  musicblockDROP9.setAnimation("musicCube_copy_1");
  musicblockDROP9.scale=2.0;
  Blocks.add(musicblockDROP9);
  
                       var musicblockDROP10=createSprite(50,-13600);
  musicblockDROP10.setAnimation("musicCube_copy_1");
  musicblockDROP10.scale=2.0;
  Blocks.add(musicblockDROP10);
  
                       var musicblockDROP11=createSprite(350,-13700);
  musicblockDROP11.setAnimation("musicCube_copy_1");
  musicblockDROP11.scale=2.0;
  Blocks.add(musicblockDROP11);
  
                         var musicblockDROP12=createSprite(50,-13800);
  musicblockDROP12.setAnimation("musicCube_copy_1");
  musicblockDROP12.scale=2.0;
  Blocks.add(musicblockDROP12);
  
                           var musicblockDROP13=createSprite(350,-13900);
  musicblockDROP13.setAnimation("musicCube_copy_1");
  musicblockDROP13.scale=2.0;
  Blocks.add(musicblockDROP13);
  
  
                           var musicblockDROP14=createSprite(50,-14000);
  musicblockDROP14.setAnimation("musicCube_copy_1");
  musicblockDROP14.scale=2.0;
  Blocks.add(musicblockDROP14);
  
                           var musicblockDROP15=createSprite(350,-14100);
  musicblockDROP15.setAnimation("musicCube_copy_1");
  musicblockDROP15.scale=2.0;
  Blocks.add(musicblockDROP15);
  
                           var musicblockDROP16=createSprite(150,-14200);
  musicblockDROP16.setAnimation("musicCube_copy_1");
  musicblockDROP16.scale=2.0;
  Blocks.add(musicblockDROP16);
  
                             var musicblockDROP17=createSprite(300,-14300);
  musicblockDROP17.setAnimation("musicCube_copy_1");
  musicblockDROP17.scale=2.0;
  Blocks.add(musicblockDROP17);
  
                             var musicblockDROP18=createSprite(150,-14400);
  musicblockDROP18.setAnimation("musicCube_copy_1");
  musicblockDROP18.scale=2.0;
  Blocks.add(musicblockDROP18);
  
                               var musicblockDROP19=createSprite(300,-14500);
  musicblockDROP19.setAnimation("musicCube_copy_1");
  musicblockDROP19.scale=2.0;
  Blocks.add(musicblockDROP19);
  
                             var musicblockDROP20=createSprite(150,-14600);
  musicblockDROP20.setAnimation("musicCube_copy_1");
  musicblockDROP20.scale=2.0;
  Blocks.add(musicblockDROP20);
  
                               var musicblockDROP21=createSprite(300,-14700);
  musicblockDROP21.setAnimation("musicCube_copy_1");
  musicblockDROP21.scale=2.0;
  Blocks.add(musicblockDROP21);
  
                             var musicblockDROP22=createSprite(150,-14800);
  musicblockDROP22.setAnimation("musicCube_copy_1");
  musicblockDROP22.scale=2.0;
  Blocks.add(musicblockDROP22);
  
                               var musicblockDROP23=createSprite(300,-14900);
  musicblockDROP23.setAnimation("musicCube_copy_1");
  musicblockDROP23.scale=2.0;
  Blocks.add(musicblockDROP23);
  
                             var musicblockDROP24=createSprite(150,-15000);
  musicblockDROP24.setAnimation("musicCube_copy_1");
  musicblockDROP24.scale=2.0;
  Blocks.add(musicblockDROP24);
  
                               var musicblockDROP25=createSprite(300,-15100);
  musicblockDROP25.setAnimation("musicCube_copy_1");
  musicblockDROP25.scale=2.0;
  Blocks.add(musicblockDROP25);
  
                             var musicblockDROP26=createSprite(150,-15200);
  musicblockDROP26.setAnimation("musicCube_copy_1");
  musicblockDROP26.scale=2.0;
  Blocks.add(musicblockDROP26);
  
  
                               var musicblockDROP27=createSprite(300,-15300);
  musicblockDROP27.setAnimation("musicCube_copy_1");
  musicblockDROP27.scale=2.0;
  Blocks.add(musicblockDROP27);
  
                             var musicblockDROP28=createSprite(150,-15400);
  musicblockDROP28.setAnimation("musicCube_copy_1");
  musicblockDROP28.scale=2.0;
  Blocks.add(musicblockDROP28);
  
                               var musicblockDROP29=createSprite(300,-15500);
  musicblockDROP29.setAnimation("musicCube_copy_1");
  musicblockDROP29.scale=2.0;
  Blocks.add(musicblockDROP29);
  
                             var musicblockDROP30=createSprite(150,-15600);
  musicblockDROP30.setAnimation("musicCube_copy_1");
  musicblockDROP30.scale=2.0;
  Blocks.add(musicblockDROP30);
  
  
                               var musicblockDROP31=createSprite(300,-15700);
  musicblockDROP31.setAnimation("musicCube_copy_1");
  musicblockDROP31.scale=2.0;
  Blocks.add(musicblockDROP31);
  
                             var musicblockDROP32=createSprite(150,-15800);
  musicblockDROP32.setAnimation("musicCube_copy_1");
  musicblockDROP32.scale=2.0;
  Blocks.add(musicblockDROP32);
  
                               var musicblockDROP33=createSprite(300,-15900);
  musicblockDROP33.setAnimation("musicCube_copy_1");
  musicblockDROP33.scale=2.0;
  Blocks.add(musicblockDROP33);
  
                             var musicblockDROP34=createSprite(150,-16000);
  musicblockDROP34.setAnimation("musicCube_copy_1");
  musicblockDROP34.scale=2.0;
  Blocks.add(musicblockDROP34);
  
  
                               var musicblockDROP35=createSprite(200,-16100);
  musicblockDROP35.setAnimation("musicCube_copy_1");
  musicblockDROP35.scale=2.0;
  Blocks.add(musicblockDROP35);
  
    var musicblock160=createSprite(50,-16175);
  Blocks.add(musicblock160); 
  
    var musicblock161=createSprite(200,-16225);
  Blocks.add(musicblock161); 
  
    var musicblock162=createSprite(250,-16275);
  Blocks.add(musicblock162);
  
  
    var musicblock163=createSprite(300,-16400);
  Blocks.add(musicblock163);
  
    var musicblock164=createSprite(300,-16450);
  Blocks.add(musicblock164); 
  
    var musicblock165=createSprite(300,-16500);
  Blocks.add(musicblock165); 
  
    var musicblock166=createSprite(250,-16650);
  Blocks.add(musicblock166); 
  
    var musicblock167=createSprite(200,-16700);
  Blocks.add(musicblock167); 
  
    var musicblock168=createSprite(150,-16750);
  Blocks.add(musicblock168); 
  
    var musicblock169=createSprite(150,-16850);
  Blocks.add(musicblock169); 
  
    var musicblock170=createSprite(100,-16950);
  Blocks.add(musicblock170); 
  
    var musicblock171=createSprite(150,-17050);
  Blocks.add(musicblock171); 
  
    var musicblock172=createSprite(200,-17100);
  Blocks.add(musicblock172); 
  
    var musicblock173=createSprite(250,-17150);
  Blocks.add(musicblock173); 
  
    var musicblock174=createSprite(300,-17200);
  Blocks.add(musicblock174); 
  
    var musicblock175=createSprite(250,-17375);
  Blocks.add(musicblock175); 
  
    var musicblock176=createSprite(200,-17500);
  Blocks.add(musicblock176); 
  
    var musicblock177=createSprite(150,-17550);
  Blocks.add(musicblock177); 
  
    var musicblock178=createSprite(100,-17600);
  Blocks.add(musicblock178); 
  
    var musicblock179=createSprite(50,-17725);
  Blocks.add(musicblock179); 
  
    var musicblock180=createSprite(50,-17825);
  Blocks.add(musicblock180); 
  
    var musicblock181=createSprite(100,-17975);
  Blocks.add(musicblock181); 
  
    var musicblock182=createSprite(50,-18025);
  Blocks.add(musicblock182); 
  
    var musicblock183=createSprite(100,-18075);
  Blocks.add(musicblock183); 
  
    var musicblock184=createSprite(150,-18200);
  Blocks.add(musicblock184); 
  
    var musicblock185=createSprite(100,-18250);
  Blocks.add(musicblock185); 
  
    var musicblock186=createSprite(150,-18300);
  Blocks.add(musicblock186); 
  
    var musicblock187=createSprite(200,-18425);
  Blocks.add(musicblock187); 
  
    var musicblock188=createSprite(250,-18475);
  Blocks.add(musicblock188); 
  
    var musicblock189=createSprite(300,-18525);
  Blocks.add(musicblock189); 
  
    var musicblock190=createSprite(300,-18650);
  Blocks.add(musicblock190); 
  
    var musicblock191=createSprite(250,-18700);
  Blocks.add(musicblock191); 
  
    var musicblock192=createSprite(300,-18750);
  Blocks.add(musicblock192); 
  
    var musicblock193=createSprite(300,-18800);
  Blocks.add(musicblock193); 
  
    var musicblock194=createSprite(250,-18875);
  Blocks.add(musicblock194); 
  
    var musicblock195=createSprite(200,-18925);
  Blocks.add(musicblock195); 
  
    var musicblock196=createSprite(150,-19000);
  Blocks.add(musicblock196); 
  

    var musicblock198=createSprite(100,-19100);
  Blocks.add(musicblock198); 
  
    var musicblock199=createSprite(50,-19150);
  Blocks.add(musicblock199); 
  
    var musicblock200=createSprite(100,-19225);
  Blocks.add(musicblock200);
  
    var musicblock201=createSprite(150,-19450);
  Blocks.add(musicblock201);
  
    var musicblock202=createSprite(200,-19525);
  Blocks.add(musicblock202);
  
    var musicblock203=createSprite(250,-19575);
  Blocks.add(musicblock203);
  
    var musicblock204=createSprite(300,-19625);
  Blocks.add(musicblock204);
  
    var musicblock205=createSprite(350,-19675);
  Blocks.add(musicblock205);
  
    var musicblock206=createSprite(300,-19800);
  Blocks.add(musicblock206);
  
    var musicblock207=createSprite(250,-19900);
  Blocks.add(musicblock207);
  
    var musicblock208=createSprite(200,-19950);
  Blocks.add(musicblock208);
  
    var musicblock209=createSprite(150,-20000);
  Blocks.add(musicblock209);
  
    var musicblock210=createSprite(100,-20125);
  Blocks.add(musicblock210);
  
    var musicblock211=createSprite(50,-20175);
  Blocks.add(musicblock211);
  
    var musicblock212=createSprite(100,-20250);
  Blocks.add(musicblock212);
  
    var musicblock213=createSprite(150,-20300);
  Blocks.add(musicblock213);
  
    var musicblock214=createSprite(200,-20350);
  Blocks.add(musicblock214);
  
    var musicblock215=createSprite(250,-20400);
  Blocks.add(musicblock215);
  
    var musicblock216=createSprite(300,-20450);
  Blocks.add(musicblock216);
  
    var musicblock217=createSprite(350,-20575);
  Blocks.add(musicblock217);
  
    var musicblock218=createSprite(300,-20650);
  Blocks.add(musicblock218);
  
    var musicblock219=createSprite(350,-20700);
  Blocks.add(musicblock219);
  
    var musicblock220=createSprite(300,-20750);
  Blocks.add(musicblock220);
  
    var musicblock221=createSprite(50,-20825);
  Blocks.add(musicblock221);
  
    var musicblock222=createSprite(100,-20900);
  Blocks.add(musicblock222);
  
    var musicblock223=createSprite(150,-20975);
  Blocks.add(musicblock223);
  
    var musicblock224=createSprite(100,-21025);
  Blocks.add(musicblock224);
  
    var musicblock225=createSprite(50,-21100);
  Blocks.add(musicblock225);
  
    var musicblock226=createSprite(100,-21275);
  Blocks.add(musicblock226);
  
    var musicblock227=createSprite(150,-21325);
  Blocks.add(musicblock227);
  
    var musicblock228=createSprite(200,-21375);
  Blocks.add(musicblock228);
  
    var musicblock229=createSprite(250,-21450);
  Blocks.add(musicblock229);
  
    var musicblock230=createSprite(300,-21550);
  Blocks.add(musicblock230);
  
    var musicblock231=createSprite(250,-21675);
  Blocks.add(musicblock231);
  
    var musicblock232=createSprite(200,-21725);
  Blocks.add(musicblock232);
  
    var musicblock233=createSprite(200,-21775);
  Blocks.add(musicblock233);
  
    var musicblock234=createSprite(250,-21900);
  Blocks.add(musicblock234);
  
    var musicblock235=createSprite(250,-21950);
  Blocks.add(musicblock235);
  
    var musicblock236=createSprite(150,-22025);
  Blocks.add(musicblock236);
  
    var musicblock237=createSprite(150,-22075);
  Blocks.add(musicblock237);
  
    var musicblock238=createSprite(50,-22125);
  Blocks.add(musicblock238);
  
    var musicblock239=createSprite(50,-22200);
  Blocks.add(musicblock239);
  
    var musicblock240=createSprite(150,-22250);
  Blocks.add(musicblock240);
  
    var musicblock241=createSprite(250,-22350);
  Blocks.add(musicblock241);
  
    var musicblock242=createSprite(350,-22400);
  Blocks.add(musicblock242);
  
    var musicblock243=createSprite(250,-22450);
  Blocks.add(musicblock243);
  
    var musicblock244=createSprite(150,-22525);
  Blocks.add(musicblock244);
  
    var musicblock245=createSprite(50,-22575);
  Blocks.add(musicblock245);
  
    var musicblock246=createSprite(100,-22650);
  Blocks.add(musicblock246);
  
    var musicblock247=createSprite(200,-22725);
  Blocks.add(musicblock247);
  
    var musicblock248=createSprite(250,-22760);
  Blocks.add(musicblock248);
  
  
  
  
Blocks.setColliderEach("rectangle");



  
  

textFont("Courier New");
fill(rgb(200, 200, 170));
textAlign("Center");
var tutorial=createSprite(200,200);
tutorial.setAnimation("Tutorial");
tutorial.pause();

function draw() {                                       //draw function here    <<<<------
  // draw background

background(rgb(ColR,ColG,ColB));

  // update sprites
  
  tutorialLVL();
  
  Blocks.setAnimationEach(Costume);
  move();
  streek();
  Stars();
  IfTouched();
  sethighcombo();
  if(musicBar.y==-200){
    
    playSound(song,false);
    stopSound("sound://category_loops/stabilizing_breath_loop1.mp3");
    stuff="";
    
  }
   if(musicBar.y<-12600){Costume="musicCube_copy_1";}else if(musicBar.y<-16100){Costume="musicCube2";}
  text(Math.round(rankP)+"%     "+score+"    Combo:" + combo,150,musicBar.y+50);
  
  drawSprites();
  }

// Create your functions here
function sethighcombo(){if(combo>highcombo)highcombo=combo;}
function move(){
  
  if(keyWentDown("a")){ //1
  musicBar.x=50;
  
  }
    if(keyWentDown("s")){ //2
  musicBar.x=100;
  
      
    }
    if(keyWentDown("d")){ //3
  musicBar.x=150;
  
      
    }
    if(keyWentDown("f")){ //4
  musicBar.x=200;
  
      
    }
    if(keyWentDown("j")){ //5
  musicBar.x=250;
  
      
    }
    if(keyWentDown("k")){ //6
  musicBar.x=300;
  
      
    }
    if(keyWentDown("l")){ //7
  musicBar.x=350;
  
      
    }
    
  camera.y=musicBar.y-150;
}

function yeescore(){
score=score+13;
  rankP=rankP+0.115;
}

function Stars(){
  if(Star1.y>musicBar.y+75){
    Star1.y=musicBar.y-420;
    Star1.x=randomNumber(0,400);
    Star1.velocityY=randomNumber(0,1);
    Star1.rotation=randomNumber(0,90);
    }
if(Star2.y>musicBar.y+75){
    Star2.y=musicBar.y-420;
    Star2.x=randomNumber(0,400);
    Star2.velocityY=randomNumber(0,1);
    Star2.rotation=randomNumber(0,90);
  }
  if(Star3.y>musicBar.y+75){
    Star3.y=musicBar.y-420;
    Star3.x=randomNumber(0,400);
    Star3.velocityY=randomNumber(0,1);
    Star3.rotation=randomNumber(0,90);
  }
  if(Star4.y>musicBar.y+75){
    Star4.y=musicBar.y-420;
    Star4.x=randomNumber(0,400);
    Star4.velocityY=randomNumber(0,1);
    Star4.rotation=randomNumber(0,90);
  }
  if(Star5.y>musicBar.y+75){
    Star5.y=musicBar.y-420;
    Star5.x=randomNumber(0,400);
    Star5.velocityY=randomNumber(0,1);
    Star5.rotation=randomNumber(0,90);
  }
  
}
function tutorialLVL(){
  if(musicBar.y>=3000 && keyWentDown("space")){musicBar.y=1350;musicBar.visible=true;tutorial.destroy();}
  tutorial.y=camera.y;
  if(musicBar.y==12000){tutorial.setFrame(1);}
  if(musicBar.y==11000){tutorial.setFrame(2);}
  if(musicBar.y==10000){tutorial.setFrame(3);}
  if(musicBar.y==9000){tutorial.setFrame(4);}
  if(musicBar.y==8000){tutorial.setFrame(5);}
  if(musicBar.y==6000){tutorial.setFrame(6);}
  if(musicBar.y==5750){tutorial.setFrame(7);}
  if(musicBar.y==5500){tutorial.setFrame(8);}
  if(musicBar.y==5250){tutorial.setFrame(9);}
  if(musicBar.y==5000){tutorial.setFrame(10);}
  if(musicBar.y==4750){tutorial.setFrame(11);}
  if(musicBar.y==4500){tutorial.setFrame(12);}
  if(musicBar.y==4250){tutorial.setFrame(13);}
  if(musicBar.y==4000){tutorial.setFrame(14);}
  if(musicBar.y==3000){tutorial.setFrame(15);}
  if(musicBar.y==3750){tutorial.setFrame(16);}
  if(musicBar.y==3500){tutorial.setFrame(17);}
  if(musicBar.y==3250){tutorial.setFrame(18);}
  if(musicBar.y==3000){tutorial.setFrame(19);}
  if(musicBar.y==2750){tutorial.setFrame(20);}
  if(musicBar.y==2500){tutorial.setFrame(21);}
  if(musicBar.y==2250){tutorial.destroy();musicBar.visible=true;}
  
  
  
  drawSprites();
}
function IfTouched(){
  if(musicBar.isTouching(Blocks)){
    playSound("sound://category_tap/vibrant_ui_mouse_click_2.mp3");
 yeescore();
 }

  if(musicBar.y==-12600){
  camera.zoom=-1;
  ColR=200;
}

  if(musicBar.y==-12700){
  camera.zoom=1;
  ColR=0;
}
  if(musicBar.y==-12800){
  camera.zoom=-1;
  ColR=200;
}

  if(musicBar.y==-12900){
  camera.zoom=1;
  ColR=0;
}
  if(musicBar.y==-13000){
  camera.zoom=-1;
  ColR=200;
}

  if(musicBar.y==-13100){
  camera.zoom=1;
  ColR=0;
}
  if(musicBar.y==-13200){
  camera.zoom=-1;
  ColR=200;
}

  if(musicBar.y==-13300){
  camera.zoom=1;
  ColR=0;
}
  if(musicBar.y==-13400){
  camera.zoom=-1;
  ColR=200;
}

  if(musicBar.y==-13500){
  camera.zoom=1;
  ColR=0;
}

  if(musicBar.y==-13600){
  camera.zoom=-1;
  ColR=200;
}

  if(musicBar.y==-13700){
  camera.zoom=1;
  ColR=0;
}
  if(musicBar.y==-13800){
  camera.zoom=-1;
  ColR=200;
}

  if(musicBar.y==-13900){
  camera.zoom=1;
  ColR=0;
}
  if(musicBar.y==-14000){
  camera.zoom=-1;
  ColR=200;
}

  if(musicBar.y==-14100){
  camera.zoom=1;
  ColR=0;
}

  if(musicBar.y==-14200){
  camera.zoom=-1;
  ColR=200;
}

  if(musicBar.y==-14300){
  camera.zoom=1;
  ColR=0;
}
  if(musicBar.y==-14400){
  camera.zoom=-1;
  ColR=200;
}

  if(musicBar.y==-14500){
  camera.zoom=1;
  ColR=0;
}
  if(musicBar.y==-14600){
  camera.zoom=-1;
  ColR=200;
}

  if(musicBar.y==-14700){
  camera.zoom=1;
  ColR=0;
}
  if(musicBar.y==-14800){
  camera.zoom=-1;
  ColR=200;
}

  if(musicBar.y==-14900){
  camera.zoom=1;
  ColR=0;
}
  if(musicBar.y==-15000){
  camera.zoom=-1;
  ColR=200;
}

  if(musicBar.y==-15100){
  camera.zoom=1;
  ColR=0;
}
  if(musicBar.y==-15200){
  camera.zoom=-1;
  ColR=200;
}

  if(musicBar.y==-15300){
  camera.zoom=1;
  ColR=0;
}
  if(musicBar.y==-15400){
  camera.zoom=-1;
  ColR=200;
}

  if(musicBar.y==-15500){
  camera.zoom=1;
  ColR=0;
}
  if(musicBar.y==-15600){
  camera.zoom=-1;
  ColR=200;
}

  if(musicBar.y==-15700){
  camera.zoom=1;
  ColR=0;
}
  if(musicBar.y==-15800){
  camera.zoom=-1;
  ColR=200;
}

  if(musicBar.y==-15900){
  camera.zoom=1;
  ColR=0;
}
  if(musicBar.y==-16000){
  camera.zoom=-1;
  ColR=200;
}

  if(musicBar.y==-16100){
  camera.zoom=1;
  ColR=0;
}
  if(musicBar.y<-14000){
  
  ColB=ColB+0.1;
}
if(musicBar.y<-22750){    //end
  camera.off();
  musicBar.velocityY=0;
  musicBar.x=200;
  musicBar.visible=0;
  fill("blue");
      rect(0,0,camera.x-200,camera.y-200);
  fill("green");
    textSize(20);
  text("Score:"+score + "Max Combo:" + highcombo,100,180);
  text(Math.round(rankP)+"%",180,210);
  textSize(40);
  fill("red");
  text("Rank: " + Rank,125,270);   //highcombo Rank score
  Blocks.setVisibleEach(false);
  if(score==0){
    Rank="bruh";
  }
  if(score>1){
    Rank="F";
  }
  if(score>=1621){
    Rank="E";
  }
  if(score>=3242){
    Rank="D";
  }
  if(score>=4863){
    Rank="C";
  }
  if(score>=6484){
    Rank="B";
  }
  if(score>=8105){
    Rank="A";
  }
  if(score>=8996){
    Rank="S";
  }
  if(score>=10127){
    Rank="SS";
  }
  if(score>11000){
    Rank="wow um, this is a bot isn't omg";
  }
  fill("green");
  
  drawSprites();
}


        }
      
function streek(){
  if(musicBar.y==musicblock1.y){if(musicBar.isTouching(musicblock1)){combo++;}else{combo=0;}  }
if(musicBar.y==musicblock2.y){if(musicBar.isTouching(musicblock2)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock3.y){if(musicBar.isTouching(musicblock3)){combo++;}else{combo=0;}  }
if(musicBar.y==musicblock4.y){if(musicBar.isTouching(musicblock4)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock5.y){if(musicBar.isTouching(musicblock5)){combo++;}else{combo=0;}  }
if(musicBar.y==musicblock6.y){if(musicBar.isTouching(musicblock6)){combo++;}else{combo=0;}  }
if(musicBar.y==musicblock7.y){if(musicBar.isTouching(musicblock7)){combo++;}else{combo=0;}  }  
if(musicBar.y==musicblock8.y){if(musicBar.isTouching(musicblock8)){combo++;}else{combo=0;}  }  
if(musicBar.y==musicblock9.y){if(musicBar.isTouching(musicblock9)){combo++;}else{combo=0;}  }  
 if(musicBar.y==musicblock10.y){if(musicBar.isTouching(musicblock10)){combo++;}else{combo=0;}  } 
 if(musicBar.y==musicblock11.y){if(musicBar.isTouching(musicblock11)){combo++;}else{combo=0;}  } 
  if(musicBar.y==musicblock12.y){if(musicBar.isTouching(musicblock12)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock13.y){if(musicBar.isTouching(musicblock13)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock14.y){if(musicBar.isTouching(musicblock14)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock15.y){if(musicBar.isTouching(musicblock15)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock16.y){if(musicBar.isTouching(musicblock16)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock17.y){if(musicBar.isTouching(musicblock17)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock18.y){if(musicBar.isTouching(musicblock18)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock19.y){if(musicBar.isTouching(musicblock19)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock20.y){if(musicBar.isTouching(musicblock20)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock21.y){if(musicBar.isTouching(musicblock21)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock22.y){if(musicBar.isTouching(musicblock22)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock23.y){if(musicBar.isTouching(musicblock23)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock24.y){if(musicBar.isTouching(musicblock24)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock25.y){if(musicBar.isTouching(musicblock25)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock26.y){if(musicBar.isTouching(musicblock26)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock27.y){if(musicBar.isTouching(musicblock27)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock28.y){if(musicBar.isTouching(musicblock28)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock29.y){if(musicBar.isTouching(musicblock29)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock30.y){if(musicBar.isTouching(musicblock30)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock31.y){if(musicBar.isTouching(musicblock31)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock32.y){if(musicBar.isTouching(musicblock32)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock33.y){if(musicBar.isTouching(musicblock33)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock34.y){if(musicBar.isTouching(musicblock34)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock35.y){if(musicBar.isTouching(musicblock35)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock36.y){if(musicBar.isTouching(musicblock36)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock37.y){if(musicBar.isTouching(musicblock37)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock38.y){if(musicBar.isTouching(musicblock38)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock39.y){if(musicBar.isTouching(musicblock39)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock40.y){if(musicBar.isTouching(musicblock40)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock41.y){if(musicBar.isTouching(musicblock41)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock42.y){if(musicBar.isTouching(musicblock42)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock43.y){if(musicBar.isTouching(musicblock43)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock44.y){if(musicBar.isTouching(musicblock44)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock45.y){if(musicBar.isTouching(musicblock45)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock46.y){if(musicBar.isTouching(musicblock46)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock47.y){if(musicBar.isTouching(musicblock47)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock48.y){if(musicBar.isTouching(musicblock48)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock49.y){if(musicBar.isTouching(musicblock49)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock50.y){if(musicBar.isTouching(musicblock50)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock51.y){if(musicBar.isTouching(musicblock51)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock61.y){if(musicBar.isTouching(musicblock61)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock53.y){if(musicBar.isTouching(musicblock53)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock54.y){if(musicBar.isTouching(musicblock54)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock55.y){if(musicBar.isTouching(musicblock55)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock56.y){if(musicBar.isTouching(musicblock56)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock57.y){if(musicBar.isTouching(musicblock57)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock58.y){if(musicBar.isTouching(musicblock58)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock59.y){if(musicBar.isTouching(musicblock59)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock60.y){if(musicBar.isTouching(musicblock60)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock61.y){if(musicBar.isTouching(musicblock61)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock62.y){if(musicBar.isTouching(musicblock62)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock63.y){if(musicBar.isTouching(musicblock63)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock64.y){if(musicBar.isTouching(musicblock64)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock65.y){if(musicBar.isTouching(musicblock65)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock66.y){if(musicBar.isTouching(musicblock66)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock67.y){if(musicBar.isTouching(musicblock67)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock68.y){if(musicBar.isTouching(musicblock68)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock69.y){if(musicBar.isTouching(musicblock69)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock70.y){if(musicBar.isTouching(musicblock70)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock72.y){if(musicBar.isTouching(musicblock72)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock73.y){if(musicBar.isTouching(musicblock73)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock74.y){if(musicBar.isTouching(musicblock74)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock75.y){if(musicBar.isTouching(musicblock75)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock76.y){if(musicBar.isTouching(musicblock76)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock77.y){if(musicBar.isTouching(musicblock77)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock78.y){if(musicBar.isTouching(musicblock78)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock79.y){if(musicBar.isTouching(musicblock79)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock71.y){if(musicBar.isTouching(musicblock71)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock80.y){if(musicBar.isTouching(musicblock80)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock81.y){if(musicBar.isTouching(musicblock81)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock82.y){if(musicBar.isTouching(musicblock82)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock83.y){if(musicBar.isTouching(musicblock83)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock84.y){if(musicBar.isTouching(musicblock84)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock85.y){if(musicBar.isTouching(musicblock85)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock86.y){if(musicBar.isTouching(musicblock86)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock87.y){if(musicBar.isTouching(musicblock87)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock88.y){if(musicBar.isTouching(musicblock88)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock89.y){if(musicBar.isTouching(musicblock89)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock90.y){if(musicBar.isTouching(musicblock90)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock91.y){if(musicBar.isTouching(musicblock91)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock92.y){if(musicBar.isTouching(musicblock92)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock93.y){if(musicBar.isTouching(musicblock93)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock94.y){if(musicBar.isTouching(musicblock94)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock95.y){if(musicBar.isTouching(musicblock95)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock96.y){if(musicBar.isTouching(musicblock96)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock97.y){if(musicBar.isTouching(musicblock97)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock98.y){if(musicBar.isTouching(musicblock98)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock99.y){if(musicBar.isTouching(musicblock99)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock100.y){if(musicBar.isTouching(musicblock100)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock101.y){if(musicBar.isTouching(musicblock101)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock102.y){if(musicBar.isTouching(musicblock102)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock103.y){if(musicBar.isTouching(musicblock103)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock104.y){if(musicBar.isTouching(musicblock104)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock105.y){if(musicBar.isTouching(musicblock105)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock106.y){if(musicBar.isTouching(musicblock106)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock107.y){if(musicBar.isTouching(musicblock107)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock108.y){if(musicBar.isTouching(musicblock108)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock109.y){if(musicBar.isTouching(musicblock109)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock110.y){if(musicBar.isTouching(musicblock110)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock111.y){if(musicBar.isTouching(musicblock111)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock112.y){if(musicBar.isTouching(musicblock112)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock113.y){if(musicBar.isTouching(musicblock113)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock114.y){if(musicBar.isTouching(musicblock114)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock115.y){if(musicBar.isTouching(musicblock115)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock116.y){if(musicBar.isTouching(musicblock116)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock117.y){if(musicBar.isTouching(musicblock117)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock118.y){if(musicBar.isTouching(musicblock118)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock119.y){if(musicBar.isTouching(musicblock119)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock120.y){if(musicBar.isTouching(musicblock120)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock121.y){if(musicBar.isTouching(musicblock121)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock122.y){if(musicBar.isTouching(musicblock123)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock123.y){if(musicBar.isTouching(musicblock122)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock124.y){if(musicBar.isTouching(musicblock124)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock125.y){if(musicBar.isTouching(musicblock125)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock126.y){if(musicBar.isTouching(musicblock126)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock127.y){if(musicBar.isTouching(musicblock127)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock128.y){if(musicBar.isTouching(musicblock128)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock129.y){if(musicBar.isTouching(musicblock129)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock130.y){if(musicBar.isTouching(musicblock130)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock131.y){if(musicBar.isTouching(musicblock131)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock132.y){if(musicBar.isTouching(musicblock132)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock133.y){if(musicBar.isTouching(musicblock133)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock134.y){if(musicBar.isTouching(musicblock134)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock135.y){if(musicBar.isTouching(musicblock135)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock136.y){if(musicBar.isTouching(musicblock136)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock137.y){if(musicBar.isTouching(musicblock137)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock138.y){if(musicBar.isTouching(musicblock138)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock139.y){if(musicBar.isTouching(musicblock139)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock140.y){if(musicBar.isTouching(musicblock140)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock141.y){if(musicBar.isTouching(musicblock141)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock142.y){if(musicBar.isTouching(musicblock142)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock143.y){if(musicBar.isTouching(musicblock143)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock144.y){if(musicBar.isTouching(musicblock144)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock145.y){if(musicBar.isTouching(musicblock145)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock146.y){if(musicBar.isTouching(musicblock146)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock147.y){if(musicBar.isTouching(musicblock147)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock148.y){if(musicBar.isTouching(musicblock148)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock149.y){if(musicBar.isTouching(musicblock149)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock150.y){if(musicBar.isTouching(musicblock150)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock151.y){if(musicBar.isTouching(musicblock151)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock152.y){if(musicBar.isTouching(musicblock152)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock153.y){if(musicBar.isTouching(musicblock153)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock154.y){if(musicBar.isTouching(musicblock154)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock155.y){if(musicBar.isTouching(musicblock155)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock156.y){if(musicBar.isTouching(musicblock156)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock157.y){if(musicBar.isTouching(musicblock157)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock158.y){if(musicBar.isTouching(musicblock158)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock159.y){if(musicBar.isTouching(musicblock159)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblockDROP.y){if(musicBar.isTouching(musicblockDROP)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblockDROP1.y){if(musicBar.isTouching(musicblockDROP1)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblockDROP2.y){if(musicBar.isTouching(musicblockDROP2)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblockDROP3.y){if(musicBar.isTouching(musicblockDROP3)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblockDROP4.y){if(musicBar.isTouching(musicblockDROP4)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblockDROP5.y){if(musicBar.isTouching(musicblockDROP5)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblockDROP6.y){if(musicBar.isTouching(musicblockDROP6)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblockDROP7.y){if(musicBar.isTouching(musicblockDROP7)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblockDROP8.y){if(musicBar.isTouching(musicblockDROP8)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblockDROP9.y){if(musicBar.isTouching(musicblockDROP9)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblockDROP10.y){if(musicBar.isTouching(musicblockDROP10)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblockDROP11.y){if(musicBar.isTouching(musicblockDROP11)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblockDROP12.y){if(musicBar.isTouching(musicblockDROP12)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblockDROP13.y){if(musicBar.isTouching(musicblockDROP13)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblockDROP14.y){if(musicBar.isTouching(musicblockDROP14)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblockDROP15.y){if(musicBar.isTouching(musicblockDROP15)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblockDROP16.y){if(musicBar.isTouching(musicblockDROP16)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblockDROP17.y){if(musicBar.isTouching(musicblockDROP17)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblockDROP18.y){if(musicBar.isTouching(musicblockDROP18)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblockDROP19.y){if(musicBar.isTouching(musicblockDROP19)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblockDROP20.y){if(musicBar.isTouching(musicblockDROP20)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblockDROP21.y){if(musicBar.isTouching(musicblockDROP21)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblockDROP22.y){if(musicBar.isTouching(musicblockDROP22)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblockDROP23.y){if(musicBar.isTouching(musicblockDROP23)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblockDROP24.y){if(musicBar.isTouching(musicblockDROP24)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblockDROP25.y){if(musicBar.isTouching(musicblockDROP25)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblockDROP26.y){if(musicBar.isTouching(musicblockDROP26)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblockDROP27.y){if(musicBar.isTouching(musicblockDROP27)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblockDROP28.y){if(musicBar.isTouching(musicblockDROP28)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblockDROP29.y){if(musicBar.isTouching(musicblockDROP29)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblockDROP30.y){if(musicBar.isTouching(musicblockDROP30)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblockDROP31.y){if(musicBar.isTouching(musicblockDROP31)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblockDROP32.y){if(musicBar.isTouching(musicblockDROP32)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblockDROP33.y){if(musicBar.isTouching(musicblockDROP33)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblockDROP34.y){if(musicBar.isTouching(musicblockDROP34)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblockDROP35.y){if(musicBar.isTouching(musicblockDROP35)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock160.y){if(musicBar.isTouching(musicblock160)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock161.y){if(musicBar.isTouching(musicblock161)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock162.y){if(musicBar.isTouching(musicblock162)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock163.y){if(musicBar.isTouching(musicblock163)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock164.y){if(musicBar.isTouching(musicblock164)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock165.y){if(musicBar.isTouching(musicblock165)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock166.y){if(musicBar.isTouching(musicblock166)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock167.y){if(musicBar.isTouching(musicblock167)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock168.y){if(musicBar.isTouching(musicblock168)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock169.y){if(musicBar.isTouching(musicblock169)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock170.y){if(musicBar.isTouching(musicblock170)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock171.y){if(musicBar.isTouching(musicblock171)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock172.y){if(musicBar.isTouching(musicblock172)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock173.y){if(musicBar.isTouching(musicblock173)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock174.y){if(musicBar.isTouching(musicblock174)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock175.y){if(musicBar.isTouching(musicblock175)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock176.y){if(musicBar.isTouching(musicblock176)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock177.y){if(musicBar.isTouching(musicblock177)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock178.y){if(musicBar.isTouching(musicblock178)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock179.y){if(musicBar.isTouching(musicblock179)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock180.y){if(musicBar.isTouching(musicblock180)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock181.y){if(musicBar.isTouching(musicblock181)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock182.y){if(musicBar.isTouching(musicblock182)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock183.y){if(musicBar.isTouching(musicblock183)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock184.y){if(musicBar.isTouching(musicblock184)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock185.y){if(musicBar.isTouching(musicblock185)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock186.y){if(musicBar.isTouching(musicblock186)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock187.y){if(musicBar.isTouching(musicblock187)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock188.y){if(musicBar.isTouching(musicblock188)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock189.y){if(musicBar.isTouching(musicblock189)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock190.y){if(musicBar.isTouching(musicblock190)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock191.y){if(musicBar.isTouching(musicblock191)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock192.y){if(musicBar.isTouching(musicblock192)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock193.y){if(musicBar.isTouching(musicblock193)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock194.y){if(musicBar.isTouching(musicblock194)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock195.y){if(musicBar.isTouching(musicblock195)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock196.y){if(musicBar.isTouching(musicblock196)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock198.y){if(musicBar.isTouching(musicblock198)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock199.y){if(musicBar.isTouching(musicblock199)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock200.y){if(musicBar.isTouching(musicblock200)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock201.y){if(musicBar.isTouching(musicblock201)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock202.y){if(musicBar.isTouching(musicblock202)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock203.y){if(musicBar.isTouching(musicblock203)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock204.y){if(musicBar.isTouching(musicblock204)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock205.y){if(musicBar.isTouching(musicblock205)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock206.y){if(musicBar.isTouching(musicblock206)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock207.y){if(musicBar.isTouching(musicblock207)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock208.y){if(musicBar.isTouching(musicblock208)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock209.y){if(musicBar.isTouching(musicblock209)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock210.y){if(musicBar.isTouching(musicblock210)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock211.y){if(musicBar.isTouching(musicblock211)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock212.y){if(musicBar.isTouching(musicblock212)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock213.y){if(musicBar.isTouching(musicblock213)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock214.y){if(musicBar.isTouching(musicblock214)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock215.y){if(musicBar.isTouching(musicblock215)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock216.y){if(musicBar.isTouching(musicblock216)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock217.y){if(musicBar.isTouching(musicblock217)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock218.y){if(musicBar.isTouching(musicblock218)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock219.y){if(musicBar.isTouching(musicblock219)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock220.y){if(musicBar.isTouching(musicblock220)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock221.y){if(musicBar.isTouching(musicblock221)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock222.y){if(musicBar.isTouching(musicblock222)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock223.y){if(musicBar.isTouching(musicblock223)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock224.y){if(musicBar.isTouching(musicblock224)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock225.y){if(musicBar.isTouching(musicblock225)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock226.y){if(musicBar.isTouching(musicblock226)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock227.y){if(musicBar.isTouching(musicblock227)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock228.y){if(musicBar.isTouching(musicblock228)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock229.y){if(musicBar.isTouching(musicblock229)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock230.y){if(musicBar.isTouching(musicblock230)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock231.y){if(musicBar.isTouching(musicblock231)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock232.y){if(musicBar.isTouching(musicblock232)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock233.y){if(musicBar.isTouching(musicblock233)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock234.y){if(musicBar.isTouching(musicblock234)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock235.y){if(musicBar.isTouching(musicblock235)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock236.y){if(musicBar.isTouching(musicblock236)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock237.y){if(musicBar.isTouching(musicblock237)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock238.y){if(musicBar.isTouching(musicblock238)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock239.y){if(musicBar.isTouching(musicblock239)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock240.y){if(musicBar.isTouching(musicblock240)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock241.y){if(musicBar.isTouching(musicblock241)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock242.y){if(musicBar.isTouching(musicblock242)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock243.y){if(musicBar.isTouching(musicblock243)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock244.y){if(musicBar.isTouching(musicblock244)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock245.y){if(musicBar.isTouching(musicblock245)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock246.y){if(musicBar.isTouching(musicblock246)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock247.y){if(musicBar.isTouching(musicblock247)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock248.y){if(musicBar.isTouching(musicblock248)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock249.y){if(musicBar.isTouching(musicblock249)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock250.y){if(musicBar.isTouching(musicblock250)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock251.y){if(musicBar.isTouching(musicblock251)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock252.y){if(musicBar.isTouching(musicblock252)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock253.y){if(musicBar.isTouching(musicblock253)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock254.y){if(musicBar.isTouching(musicblock254)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock255.y){if(musicBar.isTouching(musicblock255)){combo++;}else{combo=0;}  }
  if(musicBar.y==musicblock256.y){if(musicBar.isTouching(musicblock256)){combo++;}else{combo=0;}  }
  }
