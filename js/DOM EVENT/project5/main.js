const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) =>{
    button.addEventListener("click", function(e){
        //Lay toa do cua button so voi vp
        const buttonRect = e.target.getBoundingClientRect();
        console.log(buttonRect);
        //Lay toa do cua chuot click so voi viewport

        const x = e.clientX;
        const y = e.clientY;

        //tinh toa do chuot click so voi button
        const xInside = x -buttonRect.left; 
        const yInside = y -buttonRect.top;
        
        //Them the span de them class circle
        const hinhTron = document.createElement("span");
        hinhTron.classList.add("circle");
        hinhTron.style.top = yInside + "px";
        hinhTron.style.left = xInside + "px";
        this.appendChild(hinhTron);

        //Xoa hinh hinhTron
        setTimeout(()=>hinhTron.remove(), 500)
    
    })
})