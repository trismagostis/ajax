console.log(`Warsztat - (jQuery) Pobierz dane po kliknięciu przycisku`);

$(document).ready(function() {
    
    $('#get-data').click(function() {
        
        // wariant 1
        // $.get('https://akademia108.pl/api/ajax/get-post.php')
        //     .done(function(data) {

        //         let pId = $('<p></p>').text(`Post ID: ${data.id}`);
        //         let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
        //         let pTitle = $('<p></p>').text(`Title: ${data.title}`);
        //         let pBody = $('<p></p>').text(`Body: ${data.body}`);
        //         let hr = $('<hr />');

        //         let jqBody = $('body');
                
        //         jqBody.append(pId);
        //         jqBody.append(pUserId);
        //         jqBody.append(pTitle);
        //         jqBody.append(pBody);
        //         jqBody.append(hr);

        //         // console.log(data);
        //     })
        //     .fail(function(error) {
        //         console.error(error);
        //     });


        // wariant 2
        $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
        .done(function(data) {

            let pId = $('<p></p>').text(`Post ID: ${data.id}`);
            let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
            let pTitle = $('<p></p>').text(`Title: ${data.title}`);
            let pBody = $('<p></p>').text(`Body: ${data.body}`);
            let hr = $('<hr />');

            let jqBody = $('body');
            
            jqBody.append(pId);
            jqBody.append(pUserId);
            jqBody.append(pTitle);
            jqBody.append(pBody);
            jqBody.append(hr);

            // console.log(data);
        })
        .fail(function(error) {
            console.error(error);
        });

    });

});