const superbowlWin = (record) =>{
    
    const winning=  record.find(element =>element.result === 'W'  )
    console.log(winning)
    if (winning){
        return winning.year
    }
    else {
        return undefined
    }
   
    
} 

  