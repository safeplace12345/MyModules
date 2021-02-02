function component(){
    const el = document.createElement('div');

    // (_)variable is loaded from the script on line 8 in ./index.html
    el.innerHTML = _.join(['Hello' , 'WebPack'],' $ ');
    return el;
}
document.body.appendChild(component())