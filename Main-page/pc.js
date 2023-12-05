
const form = document.querySelector('form');
const msg_selector = document.querySelector('#msg');

let msg =""

form.addEventListener('submit', function (e) {
    e.preventDefault();
const ph_value = parseInt((document.querySelector('#ph_value')).value);

if(ph_value < 7 )
msg = "Water is Basic";
else if(ph_value > 7)
msg = "Water is Acidic";
else
msg =" Water Is Perfect For Drinking"

msg_selector.innerHTML = msg;

}
)