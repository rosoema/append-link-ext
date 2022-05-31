export default function addData() {
    let title = localStorage.getItem("title");
    let base = localStorage.getItem("base");
    let stored = JSON.parse(localStorage.getItem("items"));
    let valid = require("valid-url");
    

    if(title && base && title !== " " && title !== "" && valid.isWebUri(base)){
        let arr = [];

        if(stored && stored !== "[]"){
            arr.push(
                ...stored, 
                {
                title: title,
                base: base,
                id: stored[stored.length - 1].id + 1
            });
        } else {
            arr.push(
                {
                title: title,
                base: base,
                id: 0
            });
        }   

        localStorage.setItem("items", JSON.stringify(arr));
        localStorage.removeItem("title");
        localStorage.removeItem("base");
        
    } else {
        alert("Both fields need to be entered and filled out correctly.\n\nExample title: Title\nExample base URL: https://example.com || http://example.com")
        localStorage.removeItem("title");
        localStorage.removeItem("base");
    }
}