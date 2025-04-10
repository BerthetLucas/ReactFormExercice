import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function App() {
  return (
    <>
      <h1 className="text-2xl font-bold text-white">
        Bienvenue sur mon site d'invitation à la soirée de Noël !
      </h1>
      <p className="text-white">Parce que oui Noël ça se prépare en avance !</p>

      <div className="h-90">
        <DotLottieReact
          src="https://lottie.host/2a32727d-0721-49d3-b06f-12440a5a2738/po9i0uwPj5.lottie"
          loop
          autoplay
        />
      </div>
    </>
  );
}

export default App;
