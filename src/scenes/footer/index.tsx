import Logo from "@/assets/Logo.png"

// type Props = {}

const Footer = () => {
    return (
        <footer className="bg-primary-100 py-12">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img alt="logo" src={Logo} />
                    <p className="my-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non arcu vehicula, blandit leo quis, sodales massa.
                    Nullam ut est diam. In ut lacus et est elementum molestie. Aliquam erat volutpat.
                    </p>
                    <p>© Evogym All Rights Reserved.</p>
                </div>

                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">Lorem ipsum dolor</p>
                    <p className="my-5">Consectetur adipiscing elit</p>
                    <p>Sed non arcu</p>
                </div>

                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact</h4>
                    <p className="my-5">Sed non arcu vehicula, blandit leo.</p>
                    <p>(+84) 971-365-646</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer