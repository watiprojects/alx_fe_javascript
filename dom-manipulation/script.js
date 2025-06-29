/*
Write a JavaScript file (script.js) that handles the creation and manipulation of DOM elements based on user interactions.
Manage an array of quote objects where each quote has a text and a category. Implement functions to display a random quote and to add new quotes called showRandomQuote and createAddQuoteForm` respectively
*/
//get quotes from local storage, if any
const storedQuotes = localStorage.getItem("quotes");

let quotes = [];

//parse stored quotes into an object from a string
const parsedQuotes = JSON.parse(storedQuotes);

console.log[parsedQuotes];

//if stored quotes is not empty then use it as the quotes array, if not set the default quotes

if (storedQuotes !== null){
    quotes = parsedQuotes;
} else {
    //create array of quotes
    quotes = [
    {text: "quote1 - author1", category: "cat1"},
    {text: "quote2 - author2", category: "cat2"},
    {text: "quote3 - author3", category: "cat1"},
    {text: "quote4 - author4", category: "cat3"},
]
}
console.log(quotes);


//select quoteDisplay div
    const quoteDisplayDiv = document.getElementById("quoteDisplay");

//when button is clicked, display a random quote
    //select button
const button = document.getElementById("newQuote");
    //add event listener to button
button.addEventListener("click",showRandomQuote);
    //create showRandomQuote function
function showRandomQuote () {

    // clear previous quote
    quoteDisplayDiv.innerHTML = "";
    //generate random index which is less than the array length
    const randomIndex = Math.floor(Math.random()*quotes.length)
    //display random quote in quoteDisplayDiv
        //generate random quote using current randomIndex
        randomQuote = quotes[randomIndex].text;
        //generate corresponding quote category
        randomQuoteCategory = quotes[randomIndex].category

        //create a p element for the quote
        let quoteParagraph = document.createElement("p");
        //set the text content of the p element to the randomQuote
        quoteParagraph.textContent = quotes[randomIndex].text;
        

        //create a p element for the category
        let categoryParagraph = document.createElement("p");
        //set the text content of the p element to the randomQuote
        categoryParagraph.textContent = quotes[randomIndex].category;

    //Display quote and category
        //add to quoteDisplayDiv
        quoteDisplayDiv.appendChild(quoteParagraph);
        //add to quoteDisplayDiv
        quoteDisplayDiv.appendChild(categoryParagraph);


    //create latestQuote object
    let latestQuote = {quote: randomQuote, category: randomQuoteCategory};

    //practice using session storage 
    //save latest quote
    sessionStorage.setItem("latestQuoteStored", JSON.stringify(latestQuote));
    console.log(latestQuote);

}


function saveQuotes ()
{
    //save quotes to local storage
    //turn array into a string
    const jsonString = JSON.stringify(quotes);
    localStorage.setItem("quotes", jsonString)
    console.log(localStorage.quotes);
}

//ADD QUOTE FEATURE
//get inputs from user
    const newQuoteText = document.getElementById("newQuoteText");
    const newQuoteCategory = document.getElementById("newQuoteCategory");

    const newQuoteTextInput = newQuoteText.value;
    const newQuoteCategoryInput = newQuoteCategory.value;

    //create addQuote function
function addQuote() {
    
    //add quote if either quote or category input is not empty
    if (newQuoteTextInput !== "" || newQuoteCategoryInput !== ""){
   
    //add newQuote text and category to array. 
    quotes.push({text: newQuoteTextInput, category: newQuoteCategoryInput});

    saveQuotes();

    //clear input fields
    newQuoteText.value = "";
    newQuoteCategory.value = "";
    }
}


//====Export quotes feature====//
const downloadBtn = document.getElementById("download");

//turn quotes into a string
const quotesString = JSON.stringify(quotes);

//create Blob - downloadable file - which is a JSON string
const blob = new Blob([quotesString], {type:"application/json"})

downloadBtn.addEventListener("click", function ()
{
    const url = URL.createObjectURL(blob);
const link = document.createElement("a");
//set the href of the new link item
link.href = url;
//set download attribute on the new link and name the file
link.download = "quotes.json";
//programatically click the link - as if the user clicked it
link.click();

//clear temporary blob URL
URL.revokeObjectURL(url);
})

//====Import quotes feature====//
function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
      const importedQuotes = JSON.parse(event.target.result);
      quotes.push(...importedQuotes);
      saveQuotes();
      alert('Quotes imported successfully!');
    };
    fileReader.readAsText(event.target.files[0]);
  }

  //====Select Quote Category Feature====//

  //select category filter
  const categoryFilter = document.getElementById("categoryFilter");


function populateCategories (){
    //create an array of just the categories
    const categories = quotes.map(quote => quote.category);

    console.log (categories);
    categories.forEach (function(category){
        //create a new option element
        const newCategoryOption = document.createElement("option");
        //edit the option element
        newCategoryOption.value = category;
        newCategoryOption.innerHTML = category;

        //append categories to category filter
        categoryFilter.appendChild(newCategoryOption);
    });
        
};

populateCategories();

//Filter Quotes functionality
function filterQuotes (){
    //if a filter is selected
    //display quotes in that category
    
}






    





