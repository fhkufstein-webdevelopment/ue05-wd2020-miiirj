$(document).ready(function() {

    // JSON File (saved on Server or other place) gets pulled in and read out
    function loadJSON() {
        $.getJSON("./js/mydata.json", function(data) {
            var names = data.name;
            let i = 1;
            names.forEach(function(name) {
                let newEntry = '<tr><td>' + i + '</td><td>' + name + '</td><td><button type="button" class="btn btn-secondary btn-danger deleteTrigger" title="Löschen"><i class="fa fa-trash"></i></button></td></tr>';
                $('.table tbody').append(newEntry);
                i++;
            });
    
        });
    }

    loadJSON();

    function addToJSON(newName) {
        $.getJSON("./js/mydata.json", function(data) {
            data.push({"newName":newName});
            var newData = JSON.stringify(data);
            jQuery.post("./js/mydata.json", {newData: newData}, function(response) {
                console.log("done");
            });
        });
    }
    addToJSON("WTF IS GOING ON");



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

        $('.table tr:last').after(newEntry);






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