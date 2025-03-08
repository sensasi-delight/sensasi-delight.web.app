import style from './star-background.module.css'

export default function StarBackground() {
    return (
        <div className={style['star-field']}>
            <div className={style.layer}></div>
            <div className={style.layer}></div>
            <div className={style.layer}></div>
        </div>
    )
}
