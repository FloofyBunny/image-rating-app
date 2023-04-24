const imageCount = 30;
let currentImage = 28;

const result = {sympathie: [], kompetenz: [], authorität: [],}

const input = document.querySelectorAll(".kategorie input");
const weiter = document.getElementById("weiter");
const zurück = document.getElementById("zurück");

weiter.addEventListener("click", function() {write(true);});
zurück.addEventListener("click", function() {write(false);});

function write(nextImage){
    let regexCheck = /^([1-9]|10)$/.test(input[0].value) && /^([1-9]|10)$/.test(input[1].value) && /^([1-9]|10)$/.test(input[2].value);
    console.log(regexCheck);
    if(!/^([1-9]|10)$/.test(input[0].value)){
        input[0].style.borderColor = "red";
        return;
    } else if (!/^([1-9]|10)$/.test(input[1].value) && nextImage){
        input[1].style.borderColor = "red";
        return;
    } else if (!/^([1-9]|10)$/.test(input[2].value) && nextImage){
        input[2].style.borderColor = "red";
        return;
    } else {
        input.forEach((e) => {e.style.borderColor = "black"});
    }

    if(nextImage){
        result.sympathie[currentImage-1] = input[0].value;
        result.kompetenz[currentImage-1] = input[1].value;
        result.authorität[currentImage-1] = input[2].value;
    } else {
        if(currentImage != 1) {
            result.sympathie[currentImage-1] = input[0].value;
            result.kompetenz[currentImage-1] = input[1].value;
            result.authorität[currentImage-1] = input[2].value;
        }
    }

    if(!(nextImage == false && currentImage == 1)){ 
        if(currentImage == imageCount-1 && nextImage){
            
            saveData(result, "danke.json")
        }
        console.log("zurück")
        if(nextImage){
            ++currentImage;
        } else {
            --currentImage;
        }
        input.forEach((e, i) => {
            switch(i) {
                case 0:
                    let s = result.sympathie[currentImage-1];
                    if (s == undefined) {
                        s = "";
                    }
                    e.value = s;
                    break;
                case 1:
                    let k = result.kompetenz[currentImage-1];
                    if (k == undefined) {
                        k = "";
                    }
                    e.value = k;
                    break;
                case 2:
                    let a = result.authorität[currentImage-1];
                    if (a == undefined){
                        a = "";
                    }
                    e.value = a;
                    break;
            }
        });
    
    }
    

}

let saveData = (function () {
    let a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    return function (data, fileName) {
        let json = JSON.stringify(data);
        let blob = new Blob([json], {type: "application/json"});
        let url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    };
}());



