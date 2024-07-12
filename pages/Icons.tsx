import React from 'react';
import CopyText from '../components/Copytext';
import Nav from '../components/Nav'

const Icons: React.FC = () => {
  const text = "Este es el texto que se copiará al portapapeles.";

  return (
    <>
    <Nav></Nav>
    <div>
      <h1 className='pb-10 pt-5'> Iconos de Login</h1>

    <div className='grid grid-cols-3 gap-9'>
      <div className='flex gap-8'>
      <span className="icon-play-store text-3xl"></span>
      <CopyText text={'<span className="icon-play-store"></span>'}/>
      </div>

      <div className='flex gap-8'>
      <span className="icon-mail text-3xl"></span>
      <CopyText text={'<span className="icon-mail"></span>'}/>
      </div>

      <div className='flex gap-8'>
      <span className="icon-security text-3xl"></span>
      <CopyText text={'<span className="icon-security"></span>'}/>
      </div>

      <div className='flex gap-8'>
      <span className="icon-eye text-3xl"></span>
      <CopyText text={'<span className="icon-security"></span>'}/>
      </div>
    </div>

    <h1 className='pb-10 pt-5'> Iconos de alertas</h1>

    <div className='grid grid-cols-3 gap-9'>
      <div className='flex gap-8'>
      <span className="icon-info text-3xl"></span>
      <CopyText text={'<span className="icon-play-store"></span>'}/>
      </div>

      <div className='flex gap-8'>
      <span className="icon-confirm text-3xl"></span>
      <CopyText text={'<span className="icon-mail"></span>'}/>
      </div>

      <div className='flex gap-8'>
      <span className="icon-atention text-3xl"></span>
      <CopyText text={'<span className="icon-security"></span>'}/>
      </div>

      <div className='flex gap-8'>
      <span className="icon-problem text-3xl"></span>
      <CopyText text={'<span className="icon-security"></span>'}/>
      </div>
    </div>

    <h1 className='pb-10 pt-5'> SPAD Line</h1>

    <div className='grid grid-cols-3 gap-9'>
      <div className='flex gap-8'>
      <span className="icon-reconocer text-3xl"></span>
      <CopyText text={'<span className="icon-play-store"></span>'}/>
      </div>

      <div className='flex gap-8'>
      <span className="icon-confirm text-3xl"></span>
      <CopyText text={'<span className="icon-mail"></span>'}/>
      </div>

      <div className='flex gap-8'>
      <span className="icon-atention text-3xl"></span>
      <CopyText text={'<span className="icon-security"></span>'}/>
      </div>

      <div className='flex gap-8'>
      <span className="icon-problem text-3xl"></span>
      <CopyText text={'<span className="icon-security"></span>'}/>
      </div>
    </div>

    

    </div>
    </>
  );
};

export default Icons;
