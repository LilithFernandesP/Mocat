import React from 'react'
import Navbar from "../components/Navbar.jsx";

const InfoPage = () => {
    return (
        <div
            className="info-page text-white flex flex-col gap-10 sm:h-svh justify-center content-container items-center m-2 sm:m-0 sm:mx-40">
            <Navbar />
            <div className='flex flex-wrap flex-col tracking-wider text-base/7 gap-10 '>
                <h2>Programadora <span className='text-red-600  text-4xl font-mono'>Lilith</span></h2>
                <p>
                    Este projeto foi criado para unir <span className='text-red-600 font-mono'> aprendizado e criatividade</span>.
                     Construído com React, o site funciona como um catálogo dinâmico de filmes, <span className='text-red-600 font-mono'>integrando a API </span>
                    do The Movie DB para exibir os títulos em destaque,
                    permitir buscas inteligentes, filtrar por categorias, ordenar resultados e muito mais.
                </p>
                <p>
                    O resultado é este site, feito com carinho, código limpo e muita vontade de crescer na área.
                </p>
                <p className='text-2xl'>
                    Em busca de novas oportunidades! <br/>
                    <a href="" className='text-red-600 font-mono'>Confira meu portfólio completo</a>
                </p>
            </div>
            <p className='text-red-600 text-3xl font-light font-mono'>Entre as tecnologias utilizadas estão:</p>
            <p className='flex flex-col sm:flex-row gap-10'>

                <div className='techstack'>
                <img src="react.svg" alt="reacticon"/>React
                </div>
                <div className='techstack'>
                <img src="tailwind.svg" alt="tailwindicon"/> TailwindCSS
                </div>
                <div className='techstack'>
                <img src="git.svg" alt="giticon"/> Git
                </div>
                <div className='techstack'>
                <img src="github.svg" alt="githubicon"/> GitHub
                </div>
            </p>
        </div>
    )
}
export default InfoPage
