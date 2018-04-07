function songDecoder(song){
//defines or phrase to remove
//defined our string where our results will be concatenated
//defines avariable that holds our split version of the passed in string
//splitting the string allows us to traverse it with indexes
//passing in thr paameter remove  our variable into the split method
// allows us to use regex to remove our string specified in our variable when we split the string
//removing the specified string still leaves spaces gaining this knowledge we use it as our edge case
//iterates the string neglecting spaces and concatenates each letter into a string held in our original variable
//using the trim method on our string held in the original variable removes all trailing and preceeding spaces from our string
//we then return the string 
  var remove = "WUB";
  var original = '';
  var parts = song.split(remove);
  for (index = 0; index < parts.length; ++index) {
    if (parts[index] != ''){
      original = original + ' ' + parts[index];
    }
  }
  original = original.trim();
  return original;
}
