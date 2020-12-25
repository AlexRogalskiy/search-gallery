import { types, getParent, getEnv} from "mobx-state-tree";

const searchStore = types.model({
    isSearching: false,
}).views(self => ({
    get url(){
        return getEnv(self).config.getSearchURL(getParent(self).searchTerm);
    }
})).actions(self => ({
    requestPics(){
        self.isSearching = true;
        fetch(self.url)
            .then(self.onData)
            .then(self.onResult.bind(this))
            .catch((err) => console.log(err))
    },
    onData(response){
        return response.json();
    },
    onResult(response){
        const configuration = getEnv(self).config;
        const model = getParent(self);

        self.isSearching = false;
        const picsArr = response.photos.photo.map(value => {
            return {
                id: value.id,
                title: value.title,
                image: configuration.getPicURL(value),
                large_image: configuration.getLargePicURL(value)
            }
        })

        model.setPicsList(picsArr);
        model.setSelectedPictureURL(picsArr[0].large_image);
    },
    changeSearchTerm(term){
        getParent(self).setSearchTerm(term);
    },
}))

export default searchStore;