function validateForm() {
    let id= document.forms["myForm"]["id"].value;
    if (id.length<6) {
      alert("Käyttäjä ID täytyy olla vähintään 6 merkkiä pitkä ");
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
    if (myForm.suomi.checked == false && myForm.muu.checked == false )      
      {
        alert ('Valitse kieli.');
        return false;

      }

}