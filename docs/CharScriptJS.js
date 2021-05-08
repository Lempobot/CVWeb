

//skills
const barData = {"cpp": 95, "git": 80, "Full-Stack": 50, "Java": 80, "DevOps": 75}

const barsByClass = document.getElementsByClassName("progress")

for (let i = 0; i<barsByClass.length; i++){
    let element = barsByClass.item(i)
    element.addEventListener("mouseover", complete)
}

function complete() {
    let barPosition = this.children[0].id
    for (let i = 0; i < barData[barPosition]; i++) {
        this.children[0].style.width = i.toString() + "%"
    }
}

//contact me

function checkLength(){
    var textArea = document.getElementById("contactText"),
        count = textArea.value.length,
        maxLength = textArea.maxLength,
        remaining = maxLength - count,
        charCount = document.getElementById("charcount_text")
    if(remaining <= 0) {
        charCount.innerHTML = maxLength + ' too much words is UN-BASED'
    } else {
        charCount.innerHTML = 'chars ' + remaining + ' left'
    }
}

//Back To Top

// When the user clicks on the button, scroll to the top of the document
document.getElementById("backToTop").addEventListener("click", topFunction)
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// Get the modal
    var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
    var img = document.getElementById("profilePic");
    var modalImg = document.getElementById("img01");
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    }

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
//

