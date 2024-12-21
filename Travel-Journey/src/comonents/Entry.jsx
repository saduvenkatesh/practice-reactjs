
export default function Entry(props){
    
    const hours = new Date().getHours()
    let timeofday
    if(hours<12){
        timeofday="morning"
    } else if(hours>=12 && hours<18){
        timeofday="afternoon"
    } else if (hours>=18 && hours<21){
        timeofday="evening"
    } else{
        timeofday="night"
    }


    return (
        
            <>
                <h1>Good {timeofday}</h1>
            </>
    )
}