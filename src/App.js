import React from 'react'
import './index.css'



function App() {

  const [hour , sethour] = React.useState(0)

const [second , setsecond] = React.useState(0)

const [minute , setMinute] = React.useState(0)


const [Start , Setstart] = React.useState(false)

const [date , setdate] = React.useState('')


const [Pause , SetPause] = React.useState(true)


React.useEffect(function()
{

  if(Start)
  {
    const SecondsData = setInterval(function()
{

     setsecond(function(Previous)
    {

           if(Previous > 0)
           {
                setsecond(second-1)
           }

           else{

            return 59
           }

           if(Previous === 59)
           {
               {minute === 0 ? setMinute(59) : setMinute(minute - 1) }
           }
    })
     
},1000)












return ()=>clearInterval(SecondsData)
  }

},[second])





React.useEffect(function()
{

  if(Start)
  {
     
  const HoursData = setTimeout(function()
  {
  
       sethour(function(Previous1)
      {
  
             if(Previous1 > 0)
             {
                  sethour(hour - 1)
             }
  
             else{
  
              return 0
             }
      })
       
  },3600000)
  
  
  return ()=>clearInterval(HoursData)
  }

},[hour])






function Collect(event)
{
     const Eventvalue = event.target.value

     const Substringvalue = Eventvalue.substring(0,4)

     const CheckDate = new Date()

    //  console.log(CheckDate.getFullYear() > Substringvalue )
     
    if(CheckDate.getFullYear() > Substringvalue)
    {
          SetPause(false)
    }
   

   else{
    
    SetPause(true)
    setdate(event.target.value)
   }

   
}


function Todayyeartype(ThisYear) {
  if( ThisYear % 4 === 0 && ThisYear % 100 !== 0 || ThisYear % 400 === 0 )
  {
        return parseInt(366)
  }

  else{

     return parseInt(365)
  }
}


function Futureyeartype(Years) {
  if( Years % 4 === 0 && Years % 100 !== 0 || Years % 400 === 0 )
  {
        return parseInt(366)
  }

  else{

     return parseInt(365)
  }
}


function Calculate()
{
  const FutureDateInfo = new Date(String(date))

  const TodayDateInfo = new Date()
 
  

  const Todaydate = TodayDateInfo.getDate()

  

  const Futuredate = FutureDateInfo.getDate()

  const Todayhour = TodayDateInfo.getHours()

 

  const TodayMonth = TodayDateInfo.getMonth()

  const FutureMonth = FutureDateInfo.getMonth()

  const TodayMinute = TodayDateInfo.getMinutes()

 

  const TodaySecond = TodayDateInfo.getSeconds()

 

  const ThisYear = TodayDateInfo.getFullYear()

  const FutureYear = FutureDateInfo.getFullYear()

  const DaysofMonth = [31 , 29 , 31 , 30 , 31 , 30 , 31 , 31 , 30 , 31 , 30 , 31]

  const LeapDaysofMonth = [31 , 28 , 31 , 30 , 31 , 30 , 31 , 31 , 30 , 31 , 30 , 31]

  const YearDifference = FutureYear - ThisYear



const TodayYearisleapornot = Todayyeartype(ThisYear)



  if(YearDifference == 0)  //This is current year

  {

    if(FutureMonth === TodayMonth)
    {

    const Daysremaining = Futuredate - Todaydate

    const HoursInfo = (Daysremaining * 24) - Todayhour  

    const MinutesInfo = (60 - TodayMinute)

    const SecondsInfo = (60 - TodaySecond)

    sethour(HoursInfo)

    setMinute(MinutesInfo)

    setsecond(SecondsInfo)


    }

    //  console.log(Daysremaining)
    
    else{

      let total = 0

  {TodayYearisleapornot === 366 ? LeapDaysofMonth.forEach(function(item , index)
    {
          if(index > TodayMonth && index < FutureMonth)
          {
               total += item
          }
    }) :    DaysofMonth.forEach(function(item , index)
    {
          if(index > TodayMonth && index < FutureMonth)
          {
               total += item
          }
    })}


    
    let Daysremaining = 0;

if (TodayYearisleapornot === 366) {
    Daysremaining = (LeapDaysofMonth[TodayMonth] - Todaydate + Futuredate) + total;
} else {
    Daysremaining = (DaysofMonth[TodayMonth] - Todaydate + Futuredate) + total;
}


   
    

    const HoursInfo = (Daysremaining * 24) - Todayhour

    const MinutesInfo = (60 - TodayMinute)

    const SecondsInfo = (60 - TodaySecond)

    sethour(HoursInfo)

    setMinute(MinutesInfo)

    setsecond(SecondsInfo)

    }



  }


  else{

    let Total = 0

    if(FutureMonth === TodayMonth)
    {

             {TodayYearisleapornot ?  LeapDaysofMonth.map(function(item , index)
              {
                   if(index != TodayMonth)
                   {
                       
                       Total +=  YearDifference * item
                   }
              }) :  DaysofMonth.map(function(item , index)
              {
                   if(index != TodayMonth)
                   {
                       
                       Total +=  YearDifference * item
                   }
              })}
           
   
            console.log(Total)
        
            let Daysremaining = 0;

if (TodayYearisleapornot) {
    Daysremaining = (LeapDaysofMonth[TodayMonth] - Todaydate) + Futuredate + Total + ((YearDifference - 1) * LeapDaysofMonth[TodayMonth]);
} else {
    Daysremaining = (DaysofMonth[TodayMonth] - Todaydate) + Futuredate + Total + ((YearDifference - 1) * DaysofMonth[TodayMonth]);
}


            console.log(Daysremaining)

            const HoursInfo = (Daysremaining * 24) - Todayhour

            const MinutesInfo = (60 - TodayMinute)
        
            const SecondsInfo = (60 - TodaySecond)
        
            sethour(HoursInfo)
        
            setMinute(MinutesInfo)
        
            setsecond(SecondsInfo)
        
    }


    else{

      
     {TodayYearisleapornot ?    LeapDaysofMonth.map(function(item , index)
      {
           if(index != TodayMonth || index != FutureMonth )
           {
               
               Total +=  YearDifference * item
           }
      }) :      DaysofMonth.map(function(item , index)
      {
           if(index != TodayMonth || index != FutureMonth )
           {
               
               Total +=  YearDifference * item
           }
      })}
     

      let Daysremaining = 0;

      if (TodayYearisleapornot) {
          Daysremaining = (LeapDaysofMonth[TodayMonth] - Todaydate) + Futuredate + Total + ((YearDifference - 1) * DaysofMonth[TodayMonth]);
      } else {
          Daysremaining = (DaysofMonth[TodayMonth] - Todaydate) + Futuredate + Total + ((YearDifference - 1) * DaysofMonth[TodayMonth]);
      }

      console.log(Daysremaining)

      const HoursInfo = (Daysremaining * 24) - Todayhour

      const MinutesInfo = (60 - TodayMinute)
  
      const SecondsInfo = (60 - TodaySecond)
  
      sethour(HoursInfo)
  
      setMinute(MinutesInfo)
  
      setsecond(SecondsInfo)
    }





  }




Setstart(true)
    
  
  
}

  return (
   <div className='container' >
     <div className="box">
      <h1>Future Date Countdown</h1>
      <input className="date-input" value={date} type="date" onChange={Collect} />
      <button className="calculate-btn" onClick={Calculate}>Calculate</button>
      {Pause ? <h2 className="countdown-text">{hour < 10 ? `0${hour}` : hour}:{minute < 10 ? `0${minute}` : minute}:{second < 10 ? `0${second}` : second}</h2> : <h2>Please choose a future date</h2>}
    </div>
   </div>
  )
}

export default App






