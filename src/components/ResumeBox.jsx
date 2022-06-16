export default function ResumeBox({left1, left2 = '', right1, principal = true, bgColor = 'bg-grey-200'}) {
  return (
    <div className={`flex-space-between mx-0 ${bgColor}
      ${principal ? 'p-5 radius-md my-5' : 'my-2'}`}>
      <div>
        <p className="font-extra-bold">{left1}</p>
        {!!left2 && <p className="font-thin">{left2}</p>}
      </div>
      <div>
        <p className={`font-extra-bold font-roboto
        ${principal ? 'font-lg' : 'flex-center gap-2'}`}>{right1}
          {!principal && <span className='text-grey-300 font-xl block mb-1'>&#62;</span>}
        </p>
      </div>
    </div>
  );
}
