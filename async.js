// Memory heap
const a=9
const s=9
const r=9
const f=9
const t=9

// call stack
console.log(1)
console.log(4)
console.log(6)

const one=()=>{
    const two=()=>{
console.log(3)
    }
    two()
}
one()
// Stackoverflow
function b(){
    b()
}
b()

// Promises
const promise=new Promise((resolve, reject)=>{

if(true) {
       resolve('stuff worked')
}else{
    reject('Error, it broke')
}
})
 const promise2=new Promise((resolve, reject)=>{
     setTimeout(resolve, 100, 'Hii')
 })
 const promise3=new Promise((resolve, reject)=>{
    setTimeout(resolve, 1000, 'Pookie')
})
const promise4=new Promise((resolve, reject)=>{
    setTimeout(resolve, 5000, 'How bad do you feel')
})

Promise.all([promise2,promise2,promise4]).then(values=>{
    console.log(values)
})
promise.then(result=>result + "!").catch(err=>console.log(err)).then(result2=>result2 + '?').catch(err=>console.log(err)).then(result3=>console.log(result3))

const urls=[
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url=>{
    return fetch(url).then(response=> response.json())
})).then(results=>{
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(err=>console.log(err
    ))

    // Es8
    async function playerStart(){
        const firstMove=await movePlayer(100, 'left')
        await movePlayer(400,'left')
        await movePlayer(500,'right')
        await movePlayer(900,'left')
        await movePlayer(400,'right')

    }

    function movePlayer(num, position){
        return
    }

    // Synthatic sugar
    async function fetchUser(){

      const resp= await fetch( 'https://jsonplaceholder.typicode.com/users')
      const data =await resp.json()
      console.log(data)  
    }
    fetchUser()

    const getData=async function(){ 
        try {
            const [users, post, albums]=await Promise.all(urls.map(url=>fetch(url).then(resp=>resp.json())))
            users.forEach(user=>console.log(user))
    } catch (error) {
        console.log(error, 'Ooops')
    }
       
    }

    // ES20
    const animals={
        tiger:23,
        lion:34,
        monkey:4,
        bird:49
    }
   

    function objectSpread(p1,p2,p3){
        console.log(p1)
        console.log(p2)
        console.log(p3)
    }
    const {...tiger, ...lion, ...rest}=animals
    objectSpread(tiger, lion,rest)
    
    // For await of
     const loopThroughUrl=url=>{
         for(url of urls){
             console.log(url)
         }
     }
     loopThroughUrl(urls)

     const getData2=async function(){
         const arrayOfPromises=urls.map(url=>{
             fetch(url)
         })
         for await(let request of arrayOfPromises){
             const data= await request.json()
             console.log(data)
         }
     }

     const promisify=(item, delay)=>{
         new Promise((resolve)=>setTimeout(()=>resolve(item), delay))
     }
     const a=()=>promisify('a', 100)
     const b=()=>promisify('b', 5000)
     const c=()=>promisify('c', 3000)

     async function parallel(){
         const promises=[a(), b(), c()]
         const [output1, output2, output3] =await Promise.all(promises)
         return `Parallel is done ${output1} ${output2} ${output3}`
     }
     parallel.then(()=>console.log())


     const p1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("A"), Math.floor(Math.random() * 1000));
      });
      const p2 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("B"), Math.floor(Math.random() * 1000));
      });
      const p3 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("C"), Math.floor(Math.random() * 1000));
      });
      (async function () {
        const result = await Promise.any([p1, p2, p3]);
        console.log(result); // Prints "A", "B" or "C"
      })();

      var worker=new Worker('worker.js')
      worker.postMessage('hello')

      addEventListener('message')