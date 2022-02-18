function palindrome() {
    // Adding the parameter str to a new const while we use the methods toLowerCase
    // and match checking by using regex and modifier 'g' which perform a global match on a-z letters and 0-9 numbers
    var str = document.getElementById("input").value;
    const alphanumericOnly = str.toLowerCase().match(/[a-z0-9]/g); 
    // check if they are equal and also using join to remove spacing in the words.
    // If they are equal send output to the html documtent, else send different output to html document.
    if(alphanumericOnly.join('') === alphanumericOnly.reverse().join('')) {
        var palindrome_answer = "It's a palindrome!";
        document.getElementById('output').innerHTML = palindrome_answer;
    } else {
        var palindrome_answer2 = "It's not a palindrome!"
        document.getElementById('output').innerHTML = palindrome_answer2;
    }
}