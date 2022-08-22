const pobierz = () => {
  $.getJSON(
    "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
    function (data) {
      // console.log(data);
      // console.log(data.imie);
      // console.log(data.nazwisko);
      $('#dane-programisty').remove();
      $('button').after(`<div id ="dane-programisty"><p>Imię: ${data.imie}</p> <p>Nazwisko: ${data.nazwisko}</p><p>Zawód: ${data.zawod}</p> <p>Firma: ${data.firma}</p><div/>`);
      }
  );
}
$('#pobierz').click(pobierz);
