
const ajax = new XMLHttpRequest();
const content = document.createElement('div')
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json'
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json'

const container  = document.getElementById('root');
ajax.open('GET',NEWS_URL,false);
ajax.send()

const newsFeed = JSON.parse(ajax.response);
const ul = document.createElement('ul')
 
// ajax.open('GET',CONTENT_URL,false);
// ajax.send()
// const newsFeedDetali = JSON.parse(ajax.response);
// const div = document.createElement('div')

window.addEventListener('hashchange', function(){ 
  const id = location.hash.substring(1)
  ajax.open('GET',CONTENT_URL.replace('@id',id ),false)
  ajax.send();

  const newsContent = JSON.parse(ajax.response)
  const title = document.createElement('h1')


  title.innerHTML=newsContent.title
  content.appendChild(title)
  console.log(newsContent)
})

console.log(newsFeed)
for(let i = 0 ; i <10 ; i++ ){
  const li =document.createElement('li')
  const a = document.createElement('a')

  a.href=`#${newsFeed[i].id}`
  // a.href=``
  a.innerHTML = `${newsFeed[i].title} (${newsFeed[i].comments_count})`


  li.appendChild(a)
  ul.appendChild(li)
}
container.appendChild(ul);
container.appendChild(content);



/* 

const ul2 = document.createElement('ul')

let div1 = document.createElement('div')
div1.innerHTML="hi";
ul2.appendChild(div1)

div1 = document.createElement('div')
div1.innerHTML="hi2";
ul2.appendChild(div1)

div1 = document.createElement('div')
div1.innerHTML="hi3";
ul2.appendChild(div1)


container.appendChild(ul2);
*/