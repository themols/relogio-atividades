import { PlayCircleIcon } from "lucide-react";
import { ButtonDefault } from "../Button/ButtonDefault";
import { Cycles } from "../Cycles";
import { InputDefault } from "../Input/InputDefault";

export function MainForm() {

  return (<form className='form'>
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


  </form>);
}