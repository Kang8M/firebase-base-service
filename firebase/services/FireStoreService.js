import { firestore } from '../connect'

class FireStoreService {
  collection = '';

  setCollection(collection_name) {
    this.collection = collection_name;
  }

  getCollection() {
    return this.collection;
  }

  getAll() {
    return firestore.collection(this.collection)
      .get();
  }

  get(documentId) {
    return firestore.collection(this.collection)
      .doc(documentId)
      .get();
  }

  create(documentId, data) {
    return firestore.collection(this.collection)
      .doc(documentId)
      .set(data);
  }

  update(documentId, data) {
    return firestore.collection(this.collection)
      .doc(documentId)
      .set(data);
  }

  delete(documentId) {
    return firestore.collection(this.collection)
      .doc(documentId)
      .delete();
  }

  getRawQuery() {
    return firestore.collection(this.collection);
  }
}

export default new FireStoreService();