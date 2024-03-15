// ============Merge 2 duplicate array and sort===========

const removeDup = (arr) => {
  let uniq_arr = [];
  for (let i = 0; i < arr.length; i++) {
    let isUniq = false;
    let element = arr[i];
    // debugger
    for (let j = 0; j < uniq_arr.length; j++) {
      if (element === uniq_arr[j]) {
        isUniq = true;
        break;
      }
    }
    if (!isUniq) {
      uniq_arr.push(element);
    }
  }
  return uniq_arr;
};

const sortDup = (newArr) => {
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; newArr.length - i; j++) {
      if (newArr[j] > newArr[j + 1]) {
        // [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
        let temp = newArr[j];
        newArr[j] = newArr[j + 1];
        newArr[j + 1] = temp;
      }
    }
  }
  return newArr;
};
var Arr_A = ['Ramesh', 'Suresh', 'Deepak', 'Suresh', 'Gopi'];
var Arr_B = ['Gopi', 'vendeesh', 'Deepak', 'Vedneesh'];
var arr = [...Arr_A, ...Arr_B];
var newArr = removeDup(arr);
console.log(sortDup(newArr));
