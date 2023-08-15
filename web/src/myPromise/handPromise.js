import React from "react";




const myPromise = () => {
    console.log("myPromise")
}


const promise = (url, data) => {
    return new Promise((resove, reject) => {
        const xml = new XMLHttpRequest();
        xml.open('get', url, true)
        xml.send();
        xml.onreadystatechange = () => {
            if (xml.readyState == 4) {
                console.log('成功了')
                if (xml.status >= 200 && xml.status <= 300) {
                    resove(JSON.parse(xml.responseText))
                }
            } else {
                reject(JSON.parse(xml.responseText))
            }
        }
    })
}

export default myPromise