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