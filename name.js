
         $test = setInterval(function(){ drawKhaos(20, 20); }, 30); //repeated execution of function khaos every 50ms
         $x = 1; 
         $rgb = 1; // this is black
         $opacity = 1; //fully opaque
         
         var ctx = document.getElementById("logo").getContext("2d"); // by id - so if you use class it might not ork
         
         
         
         function drawKhaos($startCoordX, $startCoordY){
         ctx.beginPath();
         switch($x){
         case 1:
         ctx.rect($startCoordX, $startCoordY, 8, 8);
         break;
         case 2:
         ctx.rect($startCoordX, $startCoordY+10, 8, 8);
         break;
         case 3:
         ctx.rect($startCoordX, $startCoordY+20, 8, 8);
         break;
         case 4:
         ctx.rect($startCoordX, $startCoordY+30, 8, 8);
         break;
         case 5:
         ctx.rect($startCoordX, $startCoordY+40, 8, 8);
         break;
         case 6:
         ctx.rect($startCoordX+10, $startCoordY, 8, 8);
         break;
         case 7:
         ctx.rect($startCoordX+20, $startCoordY, 8, 8);
         break;
         case 8:
         ctx.rect($startCoordX+30, $startCoordY+10, 8, 8);
         break;
         case 9:
         ctx.rect($startCoordX+30, $startCoordY+20, 8, 8);
         break;
         case 11:
         ctx.rect($startCoordX+30, $startCoordY+30, 8, 8);
         break;
         case 12:
         ctx.rect($startCoordX+20, $startCoordY+40, 8, 8);
         break;
         case 13:
         ctx.rect($startCoordX+10, $startCoordY+40, 8, 8);
         break;
         /* end D */
         case 14:
         ctx.rect($startCoordX+50, $startCoordY+10, 8, 8);
         break;
         case 15:
         ctx.rect($startCoordX+50, $startCoordY+20, 8, 8);
         break;
         case 16:
         ctx.rect($startCoordX+50, $startCoordY+30, 8, 8);
         break;
         case 17:
         ctx.rect($startCoordX+60, $startCoordY+40, 8, 8);
         break;
         case 18:
         ctx.rect($startCoordX+70, $startCoordY+40, 8, 8);
         break;
         case 19:
         ctx.rect($startCoordX+80, $startCoordY+30, 8, 8);
         break;
         case 20:
         ctx.rect($startCoordX+80, $startCoordY+20, 8, 8);
         break;
         case 21:
         ctx.rect($startCoordX+80, $startCoordY+10, 8, 8);
         break;
         case 22:
         ctx.rect($startCoordX+70, $startCoordY, 8, 8);
         break;
         case 23:
         ctx.rect($startCoordX+60, $startCoordY, 8, 8);
         break;
         // ends O
         case 25:
         ctx.rect($startCoordX+100, $startCoordY+40, 8, 8);
         break;
         case 26:
         ctx.rect($startCoordX+100, $startCoordY+30, 8, 8);
         break;
         case 27:
         ctx.rect($startCoordX+100, $startCoordY+20, 8, 8);
         break;
         case 28:
         ctx.rect($startCoordX+100, $startCoordY+10, 8, 8);
         break;
         case 29:
         ctx.rect($startCoordX+110, $startCoordY, 8, 8);
         break;
         case 30:
         ctx.rect($startCoordX+120, $startCoordY, 8, 8);
         break;
         case 31:
         ctx.rect($startCoordX+130, $startCoordY+10, 8, 8);
         break;
         case 32:
         ctx.rect($startCoordX+130, $startCoordY+20, 8, 8);
         break;
         case 33:
         ctx.rect($startCoordX+130, $startCoordY+30, 8, 8);
         break;
         case 34:
         ctx.rect($startCoordX+130, $startCoordY+40, 8, 8);
         break;
         case 35:
         ctx.rect($startCoordX+130, $startCoordY+40, 8, 8);
         break;
         // ends N
         case 38:
         ctx.rect($startCoordX+150, $startCoordY+10, 8, 8);
         break;
         case 39:
         ctx.rect($startCoordX+150, $startCoordY+20, 8, 8);
         break;
         case 40:
         ctx.rect($startCoordX+150, $startCoordY+30, 8, 8);
         break;
         case 41:
         ctx.rect($startCoordX+160, $startCoordY+40, 8, 8);
         break;
         case 42:
         ctx.rect($startCoordX+170, $startCoordY+40, 8, 8);
         break;
         case 43:
         ctx.rect($startCoordX+180, $startCoordY+30, 8, 8);
         break;
         case 44:
         ctx.rect($startCoordX+180, $startCoordY+20, 8, 8);
         break;
         case 45:
         ctx.rect($startCoordX+170, $startCoordY+20, 8, 8);
         break;
         case 46:
         ctx.rect($startCoordX+170, $startCoordY, 8, 8);
         break;
         case 47:
         ctx.rect($startCoordX+160, $startCoordY, 8, 8);
         break;
         case 48:
         ctx.rect($startCoordX+170, $startCoordY, 8, 8);
         break;
		 // ends G
		  case 49:
         ctx.rect($startCoordX, $startCoordY - 20, 8, 8);
         break;
         case 50:
         ctx.rect($startCoordX+10,$startCoordY - 20, 8, 8);
         break;
         case 51:
         ctx.rect($startCoordX+20, $startCoordY - 20, 8, 8);
         break;
         case 52:
         ctx.rect($startCoordX+30, $startCoordY- 20, 8, 8);
         break;
         case 53:
         ctx.rect($startCoordX+40, $startCoordY- 20, 8, 8);
         break;
         case 54:
         ctx.rect($startCoordX+50, $startCoordY- 20, 8, 8);
         break;
         case 55:
         ctx.rect($startCoordX+60, $startCoordY- 20, 8, 8);
         break;
         case 56:
         ctx.rect($startCoordX+70, $startCoordY- 20, 8, 8);
         break;
         case 57:
         ctx.rect($startCoordX+80, $startCoordY- 20, 8, 8);
         break;
         case 58:
         ctx.rect($startCoordX+90, $startCoordY- 20, 8, 8);
         break;
         case 59:
         ctx.rect($startCoordX+100, $startCoordY- 20, 8, 8);
         break;
		 case 60: // ---
         ctx.rect($startCoordX+110, $startCoordY- 20, 8, 8);
         break;
		 case 61:
         ctx.rect($startCoordX+120, $startCoordY- 20, 8, 8);
         break;
		 case 62:
         ctx.rect($startCoordX+130, $startCoordY- 20, 8, 8);
         break;
		 case 63:
         ctx.rect($startCoordX+140, $startCoordY- 20, 8, 8);
         break;
		 case 64:
         ctx.rect($startCoordX+150, $startCoordY- 20, 8, 8);
         break;
		 case 65:
         ctx.rect($startCoordX+160, $startCoordY- 20, 8, 8);
         break;
		 case 66:
         ctx.rect($startCoordX+170, $startCoordY- 20, 8, 8);
         break;
		 case 67:
         ctx.rect($startCoordX+180, $startCoordY- 20, 8, 8);
         break; // --
		  case 68:
         ctx.rect($startCoordX+190, $startCoordY- 20, 8, 8);
         break;
		  case 69:
         ctx.rect($startCoordX+200, $startCoordY- 20, 8, 8);
         break;
		  case 70:
         ctx.rect($startCoordX+200, $startCoordY- 10, 8, 8);
         break;
		  case 71:
         ctx.rect($startCoordX+200, $startCoordY , 8, 8);
         break;
		  case 72:
         ctx.rect($startCoordX+200, $startCoordY + 10, 8, 8);
         break;
		  case 73:
         ctx.rect($startCoordX+200, $startCoordY + 20, 8, 8);
         break;
		  case 74:
         ctx.rect($startCoordX+200, $startCoordY + 30, 8, 8);
         break;
		  case 75:
         ctx.rect($startCoordX+200, $startCoordY + 40, 8, 8);
         break;
		 case 76:
         ctx.rect($startCoordX+200, $startCoordY + 50, 8, 8);
         break;
		 case 77:
         ctx.rect($startCoordX+190, $startCoordY + 60, 8, 8);
         break;
		 case 78:
         ctx.rect($startCoordX+180, $startCoordY + 60, 8, 8);
         break;
		 case 79:
         ctx.rect($startCoordX+170, $startCoordY +60, 8, 8);
         break;
		/*  case 80:
         ctx.rect($startCoordX+210, $startCoordY - 20, 8, 8);
         break;
		  case 81:
         ctx.rect($startCoordX+220, $startCoordY -20, 8, 8);
         break; */
		 
		 
         }
		 
		 
		
		 
         
         
         ctx.closePath();
         ctx.fillStyle = 'rgba('+$rgb+','+$rgb+','+$rgb+','+$opacity+')'; 
         
         $opacity /= 1.02;  // each time you run through the functio you 
         ctx.fill(); 
         $x++;
         if ($x >79){ // run through this function 57 times only
         
         clearInterval($test);
        
         
         
         
         }
         }
      