// hidder page
const HidBtn = document.getElementById("pageHid");
const pageHid = document.querySelector(".phoneU");

HidBtn.onclick = function() {
    pageHid.classList.toggle("active");
};
setTimeout(() => {
    document.getElementById("textHead").classList.add("active");
}, 500);

// scroll to button
let btnScroll = document.getElementById("scrolto");
btnScroll.onclick = function() {
    window.scrollTo(0, 577);
};
// transition

let leftTopContent = document.querySelector(".leftTopContent");

setTimeout(() => {
    leftTopContent.classList.add("active");
}, 100);

let rightTopContent2 = document.querySelector(".rightTopContent2");
let righttop = rightTopContent2.getBoundingClientRect().top;

// section
let sections = document.querySelector(".leftContentText");
let sectionsRight = document.querySelector(".rightContentText");
let scrollS = sections.offsetTop;
let scrollS2 = sectionsRight.offsetTop;

// last section

let boxs = document.querySelectorAll(".boxs .boxes");
let boxs2 = document.querySelector(".boxs .boxes:first-of-type");

let num = 150;

window.addEventListener("scroll", () => {
    // section text
    let offs = this.pageYOffset;
    let Ytext = rightTopContent2.offsetTop;
    if (Ytext - rightTopContent2.offsetHeight < offs) {
        rightTopContent2.classList.add("active");
    }
    // last section
    if (scrollS - sections.offsetHeight < offs) {
        sections.classList.add("active");
    } else {
        sections.classList.remove("active");
    }
    if (scrollS2 - sections.offsetHeight < offs) {
        sectionsRight.classList.add("active");
    } else {
        sectionsRight.classList.remove("active");
    }

    // before last section
    boxs.forEach((es) => {
        let scrolled = es.offsetTop;
        // console.log(boxs2.offsetTop);
        if (scrolled - es.offsetHeight < offs) {
            es.classList.add("active");
            // console.log("seee");
        } else {
            es.classList.remove("active");
        }
    });

    // images before the footer
    let imgParent = document.querySelector(".imagesSection #con");
    let img = document.querySelectorAll(".imagesSection #con div");

    // if (rightTopContent2.offsetTop - rightTopContent2.offsetHeight < offs) {
    // }
    // console.log(imgParent);

    img.forEach((el) => {
        let scroller = imgParent.offsetTop;
        console.log(scroller);

        if (imgParent.offsetTop - imgParent.offsetHeight - 300 < offs) {
            el.classList.add("active");
        }

        // console.log(scroller - e.offsetHeight, offs);
        el.addEventListener("animationend", () => {
            img.forEach((ele) => {
                ele.style.transform = "scale(1)";
            });
        });
    });
});