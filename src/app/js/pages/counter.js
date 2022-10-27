import {React, useState} from "react";

const Counter =()=>{
    const [counter, setCounter]= useState({start: 0, disabled: false});
    const incOnClick = ()=>{
        setCounter({start: counter.start + 1, disabled: false});
    }
    const decOnClick = ()=>{
        if(counter.start>=1){
            setCounter({start:counter.start - 1, disabled: false})
        } else {
            setCounter({start:counter.start, disabled: true})
        }
    }

    /*Longest word find from string*/
/*       const logestWord =(str)=>{
            let words = str.split(" ");
            let longword = 0;
            let longWord ;
            for(let i = 0; i <words.length; i++){
                if(longword < words[i].length){
                    longword = words[i].length;
                    longWord = words[i];
                }
            }
            return longWord;
        }
      console.log("logestWord",logestWord("sfsdahf shjksdh fkjsdhfkj hsdkjfhdskjf hsdkjfhdskjfhk asdfs a"))*/



/*    const lognestWords2 = (str)=>{
           let word = str.split(" ");
           let long = 0;
           let longword ;
           for(let i=0; i<word.length; i++){
               if(long<word[i].length){
                   long = word[i].length;
                   longword = word[i]
               }
           }
           return longword;

    }
    console.log("logest word new", lognestWords2("sdfdssdf, fs,sfew, were, wr ew, rwe, r ew"))*/

/*
    function longWord(string) {
        let str = string.split(" ");
        let longest = 0;
        let word;
        str.forEach(function (str) {
            if (longest < str.length) {
                longest = str.length;
                word = str;
            }
        });
        return word;
    }
    console.log(
        longWord("sfsdahf shjksdh fkjsdhfkj hsdkjfhdskjf hsdkjfhdskjfhk asdfs a")
    );
*/




    // revers string method
/*        const reverseAlphBate = (string)=>{
            let revers = [...string].reverse().join();
            let reversFinal = revers.replaceAll("," , "")
            return reversFinal;
        }

    console.log("Nw ", reverseAlphBate("the quick fox jumps over lazy little dog"))*/

/*    function reverseString(str) {
        return str.split("").reverse().join("");
    }

    console.log(reverseString("the quick fox jumps over lazy little dog"));*/

/*    function revstr(str) {
        let str1 = "";
        for (let i = str.length - 1; i >= 0; i--) {
            str1 += str[i];
        }
        return str1;
    }
    console.log(revstr("the quick fox jumps over lazy little dog"));*/


    // revers word by word not hole string

    /*    const reverseWord = (string)=>{
            let words = string.split(" ");
            let counter = "";
            for(let i = 0; i <words.length;i++){
               counter += words[i].split("").reverse().join() + " ";
            }
            return counter.replaceAll(",","")
        }*/
    /*console.log(reverseWord("the quick fox"))*/


    /*replace characters except last with the specified mask character like 12345  to ####5*/
    /*    const maskCharacter =(str,mask,n=1)=>{
            let numb = typeof str == "number" ? str.toString() : str;
            console.log("DSfsd", numb);
            let charater = numb.slice(0, -n).replaceAll(/./g, mask)
          return (
              charater + numb.slice(-n)
          )
        }*/

    /*console.log("Phone Number", maskCharacter(9910277360,'#',3))*/

    /*    const bigbig = (str)=>{
           let words= str.split(" ");
            let counter = 0;
            let word = "";
            for(let i=0; i<words.length; i++){
                if(counter<words[i].length){
                    counter = words[i].length;
                    word = words[i];
                }
            }
            return word;
        }*/
    /*    console.log("bigDady", bigbig("abc def fgh ijk"))*/


    /*const wizard = {
        Name:'Merlin',
        health:50,
        heal(obj1,obj2) {
                return this.health += obj1 + obj2;
            }
        }
    const archer = {
        Name:'Robin',
        health : 30,
    }*/

    /*console.log("wizard", wizard.heal.call(archer));*/
    /*console.log("wizard", wizard.heal.call(archer, 50, 40));*/
    /*console.log("wizard", wizard.heal.apply(archer, [50, 40]));
    console.log("archer", archer);*/



    /*Chatpeter 63 Function are object */
    /*Chatpeter 64 First Class Citizens  */
    /*var stuff = function (){}

    function ab(fn){
        fn()
    }

    ab(function (){console.log("hi there")})


    function bc(){
        return function c(){console.log('buyaaaaaaa')}
    }
    var d = bc()

        d()*/

    /*Chatpeter 64 High Order Function */




    /*Bind method*/
    /*    const character = {
            name: 'Simon',
            getCharacter() {
                return this.name;
            }
        };*/
    /*    const giveMeTheCharacterNOW = character.getCharacter.bind(character);

        console.log('?', character.getCharacter());
        console.log('?', giveMeTheCharacterNOW());

        let a = 5;
        console.log(a++);
        console.log(++a);*/

    /*  function amount (p,r,t){
          return p*(Math.pow(1+r),t)
      }
      console.log(amount(5000,.20,5))*/


    /*    const array = [1,2,3,4];
        for(let i= 0; i<array.length; i++){
                setTimeout(()=>{
                    console.log("dddddddd", i);
                }, 3000)
        }*/

    /*    function a(){
            let parent = "grand pa"
            return function b(){
                let father = "father"
                return function c(){
                    let son = "son"
                    return console.log(`${parent} ${father} ${son}`)
                }
            }
        }
        const xyz = a();
        const xxx = xyz();
        xxx();*/

    /*    var i = 10;
        function xyx (){
            var i = 20;
            console.log("dsfds", i);
        }
        xyx()*/


    /*    let dragon = {
            name:"vinay",
            fire:true,
            fight(){
                return 5
            },
            sing(){
                if(this.fire){
                    return `I am ${this.name} the breather of fire`
                }
            }
        }

        let lizard = {
            name: 'kiki',
            fight(){
                return 1
            }
        }
        lizard.__proto__= dragon;
        //const singLizard = dragon.sing.bind(lizard)
        console.log(lizard.sing());
        console.log(dragon.isPrototypeOf(lizard))
        console.log(lizard.isPrototypeOf(dragon))*/


    /*    function multiply5(num){
            return 5*num
        }

        console.log(multiply5(10))*/
    /*
    Date.prototype.lastYear = function (){
        return this.getFullYear() - 1
    }

    console.log(new Date().lastYear())
    */



    /*    function plusMinus(arr) {
            let positive = 0;
            let negative = 0;
            let zero = 0;

            arr.forEach((i)=>{
                if(i === 0 ){
                    zero++
                }else if(i >=1){
                    positive++
                }else{
                    negative++
                }
            })

            positive/=arr.length
            negative/=arr.length
            zero/=arr.length
            console.log(arr.length)
            console.log(positive.toFixed(6) + '\n' + negative.toFixed(6) + '\n'+ zero.toFixed(6))
        }

        plusMinus([1,1,0,-1,-1])*/


    /*    function plusMinus(arr) {
            let min =Math.min(...arr);
            let max = Math.max(...arr);
            let sum = arr.reduce((a, b)=>{ return a + b}, 0)
            let minTotal = sum - max;
            let maxTotal = sum - min;
            console.log(minTotal + ' ' + maxTotal)
        }

        plusMinus([1,2,3,4,5])*/

    /*    function timeConversion(s){
                let amPmValue = s.slice(-2);
                let hourValue = s.slice(0, 2);
                let newHour = "";
                let Rtime = s.slice(2, 8);
                if(amPmValue === "PM"){
                    newHour = parseInt(hourValue) + 12;
                    if(hourValue === "12"){
                        newHour = "12"
                    }
                }else{
                    if(hourValue === "12"){
                        newHour = "00"
                    }
                }
                let NewTime = newHour + Rtime;
            return NewTime
        }

        timeConversion('12:05:45PM');*/

    /* function xxx(s){
         return (s || '').split(':').reduce((target, item, index) => {
             item = !index
                 ?
                 ((s || '').includes('PM')
                         ? (+item < 12 ? `${+item + 12}` : item)
                         : (+item < 12 ? item : '00')
                 )
                 :
                 item.replace(/PM|AM/gi, '');

             target.push(item);

             return target;
         }, []).join(':');
     }*/

    /*    function timeConversion(s){
            let oldHour = s.slice(0,2);
            let amPm = s.slice(-2);
            let minSec = s.slice(2,8);
            let newHour = "";
            //console.log(oldHour,amPm,minSec);
            if(amPm === 'PM'){
                newHour = parseInt(oldHour) + 12;
                if(oldHour ==='12'){
                    newHour = '12';
                }
            }else {
                if(oldHour ==='12'){
                    newHour = '00';
                }
            }

            let newTime = newHour + minSec;
            //console.log("zsc",newTime);
            return newTime;
        }
        timeConversion('04:12:15PM')*/


    /*    function breakingRecords(scores) {
            let minRecord  = 0;
            let maxRecord  = 0;
            let min  = scores[0]; //10
            let max  = scores[0]; //10
            for(const score of scores){
                if(max<score){
                    maxRecord++
                    max = score
                }else if(score < min){
                    minRecord++
                    min = score
                }
            }
            console.log("sdfsafs", maxRecord, minRecord);
            return [maxRecord, minRecord];

        }

        breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]);*/

    /*    function xyz(x){
            let i = 0;
            //let k = 0;
    /!*        for(var i =0; i<x; i++){
               setTimeout(()=>{
                    i = k
                    console.log("SDfs", k)
               }, 1000)
            }*!/
            if(i<x){
                setTimeout (()=>{
                    i = i++
                    console.log("data", i++);
                    xyz()
                },1000)

            } return

        }

        xyz(10)*/

    /*
    const attackEft = {
            attack(){
                return 'attack with '+ this.weapon;
            }
        }

      function createElf (name, weapon){
        let newAttack = Object.create(attackEft);
            newAttack.name = name;
            newAttack.weapon = weapon;
            console.log(newAttack)
            return newAttack
        }
        const peter = createElf('Peter', 'stons');
                //peter.attack = attackEft.attack;
                console.log(peter.attack());

                const sam = createElf('sam', 'fir');
                //sam.attack = attackEft.attack
                console.log(sam.attack());
    */

    /*    function processData(input) {
            let inputs = input.split("\r\n");

            for(const anArray of inputs){
                let inputArray = anArray.split(";")
                console.log('inputArray',inputArray);

                if(inputArray[0]=='S'){

                }
            }
        }

    processData('S;V;iPad');*/

    /*
        function divisibleSumPairs(n, k, ar) {
            let counter = 0;
            for(let i = 0; i < n; i++){
                console.log(ar.slice(i+1))
                ar.slice(i + 1).filter((item)=>{
                    if((item + ar[i])%k===0){
                        counter++
                    }
                })
            }
            console.log(counter)
            return counter

        }
        divisibleSumPairs(6,3, [1, 3, 2, 6, 1, 2]);*/

/*    function duplicate(){
        const counts = {};
        const sampleArray = ['a', 'a', 'b', 'c'];
        sampleArray.forEach( (x) =>{
            return (
                counts[x] = (counts[x] || 0) + 1
            )

        });
        console.log(counts)
    }
    duplicate();*/

/*    function matchingStrings(strings, queries) {
        let strArray = strings.split(" ");
        let qerArray = queries.split(" ");
        let newArray = []
        //console.log(strArray);
        // console.log(qerArray);
        //const filteredArray = strArray.filter(value => qerArray.includes(value));
        for(let i =0; i<qerArray.length; i++){
            if(strArray.includes(qerArray[i])){
                console.log(strArray.includes(qerArray[i]))
                newArray.push(qerArray[i]);
                console.log(newArray)
            }else {
                newArray += qerArray[i].length +',';
            }
        }
        //console.log(filteredArray)
    }*/

    //matchingStrings('ab ab abc bc', 'bc ab abc cd');


    /*    function recursiveMethod (number){
            //let i =0;
            //let counter = 0;
            for(var i = 0; i<number; i++){
                setTimeout(()=>{
                    console.log("counter", i);
                },1000)
            }

        }
        recursiveMethod(10)*/


    /*
        function lonelyinteger(a) {
            let unique = a.filter(function(value){
                console.log("value", a.indexOf(value));
                console.log("value2", a.lastIndexOf(value));

                return a.indexOf(value) === a.lastIndexOf(value)
            })
            console.log("unique[0]",unique);
            return unique[0];

        }

        lonelyinteger([1,2,3,4,5,3,2,1]);
    */



/*    const user = {
        name:"kim",
        active:true,
        cart:[],
        purchases:[]
    }

    let amazonHistory = [];
    const compose = (f,g)=>(...args)=>g(f(...args));

    purchaseItem(
        emptyCart,
        buyItem,
        applyTaxToItem,
        addItemToCard
    )(user,{name:"laptop", price:35000});


    function purchaseItem(...fns){
        amazonHistory.push(user);
        return fns.reduce(compose);
    }


    function addItemToCard(user, item){
        amazonHistory.push(user);
        const updateCart = user.cart.concat(item);
        return Object.assign({},user,{cart:updateCart})
    }
    function applyTaxToItem(user){
        amazonHistory.push(user);
        const {cart} = user;
        const taxRate = 1.3;
        const updateCart = cart.map((item)=>{
            return {
                name:item.name,
                price:item.price*taxRate,
            }
        })
        return Object.assign({}, user, {cart:updateCart});
    }
    function buyItem(user){
        amazonHistory.push(user);
        return Object.assign({},user,{purchases:user.cart})
    }
    function emptyCart(user){
        amazonHistory.push(user);
        return Object.assign({}, user, {cart:[]});
    }

    console.log("amazonHistory.push(user);", amazonHistory);


    console.log("SDf",purchaseItem(
        emptyCart,
        buyItem,
        applyTaxToItem,
        addItemToCard
    )(user,{name:"laptop", price:35000}))*/

/*    fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(console.log)*/
/*
async function fetchApi(){
        const resp = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = resp.json();
        console.log("data", data);
}

    fetchApi();*/


/*
    const urls = [
        'https://jsonplaceholder.typicode.com/users',
        'https://jsonplaceholder.typicode.com/posts',
        'https://jsonplaceholder.typicode.com/albums'
    ]

    Promise.all(urls.map(url=>
        fetch(url).then(resp=> resp.json())
    )).then(array=>{
        console.log("users", array[0])
        console.log("posts", array[1])
        console.log("albubs", array[2])
    }).catch('error');*/



    //three type of promises which we can call
    //1. parallel  === all promiss called same time and whicher time is longer after that call all
    //2. race === only one call which have less time rest of not calling
    //3. sequence = one by one run fist come fist last
/*
    const promisify = (item, delay)=>
        new Promise((resolve)=>
            setTimeout(()=>
                resolve(item),delay));

    const a = () => promisify('a', 100);
    const b = () => promisify('a', 5000);
    const c = () => promisify('c', 3000);
    //console.log(a(),b(),c());
    async function parallel(){
        const promises = [a(),b(),c()];
        const  [output1,output2,output3] = await Promise.all(promises);
        return `parallel is done: ${output1} ${output2} ${output3}`
    }
    //parallel().then(data => console.log("data", data))
    // both are same just coding style
    //parallel().then(console.log)

    async function race(){
        const promises = [a(),b(),c()];
        const output1 = await Promise.race(promises);
        return `race is done: ${output1}`
    }
    //race().then(console.log)

    async function sequence(){
        const output1 = await a();
        const output2 = await b();
        const output3 = await c();
        return `sequence is done: ${output1} ${output2} ${output3}`
    }
    sequence().then(console.log)*/


/*    function reversString(str){
        let reverStr = [];
        for(let i = str.length-1; i>=0; i--){
            reverStr.push(str[i]);
        }
        console.log("reverStr", reverStr);
        console.log("reverStr new", reverStr.join(""));
        return reverStr.join("");
    }
    reversString("Hi My Name is Harsh Jain");*/



/*    function mergeArray(array1, array2){
        const mergedArray = [];
        let array1Item = array1[0];
        let array2Item = array2[0];

        let i = 1;
        let j = 1;

        if(array1.length === 0) {
            return array2;
        }
        if(array2.length === 0) {
            return array1;
        }
        while(array1Item || array2Item){
            if(array2Item === undefined || array1Item < array2Item){
                mergedArray.push(array1Item);
                array1Item = array1[i];
                i++;
            }else {
                mergedArray.push(array2Item);
                array2Item = array2[j];
                j++
            }
        }
        console.log("mergedArray", mergedArray);
        return mergedArray;
    }*/

    /*mergeArray([0,3,4],[4,6,30]);*/

/*    function recurrning(array){
        for(let i = 0; i<array.length; i++){
            for(let j = i+1; j<array.length; j++){
                if(array[i]=== array[j]){
                    console.log("array", array[i]);
                    return array[i]

                }
            }
        }
        return undefined
    }

    recurrning([1,4,2,4,10])*/

/*    const sss = {
      name:"vinay",
        age:37,
        func:  ()=>{
          return `Hi My Name is ${age}`
        }
    }
console.log(sss.func());*/

/*    function plusMinus(arr) {
        let positive = 0,
            negative = 0,
            zero = 0,
            positiveNw,
            negativeNw,
            zeroNw
        ;
        for(let i = 0; i<arr.length; i++){
            if(arr[i] > 0){
                positive++
            }
            else if(arr[i] <0){
                negative++
            }
            else{
                zero++
            }
        }
        positiveNw =(positive/arr.length).toFixed(6);
        negativeNw =  (negative/arr.length).toFixed(6);
        zeroNw = (zero/arr.length).toFixed(6);
        console.log(positiveNw) ;
        console.log(negativeNw);
        console.log(zeroNw);
        return {
            positiveNw,
            negativeNw,
            zeroNw
        }
    }

    plusMinus([-4, 3, -9, 0, 4, 1]);*/

/*    function miniMaxSum(arr) {
        let sum = 0;
        for(let i = 0; i<arr.length; i++){
            sum += arr[i];
        };

        let minSum = (sum - Math.max(...arr)),
            maxSum = (sum - Math.min(...arr));
        console.log(minSum,maxSum);
        return {
            maxSum,
            minSum
        }
    }

    miniMaxSum([1, 3, 5, 7, 9]);*/

/*    function timeConversion(s) {
        let apPMValue = s.slice(-2);
        let hoursValue = parseInt(s.slice(-10, -8));
        let minSecValue = s.slice(-7, -2);
        let finalHours = null;
        if(apPMValue == 'PM'){
             finalHours = hoursValue + 12 +':'+ minSecValue;
            if(hoursValue == 12){
                finalHours = hoursValue +':'+ minSecValue;
            }
        }
        else if(apPMValue == 'AM'){
            finalHours = '0'+ hoursValue +':'+ minSecValue;
            if(hoursValue == 12){
                finalHours = '00' + ':'+ minSecValue;
            }
        }
        console.log("finalHours", finalHours)
        return finalHours
    }

    timeConversion('12:05:45PM');*/


/*    function fizzBuzz(n) {
        // Write your code here
        var final = '';
        for(var i = 1; i <= n; i++){
            if((i%3 == 0) && (i%5 == 0)){
                document.write("FizzBuzz" + "<br>")
                //final +=  "\n" + ('FizzBuzz');
            }
            else if((i%3 == 0)){
                document.write("Fizz" + "<br>");
                //final +=  "\n" + ('Fizz')
            }
            else if ((i%5 == 0)){
                document.write("Buzz" + "<br>");
                //final +=  "\n" + ('Buzz');
            }
            else {
                document.write(i + "<br>");
                //final +=  "\n" + (i);
            }
        }
        //console.log(final);
        return final

    }
    fizzBuzz(15);*/

/*    function findMedian(arr) {
        // Write your code here
        let sortArray = arr.sort();
        let mediamNum =  ((arr.length)/2);
        let finalMedNum = sortArray[mediamNum - 1];


        console.log("sortArray",sortArray);
        console.log("arr.length%2",finalMedNum);
        return finalMedNum

    }

    findMedian([2,1,4,6,5])*/
/*in array get how many time value comes in javascript*/

/*    function occuring(arr) {
        const a = arr.reduce((acc, curr)=>{
                acc[curr] = ++acc[curr] || 1
            return acc
        },{})
        console.log(a);
        return a;
    }*/
    function occuring(arr){
        let output={}
        for(let i=0;i<arr.length;i++){
            output[arr[i]] = ++output[arr[i]] || 1
        }
        console.log("output", output);
        return output

    }
    occuring([1,2,3,1,2,3,4])


    return(
        <div>
            <p>{counter.start}</p>
            <button onClick={incOnClick}>Increase</button>
            <button onClick={decOnClick} disabled={counter.disabled && "disabled"}>Decrease</button>
        </div>
    )
}


export default Counter;