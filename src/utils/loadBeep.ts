import gravitationalBeep from '../assets/audios/gravitational_beep.mp3';
export function loadBeep() {
  const audio = new Audio(gravitationalBeep);
  audio.load();

  return () => {
    // solução emergencial apenas para o safari
    audio.currentTime = 0;

    audio.play().catch(error => console.log('erro ao tocar audio', error));
  };
}
