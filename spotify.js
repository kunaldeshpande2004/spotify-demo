/*const spotifyLogo = document.getElementById('spotifyLogo');
        const mainLeft = document.getElementById('mainLeft');

        // Function to change colors on click
        function changeColor(){
            spotifyLogo.style.color = '#1DB954'; 
            mainLeft.style.backgroundColor = '#0f0b0b'; 
        }

        // Add event listener to the Spotify logo
        spotifyLogo.addEventListener('click', changeColors);*/
        
        // JS MAIN
        let flag=0;
        let clk=0;
       let pbtn=document.querySelector("#pbtn");
       let pp=document.querySelector("#pp");
        let currentsong = document.querySelector("#currentsong");
        let s1=document.querySelector("#s1");
        let s2=document.querySelector("#s2");
        let s3=document.querySelector("#s3");
        let s4=document.querySelector("#s4");
        let dot=document.querySelector("#dot");
        
        function playpause(){
            if(clk===0){
                pp.classList.remove('fa-solid','fa-play');
                pp.classList.add('fa-solid','fa-pause');
                currentsong.play();
                clk=1;
        }
                else{
                    pp.classList.remove('fa-solid','fa-pause');
                    pp.classList.add('fa-solid','fa-play');
                    currentsong.pause();
                    clk=0;
                }
        }
         function playmusic(track){
            currentsong.src="/songs/"+track;
             if(flag===1){
          currentsong.play();
          playpause();
            }
            else{
           currentsong.pause();
           playpause();
             }
         }
        s1.addEventListener("click",()=>{
            if(flag===0)
           flag=1;
           else
           flag=0;
            playmusic("s1.mp3");

        });
        s2.addEventListener("click",()=>{
            if(flag===0)
           flag=1;
           else
           flag=0;
            playmusic("s2.mp3");
        });
        s3.addEventListener("click",()=>{
            if(flag===0)
           flag=1;
           else
           flag=0;
            playmusic("s3.mp3");
        });
        s4.addEventListener("click",()=>{
            if(flag===0)
           flag=1;
           else
           flag=0;
            playmusic("s4.mp3");
        });
        pbtn.addEventListener("click",playpause);
        let bar=document.querySelector("#bar");
        currentsong.addEventListener('timeupdate', ()=>{
        let percentage = (currentsong.currentTime / currentsong.duration) * 100;
        dot.style.width = percentage + '%';
    });

           