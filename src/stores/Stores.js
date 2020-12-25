import { types } from "mobx-state-tree"
import PhotoGalleryStore from './PhotoGalleryStore';
import SearchStore from './SearchStore';
import SelectedPictureStore from './SelectedPictureStore';

const stores = types.model({
    photoGallery: types.optional(PhotoGalleryStore, {}),
    search:types.optional(SearchStore, {}),
    selectedPicture: types.optional(SelectedPictureStore, {})
})

export default stores;