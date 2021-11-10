const handleSubmit =(e)=>{
    e.preventDefault();
    //here i get value of url of input 
    let TextInput = document.getElementById('article-url').value;
    console.log(TextInput);
    if(Client.IsValidURL(TextInput)){
        console.log("::: Form Submitted :::");
        Client.DataAnalysis(TextInput).then(async(res)=>{
        console.log("updateUI:",res);
        await Client.updateInterface(res);
        })
    }
    else{
        alert("InValid URL please enter correct URL");
    }
}

const polarityChecker = (score) => {
   
    let show;
    if(score =="+P")
    {
        show='strong positive';
    }else if (score =='P'){
        show='positive'
    }else if (score =='NEW'){
        show='neutral'
    }else if(score=='N'){
        show='negative'
    }else if(score=='N+'){
        show='strong negative'
    }else {
        show='no sentiment'
    }
    return show;
}

export { handleSubmit }
export { polarityChecker }