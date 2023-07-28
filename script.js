function isChecked() {
    var isChecked = document.getElementById("switch").checked;

    let card1 = document.querySelectorAll("#card");
    let card2 = document.getElementById("card-2");
    console.log(isChecked);
    if (isChecked){
        document.body.style.background = 'hsl(0, 0%, 100%)';
        document.body.style.color = 'black';
        card1.style.backgroundColor = 'hsl(227, 47%, 96%)';
        card2.style.backgroundColor = 'hsl(227, 47%, 96%)';
    }

    if (!isChecked){
        document.body.style.background = 'hsl(230, 17%, 14%)';
        card1.style.backgroundColor = 'hsl(228, 28%, 20%)';
        card2.style.backgroundColor = 'hsl(228, 28%, 20%)';
    }
}