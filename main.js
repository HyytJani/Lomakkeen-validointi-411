function validateForm() {
    let id= document.forms["myForm"]["id"].value;
    if (id.length<6) {
      alert("Käyttäjä ID täytyy olla vähintään 6 merkkiä pitkä ");
      return false;
    }
    let salasana = document.forms["myForm"]["salasana"].value;
    if (salasana.length<1) {
      alert("Syötä salasana");
      return false;
    }

    let numero= document.forms["myForm"]["postinumero"].value;
    if (numero.length<5) {
      alert("Postinumerossa täytyy olla 5 numeroa");
      return false;
    }
    if (numero.length>5) {
      alert("Postinumerossa täytyy olla 5 numeroa");
      return false;
    }
    let email= document.forms["myForm"]["email"].value; 
    if (email.length<1){
      alert("Syötä sähköpostiosoite")
      return false;
    }
    if (myForm.suomi.checked == false && myForm.muu.checked == false )      
      {
        alert ('Valitse kieli.');
        return false;

      }
    let maa=document.forms["myForm"]["maa"].value;
      if (maa == "(Valitse maa)") {
        alert("Please select a selection");
        return false;}
}