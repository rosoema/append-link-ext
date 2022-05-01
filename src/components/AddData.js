export default function addData() {
    let title = localStorage.getItem("title");
    let base = localStorage.getItem("base");
    let stored = JSON.parse(localStorage.getItem("items"));

    if(title && base){
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
        localStorage.removeItem("title");
        localStorage.removeItem("base");
    }
}