import "./carrossel.sass"
import { useState } from "react";
import {CaretRight, CaretLeft, Play} from 'phosphor-react'

export const Carrousel = () => {
    const carrouselDatas = [
        {
            id:1,
            imageUrl: "https://i.ibb.co/KzM79Tf/naruto-compressed-compressed.jpg",
            description: "Naruto Uzumaki reto",
            name: 'Naruto Shippuden',
            redirectUrl: '#'
        },
        {
            id:2,
            imageUrl: "https://i.ibb.co/KzM79Tf/naruto-compressed-compressed.jpg",
            description: "Naruto Uzumaki retorna para casa e une forças com Sakura Haruno para enfrentar uma organização ninja denominada Akatsuki",
            name: 'Naruto Shippuden',
            redirectUrl: '#'
        },
        {
            id:3,
            imageUrl: "https://i.ibb.co/KzM79Tf/naruto-compressed-compressed.jpg",
            description: "Naruto Uzumaki retorna para casa e une forças com Sakura Haruno para enfrentar uma organização ninja denominada Akatsuki",
            name: 'Naruto Shippuden',
            redirectUrl: '#'
        },
    ]

    const [slideStepData, setSlideStepData] = useState([...carrouselDatas])
    const [atualSlide, setAtualSlide] = useState(1)


    function handleIncrementAnime(){
        setAtualSlide(stage => {
            if(stage == slideStepData.length) return 1

            return stage + 1
        })
    }

    function handleDecrementAnime(){
        setAtualSlide(stage => {
            if(stage == 1) return slideStepData.length

            return stage - 1
        })
    }

    return(
        <div className="container">
            {slideStepData.map((anime) => {
                if(anime.id == atualSlide) {
                    return (
                        <div key={anime.id} className='content' style={{backgroundImage: `linear-gradient(0deg, #000000a1, #000000a1),url(${anime.imageUrl})`}}>
                            <span>
                                <CaretLeft size={64} weight="bold" onClick={handleDecrementAnime} />
                                <CaretRight size={64} weight="bold" onClick={handleIncrementAnime}/>
                            </span>

                            <div className='carrousel-data'>
                                <div>
                                    <h2>{anime.name}</h2>
                                    <p>{anime.description}</p>
                                </div>
                                
                                <a>
                                    Assistir
                                    <Play size={20} weight="fill" />
                                </a>
                            </div>

                            <div className="steps">
                                {slideStepData.map(anime => {
                                    return( 
                                        <div className={`step ${anime.id == atualSlide && 'active'}`} key={anime.id}> 
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                }
                return <></>
            })}
        </div>
    )
}