import { Footer as FlowbiteFooter, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";
import { getTranslations } from "next-intl/server";


const Footer = async () => {

    const t = await getTranslations('footer')

    return (
        <FlowbiteFooter container>
            <FooterCopyright href="#" by={t('copyright')} year={(new Date()).getFullYear()} />
            <FooterLinkGroup>
                {/* <FooterLink href="#">About</FooterLink>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Licensing</FooterLink>
                <FooterLink href="#">Contact</FooterLink> */}
            </FooterLinkGroup>
        </FlowbiteFooter>
    )
}

export default Footer