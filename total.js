var counter =1
        setInterval(function(){
            document.getElementById('radiobtn' + counter).checked =true;
            counter++;
            if(counter>4)
            {
                counter=1;
            }
        },5500);