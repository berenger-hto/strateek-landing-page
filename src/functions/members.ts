import img1 from "../assets/team/1.png";
import img2 from "../assets/team/2.png";
import img3 from "../assets/team/3.png";
import img4 from "../assets/team/4.png";
import img5 from "../assets/team/5.png";
import img6 from "../assets/team/6.png";
import img7 from "../assets/team/7.png";
import img8 from "../assets/team/8.png";
import img9 from "../assets/team/9.png";
import img10 from "../assets/team/10.png";

type Member = {
    fullName: string
    role: string | string[]
    desc: string
    profil: string
}

export const members: Member[] = [
    {
        fullName: "TOTO HINCHEGNON B. J.",
        role: ["CEO (PDG)", "Gestionnaire de projets et vision stratégique"],
        desc: "Vision stratégique, planification, gestion des projets et développement des partenariats.",
        profil: img1
    },
    {
        fullName: "HOUNDJENOUKON Mardochée",
        role: ["Directeur Général (DG)", "Funnel Builder"],
        desc: "Gestion quotidienne, suivi opérationnel et expert en funnel building.",
        profil: img2
    },
    {
        fullName: "CHITOU Mahmoud",
        role: ["Directeur des opérations", "Graphiste et monteur vidéo"],
        desc: "Supervision des opérations, montage vidéo et design graphique.",
        profil: img3
    },
    {
        fullName: "SAKITI Eustache",
        role: "Directeur du système d'information",
        desc: "Gestion de l’infrastructure IT, cybersécurité et développement web.",
        profil: img4
    },
    {
        fullName: "ATTINGANME Joël Exaucé",
        role: "Directeur Technique & Développeur",
        desc: "Encadrement technique, développement web et maintenance des projets digitaux.",
        profil: img5
    },
    {
        fullName: "SODOKIN Candide",
        role: "Chef de Projets Tech & Design",
        desc: "Graphisme, UX/UI design, montage vidéo et développement web.",
        profil: img6
    },
    {
        fullName: "HOUETO Lauris",
        role: "Développeur Full-Stack",
        desc: "Développement front-end et back-end, intégration de projets.",
        profil: img7
    },
    {
        fullName: "IBIDAKPO Farid",
        role: "Développeur Full-Stack Polyvalent",
        desc: "Développement front-end, back-end et intégration d’API.",
        profil: img8
    },
    {
        fullName: "LOKOSSOU SOTON Dylane",
        role: "Développeur Full-Stack",
        desc: "Développement et optimisation des performances des plateformes.",
        profil: img9
    },
    {
        fullName: "HOUNMENOU Charles Dègnon",
        role: "Community Manager & Media Buyer",
        desc: "Gestion des réseaux sociaux, création de contenu et publicité digitale ciblée.",
        profil: img10
    }
]

export function appendMembers() {
    const template: HTMLTemplateElement | null = document.querySelector("#member-card-template")
    if (!template) throw new Error("Une erreur s'est produite")
    members.forEach(member => {
        const card = template.content.cloneNode(true) as DocumentFragment
        (card.querySelector("img") as HTMLImageElement).src = (member.profil);
        const cardRole = (card.querySelector("#member-role") as HTMLParagraphElement);
        typeof member.role === "object" ? cardRole.innerHTML = `${member.role[0]} <br /> ${member.role[1]}` : cardRole.textContent = member.role;
        (card.querySelector("#member-name") as HTMLParagraphElement).textContent = member.fullName;
        document.querySelector(".members-cards")?.append(card)
    })
}
