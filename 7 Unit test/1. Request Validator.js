function validator(givenObject){
    const uriPattern = /^[\w.]+$/g;
    let specialCharacters = [`<`, `>`, `\\`, `&`, `'`, `"`];

    let givenObjectKeys = Object.keys(givenObject);

    if(givenObjectKeys.includes("method")){

    }else{
        throw new Error("Invalid request header: Invalid Method");
        return;
    }

    if(givenObjectKeys.includes("uri")){

    }else{
        throw new Error("Invalid request header: Invalid URI");
        return;
    }

    if(givenObjectKeys.includes("version")){

    }else{
        throw new Error("Invalid request header: Invalid Version");
        return;
    }

    //GET, POST, DELETE or CONNECT
    if(givenObject.method == "GET" || givenObject.method == "POST" || givenObject.method == "DELETE" || givenObject.method == "CONNECT"){

    }else{
        throw new Error("Invalid request header: Invalid Method");
        //console.log("Invalid request header: Invalid Method");
        return;
    }

     if(givenObject.uri == "*" || givenObject.uri.match(uriPattern)){
        
    }else{
        throw new Error("Invalid request header: Invalid URI");
        //console.log("Invalid request header: Invalid URI");
        return;
    }

    //•	version - can be HTTP/0.9, HTTP/1.0, HTTP/1.1 or HTTP/2.0
    if(givenObject.version == "HTTP/0.9" || givenObject.version == "HTTP/1.0" || givenObject.version == "HTTP/1.1" || givenObject.version == "HTTP/2.0"){
        
    }else{
        throw new Error("Invalid request header: Invalid Version");
        //console.log("Invalid request header: Invalid Version");
        return;
    }

    if(givenObjectKeys.includes("message")){
        if(givenObject.message.length > 0){
            for (const character of givenObject.message) {
                if(specialCharacters.includes(character)){
                    throw new Error("Invalid request header: Invalid Message");
                    //console.log("Invalid request header: Invalid Message");
                    return;
                }
            }
        }
    }else{
        throw new Error("Invalid request header: Invalid Message");
    }

    return givenObject;
}

validator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  });

// validator({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
// });

validator ({
    method: 'POST',
    uri: 'home.bash',
    version: 'HTTP/2.0'
});
