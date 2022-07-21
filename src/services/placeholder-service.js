export default class PlaceHolderService {
    _url = "https://jsonplaceholder.typicode.com/";

    getPosts = async (url) => {
        const res = await fetch(`${this._url}/posts`);

        if (!res.ok) {
            throw new Error(`Couldn't fetch ${url}`);
        }

        return await res.json();
    };
}
