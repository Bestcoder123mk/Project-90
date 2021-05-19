function adduser() {
    var user_name1 = document.getElementById("Player1_input").value;
    var user_name1 = document.getElementById("Player2_input").value;
    localStorage.setItem("user_name 1" , user_name1);
    localStorage.setItem("user_name 2" , user_name2);
    window.location="game_page.html";
} 