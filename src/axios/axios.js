import axios from 'axios';

export default function getDataFromServer(apiUrl, method,timeout,data) {
    data=data||{}
    return new Promise(function (resolve, reject) {
        axios({
            url: "http://106.52.159.25:80"+apiUrl,
            method: method,
            timeout: timeout,
            headers: {
                'token': window.localStorage.getItem('token')
            },
            data: data
        }).then(function (response) {
                console.log(window.localStorage.getItem('token'))
                resolve(response);
            }).catch(function (error) {
                reject(error);
        })
    })
}
