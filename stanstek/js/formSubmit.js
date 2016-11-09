/**
 * Created by User on 2016-11-09.
 */
function validate()
{

    if( document.sentMessage.name.value == "" )
    {
        alert( "Ange ett giltigt Namn" );
        document.sentMessage.name.focus() ;
        return false;
    }

    if( document.sentMessage.email.value == "" )
    {
        alert( "Ange en giltig epost-adress" );
        document.sentMessage.email.focus() ;
        return false;
    }

    if( document.sentMessage.phone.value == "" )
    {
        alert( "Ange en giltig epost-adress" );
        document.sentMessage.phone.focus() ;
        return false;
    }

    if (document.sentMessage.message.value == "")
    {

        alert("Skriv ett meddelande!");
        document.sentMessage.message.focus();
        return false;
    }

    return( true );
}

function validateEmail()
{
    var emailID = document.sentMessage.email.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || ( dotpos - atpos < 2 ))
    {
        alert("Ange en giltig epost-adress)
        document.sentMessage.email.focus() ;
        return false;
    }
    return( true );
}