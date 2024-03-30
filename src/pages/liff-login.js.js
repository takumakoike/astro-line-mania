import liff from "@line/liff";

const LIFF_ID = "2004403925-XvlLzlGp";

liff.ready().then( () => {
    liff.init({
        liffId: LIFF_ID
    }).then( () => {
        if( !liff.isLoggedIn()){
            liff.login({
                redirectUri: "",
            })
        }
    }).catch( (err) => {
        console.log(err);
    })
})


