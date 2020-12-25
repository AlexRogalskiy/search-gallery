import {types} from 'mobx-state-tree';

const Picture = types.model("Picture", {
    id: types.identifier(),
    title: types.string,
    image: types.string,
    large_image: types.string
})

const model = types.model({
    searchTerm: types.string,
    picsList: types.array(Picture),
    selectedPictureURL: types.string
}).actions(self => ({
    setPicsList(arr){
        self.picsList = arr;
    },
    setSelectedPictureURL(url){
        self.selectedPictureURL = url;
    },
    setSearchTerm(value){
        self.searchTerm = value;
    }
}))

export default model;