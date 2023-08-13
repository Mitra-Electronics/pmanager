import { ReactNode } from "react"
import { Link } from "react-router-dom"
import Conditional from "../blocks/Conditional"

interface CardsProps {
    href?: string,
    dataTip: string,
    children: ReactNode
}

const Cards = ({ href, dataTip, children }: CardsProps) => {
    return (
        <th className="pr-1.5 tooltip" data-tip={dataTip}>
            <Conditional condition={href != undefined}>
                {/* @ts-ignore */}
                <Link to={href}>
                    {children}
                </Link>
            </Conditional>
            <Conditional condition={href == undefined}>
                {children}
            </Conditional>
        </th>
    )
}

export default Cards