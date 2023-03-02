import "./carrossel.sass"
import { useState } from "react";
import {CaretRight, CaretLeft, Play} from 'phosphor-react'

export const Carrossel = () => {
    const carrouselDatas = [
        {
            id:1,
            imageUrl: "https://www.visa.com.br/content/dam/VCOM/regional/lac/brazil/media-kits/images/parcele-pagina1600x900.jpg",
            description: "Separamos os melhores looks para você neste 2023",
            name: 'SUMMER COLLECTION',
            redirectUrl: '#'
        },
        {
            id:2,
            imageUrl: "https://i.ytimg.com/vi/Hi6ONz3gOi0/maxresdefault.jpg",
            description: "Separamos os melhores looks para você neste 2023",
            name: 'SUMMER COLLECTION',
            redirectUrl: '#'
        },
        {
            id:3,
            imageUrl: "https://varejodemoda.com.br/wp-content/uploads/2019/10/loja-masculina-manequim.jpg",
            description: "Separamos os melhores looks para você neste 2023",
            name: 'SUMMER COLLECTION',
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
        {slideStepData.map((item) => {
            if(item.id == atualSlide) {
                return (
                    <div key={item.id} className='content' style={{backgroundImage: `linear-gradient(0deg, rgba(255, 255, 255, 0.63), rgba(0, 0, 0, 0.63)),url(${item.imageUrl})`}}>
                        <span>
                            <CaretLeft size={64} weight="bold" onClick={handleDecrementAnime} />
                            <CaretRight size={64} weight="bold" onClick={handleIncrementAnime}/>
                        </span>

                        <div className='carrousel-data'>
                            <div>
                                <h2>{item.name}</h2>
                                <p>{item.description}</p>
                            </div>
                            
                            <a>
                                SHOP NOW
                                
                            </a>
                        </div>

                        <div className="steps">
                            {slideStepData.map(item => {
                                return( 
                                    <div className={`step ${item.id == atualSlide && 'active'}`} key={item.id}> 
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