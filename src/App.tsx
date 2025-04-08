import {DotLottieReact} from '@lottiefiles/dotlottie-react';
import {MainMotion} from "./components/MotionComponent/MainMotion.tsx";

function App() {

    return (
        <MainMotion className="text-white flex flex-col gap-10 items-center" delay={0.1}>
            <h1 className="text-2xl font-bold">Bienvenue sur mon site d'invitation à la soirée de Noël !</h1>
            <p>Parce que oui Noël ça se prépare en avance !</p>

            <div className="h-90">
                <DotLottieReact
                    src="https://lottie.host/2a32727d-0721-49d3-b06f-12440a5a2738/po9i0uwPj5.lottie"
                    loop
                    autoplay
                />
            </div>
        </MainMotion>
    )
}

export default App
