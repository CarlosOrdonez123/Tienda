import firebase from '../firebase';

export function getProductById(id){
    return firebase.database().ref("products").child(id)
        .once("value")
        .then(snap=>{
            const product = snap.val();
            return product;

        });
}

export function updateProductById(id, product){
    return firebase.database().ref("products").child(id)
        .set(product)
        .then(()=>{
            return;
        });
}