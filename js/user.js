$(document).ready(function() {

    var names = [];
    names[0] = "superuser100101";
    localStorage.setItem("names", JSON.stringify(names));

    // gets values from "array" stored in localstorage and enters into html
    function loadTable() {
            let storedNames = JSON.parse(localStorage.getItem("names"));
            let number = 1;
            // so entries don't appear more than once
            $('.table tbody').empty();
            for(index in storedNames) {
            let newEntry = '<tr><td>' + number + '</td><td>' + storedNames[index] + '</td><td><button type="button" class="btn btn-secondary btn-danger deleteTrigger" title="Löschen"><i class="fa fa-trash"></i></button></td></tr>';
            $('.table tbody').append(newEntry);
            number++;
        }
    }
    loadTable();

    // on press "Hinzufügen"
    $('.needs-validation').submit(function(event) {
        event.preventDefault();
        event.stopPropagation();

        if (this.checkValidity() === false) {

            $(this).addClass('was-validated');

            return false;
        }

        //1. get values
        let username = $('#username').val();
        //5. clear entries from the form
        $('#username').val(null)
        
        //2. create a new element
        //3. somehow add them to userListBody
        //4. update number of current users
        let nameList = JSON.parse(localStorage.getItem("names"));
        nameList.push(username);
        // remove "array" from localstorage
        localStorage.removeItem("names");
        localStorage.setItem("names", JSON.stringify(nameList));
        loadTable();

        return false;
    });

    // Delete Function
    // otherwise it does not know that the button exists
    $('.userList').on('click', '.deleteTrigger', function() {
        // confirm dialogue only returns true if pressed
        if(confirm("Are you sure you want to delete?")) {
            let numberToDelete = $(this).parent().parent().children('td:first').html();
            let nameList = JSON.parse(localStorage.getItem("names"));

            // removes from html
            $(this).parent().parent().remove();

            // remove chosen item from array
            nameList.splice(numberToDelete-1, 1);
            // remove "array" from localstorage
            localStorage.removeItem("names");

            localStorage.setItem("names", JSON.stringify(nameList));
            loadTable();
        }
    });

});