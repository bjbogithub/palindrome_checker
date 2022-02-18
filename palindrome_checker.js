function palindrome(str) {
    // Adding the parameter str to a new const while we use the methods toLowerCase
    // and match checking by using regex and modifier 'g' which perform a global match on a-z letters and 0-9 numbers
    const alphanumericOnly = str.toLowerCase().match(/[a-z0-9]/g); 
        
    //  return if they are equal and also using join to remove spacing in the words.
    return alphanumericOnly.join('') ===
        alphanumericOnly.reverse().join('');
}

palindrome("eye");