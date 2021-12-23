import React from 'react'

import axios from 'axios'

export const getAPI = () => axios.post('http://dev.avksrv.ru/auth/login', {
    identifier: 'innerhard@gmail.com',
    password: 'WhoFuckMe!100505',
})

// export const queryAPI = (
//     link: string,
//     setData: { (value: React.SetStateAction<null>): void; (arg0: any): void },
//     setError: (value: boolean) => void,
// ) => {
//     getAPI.then(item => {
//         if (item.status === 200) {
//             axios
//                 .get(link, {
//                     headers: { Authorization: `Bearer ${item?.data?.jwt}` },
//                 })
//                 .then(({ data, status }) => {
//                     if (status === 200) {
//                         setData(data)
//                     } else {
//                         setError(true)
//                     }
//                 })
//                 .catch(() => {
//                     setError(true)
//                 })
//         }
//     })
// }
//
// export const queryStaticData = async (link: string) => {
//     return getAPI.then(item => {
//         if (item.status === 200) {
//             console.log('2')
//             return axios
//                 .get(link, {
//                     headers: { Authorization: `Bearer ${item?.data?.jwt}` },
//                 })
//                 .then(response => response.data)
//         }
//     })
// }
//
// export const putDeliver = (link: string, object: {}) => {
//     return getAPI.then(item => {
//         if (item.status === 200) {
//             return axios.post(link, {
//                 deliver: object,
//             })
//         }
//     })
// }