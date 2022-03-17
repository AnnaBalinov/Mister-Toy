import axios from 'axios';
// import utilService from './util.service';

// const BASE_URL = '//localhost:3030/api/toy/';


function _getUrl(id = '') {
    const BASE_URL = (process.env.NODE_ENV !== 'development')
        ? '/api/toy'
        : '//localhost:3030/api/toy'
    return `${BASE_URL}/${id}`
}

export const toyService = {
    query,
    remove,
    save,
    getEmptyToy,
    getById,
}

function query(filterBy) {
    console.log('filterBy - front service', filterBy)
    return axios.get(_getUrl(), { params: filterBy })
        .then(res => res.data)
}

function getById(id) {
    return axios.get(_getUrl(id), id)
        .then(res => res.data)
}

function remove(toyId) {
    // console.log('remove - id', toyId)
    return axios.delete(_getUrl(toyId), toyId)
}

function save(toy) {
    if (toy._id)
        return axios.put(_getUrl(toy._id), toy).then((res) => res.data);
    else
        return axios.post(_getUrl(), toy).then((res) => res.data);
}

function getEmptyToy() {
    return {
        _id: '',
        name: '',
        price: 0,
        labels: [],
        createdAt: Date.now(),
        inStock: true,
        reviews: [
            {
                _id: _makeId(),
                name: 'puki',
                txt: 'good!',
                rate: 5
            },
            {
                _id: _makeId(),
                name: 'baba',
                txt: 'foo',
                rate: 1
            }
        ]


    }
}

function _makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

