// Palindrome checker
function palindrome(str) {
    let tempWord = str.toLowerCase().match(/[a-z0-9]/g);

    return tempWord.join('') === tempWord.reverse().join();
  }
  
  palindrome("eye");
