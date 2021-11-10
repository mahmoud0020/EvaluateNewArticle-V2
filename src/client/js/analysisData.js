// i use axios to fetch data 
const axios =require('axios');

const DataAnalysis=async(urlArticle)=>{
    console.log("Wait to analysis article data : ",urlArticle);
    console.log(urlArticle)
    const dataResponce = await fetchData('http://localhost:8060/api',{url:urlArticle});
    console.log(dataResponce);
    return dataResponce;

}
// use axios to fetch data from server side.
const fetchData = async(urlServer,urlArticle={})=>{
    const responce =await axios({
        method:'POST',
        url:urlServer,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        withCredentials: true,
        data:JSON.stringify(urlArticle),
        
    })
    console.log(responce);
    return responce;
}

function updateInterface(res) {
    console.log(res);
    document.getElementById("subjectivity").innerHTML = `Subjectivity: ${res.data.subjectivity}`;
    document.getElementById("irony").innerHTML = `Irony: ${res.data.irony}`;
    document.getElementById("agreement").innerHTML = `Agreement: ${res.data.agreement}`;
    document.getElementById("confidence").innerHTML = `Confidence: ${res.data.confidence}`;
    document.getElementById('score_tag').innerHTML=`score_Tag : ${res.data.score_tag};`;
    document.getElementById('polarity').innerHTML = 'Polarity: '+Client.polarityChecker(res.data.score_tag);
}
export {updateInterface,fetchData,DataAnalysis}