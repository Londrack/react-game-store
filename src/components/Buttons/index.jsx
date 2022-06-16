import './Buttons.scss'

export default function Buttons({
    tag = ('button' | 'input'),
    buttonType = ('primary' | 'secondary'),
    name,
    actionType = 'submit'
}) {
    if(tag === 'button')
        return (
            <button type='button' className={`button ${buttonType}-button`}>{name}</button>
        )
    else
        return (
            <input className={`button ${buttonType}-button`}
            type={actionType} value={name} />
        )

}
