function date_time(id)
{
        var        date            = new Date;
        var        year            = date.getFullYear();
        var        month           = date.getMonth();
        var        months          = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
        var        d               = date.getDate();
        var        day             = date.getDay();
        var        days            = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
        
        h               = date.getHours();
                if(h<10){
                        h = "0"+h;
                }

        m = date.getMinutes();
                if(m<10){
                        m = "0"+m;
                }

        s = date.getSeconds();        
                if(s<10){
                        s = "0"+s;
                }

        result          = ' 'months[month]+' '+d+' '+year+'';
        
        document.getElementById(id).innerHTML = result;

        setTimeout('date_time("'+id+'");','1000');
        
        return true;
}