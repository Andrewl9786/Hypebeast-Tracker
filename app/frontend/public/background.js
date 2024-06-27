import fetchData from "./api/fetchData.js"

chrome.runtime.onInstalled.addListener(() =>{
    // console.log("test")
    fetchData();
})
