import "./houses.css";
import {Container, Head, Main} from "../../components/styles";
import {useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import api from '../../services/api';

export default function Houses() {
    const { house } = useParams();
    const [ casa, setCasa ] = useState([]);

    const alojamento = { nome: {
        gryffindor: "https://senhoritadoestilo.files.wordpress.com/2015/09/5b638-brasao_grifinoria_brhp_by_alugok.jpg",
        slytherin: "https://i.pinimg.com/originals/a3/a0/5d/a3a05d2150844163ce5b96f9db07c891.png",
        ravenclaw: "https://i.pinimg.com/originals/31/4f/0e/314f0e1bf83b4561b38f63f5e98849e7.jpg",
        hufflepuff: "http://pa1.narvii.com/6284/5cbc7f8ff030212812749ecfb023107f77c7fa07_00.gif"
    }
    };

    useEffect(()=>{
        async function loadData(){
            const res = await api.get(`house/${house}`);
            const dados = res.data;
            const filtroDados = dados.filter((item) => {
                if(item.image !== ""){
                    return item
                }
                
            })


            setCasa(filtroDados);
            // console.log(res.data)
        };
        
        
        loadData()
    }, [house]);

    // function casaSelecionada(){
    //     for(var i in alojamento){
    //         if(i === casa.house){
                
    //             return alojamento[i]
    //         }
    //     }
        
    // } 

    return(
        <Container>
            <Head>
                <Link to="/"> <img src="https://img.icons8.com/glyph-neue/64/000000/home-page.png" alt="home"/> </Link>
                <Link to="/"> <img src="https://img.icons8.com/glyph-neue/64/000000/witch.png" alt="personagem"/> </Link>
                <Link to="/"> <img src="https://img.icons8.com/glyph-neue/64/000000/fantasy.png" alt="informações"/> </Link>
            </Head>
            <Main>
                <div className="blocoCasa">
                    <div className="casa">
                        <img src={alojamento.nome[house]} alt="casa"/>
                    </div>
                    <div className="card">
                        {casa.map((item)=>{
                            return(
                                <article key={item.name}>
                                    <div>
                                        <img src={item.image} alt={item.name}/>
                                    </div>
                                    <div>
                                        <strong>Nome: {item.name}</strong><br/>
                                        <strong>Nascimento: {item.dateOfBirth}</strong><br/>
                                        <strong>Ator/Atriz: {item.actor}</strong>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </Main>
        </Container>
    )
};
        // <div>
        //     {casas.map((item)=>{
        //         return(
        //             <article key={item.house}>
        //                 <strong> {item.house} </strong>
        //             </article>
        //         )
        //     })}
        // </div>