var car = 
{
    make: "Honda",
    model: "Fit",
    year: 2012,
    a : {
        b : {
            value : '1234'
        }
    },
    honk: function() { alert("Beep beep"); },
    driver: { name: "Alex", license: "CA" }
};
 
console.log(car.a.b.value);