let day = 'saturday';

switch(day){
    case 'Sunday':
         console.log("today is sunday");
        break;
    case 'Monday':
         console.log("today is Monday");
        break;
    case 'Tuesday':
         console.log("today is Tuesday");
        break;
    case 'Wednesday':
         console.log("today is Wednesday");
        break;
    case 'Thursday':
         console.log("today is Thursday");
        break;
    case 'friday':
         console.log("today is Friday");
        break;
    case 'saturday':
        return console.log("day is saturday");                      //* when we use return we don't need break;
    default :
     console.log("Not Valid");
     break;
}
