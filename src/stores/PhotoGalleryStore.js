import { types, getParent } from 'mobx-state-tree'

const photoGalleryStore = types.model("Gallery", {
}).views(self => ({
    get totalPics(){
        return getParent(self).picsList.length;
    }
})).actions(self =>({
    setPictures(arr){
        getParent(self).setPicsList(arr);
    }
}))

export default photoGalleryStore;