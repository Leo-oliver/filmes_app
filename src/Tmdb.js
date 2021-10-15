const ChaveApi = 'fe65f8e840e15d06c5c00bf13084da74&l';
const BaseApi = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${BaseApi}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'lancamentos',
                title: 'Filmes Lançamentos',
                items: await basicFetch(`/movie/upcoming?api_key=${ChaveApi}`)
            }
        ]
    }
}