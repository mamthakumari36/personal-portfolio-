//--------about page, skills hover effect-----------

let tablink = document.getElementsByClassName("tab-links");
let tablist = document.getElementsByClassName("tab-list");
function opentab(tabname) {
    for (link of tablink) {
        link.classList.remove("active-link");
    }
    for (list of tablist) {
        list.classList.remove("active-list");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-list")
}

// code to display  project 'see more' button

var grid = document.getElementsByClassName("grid-item");
function project1() {
    Array.from(grid).forEach((gr) => {
        if (gr.style.display == "none") {
            gr.style.display = "block";
            var learn = document.getElementById('learn-btn').value = "See Less..."
        }
        else {
            gr.style.display = "none";
            var learn = document.getElementById('learn-btn').value = "See more..."
        }
    })

}

/*----code for open menu button====*/

let v_class = document.querySelector('.v_class')
function openmenu() {
    if (v_class.style.visibility == "hidden") {
        v_class.style.visibility = "visible"
        v_class.style.position = "relative"
    } else {
        v_class.style.visibility = "hidden"
        v_class.style.position = "fixed"
    }
}

/*---------code to send email---------*/

function sendEmail(){
    Email.send({
        SecureToken :"42daff3d-bade-44a9-ba6e-7e06531cf440",     
        To : 'maheshnishad143143@gmail.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : "Name:"+document.getElementById("name").value +
        "<br><br>Email:"+ document.getElementById("email").value +
        "<br><br>Message:"+ document.getElementById("\msg").value
    }).then(
      message => alert("message sent successfully")
    );
}

