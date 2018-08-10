

// let todos = ["Buy New Turtle"];

// let input = prompt('What would you like to do?');

// while(input !== "quit"){
//     //handle input
//     if(input === "list") {
//         console.log("**************");
//        todos.forEach(function(todo,i){
//                console.log(i + ": " + todo);   
//        });
//         console.log("**************");
//     } else if(input === "new") {
//         //ask for new todo
//         let newTodo = prompt("Enter new Todo");
//         //add to todos array
//         todos.push(newTodo);
//         console.log("Added todo")
//         }else if(input === "delete"){
//             // ask for index of todo to be deleted
//             let index = prompt("Enter index of todo to delete");
//             // delete that todo
//             //splice
//             todos.splice(index,1)
//             console.log("Deleted Todo");
//         }
//         //ask again for new input
//         input = prompt("What would you like to do?")
//     }
// console.log("Ok, you quit the app");

// let colors = ["red","orange", "yellow", "green"];
// const newArray = colors.forEach(element => {
//         console.log("These are the colors that you like " + element);
  

//     return colors;

// });



// function numbersDivisible(iStage){
//     var iStage = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     var newStage =[];
//     for (var i = 0; i < iStage.length; i++) {
//         if (iStage[i] % 3 === 0) {
//            newStage.push(iStage[i])
//            console.log("These Numbers are % by three " + iStage[i])
//         } 
//     }
//     return newStage;
// }

// numbersDivisible()

// var n = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const index = n.forEach(function(n) {
//     if(n % 3 === 0){
//         console.log("forEach loop "+ n)
//     }
// });

// function iLoveThree() {
//     var array = [1,2,3,4];
//     var threes = [];
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] % 3 == 0) {
//             threes.push(array[i]);
//         }
//     }
//     return threes;
    
// }

// iLoveThree();


// var nums = [45,65,77,34];

// nums.forEach(function(num){
//     console.log(num)
// })

// function myForEach(arr, func){
//     //Loop through array
//     for(let i = 0; i < arr.length; i++){
//     // call func for each item in array
//     func(arr[i]);
//     }
// }
// var colors = ["red", "orange","yellow"];
// myForEach(colors,alert);\



// var dog = {
//     name: 'Rusty',
//     breed: 'Mutt',
//     age: 3
// }
// console.log(dog);

// var posts = [
//     {
//         title: 'Cats are mediocre',
//         author: 'Colt',
//         comments: ['Awesome post', 'terrible post']
//     },
//     {
//         title: 'Cats are actually awesome',
//         author: 'Cat Luvr',
//         comments: ["<3", "Go to hell I hate You"]
//     }
// ];
// var newPosts = posts.map(function(post){
//     return post.comments[0];

// });

// console.log(newPosts);

var movies = [
    {
    title: "In Bruges", 
    hasWatched: true, 
    rating: 5.0
    },
    {
    title: "Frozen",
    hasWatched: true,
    rating: 4.5
    },
    {
    title: "2pac",
    hasWatched: false,
    rating: 4.5
    }
];

console.log(movies);

var moviesList = movies.forEach(function(movie){
    var result = "You have ";
    if (movie.hasWatched){
        result += "watched ";
    }else{
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    console.log(result);
});

let comments = {};

comments.data = ['Good Job','Bye', 'Lame...'];

function print(arr){
    arr.forEach(el => {
        console.log(el);
    });
}
print(comments.data);