import Image from "next/image";
import "./Promotion.scss";

export default function Promotion(props: any) {
    return (
        <section className="pb-5 abt-row">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="about-box">
                            <div className="row">
                                <div className="col-md-8">
                                    <header className="header-1">
                                        <h2>Promoted Nft</h2>
                                    </header>
                                    <h4>Introducing Our First Phygital Drop!
                                    </h4>
                                    <p>
                                        Experience the future of collectibles with our exclusive first-ever phygital NFT drop! This unique piece combines the digital and physical worlds, delivering unmatched utility and style. Own a limited-edition NFT paired with a real-world accessory that bridges the gap between virtual innovation and tangible value.
                                    </p>
                                    <p>
                                        This isn&apos;t just a collectible; it&apos;s a statement. With cutting-edge technology and sleek design, you&apos;ll unlock exclusive perks in the digital realm and beyond. Be part of history and secure your place in the next evolution of ownership. What&apos;s in the Drop? A premium physical product (highlight its features, e.g., a sleek wearable or accessory). Exclusive NFT with dynamic content or perks. Special bonuses for early adopters. Don&apos;t miss out&mdash;these limited pieces will be gone before you know it. Be the first to own a piece of the revolution.
                                    </p>
                                    <p><button className="btn btn-primary">Learn more</button></p>
                                </div>
                                <div className="col-md-4 abt-img">
                                    <Image src="/images/about-img.png" alt="" className="img-fluid" width={360} height={437} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}