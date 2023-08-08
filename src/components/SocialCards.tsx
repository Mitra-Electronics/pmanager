import { ReactNode } from "react"

interface SocialCardsProps {
    href: string,
    dataTip: string,
    children: ReactNode
}

const SocialCards = ({ href, dataTip, children }: SocialCardsProps) => {
    return (
        <th className="pr-1.5 tooltip" data-tip={dataTip}>
            <a href={href}>
                {children}
            </a>
        </th>
    )
}

export default SocialCards