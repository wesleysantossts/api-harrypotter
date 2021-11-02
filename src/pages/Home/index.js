import "./home.css";
import { Container, Head, Main } from '../../components/styles.js';
import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import api from "../../services/api";

export default function Home(){
    const [lista, setLista] = useState([]);

    useEffect(()=>{
        (async function loadData(){
            const res = await api.get('characters')
            setLista(res.data)
            console.log(res.data)
        })()
    }, []);

    return(
        <Container>
            <Head>
                <Link to="/"> <img src="https://img.icons8.com/glyph-neue/64/000000/home-page.png" alt="home"/> </Link>
                <Link to="/"> <img src="https://img.icons8.com/glyph-neue/64/000000/witch.png" alt="personagem"/> </Link>
                <Link to="/"> <img src="https://img.icons8.com/glyph-neue/64/000000/fantasy.png" alt="informações"/> </Link>
            </Head>
            {/* <main className="mainHome"> */}
            <Main>
                <h1> Escolha uma casa </h1>
                <p>Veja os alunos</p>
                <div className="casas">
                    <div className="card">
                        <Link to="/casas/gryffindor"><img src="https://senhoritadoestilo.files.wordpress.com/2015/09/5b638-brasao_grifinoria_brhp_by_alugok.jpg" alt="grifinoria"/></Link><br/>
                        <strong>Grifinória</strong>
                    </div>
                    <div className="card">
                        <Link to="/casas/slytherin"><img src="https://i.pinimg.com/originals/a3/a0/5d/a3a05d2150844163ce5b96f9db07c891.png" alt="grifinoria"/></Link><br/>
                        <strong>Sonserina</strong>
                    </div>
                    <div className="card">
                        <Link to="/casas/ravenclaw"><img src="https://i.pinimg.com/originals/31/4f/0e/314f0e1bf83b4561b38f63f5e98849e7.jpg" alt="grifinoria"/></Link><br/>
                        <strong>Corvinal</strong>
                    </div>
                    <div className="card">
                        <Link to="/casas/hufflepuff"><img src="http://pa1.narvii.com/6284/5cbc7f8ff030212812749ecfb023107f77c7fa07_00.gif" alt="grifinoria"/></Link><br/>
                        <strong>Lufa-Lufa</strong>
                    </div>
                </div>
            </Main>
        </Container>
    )
}