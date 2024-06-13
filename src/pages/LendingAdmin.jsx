import React, { useEffect, useState } from "react";
import Case from "../components/Case";
import Table from "../components/Table";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Lending({ titleModal }) {
    const [lending, setLending] = useState([]);
    const [authUser, setAuthUser] = useState([]);
    const [userId, setUserId] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/profile  `, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        })
            .then(res => {
                setAuthUser(res.data.data);
                setUserId(res.data.data.id);
                console.log(res);
                // console.log(location);
                if (location.pathname === '/login') {
                    navigate('/profile')
                }
            })
            .catch(err => {
                setIsLogin(false);
                if (err.response.status == 401 && location.pathname != '/login') {
                    navigate('/login?message=' + encodeURIComponent('Anda gagal login!'));
                }
            })
    }, [navigate]);

    useEffect(() => {
        if (userId) {
            axios.get(`${import.meta.env.VITE_API_URL}/lending/data`, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                }
            })
                .then(res => {
                    const userLending = res.data.data.filter(item => item.user_id == userId);
                    setLending(userLending);
                })
                .catch(err => {
                    console.log(err)
                    if (err.response.status == 401) {
                        navigate('/login?message' + encodeURIComponent('Anda belum login!'));
                    }
                })
        }
    }, [userId, navigate]);


    const headers = [
        "#",
        "Nama Admin",
        "Username",
        "Name",
        "Date Time",
        "Notes",
        "Total Stuff",
        ];

    const endpointModal = {
        "store": "http://localhost:8000/lending/store",
        "delete" : "http://localhost:8000/lending/delete/{id}",
    };

    const columnIdentitasDelete = 'name';

 
    const inputData ={
        "name" : {
            "tag": "input",
            "type": "text",
            "option": null
        },
        "stuff_id" : {
            "tag": "input",
            "type": "text",
            "option": null
        },
        "user_id" : {
            "tag": "input",
            "type": "text",
            "option": null
        },
        "date_time" : {
            "tag": "input",
            "type": "datetime-local",
            "option": null
        },
        "notes" : {
            "tag": "input",
            "type": "text",
            "option": null
        },
        "total_stuff" : {
            "tag" : "input",
            "type" : "number",
            "option" : null
        }

    };

    const buttons = [
        "create",
        "delete"
    ];

    const tdColumn = {
        "stuff": "name",
        "user": "username",
        "name": null,
        "date_time": null,
        "notes": null,
        "total_stuff": null,
    };

   
    const title = 'Admin';

    return (
        <Case>
            <Table headers={headers} data={lending} endpoint={endpointModal} inputData={inputData} identitasColumn={columnIdentitasDelete} titleModal={title} opsiButton={buttons} columnForTd={tdColumn}></Table>
        </Case>
    )
}