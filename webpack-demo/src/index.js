import _ from 'lodash';

function component(){
    const el = document.createElement('div');

    // (_)variable is  now loaded on line 1 ./index.js
    el.innerHTML = _.join(['Hello' , 'WebPack'],' $ ');
    return el;
}
console.log(component())
document.body.appendChild(component());