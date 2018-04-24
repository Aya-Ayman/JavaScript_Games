
         var Score=0;
         var movingObj;
         var fixedObj;
         var animate;
         var lblScore;
         var array;
         var num;
          
          function changeImg(src)
          {
            document.getElementById("fixedShape").src= src;
          }
            
         function init(){
               
               movingObj = document.getElementById('movingShape');
               lblScore=document.getElementById('lblScore'); 
               fixedObj= document.getElementById('fixedShape');
               array=["circle.png","triangle.png","octagon.png","square.png","jewel.png"];
               movingObj.style.position= 'relative'; 
               fixedObj.style.position='relative';
               movingObj.style.top = '-120px';
               
            }

            function moveDown(){
           
                movingObj.style.top = parseInt(movingObj.style.top) + 10 + 'px';
                animate = setTimeout(moveDown,50); 
                var src1=document.getElementById('movingShape').src;
                var src2=document.getElementById('fixedShape').src;
 
               
                  if(movingObj.style.top=='190px' )
               
                    {
                     if(src1==src2) 
                     {
                        Score++;
                        document.getElementById('lblScore').innerHTML=" Score : "+Score;
                        num =Math.floor(Math.random() * 5) + 0 ;
                        document.getElementById('movingShape').src=array[num];
                        init();
                        
                     }
                     
                     
                    else 
                      {  
                        if(src1.toString().includes("jewel.png"))
                         {
                            Score=Score+5;
                            document.getElementById('lblScore').innerHTML=" Score : "+Score;
                            num =Math.floor(Math.random() * 5) + 0 ;
                            document.getElementById('movingShape').src=array[num];
                            init();
                         }
                        
                       else 
                         { 
                           alert("game over\nYour Score = "+Score);
                           document.getElementById('lblScore').innerHTML=" Score : "+Score;
                           newGame(); 
                         }
                      }
                    }    
                 }
                   
            function newGame()
            {
                stop();
                Score=0;
                document.getElementById('lblScore').innerHTML=" Score : "+Score;  
            }
            
            function stop(){
               clearTimeout(animate);
               movingObj.style.top = '-120px'; 
            }

            window.onload =init;
      