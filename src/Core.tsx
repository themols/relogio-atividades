import './styles/theme.css'
import './styles/global.css'

import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { InputDefault } from './components/Input/InputDefault';
import { Cycles } from './components/Cycles';
import { ButtonDefault } from './components/Button/ButtonDefault';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';

export function Core() {
    return (
        <>
            <Container >
                <Logo />
            </Container>

            <Container >
                <Menu />
            </Container>

            <Container >
                <CountDown />
            </Container>

            <Container >
                <form className='form'>
                    <div className='formRow'>
                        <InputDefault
                            id='input'
                            labelText='task'
                            type='text'
                            placeholder='digite algo'
                        />
                    </div>

                    <div className='formRow'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam .</p>
                    </div>

                    <div className='formRow'>
                        <Cycles />
                    </div>
                    <div className='formRow'>
                        <ButtonDefault
                            icon={<PlayCircleIcon />}
                        />
                    </div>


                </form>
            </Container>

            <Container>
                <Footer />
            </Container>
        </>
    );
}