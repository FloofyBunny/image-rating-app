const imageCount = 30;
let currentImage = 1;

const result = {sympathie: [], kompetenz: [], authorität: [],}

const input = document.querySelectorAll(".kategorie input");
const weiter = document.getElementById("weiter");
const zurück = document.getElementById("zurück");

weiter.addEventListener("click", function() {write(true);});
zurück.addEventListener("click", function() {write(false);});

function write(nextImage){
    if((input[0].value == "" || input[1].value == "" || input[2].value == "") && nextImage) {
        return;
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

const output = new Blob([JSON.stringify(result, null, 4)], {
    type: "application/json",
});

