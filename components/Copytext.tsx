import React from 'react';

type CopyTextProps = {
  text: string;
};

const CopyText: React.FC<CopyTextProps> = ({ text }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Texto copiado al portapapeles');
    }).catch(err => {
      console.error('Error al copiar el texto: ', err);
    });
  };

  return (
    <div className='flex gap-6'>
      <textarea
        value={text}
        readOnly
        className='text-sm'
      />
      <button onClick={handleCopy} className="h-10 px-5 py-2 bg-[#1D70B6] rounded-full  font-bold text-white text-xs hover:bg-[#263261]">
        Copiar código
      </button>
    </div>
  );
};

export default CopyText;

