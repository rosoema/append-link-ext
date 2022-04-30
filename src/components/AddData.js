export default function addData() {
    let title = localStorage.getItem("title");
    let base = localStorage.getItem("base");
    let stored = JSON.parse(localStorage.getItem("items"));

    if(title && base){
        let arr = [];

        if(stored && stored !== []){
            arr.push(
                ...stored, 
                {
                title: title,
                base: base
            });
        } else {
            arr.push(
                {
                title: title,
                base: base
            });
        }   

        localStorage.setItem("items", JSON.stringify(arr));
        localStorage.removeItem("title");
        localStorage.removeItem("base");
        window.location.reload();
        
    } else {
        alert("Both fields need to be filled out.");
        localStorage.removeItem("title");
        localStorage.removeItem("base");
    }
}