import React from 'react'
import clientel from "../assets/clientel.jpg"
import Navbar from '../components/Navbar'

export default function Contact() {
    return (
        <>
            <Navbar btnLink='' btnTitle='' />
            <div className='container'>
                <div class="row">

                    <div className="card">
                        <img className="card-img-top" src={clientel} alt="Card image cap" style={{height:"35rem",width:"65rem"}} />
                        <div className="card-body  d-flex justify-content-center">
                            <div className='container'>
                                <div className="row  d-flex justify-content-between" style={{ marginTop: "-5rem" }}>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <h6 className="card-subtitle mb-2 text-muted">
                                                    <h2 style={{ color: "#000" }}>Contactez notre Service Clientèle</h2>
                                                    <h1 style={{ color: "#00b8d5" }}>06 60 06 06</h1>
                                                    <p>Du lundi au vendredi de 8h00 à 18h00 (tarif local réseau fixe suisse /
                                                        tarifs de téléphonie mobile selon l’opérateur)</p>
                                                </h6>


                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">

                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">

                                        <div className="card">
                                            <div className="card-body">
                                                <h6 className="card-subtitle mb-2 text-muted">
                                                    <h2 style={{ color: "#000" }}>Contactez notre Service Clientèle</h2>
                                                    <h1 style={{ color: "#00b8d5" }}>06 06 06 06 06</h1>
                                                    <p>Du lundi au vendredi de 8h00 à 18h00 (tarif local réseau fixe suisse /
                                                        tarifs de téléphonie mobile selon l’opérateur)</p>
                                                </h6>


                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="row mt-5">
                    <h2 className="mt-5 d-flex justify-content-center">FAQs</h2>
                    <div class="accordion accordion-flush m-5" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Qu’est-ce qu’une assurance ?
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Le contrat d’assurance est la convention en vertu de laquelle l’assureur, en échange du paiement d’une prime, s’engage à fournir une prestation
                                    stipulée dans le contrat dans le cas de la survenance d’un événement incertain que l'assuré a intérêt à ne pas voir se réaliser.
                                    L’assurance est fondée sur la notion de mutualisation de risques, à travers la mise en commun des « contributions » financières des assurés.
                                    Trois éléments sont alors nécessaires à la formation du contrat d'assurance :
                                    Une prime : La prime est la somme due par le souscripteur d'un contrat d'assurance en contrepartie des garanties accordées par l'assureur ;
                                    Une prestation : il s'agit de l'exécution, par l'assureur, de sa garantie ;
                                    Un risque : l'évènement aléatoire contre les conséquences duquel on se prémunit. Il s'agit de l'objet même du contrat d'assurance.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Pourquoi s’assurer ?
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    L’assurance est un moyen de réduire la vulnérabilité des individus face aux aléas de la vie.
                                    Elle sert à se couvrir soi-même, couvrir ses biens, ainsi que les dommages engageant sa responsabilité.
                                    L’assurance peut aussi jouer un rôle d’épargne notamment dans le cadre de l’assurance vie et de capitalisation,
                                    en garantissant une rente ou un capital au bénéficiaire en échange des primes payées. Par ailleurs et pour diminuer la vulnérabilité des personnes notamment face aux risques qu’elles peuvent causer à autrui, le législateur a estimé nécessaire d’instaurer une obligation d’assurance pour certains risques (la RC automobile par exemple). Les personnes assujetties doivent donc souscrire l’assurance adéquate pour satisfaire à cette obligation
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Auprès de qui souscrire un contrat d’assurance ?
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Pour souscrire un contrat d’assurance, vous devrez vous adresser à l’une des entités suivantes :

                                    L’intermédiaire d’assurance, pour tout type d’assurance, qui peut être :
                                    Un agent, qui est le mandataire de l’entreprise d’assurance ;
                                    Une société de courtage qui est le mandataire du client auprès des entreprises d’assurance.
                                    L’entreprise d’assurance, qui présente elle-même ses opérations à travers un bureau direct ;
                                    Les banques expressément agréées à cet effet ainsi que Barid Al Maghreb, pour les  assurances de personnes, l’assistance et l’assurance-crédit ;
                                    Les associations de micro-crédit et les sociétés de financement qui peuvent elles aussi présenter certaines opérations d’assurance dans la limite des 
                                    assurances de personnes et assurances contre l'incendie et le vol contractées par leurs clients.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div></>
    )
}
