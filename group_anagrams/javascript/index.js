function groupAnagrams(strs) {
    let final=new Map;
    for(let s of strs){
        let sortedStr = s.split("").sort().join("");
        console.log(sortedStr);
        if(final[sortedStr]==undefined){
            final[sortedStr] = [];
        }
        final[sortedStr].push(s);
    }
    return Object.values(final);
}

let strs = ["act","pots","tops","cat","stop","hat"]

let res = groupAnagrams(strs)
console.log(res)
