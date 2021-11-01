// I wanted to test its coming back with a 200 Response first
pm.test("Status code is 200", () => {
  pm.expect(pm.response.code).to.eql(200);
});

pm.test("Verifiying for 22nd March 2020 at 22:05 that totalInfected = 5683, dailyConfirmed > 700, England > 4000", function () {
    var responseJson = pm.response.json();

    console.log("Found " + responseJson.length + " Rows");

    // This is the date specified to find in the technical test
    dateToFind = "2020-03-22T22:05:00.000Z"

    // Im setting a variable to count how many times I found it.
    found = 0;

    // We will loop through the data to find the time and then check if the data is correct
    for(var i = 0; i < responseJson.length; i++)
    {

        // If we find the date then happy days
        if(responseJson[i].lastUpdatedAtApify == dateToFind)
        {
            console.log("Found the correct date");
                pm.expect(responseJson[i].totalInfected).to.eql(5683);

                // The below expect fails the test in the data
                // I presume this was a trick question to check my tests are right? In the JSON data for 2020-03-22T22:05:00.000Z the dailyConfirmed is 665
                pm.expect(responseJson[i].dailyConfirmed).to.be.above(700);
                pm.expect(responseJson[i].England).to.be.above(4000);

                // I found the date
                found++;
        }
    }

    // If this is 0 it will be false and fail, if its greater than 0 then we found it and don't need to fail here.
    if(!found){
        pm.expect.fail("The date " + dateToFind + " was not found in the JSON");
    }


});
