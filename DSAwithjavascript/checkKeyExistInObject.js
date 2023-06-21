let obj = {
    name: 'jogger',
    surname: 'pleri',
    class: '8th',
    age: '13'
  };
  
  let key = 'class';
  
  if (obj.hasOwnProperty(key)) {
    console.log(key + ' exists in obj');
  } else {
    console.log(key + ' does not exist in obj');
  }
  