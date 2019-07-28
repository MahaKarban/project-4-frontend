import apiUrl from '../apiConfig';
import Axios from 'axios'

export const home = (searchData) => {
    if (searchData) {
        return  Axios({
            method:'GET',
            url: apiUrl + '/hobbies/all?' + "type="+searchData.type +"&city=" + searchData.city,
        })
    }else {
        return  Axios({
            method:'GET',
            url: apiUrl + '/hobbies/all'
        })  
    }
}

export const index = (user) => {
    return  Axios({
        method:'GET',
        url: apiUrl + '/hobbies',
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}

export const show = (user, hobbyId) => {
    return Axios({
        method:'GET',
        url: apiUrl + `/hobbies/${hobbyId}`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}
///show no need user login
export const showNoUser = (hobbyId) => {
    return Axios({
        method:'GET',
        url: apiUrl + `/hobbies/${hobbyId}/home`
    })
}


export const create = (user,newHobby) => {
    return Axios({
        method:'POST',
        url:apiUrl + '/hobbies',
        headers:{
            "Authorization":`Bearer ${user.token}`
        },
        data:{
            hobby:newHobby
        }
    })
}



export const destroy = (user,hobbyId) => {
    return Axios({
        method:"DELETE",
        url:apiUrl + `/hobbies/${hobbyId}`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}


export const update = (user,updateHobby,hobbyId) => {
    return Axios({
        method:'PUT',
        url:apiUrl + `/hobbies/${hobbyId}`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        },
        data:{
            hobby:updateHobby
        }
    })
}