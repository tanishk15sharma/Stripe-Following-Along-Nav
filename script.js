const navBar = document.querySelector(".top");
const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");

// console.log(background);

triggers.forEach(e => e.addEventListener("mouseenter", handleEnter));
triggers.forEach(e => e.addEventListener("mouseleave", handleLeave));




function handleEnter() {
    this.classList.add("trigger-enter");                                   //this both :

    setTimeout(() => {
        if(this.classList.contains("trigger-enter")){
            this.classList.add("trigger-enter-active")
        }
    } , 150);     //will show the content    
    // console.log(this);
    background.classList.add("open");                                      //this will show a background (white)

    const dropDown = this.querySelector(".dropdown");                      //we are fetching html elemeant here bcOZ their are 3 dropDown:this will fetch thr dropdown which is selected     
    const dropDownCoordinates = dropDown.getBoundingClientRect();
    const navCoordinates = navBar.getBoundingClientRect();
    console.log(dropDownCoordinates);


    const coordinates = {                                                  // creating a Obj for simplicity
        height: dropDownCoordinates.height,
        width: dropDownCoordinates.width,
        top: dropDownCoordinates.top - navCoordinates.top   ,
        left: dropDownCoordinates.left - navCoordinates.left,
    }
    console.log(coordinates.top);

    background.style.setProperty("height", `${coordinates.height}px`);
    background.style.setProperty("width", `${coordinates.width}px `);
    background.style.setProperty("transform" ,`translate(${coordinates.left}px,${coordinates.top}px)`);

}



function handleLeave() {
    this.classList.remove("trigger-enter");
    setTimeout(() => this.classList.remove("trigger-enter-active"), 150)
    console.log("leave");
    background.classList.remove("open");

}