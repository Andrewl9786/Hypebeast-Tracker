
export default async function fetchData(){
        try{
            const response = await fetch("http://localhost:3000/post",{
                method: "GET"
            });
            const data = await response.json()
            console.log(data)
            chrome.storage.local.set({
                postDate: data[0].date,
                postRelease: data[0].fashionRelease
            })
        } catch (err){
            console.log(err)
        }
}
