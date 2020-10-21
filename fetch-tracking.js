import refs from './refs.js';
import trackingBuild from './trackingBuild.js';

function fetchTracking (ttn) {


const options = {
    "modelName": "TrackingDocument",
    "calledMethod": "getStatusDocuments",
    "methodProperties": {
        Language: 'ru',
        "Documents": [
             {
                "DocumentNumber": `${ttn}`,
                "Phone": "+380507518129"
            },
        ]
    }
}

const url = 'https://api.novaposhta.ua/v2.0/json/';

fetch(url, {
    method: 'POST',
    body: JSON.stringify(options),
    headers: {
        'Content-Type': 'application/json',
    }
})
.then(res => res.json())
.then(data => {
    // console.log(data),
    data.data.forEach(element => {
        console.log(element),
        trackingBuild(element);
    });
});

}

export default fetchTracking;