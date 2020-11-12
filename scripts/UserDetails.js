//User Details
function openForm(){

    if (document.getElementById("userDetails").style.display == "none")
    {    
        //show only date > today
        var today = new Date().toISOString().split('T')[0];
        document.getElementById('retDate').setAttribute('min', today);


        document.getElementById("userDetails").style.display = "Block";
    }
    else
    {
        document.getElementById("userDetails").style.display = "none";
    }
    
}

//close form
function CloseForm(){
    document.getElementById("userDetails").style.display = "none"
}

//get user data
function SubmitForm()
{
    var userDate = new Date(Date.parse(document.getElementById("retDate").value));
    var workDays = document.getElementById("workDays").value;
    var bankHolDay = document.getElementById("BankHolidays").value;
    var holDay = document.getElementById("Holidays").value;
    

    var userData = {retirementDate:userDate, workperWeek:workDays, bankHolidays:bankHolDay, holidays:holDay};
    window.localStorage.setItem("UserData", JSON.stringify(userData));
}
