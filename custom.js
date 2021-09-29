    //custom date selector
    $(document).ready(function() {
        //get the current date in the week. Starting at 0 index of Sunday
        const date = new Date().getDay();
        switch (date) {
            case 0 :
                $('.day7 p').addClass('dayhighlight');
                break;
            case 1 :
                $('.day1 p').addClass('dayhighlight');
                break;
            case 2 :
                $('.day2 p').addClass('dayhighlight');
                break;
            case 3 :
                $('.day3 p').addClass('dayhighlight');
                break;
            case 4 :
                $('.day4 p').addClass('dayhighlight');
                break;
            case 5 :
                $('.day5 p').addClass('dayhighlight');
                break;
            case 6 :
                $('.day6 p').addClass('dayhighlight');
        }
    });
