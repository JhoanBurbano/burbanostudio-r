import React from 'react';
import styled, { css, keyframes } from 'styled-components';

export default function Bio() {

    const rubberBand = keyframes`

        0%{
            transform:scale3d(1,1,1);
        }
        30%{
            transform:scale3d(1.25,.75,1);
        }

        40%{
            transform:scale3d(.75,1.25,1);
        }

        50%{
            transform:scale3d(1.15,.85,1);
        }

        65%{
            transform:scale3d(.95,1.05,1);
        }

        75%{
            transform:scale3d(1.05,.95,1);
        }

        100%{
            transform:scale3d(1,1,1);
        }
        `;

    function handleMouseEnter(e) {
        if (e.target.classList.contains('rubberBand', 'animated') === false) {
            e.target.classList.add("animated", "rubberBand");
        }
    }

    function handleMouseLeave(e) {
        e.target.classList.remove("animated", "rubberBand")

    }

    const deletring = (text) => {
        return text.split("").map((e) => {
            const parr = styled.p`
                display:inline-block
            `
            return (
                <parr className="blast" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
                    {e}
                </parr>
            );
        });

    }

    const Chart = styled.div`
        user-select:none;
        width: 90%;
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background: #313131;
        box-shadow: 0 0 1rem #4449;
        border-radius: .25rem;
      & h2{
          cursor:pointer;
            text-align: center;
            & parr {
                display: inline-block;
                text-transform: capitalize;
                margin: 0 .5rem;
                font-size: 3rem;
            }
            padding: 1rem 0;
            background: #121212;
        }
        & .top{
            width: 95%;
            height: 60%;
            display:flex;
            justify-content: space-around;
            & .texto {
                display: flex;
                flex-direction:column;
                justify-content: center;
                width: 55%;
                text-align: center;
                & h3{
                    letter-spacing: .5rem;
                }
                & p{
                    color:#aaa;
                    text-align: justify;
                    line-height: 190%;
                    padding: 0 2rem;
                }
            }
            & .img {
                width: 40%;
                border-radius: .25rem;
                overflow: hidden;
                & img{
                    width: 100%;
                    transform: translateY(-3%);
                }
            }
        }
        & button {
            width: 80%;
            margin: 0 auto;
            text-transform: uppercase;
            letter-spacing: .5rem;
            cursor: pointer;
            &:hover{
                filter: grayscale(.3);
            }
        }

        & .rubberBand{
            animation: ${rubberBand} 1s linear both;
            &:hover{
                color: var(--resaltador)
            }
        }
    `;

    return (
        <>
            <section className="cnt" id="bio">
                <Chart>
                    <h2>
                        {deletring("About me")}
                    </h2>
                    <div className="top">
                        <div className="texto">
                            <h3>JHOAN SEBASTIAN BURBANO</h3>
                            <p>Soy desarrollador web full stack, me enfoco en aplicaciones web reactivas y funcionales, domino multiples lenguajes de programacion y Soy estudiante de Administracion de empresas y Marketing Digital.</p>
                        </div>
                        <div className="img">
                            <img src="https://scontent.feoh2-1.fna.fbcdn.net/v/t1.6435-9/244462905_4366782636710752_9079710513576994968_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=D6X5TzWwjhYAX-Mavzq&_nc_ht=scontent.feoh2-1.fna&oh=25e7c0d5d2af8868715bd03f9d218b71&oe=61AC87DC" alt="Jhoan Sebastian Burbano" />
                        </div>
                    </div>
                    <button>
                        Mas Informacion
                    </button>
                </Chart>
            </section>
        </>
    );
}