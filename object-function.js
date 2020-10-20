let myBook = {
    title:'Ice age',
    author:'Andrew bake',
    pageCount:232
}

let otherBook = {
    title:'Ninja turtles',
    author:'James Franklen',
    pageCount:736
}

let summeryOfBooks = function(book){
    return {
        description:`${book.title} is written by ${book.author}`,
        pages:`${book.title} has ${book.pageCount} pages`
    }
}

let myBookSummery = summeryOfBooks(myBook)
let OtherBookSummery = summeryOfBooks(otherBook)

console.log(myBookSummery)
console.log(OtherBookSummery)

