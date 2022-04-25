export default function addData() {
    let inputTitle = document.querySelector(".input-title").value;
    let inputBase = document.querySelector(".input-base-link").value;
    let obj = {
        title: inputTitle,
        base: inputBase
    };

    if(obj.title === null || obj.base === null || obj.title === undefined || obj.base === undefined){
        alert("Both Title and Base link must be provided.");
    } else {
        chrome.storage.local.set({obj});
        
    }
}