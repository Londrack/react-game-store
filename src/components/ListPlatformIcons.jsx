import MetascoreSquare from "./MetascoreSquare";

export default function ListPlatformIcons({ platforms, format = 'small', metascore, gameId}) {

  const options = format === 'small'
    ? {
      marginTop: '-44px',
      bgColor: 'bg-grey-100-75per',
      position: 'absolute',
      marginLeft: '0'
    }
    : format === 'big'
      && {
        marginTop : "-68px",
        marginLeft: "-28px",
        position: 'absolute',
        bgColor: 'bg-grey-200-75per'
      }

  return (
    <div className={`${options.position} ${options.bgColor} w-full`}
    style={{marginTop:options.marginTop, marginLeft:options.marginLeft }}>
      <ul className={`flex-space-between px-4 py-3`} style={{listStyle: 'none'}}>
        <div className="flex gap-2">
        {platforms.map(p =>{
          const key = p.platform.id
            ? `${p.platform.id}-${gameId}`
            : '';

          const imgPlatform = p.platform.slug
            ? `/iconsPlatforms/${p.platform.slug}.svg`
            : '';

          const namePlatform = p.platform.name
            ? p.platform.name
            : '';

          return (
            <li key={key}>
              <img height={16} src={imgPlatform} alt={namePlatform} />
            </li>
          )
        })}
        </div>
        {!!metascore
          && <li><MetascoreSquare score={metascore} /></li>
        }
      </ul>
    </div>
  )
}
