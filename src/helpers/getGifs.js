export const getGifs = async(query) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Nz4LOnxOmnZBkBkrfkXq8MkfbUbiwl0X&limit=10&q=${encodeURI(query)}`;
    const resp = await fetch( url );
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    return gifs;

}
