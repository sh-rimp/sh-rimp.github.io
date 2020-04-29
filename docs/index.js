'use strict';

(()=>{
    const max = 10;
    let i=0;
    setTimeout(function loop(){
        console.log(i++);
        const elem = document.createElement('p');
        elem.innerHTML = i;
        document.body.appendChild(elem);
        if(i<max) setTimeout(loop, 500);
    }, 500);
})();
