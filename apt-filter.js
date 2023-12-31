const must = (radio) => radio.filter(rb => rb.checked).length

const findRelevantApts = function (address, minPrice, maxPrice, minRooms, maxRooms, immediate, parking) {
    let relevantApts = apartments.filter(a =>
        a.address.toLowerCase().includes(address.toLowerCase() || "") &&
        a.price >= (minPrice || 0) &&
        a.price <= (maxPrice || a.price) &&
        a.rooms >= (minRooms || 0) &&
        a.rooms <= (maxRooms || a.rooms)
    )

    immediate = !immediate[0].checked
    parking = !parking[0].checked
    if(immediate && parking){
        return relevantApts
    }
    if (!immediate && !parking){
        return relevantApts.filter(a => (a.immediate) && (a.parking)) 
    }
    if(!immediate){
        return relevantApts.filter(a => (a.immediate)) 
    }
    if(!parking){
        return relevantApts.filter(a => (a.parking)) 
    }
}