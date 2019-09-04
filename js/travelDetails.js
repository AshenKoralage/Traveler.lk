function galle(city,places,specNumbers,transport) {
    this.city=city;
    this.places=places;
    this.specNumbers=specNumbers;
    this.transport=transport;
}
var travelDetails=[
    new galle("Galle","Hikkaduwa\nGalle Fort,Unawatuna \n" +
        "Jungle Beach ," +
        "Japanese Peace Pagoda\n"+
        "Kosgoda ," +
        "Ahungalla Beach\nMaduganga","Police Station :\n 119 \nHospitals :\n Karapitiya (118)\n Ruhunu Hospital (911)" ," Galle Taxi :\n +94 912 246 246 \n Lotus Cabs :\n091-7223223" )


];
$(document).ready(function () {
    for(var i=0; i<travelDetails.length; i++){
        $("#city").append("<option>"+travelDetails[i].city+"</option>");
    }
    $("#city").change(function () {
        var x=$(this).val();
        for (var i = 0; i < travelDetails.length; i++) {
            if(travelDetails[i].city==x){
                $('#exampleFormControlTextarea1').val(travelDetails[i].places);
                $('#exampleFormControlTextarea12').val(travelDetails[i].specNumbers);
                $('#exampleFormControlTextarea13').val(travelDetails[i].transport);
            }
        }
    })
});