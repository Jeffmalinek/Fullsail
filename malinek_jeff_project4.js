//alert("JavaScript works!");

/*
 * Jeff Malinek
 * SDI 1303
 * Project 4
 *
 */

var myObjArray = {    //  temporary object/ array
    
    "name"     : "Me",
    "Hight"    : 6,
    "weight"   : 188,
    "shoesize": 12,
    "mass"     : function(){
        var totalMass = this.height * this.weight * this.shoesize;
        return totalMass;
    }
    
    
}

var myLibrary = function(){
    
    // NUMERIC FUNCTION
    var checkNumeric = function(val) {
        
        if (isNaN(val)){
            return false;
        } else {
            return true;
        }
    }
    
    // NAME FUNCTION ??   right now I'm just using a basis of what we went over the other day in goto
    var areYouJeff = function(val) {
        
        if (val === "Jeff") {
            return true;
        } else {
            return false;
        }
    }
    
    
    // STRING PATTERN 
    var checkString = function(val) {
        
        var strLen = val.length;
        for (var i = 0; i <= strLen ; i++) {
            if (val.substring(i, i+1) === "_"){
                return i;
            }
        }
        
    }
    
    return {
        "checkNumeric": checkNumeric,
        "areYouJeff": areYouJeff,
        "checkString": checkString
    }
    
}

var newLib = myLibrary();

console.log("checkNumeric: " + newLib.checkNumeric(1982));
console.log("areYouJeff: " + newLib.areYouJeff("Jeff"));
console.log("The dash is in position " + newLib.checkString("12-3456"));
