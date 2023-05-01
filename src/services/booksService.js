export const booksService = async() => {
    const url = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

    const res = await fetch(url);
    const data = await res.json();
    return data

}
