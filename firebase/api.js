import {
    collection,
    addDoc,
    updateDoc,
    onSnapshot,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    setDoc,
    arrayUnion,
    arrayRemove,
} from "firebase/firestore";
import { db } from "./config";

export const getUserWatchList = (uid) => getDoc(doc(db, "watchlists", uid));

export const updateWatchlist = (id, movies) => {
    return updateDoc(doc(db, "watchlists", id), {
        movies: movies,
    });
};

export const addWatchList = (uid) =>
    setDoc(doc(db, "watchlists", uid), { movies: [] });

export const addMovieToWatchList = (uid, movie) => {
    return updateDoc(doc(db, "watchlists", uid), {
        movies: arrayUnion(movie),
    });
};

export const removeMovieFromList = (uid, movie) => {
    return updateDoc(doc(db, "watchlists", uid), {
        movies: arrayRemove(movie),
    });
};
