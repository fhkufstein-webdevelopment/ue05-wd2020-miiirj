$(document).ready(function() {

    var userListBody = $('.userList tbody');
    console.log(userListBody);

    //@todo store and somehow update the current number of users


    $('.needs-validation').submit(function(event) {

        event.preventDefault();
        event.stopPropagation();

        if (this.checkValidity() === false) {

            $(this).addClass('was-validated');

            return false;
        }

        //@todo
        //1. get values
        //2. create a new element
        //3. somehow add them to userListBody
        //4. update number of current users
        //5. clear entries from the form
        //6. maybe do something else... :-)

        //your code follows here
        let username = $('#username').val();
        console.log(username);
        // Wieder zurücksetzen
        $('#username').val(null)
        
        // Get Tablenumber from item before
        let tablenumber = $('.table tr:last td:first').html();
        tablenumber++;
        let newEntry = '<tr><td>' + tablenumber + '</td><td>' + username + '</td><td><button type="button" class="btn btn-secondary btn-danger deleteTrigger" title="Löschen"><i class="fa fa-trash"></i></button></td></tr>';
        console.log(userListBody);

        $('.table tr:last').after(newEntry);

        console.log(userListBody[0].innerHTML);





        return false;
    });

    /*
    $('.deleteTrigger').click(function() {
        //@todo
        //1. remove current user from dom
        //2. update number of current users


        //your code follows here
        

    });
    */

    // Delete Function
    // otherwise it does not know that the button exists
    $('.userList').on('click', '.deleteTrigger', function() {
        console.log("pressed")
        let numberToDelete = $(this).parent().parent().children('td:first').html();

        $(this).parent().parent().remove();





    });

    //maybe some code follows here

});