import Link from 'next/link';

export default function Projects(){
        return (
            <div className="projects-page">
                <strong>Projects:</strong>
                <ul className="card">
                    <strong>Java Projects</strong>
                    <p>Paint Cost Calculator</p>
                    <p>Amusement Park Simulator</p>
                    <p>Infix To Postfix Converter</p>
                </ul>
                <br></br>

                <ul className="card">
                    <strong>Web/Group Projects</strong>
                    <p>Comm Share</p>
                    <p>Algo Tester</p>
                    <p>Portfolio Website</p>
                    <p>Code Astra</p>
                    <p>Plantaer (recently started)</p>
                    <p>CSUDH - Storefront</p>
                </ul>
                <br></br>

                <ul className="card">
                    <strong>Backend</strong>
                    <p>Legacy Car Care</p>
                    <p>Comm Share (Again)</p>
                    <p>StoreFront (Again)</p>
                </ul>
                <br></br>

                <Link className="home-button" href="/">Home</Link>
            </div>
        )
}