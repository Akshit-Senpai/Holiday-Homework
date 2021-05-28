const logo = document.querySelectorAll("#hhw path");
for(i = 0; i < logo.length; i++){
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}