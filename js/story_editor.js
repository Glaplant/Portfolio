function loadStory(){
    var storyName = document.querySelector("#name_input").value
    var storyHTML = localStorage.getItem("storyName")
    document.querySelector("#story_editor").value = storyHTML
    }

function saveStory(){
    var storyName = document.querySelector("#name_input").value
    var storyHTML = document.querySelector("#story_editor").value
    localStorage.setItem(storyName, storyHTML)
    
}

function displayStory(){
    var storyName = document.querySelector("#name_input").value
    var storyHTML = document.querySelector("#story_editor").value
    var story = document.querySelector("#story_display");
    var h2 = document.createElement('h2');
    var p = document.createElement('p');
    story.appendChild(h2);
    story.appendChild(p);
    document.querySelector("#story_display>h2").innerHTML = storyName
    document.querySelector("#story_display>p").innerHTML = storyHTML

    
    if(story.style.display === "none"){
        story.style.display = "block";
    }
    else{
        story.style.display = "none";
    }
}


  
//     var section = document.querySelector('');

// let arrayLength = weeks.length;
// for(i=0;i<arrayLength;i++){
// var li = document.createElement('li');
// var a = document.createElement('a');
// var week = i+1;
// a.textContent = 'Week 0'+ week;
// ol.appendChild(li);
// li.appendChild(a);
// li.style.listStyle= "none";
// li.classList.add("main_links" , "wk_links");
// a.href='views/'+ weeks[i] +'.html';
// }