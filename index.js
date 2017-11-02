
function getFirstSelector(selector){
     return document.querySelector(selector);
}

function nestedTarget(){
    const target = document.getElementById("nested").querySelector("div.target")
    return target;
}

function increaseRankBy(n){
    const number = document.getElementById("app").querySelectorAll("ul.ranked-list li");
    for(let i = 0;i<number.length;i++){
      number[i].innerHTML = parseInt(number[i].innerHTML,10)+n;
    }
}

var grandNode = document.querySelector('#grand-node');
  var deepestNode = grandNode.children[0];
 for (var i = 0; !deepestNode.children[i]; i) {
   deepestNode = deepestNode.children[0]
 }
 return deepestNode;
}
