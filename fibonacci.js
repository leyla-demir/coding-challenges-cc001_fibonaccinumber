document.getElementById("check").addEventListener("click",function(){

    myOperation()
})

document.getElementById("index").addEventListener("keyup",function(event){
    if(event.which === 13){
        myOperation()
    }
})

function myOperation(){
    const n = document.getElementById("index").value;
    document.getElementById("index").value=""
    document.getElementById("index").focus()
    console.log("fibonacci(n)", fibonacci(n))
    document.getElementById("indexNum").innerHTML = "Index :" + n;
    document.getElementById("result").innerHTML= "fibo(n)= " + fibonacci(n);

}
function fibonacci(n){
    if(n > 0){ 
        arr = [1,1];
        for(let i = 0; i < n; i++ ){
            arr.push(arr[i]+arr[i+1]);   
        }
        return arr[n];
    }else{
        return alert('Enter a positive number !')
    }
}
