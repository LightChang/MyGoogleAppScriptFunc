function guid() {
  var d = Date.now();
  return 'xxxxxxxx-0430-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c){
    var r = (d + Math.random() * 16) % 16 | 0;
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}
