// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1, num2){
  if (num1 >  num2)
    return num1;
  return num2;
}


// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words){
  if(words.length == 0)
    return null;
  var count=0;
  var ans="";
  for(var i=0;i<words.length;i++){
    if(words[i].length > count){
      count=words[i].length;
      ans=words[i];
    }
  }
  return ans;
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice (numbers){
  var sum=0;
  for(var i=0;i<numbers.length;i++)
    sum=sum+numbers[i];
  return sum;
}

//Bonus #3.1
const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];

function add (mixedArr){
  if(mixedArr.length == 0)
    return 0;
  var sum=0
  for(var i=0;i<mixedArr.length;i++){
    if(typeof(mixedArr[i] )== 'number')
      sum +=mixedArr[i];
    else if(typeof(mixedArr[i]) == "string")
      sum += mixedArr[i].length
    else if(typeof(mixedArr[i]) == "boolean")
      sum += Number(mixedArr[i])
      else {
        throw new Error("Unsupported data type sir or ma'am")
      }
  }
  return sum;
}


// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(numbersAvg){
  if(numbersAvg.length == 0)
    return null
  sum=add(numbersAvg);
  return sum/numbersAvg.length;
}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr){
  if(wordsArr.length == 0)
    return null;
  sum=add(wordsArr);
  return sum/wordsArr.length;
}

//Bonus 4.3

function avg(arr){
  if(arr.length == 0)
    return null;
  sum=add(arr);
  return parseFloat((sum/arr.length).toFixed(2));
}


// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

function uniqueArray(wordsUnique){
  if(wordsUnique.length == 0)
    return null
  ans= []
  for(var i=0;i<wordsUnique.length;i++){
    if(ans.indexOf(wordsUnique[i]) == -1)
      ans.push(wordsUnique[i]);
  }
  return ans;
}


// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function searchElement (wordsFind,key){
  if(wordsFind.length == 0)
    return null;
  for(var i=0;i<wordsFind.length;i++){
    if(wordsFind[i] == key)
      return true;
  }
  return false;
}



// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimesElementRepeated (wordsCount,key){
  var count=0
  if(wordsCount.length == 0)
    return 0;
  for(var i=0;i<wordsCount.length;i++){
    if(wordsCount[i] == key)
      count=count+1;
  }
  return count;
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];

function maximumProduct(matrix){
  max = 0
  for(var i=0;i<matrix.length;i++){ 
    for (var j=0;j<matrix[i].length;j++){
      if ((j - 3) >= 0){
        res = (matrix[i][j] * matrix[i][j - 1] * matrix[i][j - 2] * matrix[i][j - 3])
        if (max < res)
          max = res
      }
      if ((i - 3) >= 0) {
        res = (matrix[i][j] * matrix[i - 1][j] * matrix[i - 2][j] * matrix[i - 3][j])
        if (max < res)
          max = res
      }
    }
  }
  return max;
}


//Bonus 8.1

function maximumProductOfDiagonals(matrix){
  max = 0
  for(var i=0;i<matrix.length;i++){ 
    for (var j=0;j<matrix[i].length;j++){
      if ((i - 3) >= 0 && (j - 3) >= 0){
        res = (matrix[i][j] * matrix[i - 1][j - 1] * matrix[i - 2][j - 2] * matrix[i - 3][j - 3])
        if (max < res)
          max = res
      }
      if ((i - 3) >= 0 && (j - 1) <= 0){
        res = (matrix[i][j] * matrix[i - 1][j + 1] * matrix[i - 2][j + 2] * matrix[i - 3][j + 3])
        if (max < res)
          max = res
      }
    }
  }
  return max;
}