import Link from "next/link";
import style from '/components/A/A.module.scss'
export default function A ({text, href}) {
    return (
        <Link href={href} className={style.link}>
            {text}
        </Link>
    )
}