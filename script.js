// 11th problem
function firstLast6(arr){
    return arr[arr.length - 1] == 6 || arr[0] == 6;
}

// 12th
function has23(arr){
    return (arr[0] == 2 || arr[0] == 3) || (arr[1] == 2 || arr[1] == 3);
}

// 13th
function fix23(arr){
    if (arr[0] == 2 && arr[1] == 3){
        arr[1] = 0;
    } else if (arr[1] == 2 && arr[2] == 3){
        arr[2] = 0;
    }
    return arr;
}

// 14th
function countYZ(str){
    var newStr = str.toLowerCase();
    var count = 0;
    for (var i = 0; i < newStr.length; i++){
        if ((newStr[i] == "y" || newStr[i] == "z") && (newStr[i + 1] == " " || i == newStr.length - 1)){
            count++;
        }
    }
    return count;
}

// 15th
function endOther(x, y){
    var newX = x.toLowerCase();
    var newY = y.toLowerCase();
    return newY.substring(newY.length - newX.length, newY.length) == newX || newX.substring(newX.length - newY.length, newX.length) == newY;
}

// 16th
function starOut(str){
    var newStr = "";
    for (var i = 0; i < str.length; i++){
        if (str.substring(i - 1, i) != "*" && str.substring(i, i + 1) != "*" && str.substring(i + 1, i + 2) != "*"){
            newStr += str.substring(i, i + 1);
        }
    }
    return newStr;
}

//17th
function getSandwich(str){
    var breadCount = 0;
    var newStr = "";
    for (var i = 0; i < str.length; i++){
        if (str.substring(i, i + 5) == "bread"){
            breadCount++;
        }
    }
    if (breadCount >= 2){
        newStr += str.substring(str.indexOf("bread") + 5, str.lastIndexOf("bread"));
    }
    return newStr;
}


// 18th
function canBalance(arr){
    var forward = 0;
    var backward = 0;
    if (arr.length == 1){
        return false;
    } else {
        for (var i = 0; i < arr.length; i++){
            forward += arr[i];
            for (var x = i + 1; x < arr.length; x++){
                backward += arr[x];
            }
            if (forward == backward){
                return true;
            }
            backward = 0;
        }
        return false;
    }
}

//19th
function countClumps(arr){
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == arr[i + 1]){
            while (arr[i] == arr[i + 1]){
                i++;
            }
            count++;
        }
    }
    return count;
}

// 20th
function evenlySpaced(x, y, z) {
    var max;
    var med;
    var min;
    if (x == y && y == z){
        return true;
    } else {
        if (x > y && x > z){
            max = x;
            if (y > z){
                med = y;
                min = z;
            } else {
                med = z;
                min = y;
            }
        } else if (y > x && y > z){
            max = y;
            if (x > z){
                med = x;
                min = z;
            } else {
                med = z;
                min = x;
            }
        } else if (z > x && z > y){
            max = z;
            if (x > y){
                med = x;
                min = y;
            } else {
                med = y;
                min = x;
            }
        }
    }
    return Math.abs(med - min) == Math.abs(max - med);
}
