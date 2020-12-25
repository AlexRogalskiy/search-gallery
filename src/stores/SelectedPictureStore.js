import { types, getParent } from "mobx-state-tree";

const selectedPictureStore = types.model({
}).actions(self => ({
    setPictureURL(url){
        getParent(self).setSelectedPictureURL(url);
    }
}))

export default selectedPictureStore;
