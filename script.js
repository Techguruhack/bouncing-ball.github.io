  
   let myBall = document.getElementById('myBall');
   let myBallContainer = document.getElementById('myBallContainer');


   myBall.style.top = '0px';

 
   function myBounceBall() {
       myBall.style.animation = 'myBounce 2s infinite ease-in-out';
   }

   myBounceBall();